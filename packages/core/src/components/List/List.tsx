import { forwardRef, type HTMLAttributes, type ReactNode } from 'react';
import { cn } from '../../utils/cn';

type ListSize = 'sm' | 'md' | 'lg';

export interface ListProps extends HTMLAttributes<HTMLDivElement> {
  /** List size */
  size?: ListSize;
  /** Bordered list */
  bordered?: boolean;
  /** Split items with divider */
  split?: boolean;
  /** List header */
  header?: ReactNode;
  /** List footer */
  footer?: ReactNode;
  /** Loading state */
  loading?: boolean;
  /** Empty content when no items */
  emptyText?: ReactNode;
}

export interface ListItemProps extends HTMLAttributes<HTMLDivElement> {
  /** Extra content (right side) */
  extra?: ReactNode;
  /** Actions (bottom right) */
  actions?: ReactNode[];
}

export interface ListItemMetaProps extends Omit<HTMLAttributes<HTMLDivElement>, 'title'> {
  /** Avatar/image */
  avatar?: ReactNode;
  /** Title */
  title?: ReactNode;
  /** Description */
  description?: ReactNode;
}

const sizeClasses: Record<ListSize, string> = {
  sm: 'list-sm',
  md: '',
  lg: 'list-lg',
};

export const List = forwardRef<HTMLDivElement, ListProps>(
  (
    {
      size = 'md',
      bordered = false,
      split = true,
      header,
      footer,
      loading = false,
      emptyText = 'No data',
      className,
      children,
      ...props
    },
    ref
  ) => {
    const hasChildren = Array.isArray(children) ? children.length > 0 : !!children;

    return (
      <div
        ref={ref}
        className={cn(
          'list',
          sizeClasses[size],
          bordered && 'list-bordered',
          split && 'list-split',
          loading && 'list-loading',
          className
        )}
        {...props}
      >
        {header && <div className="list-header">{header}</div>}
        {loading ? (
          <div className="list-loading-content">
            <div className="spinner-border spinner-border-sm" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        ) : hasChildren ? (
          <div className="list-items">{children}</div>
        ) : (
          <div className="list-empty">{emptyText}</div>
        )}
        {footer && <div className="list-footer">{footer}</div>}
      </div>
    );
  }
);

List.displayName = 'List';

export const ListItem = forwardRef<HTMLDivElement, ListItemProps>(
  ({ extra, actions, className, children, ...props }, ref) => {
    return (
      <div ref={ref} className={cn('list-item', className)} {...props}>
        <div className="list-item-main">
          <div className="list-item-content">{children}</div>
          {extra && <div className="list-item-extra">{extra}</div>}
        </div>
        {actions && actions.length > 0 && (
          <ul className="list-item-actions">
            {actions.map((action, index) => (
              <li key={index} className="list-item-action">
                {action}
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }
);

ListItem.displayName = 'ListItem';

export const ListItemMeta = forwardRef<HTMLDivElement, ListItemMetaProps>(
  ({ avatar, title, description, className, ...props }, ref) => {
    return (
      <div ref={ref} className={cn('list-item-meta', className)} {...props}>
        {avatar && <div className="list-item-meta-avatar">{avatar}</div>}
        <div className="list-item-meta-content">
          {title && <div className="list-item-meta-title">{title}</div>}
          {description && <div className="list-item-meta-description">{description}</div>}
        </div>
      </div>
    );
  }
);

ListItemMeta.displayName = 'ListItemMeta';
