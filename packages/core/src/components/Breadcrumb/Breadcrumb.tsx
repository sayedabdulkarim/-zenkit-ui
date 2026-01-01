import { forwardRef, type HTMLAttributes, type ReactNode } from 'react';
import { cn } from '../../utils/cn';

export interface BreadcrumbProps extends HTMLAttributes<HTMLElement> {
  /** Custom separator */
  separator?: ReactNode;
}

export interface BreadcrumbItemProps extends HTMLAttributes<HTMLLIElement> {
  /** Link href */
  href?: string;
  /** Active/current item */
  active?: boolean;
  /** Custom icon */
  icon?: ReactNode;
}

export const Breadcrumb = forwardRef<HTMLElement, BreadcrumbProps>(
  ({ separator = '/', className, children, ...props }, ref) => {
    return (
      <nav ref={ref} aria-label="Breadcrumb" className={className} {...props}>
        <ol className="breadcrumb" data-separator={typeof separator === 'string' ? separator : undefined}>
          {children}
        </ol>
      </nav>
    );
  }
);

Breadcrumb.displayName = 'Breadcrumb';

export const BreadcrumbItem = forwardRef<HTMLLIElement, BreadcrumbItemProps>(
  ({ href, active = false, icon, className, children, ...props }, ref) => {
    const content = (
      <>
        {icon && <span className="breadcrumb-icon">{icon}</span>}
        {children}
      </>
    );

    return (
      <li
        ref={ref}
        className={cn('breadcrumb-item', active && 'active', className)}
        aria-current={active ? 'page' : undefined}
        {...props}
      >
        {href && !active ? (
          <a href={href}>{content}</a>
        ) : (
          content
        )}
      </li>
    );
  }
);

BreadcrumbItem.displayName = 'BreadcrumbItem';
