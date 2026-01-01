import { forwardRef, type HTMLAttributes } from 'react';
import { cn } from '../../utils/cn';

type ContainerSize = 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'fluid';

export interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  /** Container max-width size */
  size?: ContainerSize;
  /** Center the container */
  centered?: boolean;
  /** Add padding */
  padding?: boolean;
}

const sizeClasses: Record<ContainerSize, string> = {
  sm: 'container-sm',
  md: 'container-md',
  lg: 'container-lg',
  xl: 'container-xl',
  xxl: 'container-xxl',
  fluid: 'container-fluid',
};

export const Container = forwardRef<HTMLDivElement, ContainerProps>(
  (
    {
      size,
      centered = true,
      padding = true,
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
          size ? sizeClasses[size] : 'container',
          !centered && 'ms-0',
          !padding && 'px-0',
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Container.displayName = 'Container';
