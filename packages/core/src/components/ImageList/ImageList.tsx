import { forwardRef, type HTMLAttributes, type ReactNode } from 'react';
import { cn } from '../../utils/cn';

export interface ImageListItem {
  src: string;
  alt?: string;
  title?: string;
  subtitle?: string;
  cols?: number;
  rows?: number;
}

export interface ImageListProps extends HTMLAttributes<HTMLDivElement> {
  /** Image items */
  items?: ImageListItem[];
  /** Number of columns */
  cols?: number;
  /** Gap between items */
  gap?: number;
  /** Row height */
  rowHeight?: number | 'auto';
  /** Variant */
  variant?: 'standard' | 'masonry' | 'quilted' | 'woven';
  /** On item click */
  onItemClick?: (item: ImageListItem, index: number) => void;
}

export const ImageList = forwardRef<HTMLDivElement, ImageListProps>(
  (
    {
      items = [],
      cols = 3,
      gap = 8,
      rowHeight = 200,
      variant = 'standard',
      onItemClick,
      className,
      children,
      style,
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={cn('image-list', `image-list-${variant}`, className)}
        style={{
          ...style,
          '--image-list-cols': cols,
          '--image-list-gap': `${gap}px`,
          '--image-list-row-height': rowHeight === 'auto' ? 'auto' : `${rowHeight}px`,
        } as React.CSSProperties}
        {...props}
      >
        {children || items.map((item, index) => (
          <ImageListItem
            key={index}
            {...item}
            onClick={() => onItemClick?.(item, index)}
          />
        ))}
      </div>
    );
  }
);

ImageList.displayName = 'ImageList';

// Image List Item
export interface ImageListItemProps extends HTMLAttributes<HTMLDivElement> {
  /** Image source */
  src?: string;
  /** Alt text */
  alt?: string;
  /** Title */
  title?: string;
  /** Subtitle */
  subtitle?: string;
  /** Column span */
  cols?: number;
  /** Row span */
  rows?: number;
  /** Children (for custom content) */
  children?: ReactNode;
}

export const ImageListItem = forwardRef<HTMLDivElement, ImageListItemProps>(
  (
    {
      src,
      alt = '',
      title,
      subtitle,
      cols = 1,
      rows = 1,
      className,
      children,
      style,
      onClick,
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={cn('image-list-item', onClick && 'image-list-item-clickable', className)}
        style={{
          ...style,
          '--image-list-item-cols': cols,
          '--image-list-item-rows': rows,
        } as React.CSSProperties}
        onClick={onClick}
        {...props}
      >
        {children || (
          <>
            {src && <img src={src} alt={alt} className="image-list-item-img" loading="lazy" />}
            {(title || subtitle) && (
              <div className="image-list-item-bar">
                {title && <span className="image-list-item-title">{title}</span>}
                {subtitle && <span className="image-list-item-subtitle">{subtitle}</span>}
              </div>
            )}
          </>
        )}
      </div>
    );
  }
);

ImageListItem.displayName = 'ImageListItem';

// Image List Item Bar (for custom positioning)
export interface ImageListItemBarProps extends HTMLAttributes<HTMLDivElement> {
  /** Bar position */
  position?: 'top' | 'bottom';
  /** Action buttons */
  actionIcon?: ReactNode;
  /** Action position */
  actionPosition?: 'left' | 'right';
}

export const ImageListItemBar = forwardRef<HTMLDivElement, ImageListItemBarProps>(
  (
    {
      position = 'bottom',
      actionIcon,
      actionPosition = 'right',
      className,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={cn(
          'image-list-item-bar',
          `image-list-item-bar-${position}`,
          className
        )}
        {...props}
      >
        <div className="image-list-item-bar-content">{children}</div>
        {actionIcon && (
          <div className={cn('image-list-item-bar-action', `image-list-item-bar-action-${actionPosition}`)}>
            {actionIcon}
          </div>
        )}
      </div>
    );
  }
);

ImageListItemBar.displayName = 'ImageListItemBar';
