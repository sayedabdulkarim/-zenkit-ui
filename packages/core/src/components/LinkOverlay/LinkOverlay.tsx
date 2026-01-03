import { forwardRef, type HTMLAttributes, type AnchorHTMLAttributes } from 'react';
import { cn } from '../../utils/cn';

export interface LinkBoxProps extends HTMLAttributes<HTMLDivElement> {}

export interface LinkOverlayProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  /** Remove default link styling */
  unstyled?: boolean;
}

/**
 * LinkBox - Container that makes its child LinkOverlay cover the entire box.
 * Use this to make entire cards or sections clickable while keeping other
 * interactive elements accessible.
 */
export const LinkBox = forwardRef<HTMLDivElement, LinkBoxProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div ref={ref} className={cn('link-box', className)} {...props}>
        {children}
      </div>
    );
  }
);

LinkBox.displayName = 'LinkBox';

/**
 * LinkOverlay - A link that stretches to cover its nearest LinkBox parent.
 * Place this inside a LinkBox to make the entire box clickable.
 */
export const LinkOverlay = forwardRef<HTMLAnchorElement, LinkOverlayProps>(
  ({ unstyled = false, className, children, ...props }, ref) => {
    return (
      <a
        ref={ref}
        className={cn('link-overlay', unstyled && 'link-overlay-unstyled', className)}
        {...props}
      >
        {children}
      </a>
    );
  }
);

LinkOverlay.displayName = 'LinkOverlay';
