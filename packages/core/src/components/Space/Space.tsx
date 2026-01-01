import { forwardRef, type HTMLAttributes, Children, isValidElement } from 'react';
import { cn } from '../../utils/cn';

type SpaceSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | number;

export interface SpaceProps extends HTMLAttributes<HTMLDivElement> {
  /** Direction of space */
  direction?: 'horizontal' | 'vertical';
  /** Size of spacing */
  size?: SpaceSize;
  /** Wrap items */
  wrap?: boolean;
  /** Alignment */
  align?: 'start' | 'end' | 'center' | 'baseline';
  /** Divider between items */
  divider?: React.ReactNode;
}

const sizeMap: Record<string, string> = {
  xs: '0.25rem',
  sm: '0.5rem',
  md: '1rem',
  lg: '1.5rem',
  xl: '2rem',
};

export const Space = forwardRef<HTMLDivElement, SpaceProps>(
  (
    {
      direction = 'horizontal',
      size = 'md',
      wrap = false,
      align = 'center',
      divider,
      className,
      style,
      children,
      ...props
    },
    ref
  ) => {
    const gap = typeof size === 'number' ? `${size}px` : sizeMap[size];
    const items = Children.toArray(children).filter(isValidElement);

    const alignClasses: Record<string, string> = {
      start: 'align-items-start',
      end: 'align-items-end',
      center: 'align-items-center',
      baseline: 'align-items-baseline',
    };

    return (
      <div
        ref={ref}
        className={cn(
          'd-flex',
          direction === 'vertical' ? 'flex-column' : 'flex-row',
          wrap && 'flex-wrap',
          alignClasses[align],
          className
        )}
        style={{
          gap: divider ? undefined : gap,
          ...style,
        }}
        {...props}
      >
        {items.map((child, index) => (
          <div key={index} className="space-item" style={{ display: 'flex' }}>
            {child}
            {divider && index < items.length - 1 && (
              <div
                className="space-divider"
                style={{
                  margin: direction === 'horizontal' ? `0 ${gap}` : `${gap} 0`,
                }}
              >
                {divider}
              </div>
            )}
          </div>
        ))}
      </div>
    );
  }
);

Space.displayName = 'Space';
