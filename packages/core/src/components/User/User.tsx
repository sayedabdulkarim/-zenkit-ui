import { forwardRef, type HTMLAttributes, type ReactNode } from 'react';
import { cn } from '../../utils/cn';

export type UserSize = 'xs' | 'sm' | 'md' | 'lg';

export interface UserProps extends HTMLAttributes<HTMLDivElement> {
  /** User's display name */
  name: string;
  /** Description or subtitle */
  description?: string;
  /** Avatar element */
  avatar?: ReactNode;
  /** Size variant */
  size?: UserSize;
  /** Show border around avatar */
  bordered?: boolean;
  /** Make user card interactive/clickable */
  interactive?: boolean;
  /** Use squared avatar instead of circular */
  squared?: boolean;
  /** Vertical layout */
  vertical?: boolean;
}

const sizeClasses: Record<UserSize, string> = {
  xs: 'user-xs',
  sm: 'user-sm',
  md: 'user-md',
  lg: 'user-lg',
};

export const User = forwardRef<HTMLDivElement, UserProps>(
  (
    {
      name,
      description,
      avatar,
      size = 'md',
      bordered = false,
      interactive = false,
      squared = false,
      vertical = false,
      className,
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={cn(
          'user',
          sizeClasses[size],
          bordered && 'user-bordered',
          interactive && 'user-interactive',
          squared && 'user-squared',
          vertical && 'user-vertical',
          className
        )}
        {...props}
      >
        {avatar && <div className="user-avatar">{avatar}</div>}
        <div className="user-info">
          <span className="user-name">{name}</span>
          {description && <span className="user-description">{description}</span>}
        </div>
      </div>
    );
  }
);

User.displayName = 'User';
