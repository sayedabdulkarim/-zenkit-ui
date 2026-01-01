import { forwardRef, type HTMLAttributes, type ImgHTMLAttributes } from 'react';
import { cn } from '../../utils/cn';

type AvatarSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
type AvatarShape = 'circle' | 'square' | 'rounded';

export interface AvatarProps extends HTMLAttributes<HTMLSpanElement> {
  /** Image source */
  src?: string;
  /** Image alt text */
  alt?: string;
  /** Avatar size */
  size?: AvatarSize;
  /** Avatar shape */
  shape?: AvatarShape;
  /** Fallback text (initials) */
  fallback?: string;
  /** Custom image props */
  imgProps?: ImgHTMLAttributes<HTMLImageElement>;
}

export interface AvatarGroupProps extends HTMLAttributes<HTMLDivElement> {
  /** Maximum avatars to show */
  max?: number;
  /** Avatar size for group */
  size?: AvatarSize;
}

const sizeClasses: Record<AvatarSize, string> = {
  xs: 'avatar-xs',
  sm: 'avatar-sm',
  md: '',
  lg: 'avatar-lg',
  xl: 'avatar-xl',
};

const shapeClasses: Record<AvatarShape, string> = {
  circle: 'avatar-circle',
  square: 'avatar-square',
  rounded: 'avatar-rounded',
};

export const Avatar = forwardRef<HTMLSpanElement, AvatarProps>(
  (
    {
      src,
      alt = '',
      size = 'md',
      shape = 'circle',
      fallback,
      imgProps,
      className,
      children,
      ...props
    },
    ref
  ) => {
    const getInitials = (text: string) => {
      return text
        .split(' ')
        .map((word) => word[0])
        .join('')
        .toUpperCase()
        .slice(0, 2);
    };

    return (
      <span
        ref={ref}
        className={cn('avatar', sizeClasses[size], shapeClasses[shape], className)}
        {...props}
      >
        {src ? (
          <img src={src} alt={alt} className="avatar-img" {...imgProps} />
        ) : fallback ? (
          <span className="avatar-fallback">{getInitials(fallback)}</span>
        ) : children ? (
          <span className="avatar-fallback">{children}</span>
        ) : (
          <span className="avatar-fallback">
            <svg viewBox="0 0 24 24" fill="currentColor" width="60%" height="60%">
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
            </svg>
          </span>
        )}
      </span>
    );
  }
);

Avatar.displayName = 'Avatar';

export const AvatarGroup = forwardRef<HTMLDivElement, AvatarGroupProps>(
  ({ max, size = 'md', className, children, ...props }, ref) => {
    const childArray = Array.isArray(children) ? children : [children];
    const visibleChildren = max ? childArray.slice(0, max) : childArray;
    const remainingCount = max ? Math.max(0, childArray.length - max) : 0;

    return (
      <div ref={ref} className={cn('avatar-group', className)} {...props}>
        {visibleChildren}
        {remainingCount > 0 && (
          <Avatar size={size} className="avatar-more">
            +{remainingCount}
          </Avatar>
        )}
      </div>
    );
  }
);

AvatarGroup.displayName = 'AvatarGroup';
