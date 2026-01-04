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
        className={cn('imagelist', `imagelist-${variant}`, `imagelist-cols-${cols}`, className)}
        style={{
          ...style,
          '--imagelist-gap': `${gap}px`,
          '--imagelist-row-height': rowHeight === 'auto' ? 'auto' : `${rowHeight}px`,
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
        className={cn('imagelist-item', onClick && 'imagelist-item-clickable', className)}
        style={{
          ...style,
          '--imagelist-item-cols': cols,
          '--imagelist-item-rows': rows,
        } as React.CSSProperties}
        onClick={onClick}
        {...props}
      >
        {children || (
          <>
            {src && <img src={src} alt={alt} className="imagelist-item-img" loading="lazy" />}
            {(title || subtitle) && (
              <div className="imagelist-item-bar">
                {title && <span className="imagelist-item-title">{title}</span>}
                {subtitle && <span className="imagelist-item-subtitle">{subtitle}</span>}
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
          'imagelist-item-bar',
          `imagelist-item-bar-${position}`,
          className
        )}
        {...props}
      >
        <div className="imagelist-item-bar-content">{children}</div>
        {actionIcon && (
          <div className={cn('imagelist-item-bar-actions', `imagelist-item-bar-actions-${actionPosition}`)}>
            {actionIcon}
          </div>
        )}
      </div>
    );
  }
);

ImageListItemBar.displayName = 'ImageListItemBar';
