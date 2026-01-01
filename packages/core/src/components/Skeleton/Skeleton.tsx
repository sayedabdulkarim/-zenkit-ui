import { forwardRef, type HTMLAttributes } from 'react';
import { cn } from '../../utils/cn';

type SkeletonVariant = 'text' | 'circular' | 'rectangular' | 'rounded';

export interface SkeletonProps extends HTMLAttributes<HTMLDivElement> {
  /** Skeleton variant */
  variant?: SkeletonVariant;
  /** Width */
  width?: number | string;
  /** Height */
  height?: number | string;
  /** Animation */
  animation?: 'pulse' | 'wave' | false;
  /** Number of lines (for text variant) */
  lines?: number;
}

export const Skeleton = forwardRef<HTMLDivElement, SkeletonProps>(
  (
    {
      variant = 'text',
      width,
      height,
      animation = 'pulse',
      lines = 1,
      className,
      style,
      ...props
    },
    ref
  ) => {
    const variantClasses: Record<SkeletonVariant, string> = {
      text: 'skeleton-text',
      circular: 'skeleton-circular',
      rectangular: 'skeleton-rectangular',
      rounded: 'skeleton-rounded',
    };

    const baseStyles: React.CSSProperties = {
      width: width,
      height: variant === 'text' && !height ? '1em' : height,
      ...style,
    };

    if (variant === 'text' && lines > 1) {
      return (
        <div ref={ref} className={cn('skeleton-group', className)} {...props}>
          {Array.from({ length: lines }).map((_, index) => (
            <div
              key={index}
              className={cn(
                'skeleton',
                variantClasses[variant],
                animation && `skeleton-${animation}`,
                index === lines - 1 && 'skeleton-last-line'
              )}
              style={{
                ...baseStyles,
                width: index === lines - 1 ? '80%' : width,
              }}
            />
          ))}
        </div>
      );
    }

    return (
      <div
        ref={ref}
        className={cn(
          'skeleton',
          variantClasses[variant],
          animation && `skeleton-${animation}`,
          className
        )}
        style={baseStyles}
        {...props}
      />
    );
  }
);

Skeleton.displayName = 'Skeleton';

// Skeleton with avatar and text preset
export interface SkeletonAvatarProps extends HTMLAttributes<HTMLDivElement> {
  /** Avatar size */
  size?: number;
  /** Animation */
  animation?: 'pulse' | 'wave' | false;
}

export const SkeletonAvatar = forwardRef<HTMLDivElement, SkeletonAvatarProps>(
  ({ size = 40, animation = 'pulse', className, ...props }, ref) => {
    return (
      <Skeleton
        ref={ref}
        variant="circular"
        width={size}
        height={size}
        animation={animation}
        className={className}
        {...props}
      />
    );
  }
);

SkeletonAvatar.displayName = 'SkeletonAvatar';

export interface SkeletonCardProps extends HTMLAttributes<HTMLDivElement> {
  /** Show avatar */
  avatar?: boolean;
  /** Number of text lines */
  lines?: number;
  /** Animation */
  animation?: 'pulse' | 'wave' | false;
}

export const SkeletonCard = forwardRef<HTMLDivElement, SkeletonCardProps>(
  ({ avatar = true, lines = 3, animation = 'pulse', className, ...props }, ref) => {
    return (
      <div ref={ref} className={cn('skeleton-card', className)} {...props}>
        {avatar && (
          <div className="skeleton-card-header">
            <SkeletonAvatar animation={animation} />
            <div className="skeleton-card-meta">
              <Skeleton variant="text" width="40%" animation={animation} />
              <Skeleton variant="text" width="60%" animation={animation} />
            </div>
          </div>
        )}
        <Skeleton variant="text" lines={lines} animation={animation} />
      </div>
    );
  }
);

SkeletonCard.displayName = 'SkeletonCard';
