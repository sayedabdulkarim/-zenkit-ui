import {
  forwardRef,
  useState,
  useRef,
  useEffect,
  type HTMLAttributes,
  type ButtonHTMLAttributes,
  type ReactNode,
} from 'react';
import { cn } from '../../utils/cn';

export type ToggletipPlacement = 'top' | 'bottom' | 'left' | 'right';

export interface ToggletipProps extends HTMLAttributes<HTMLDivElement> {
  /** Controlled open state */
  open?: boolean;
  /** Default open state (uncontrolled) */
  defaultOpen?: boolean;
  /** Callback when open state changes */
  onOpenChange?: (open: boolean) => void;
  /** Placement of the content */
  placement?: ToggletipPlacement;
  /** Show close button in content */
  withCloseButton?: boolean;
}

export interface ToggletipTriggerProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** Icon to display */
  icon?: ReactNode;
}

export interface ToggletipContentProps extends HTMLAttributes<HTMLDivElement> {}

const placementClasses: Record<ToggletipPlacement, string> = {
  top: 'toggletip-top',
  bottom: 'toggletip-bottom',
  left: 'toggletip-left',
  right: 'toggletip-right',
};

export const Toggletip = forwardRef<HTMLDivElement, ToggletipProps>(
  (
    {
      open: controlledOpen,
      defaultOpen = false,
      onOpenChange,
      placement = 'top',
      withCloseButton = false,
      className,
      children,
      ...props
    },
    ref
  ) => {
    const [uncontrolledOpen, setUncontrolledOpen] = useState(defaultOpen);
    const isControlled = controlledOpen !== undefined;
    const isOpen = isControlled ? controlledOpen : uncontrolledOpen;
    const containerRef = useRef<HTMLDivElement>(null);

    const setOpen = (value: boolean) => {
      if (!isControlled) {
        setUncontrolledOpen(value);
      }
      onOpenChange?.(value);
    };

    // Close on click outside
    useEffect(() => {
      if (!isOpen) return;

      const handleClickOutside = (event: MouseEvent) => {
        if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
          setOpen(false);
        }
      };

      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [isOpen]);

    // Close on escape
    useEffect(() => {
      if (!isOpen) return;

      const handleEscape = (event: KeyboardEvent) => {
        if (event.key === 'Escape') {
          setOpen(false);
        }
      };

      document.addEventListener('keydown', handleEscape);
      return () => document.removeEventListener('keydown', handleEscape);
    }, [isOpen]);

    return (
      <div
        ref={(node) => {
          (containerRef as React.MutableRefObject<HTMLDivElement | null>).current = node;
          if (typeof ref === 'function') ref(node);
          else if (ref) ref.current = node;
        }}
        className={cn(
          'toggletip',
          placementClasses[placement],
          isOpen && 'toggletip-open',
          withCloseButton && 'toggletip-with-close',
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Toggletip.displayName = 'Toggletip';

export const ToggletipTrigger = forwardRef<HTMLButtonElement, ToggletipTriggerProps>(
  ({ icon, className, children, onClick, ...props }, ref) => {
    return (
      <button
        ref={ref}
        type="button"
        className={cn('toggletip-trigger', className)}
        onClick={onClick}
        aria-haspopup="true"
        {...props}
      >
        {icon && <span className="toggletip-trigger-icon">{icon}</span>}
        {children}
      </button>
    );
  }
);

ToggletipTrigger.displayName = 'ToggletipTrigger';

export const ToggletipContent = forwardRef<HTMLDivElement, ToggletipContentProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        role="status"
        className={cn('toggletip-content', className)}
        {...props}
      >
        {children}
      </div>
    );
  }
);

ToggletipContent.displayName = 'ToggletipContent';

export interface ToggletipCloseProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export const ToggletipClose = forwardRef<HTMLButtonElement, ToggletipCloseProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        type="button"
        className={cn('toggletip-close', className)}
        aria-label="Close"
        {...props}
      >
        {children || (
          <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
            <path d="M2.22 2.22a.75.75 0 011.06 0L6 4.94l2.72-2.72a.75.75 0 111.06 1.06L7.06 6l2.72 2.72a.75.75 0 11-1.06 1.06L6 7.06 3.28 9.78a.75.75 0 01-1.06-1.06L4.94 6 2.22 3.28a.75.75 0 010-1.06z" />
          </svg>
        )}
      </button>
    );
  }
);

ToggletipClose.displayName = 'ToggletipClose';
