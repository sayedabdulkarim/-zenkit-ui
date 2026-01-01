import { forwardRef, type HTMLAttributes } from 'react';
import { cn } from '../../utils/cn';

export interface AspectRatioProps extends HTMLAttributes<HTMLDivElement> {
  /** Aspect ratio (e.g., 16/9, 4/3, 1) */
  ratio?: number;
}

export const AspectRatio = forwardRef<HTMLDivElement, AspectRatioProps>(
  ({ ratio = 1, className, children, style, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn('aspect-ratio', className)}
        style={{
          ...style,
          '--aspect-ratio': ratio,
        } as React.CSSProperties}
        {...props}
      >
        <div className="aspect-ratio-content">{children}</div>
      </div>
    );
  }
);

AspectRatio.displayName = 'AspectRatio';
