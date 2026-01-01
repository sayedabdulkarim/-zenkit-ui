import { forwardRef, type HTMLAttributes, type ElementType } from 'react';
import { cn } from '../../utils/cn';
import type { ColorScheme } from '../../types';

type TypographyVariant = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'body1' | 'body2' | 'caption' | 'overline';

export interface TypographyProps extends HTMLAttributes<HTMLElement> {
  /** Typography variant */
  variant?: TypographyVariant;
  /** Custom element type */
  as?: ElementType;
  /** Color */
  color?: ColorScheme | 'muted' | 'inherit';
  /** Text alignment */
  align?: 'left' | 'center' | 'right' | 'justify';
  /** Truncate text */
  truncate?: boolean;
  /** Number of lines before truncation */
  lineClamp?: number;
  /** Font weight */
  weight?: 'light' | 'normal' | 'medium' | 'semibold' | 'bold';
  /** Italic text */
  italic?: boolean;
  /** Underline text */
  underline?: boolean;
  /** Strikethrough text */
  strikethrough?: boolean;
  /** Disable margin */
  noMargin?: boolean;
}

const variantMapping: Record<TypographyVariant, ElementType> = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
  body1: 'p',
  body2: 'p',
  caption: 'span',
  overline: 'span',
};

const variantClasses: Record<TypographyVariant, string> = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
  body1: 'text-body',
  body2: 'text-body text-sm',
  caption: 'text-caption',
  overline: 'text-overline',
};

const colorClasses: Record<string, string> = {
  primary: 'text-primary',
  secondary: 'text-secondary',
  success: 'text-success',
  danger: 'text-danger',
  warning: 'text-warning',
  info: 'text-info',
  muted: 'text-muted',
  inherit: '',
};

const weightClasses: Record<string, string> = {
  light: 'fw-light',
  normal: 'fw-normal',
  medium: 'fw-medium',
  semibold: 'fw-semibold',
  bold: 'fw-bold',
};

export const Typography = forwardRef<HTMLElement, TypographyProps>(
  (
    {
      variant = 'body1',
      as,
      color,
      align,
      truncate = false,
      lineClamp,
      weight,
      italic = false,
      underline = false,
      strikethrough = false,
      noMargin = false,
      className,
      style,
      children,
      ...props
    },
    ref
  ) => {
    const Component = as || variantMapping[variant];

    return (
      <Component
        ref={ref}
        className={cn(
          variantClasses[variant],
          color && colorClasses[color],
          align && `text-${align}`,
          truncate && 'text-truncate',
          lineClamp && 'line-clamp',
          weight && weightClasses[weight],
          italic && 'fst-italic',
          underline && 'text-decoration-underline',
          strikethrough && 'text-decoration-line-through',
          noMargin && 'mb-0',
          className
        )}
        style={{
          ...style,
          ...(lineClamp && {
            display: '-webkit-box',
            WebkitLineClamp: lineClamp,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
          }),
        }}
        {...props}
      >
        {children}
      </Component>
    );
  }
);

Typography.displayName = 'Typography';

// Convenience components
export const Heading = forwardRef<HTMLHeadingElement, Omit<TypographyProps, 'variant'> & { level?: 1 | 2 | 3 | 4 | 5 | 6 }>(
  ({ level = 1, ...props }, ref) => {
    const variant = `h${level}` as TypographyVariant;
    return <Typography ref={ref} variant={variant} {...props} />;
  }
);

Heading.displayName = 'Heading';

export const Text = forwardRef<HTMLParagraphElement, Omit<TypographyProps, 'variant'> & { size?: 'sm' | 'md' }>(
  ({ size = 'md', ...props }, ref) => {
    const variant = size === 'sm' ? 'body2' : 'body1';
    return <Typography ref={ref} variant={variant} {...props} />;
  }
);

Text.displayName = 'Text';
