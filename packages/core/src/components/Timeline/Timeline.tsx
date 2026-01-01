import { forwardRef, type HTMLAttributes, type ReactNode } from 'react';
import { cn } from '../../utils/cn';

type TimelineMode = 'left' | 'right' | 'alternate';

export interface TimelineProps extends HTMLAttributes<HTMLUListElement> {
  /** Timeline mode */
  mode?: TimelineMode;
  /** Pending item at the end */
  pending?: ReactNode;
  /** Pending dot */
  pendingDot?: ReactNode;
  /** Reverse order */
  reverse?: boolean;
}

export interface TimelineItemProps extends HTMLAttributes<HTMLLIElement> {
  /** Custom dot */
  dot?: ReactNode;
  /** Dot color */
  color?: 'primary' | 'success' | 'danger' | 'warning' | 'gray';
  /** Label (for alternate mode) */
  label?: ReactNode;
  /** Position override */
  position?: 'left' | 'right';
}

const colorClasses = {
  primary: 'timeline-dot-primary',
  success: 'timeline-dot-success',
  danger: 'timeline-dot-danger',
  warning: 'timeline-dot-warning',
  gray: 'timeline-dot-gray',
};

export const Timeline = forwardRef<HTMLUListElement, TimelineProps>(
  (
    {
      mode = 'left',
      pending,
      pendingDot,
      reverse = false,
      className,
      children,
      ...props
    },
    ref
  ) => {
    const childArray = Array.isArray(children) ? children : [children];
    const items = reverse ? [...childArray].reverse() : childArray;

    return (
      <ul
        ref={ref}
        className={cn(
          'timeline',
          mode === 'right' && 'timeline-right',
          mode === 'alternate' && 'timeline-alternate',
          className
        )}
        {...props}
      >
        {items}
        {pending && (
          <li className="timeline-item timeline-item-pending">
            <div className="timeline-item-tail" />
            <div className="timeline-item-dot">
              {pendingDot || (
                <div className="timeline-dot timeline-dot-pending" />
              )}
            </div>
            <div className="timeline-item-content">{pending}</div>
          </li>
        )}
      </ul>
    );
  }
);

Timeline.displayName = 'Timeline';

export const TimelineItem = forwardRef<HTMLLIElement, TimelineItemProps>(
  (
    {
      dot,
      color = 'primary',
      label,
      position,
      className,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <li
        ref={ref}
        className={cn(
          'timeline-item',
          position && `timeline-item-${position}`,
          className
        )}
        {...props}
      >
        <div className="timeline-item-tail" />
        <div className="timeline-item-dot">
          {dot || <div className={cn('timeline-dot', colorClasses[color])} />}
        </div>
        {label && <div className="timeline-item-label">{label}</div>}
        <div className="timeline-item-content">{children}</div>
      </li>
    );
  }
);

TimelineItem.displayName = 'TimelineItem';
