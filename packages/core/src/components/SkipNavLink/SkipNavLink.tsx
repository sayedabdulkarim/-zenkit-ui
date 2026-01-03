import { forwardRef, type AnchorHTMLAttributes } from 'react';
import { cn } from '../../utils/cn';

export interface SkipNavLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  /** Target content ID (without #) */
  contentId?: string;
  /** Position in center of screen instead of top-left */
  center?: boolean;
}

export const SkipNavLink = forwardRef<HTMLAnchorElement, SkipNavLinkProps>(
  (
    {
      contentId = 'main-content',
      center = false,
      className,
      children = 'Skip to main content',
      ...props
    },
    ref
  ) => {
    return (
      <a
        ref={ref}
        href={`#${contentId}`}
        className={cn('skip-nav-link', center && 'skip-nav-link-center', className)}
        {...props}
      >
        {children}
      </a>
    );
  }
);

SkipNavLink.displayName = 'SkipNavLink';

export interface SkipNavContentProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Content ID (must match SkipNavLink's contentId) */
  id?: string;
}

export const SkipNavContent = forwardRef<HTMLDivElement, SkipNavContentProps>(
  ({ id = 'main-content', className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        id={id}
        tabIndex={-1}
        className={cn('skip-nav-content', className)}
        {...props}
      >
        {children}
      </div>
    );
  }
);

SkipNavContent.displayName = 'SkipNavContent';
