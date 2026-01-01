import {
  forwardRef,
  useState,
  useRef,
  cloneElement,
  type HTMLAttributes,
  type ReactElement,
} from 'react';
import { cn } from '../../utils/cn';

type TooltipPlacement = 'top' | 'right' | 'bottom' | 'left';

export interface TooltipProps extends Omit<HTMLAttributes<HTMLDivElement>, 'content'> {
  /** Tooltip content */
  content: React.ReactNode;
  /** Tooltip placement */
  placement?: TooltipPlacement;
  /** Delay before showing (ms) */
  delay?: number;
  /** Disabled state */
  disabled?: boolean;
  /** Arrow visibility */
  arrow?: boolean;
  /** Trigger element */
  children: ReactElement;
}

export const Tooltip = forwardRef<HTMLDivElement, TooltipProps>(
  (
    {
      content,
      placement = 'top',
      delay = 0,
      disabled = false,
      arrow = true,
      className,
      children,
      ...props
    },
    ref
  ) => {
    const [isVisible, setIsVisible] = useState(false);
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);
    const triggerRef = useRef<HTMLElement>(null);

    const showTooltip = () => {
      if (disabled) return;
      if (delay > 0) {
        timeoutRef.current = setTimeout(() => setIsVisible(true), delay);
      } else {
        setIsVisible(true);
      }
    };

    const hideTooltip = () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }
      setIsVisible(false);
    };

    const placementClasses: Record<TooltipPlacement, string> = {
      top: 'tooltip-top',
      right: 'tooltip-right',
      bottom: 'tooltip-bottom',
      left: 'tooltip-left',
    };

    const trigger = cloneElement(children, {
      ref: triggerRef,
      onMouseEnter: (e: React.MouseEvent) => {
        showTooltip();
        children.props.onMouseEnter?.(e);
      },
      onMouseLeave: (e: React.MouseEvent) => {
        hideTooltip();
        children.props.onMouseLeave?.(e);
      },
      onFocus: (e: React.FocusEvent) => {
        showTooltip();
        children.props.onFocus?.(e);
      },
      onBlur: (e: React.FocusEvent) => {
        hideTooltip();
        children.props.onBlur?.(e);
      },
    });

    return (
      <div ref={ref} className={cn('tooltip-wrapper', className)} style={{ position: 'relative', display: 'inline-block' }} {...props}>
        {trigger}
        {isVisible && (
          <div
            className={cn('tooltip', placementClasses[placement], 'show')}
            role="tooltip"
          >
            <div className="tooltip-inner">{content}</div>
            {arrow && <div className="tooltip-arrow" />}
          </div>
        )}
      </div>
    );
  }
);

Tooltip.displayName = 'Tooltip';
