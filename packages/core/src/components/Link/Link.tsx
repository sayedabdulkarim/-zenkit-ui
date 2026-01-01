import { forwardRef, type AnchorHTMLAttributes } from 'react';
import { cn } from '../../utils/cn';

type LinkVariant = 'default' | 'subtle' | 'underline';

export interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  /** Link variant */
  variant?: LinkVariant;
  /** Color */
  color?: 'primary' | 'secondary' | 'inherit';
  /** External link */
  external?: boolean;
  /** Show external icon */
  showExternalIcon?: boolean;
  /** Disabled state */
  disabled?: boolean;
}

export const Link = forwardRef<HTMLAnchorElement, LinkProps>(
  (
    {
      variant = 'default',
      color = 'primary',
      external = false,
      showExternalIcon = false,
      disabled = false,
      className,
      children,
      href,
      target,
      rel,
      ...props
    },
    ref
  ) => {
    const isExternal = external || target === '_blank';
    const externalProps = isExternal
      ? {
          target: '_blank',
          rel: rel || 'noopener noreferrer',
        }
      : {};

    return (
      <a
        ref={ref}
        href={disabled ? undefined : href}
        className={cn(
          'link',
          `link-${variant}`,
          `link-${color}`,
          disabled && 'link-disabled',
          className
        )}
        aria-disabled={disabled}
        {...externalProps}
        {...props}
      >
        {children}
        {showExternalIcon && isExternal && (
          <svg
            className="link-external-icon"
            viewBox="0 0 24 24"
            width="0.875em"
            height="0.875em"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
          >
            <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
            <polyline points="15 3 21 3 21 9" />
            <line x1="10" y1="14" x2="21" y2="3" />
          </svg>
        )}
      </a>
    );
  }
);

Link.displayName = 'Link';
