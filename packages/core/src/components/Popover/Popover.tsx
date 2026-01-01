import {
  forwardRef,
  useState,
  useRef,
  useEffect,
  cloneElement,
  type HTMLAttributes,
  type ReactElement,
  type ReactNode,
} from 'react';
import { cn } from '../../utils/cn';

type PopoverPlacement = 'top' | 'right' | 'bottom' | 'left';
type PopoverTrigger = 'click' | 'hover';

export interface PopoverProps extends Omit<HTMLAttributes<HTMLDivElement>, 'content' | 'title'> {
  /** Popover title */
  title?: ReactNode;
  /** Popover content */
  content: ReactNode;
  /** Popover placement */
  placement?: PopoverPlacement;
  /** Trigger mode */
  trigger?: PopoverTrigger;
  /** Controlled open state */
  open?: boolean;
  /** Open state change callback */
  onOpenChange?: (open: boolean) => void;
  /** Arrow visibility */
  arrow?: boolean;
  /** Trigger element */
  children: ReactElement;
}

export const Popover = forwardRef<HTMLDivElement, PopoverProps>(
  (
    {
      title,
      content,
      placement = 'top',
      trigger = 'click',
      open: controlledOpen,
      onOpenChange,
      arrow = true,
      className,
      children,
      ...props
    },
    ref
  ) => {
    const [internalOpen, setInternalOpen] = useState(false);
    const isOpen = controlledOpen ?? internalOpen;
    const popoverRef = useRef<HTMLDivElement>(null);

    const setIsOpen = (open: boolean) => {
      if (controlledOpen === undefined) {
        setInternalOpen(open);
      }
      onOpenChange?.(open);
    };

    const toggle = () => setIsOpen(!isOpen);
    const close = () => setIsOpen(false);

    // Close on outside click
    useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (popoverRef.current && !popoverRef.current.contains(event.target as Node)) {
          close();
        }
      };

      if (isOpen && trigger === 'click') {
        document.addEventListener('mousedown', handleClickOutside);
      }

      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, [isOpen, trigger]);

    // Close on escape
    useEffect(() => {
      const handleEscape = (event: KeyboardEvent) => {
        if (event.key === 'Escape') {
          close();
        }
      };

      if (isOpen) {
        document.addEventListener('keydown', handleEscape);
      }

      return () => {
        document.removeEventListener('keydown', handleEscape);
      };
    }, [isOpen]);

    const placementClasses: Record<PopoverPlacement, string> = {
      top: 'popover-top',
      right: 'popover-right',
      bottom: 'popover-bottom',
      left: 'popover-left',
    };

    const triggerProps =
      trigger === 'click'
        ? {
            onClick: (e: React.MouseEvent) => {
              toggle();
              children.props.onClick?.(e);
            },
          }
        : {
            onMouseEnter: (e: React.MouseEvent) => {
              setIsOpen(true);
              children.props.onMouseEnter?.(e);
            },
            onMouseLeave: (e: React.MouseEvent) => {
              setIsOpen(false);
              children.props.onMouseLeave?.(e);
            },
          };

    const triggerElement = cloneElement(children, triggerProps);

    return (
      <div
        ref={(node) => {
          (popoverRef as React.MutableRefObject<HTMLDivElement | null>).current = node;
          if (typeof ref === 'function') ref(node);
          else if (ref) ref.current = node;
        }}
        className={cn('popover-wrapper', className)}
        style={{ position: 'relative', display: 'inline-block' }}
        {...props}
      >
        {triggerElement}
        {isOpen && (
          <div
            className={cn('popover', placementClasses[placement], 'show')}
            role="dialog"
          >
            {arrow && <div className="popover-arrow" />}
            {title && <div className="popover-header">{title}</div>}
            <div className="popover-body">{content}</div>
          </div>
        )}
      </div>
    );
  }
);

Popover.displayName = 'Popover';
