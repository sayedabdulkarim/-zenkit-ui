import { forwardRef, type HTMLAttributes, type ReactNode } from 'react';
import { cn } from '../../utils/cn';

type TagVariant = 'solid' | 'soft' | 'outline';
type TagColor = 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'default';
type TagSize = 'sm' | 'md' | 'lg';

export interface TagProps extends HTMLAttributes<HTMLSpanElement> {
  /** Tag variant */
  variant?: TagVariant;
  /** Tag color */
  color?: TagColor;
  /** Tag size */
  size?: TagSize;
  /** Closable tag */
  closable?: boolean;
  /** Close callback */
  onClose?: () => void;
  /** Left icon */
  icon?: ReactNode;
}

const colorClasses: Record<TagColor, string> = {
  default: 'tag-default',
  primary: 'tag-primary',
  secondary: 'tag-secondary',
  success: 'tag-success',
  danger: 'tag-danger',
  warning: 'tag-warning',
  info: 'tag-info',
};

const sizeClasses: Record<TagSize, string> = {
  sm: 'tag-sm',
  md: '',
  lg: 'tag-lg',
};

export const Tag = forwardRef<HTMLSpanElement, TagProps>(
  (
    {
      variant = 'soft',
      color = 'default',
      size = 'md',
      closable = false,
      onClose,
      icon,
      className,
      children,
      ...props
    },
    ref
  ) => {
    const handleClose = (e: React.MouseEvent) => {
      e.stopPropagation();
      onClose?.();
    };

    return (
      <span
        ref={ref}
        className={cn(
          'tag',
          colorClasses[color],
          sizeClasses[size],
          variant === 'solid' && 'tag-solid',
          variant === 'outline' && 'tag-outline',
          className
        )}
        {...props}
      >
        {icon && <span className="tag-icon">{icon}</span>}
        <span className="tag-content">{children}</span>
        {closable && (
          <button type="button" className="tag-close" onClick={handleClose} aria-label="Remove tag">
            <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        )}
      </span>
    );
  }
);

Tag.displayName = 'Tag';
