import { forwardRef, type HTMLAttributes, type ReactNode } from 'react';
import { cn } from '../../utils/cn';

export type DataListSize = 'sm' | 'md' | 'lg';
export type DataListOrientation = 'vertical' | 'horizontal';

export interface DataListItemProps {
  /** Label for the data item */
  label: string;
  /** Value to display */
  value: ReactNode;
}

export interface DataListProps extends HTMLAttributes<HTMLDListElement> {
  /** Data items to display */
  items: DataListItemProps[];
  /** Size variant */
  size?: DataListSize;
  /** Layout orientation */
  orientation?: DataListOrientation;
  /** Display items inline (label and value on same line) */
  inline?: boolean;
  /** Add dividers between items */
  divided?: boolean;
  /** Striped background */
  striped?: boolean;
}

const sizeClasses: Record<DataListSize, string> = {
  sm: 'data-list-dense',
  md: '',
  lg: 'data-list-lg',
};

export const DataList = forwardRef<HTMLDListElement, DataListProps>(
  (
    {
      items,
      size = 'md',
      orientation = 'vertical',
      inline = false,
      divided = false,
      striped = false,
      className,
      ...props
    },
    ref
  ) => {
    return (
      <dl
        ref={ref}
        className={cn(
          'data-list',
          sizeClasses[size],
          orientation === 'horizontal' && 'data-list-horizontal',
          inline && 'data-list-inline',
          divided && 'data-list-divided',
          striped && 'data-list-striped',
          className
        )}
        {...props}
      >
        {items.map((item, index) => (
          <div key={index} className="data-list-item">
            <dt className="data-list-label">{item.label}</dt>
            <dd className="data-list-value">{item.value}</dd>
          </div>
        ))}
      </dl>
    );
  }
);

DataList.displayName = 'DataList';
