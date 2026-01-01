import { forwardRef, type HTMLAttributes, type ReactNode, type ThHTMLAttributes, type TdHTMLAttributes } from 'react';
import { cn } from '../../utils/cn';

type TableSize = 'sm' | 'md' | 'lg';
type TableVariant = 'default' | 'striped' | 'bordered';

export interface TableProps extends HTMLAttributes<HTMLTableElement> {
  /** Table size */
  size?: TableSize;
  /** Table variant */
  variant?: TableVariant;
  /** Hoverable rows */
  hoverable?: boolean;
  /** Fixed header */
  stickyHeader?: boolean;
  /** Responsive wrapper */
  responsive?: boolean;
  /** Caption text */
  caption?: ReactNode;
  /** Caption placement */
  captionSide?: 'top' | 'bottom';
}

export interface TableHeadProps extends HTMLAttributes<HTMLTableSectionElement> {}

export interface TableBodyProps extends HTMLAttributes<HTMLTableSectionElement> {}

export interface TableFootProps extends HTMLAttributes<HTMLTableSectionElement> {}

export interface TableRowProps extends HTMLAttributes<HTMLTableRowElement> {
  /** Selected state */
  selected?: boolean;
}

export interface TableHeaderProps extends ThHTMLAttributes<HTMLTableCellElement> {
  /** Sortable column */
  sortable?: boolean;
  /** Sort direction */
  sortDirection?: 'asc' | 'desc' | null;
  /** Sort click handler */
  onSort?: () => void;
}

export interface TableCellProps extends TdHTMLAttributes<HTMLTableCellElement> {}

const sizeClasses: Record<TableSize, string> = {
  sm: 'table-sm',
  md: '',
  lg: 'table-lg',
};

export const Table = forwardRef<HTMLTableElement, TableProps>(
  (
    {
      size = 'md',
      variant = 'default',
      hoverable = false,
      stickyHeader = false,
      responsive = false,
      caption,
      captionSide = 'bottom',
      className,
      children,
      ...props
    },
    ref
  ) => {
    const table = (
      <table
        ref={ref}
        className={cn(
          'table',
          sizeClasses[size],
          variant === 'striped' && 'table-striped',
          variant === 'bordered' && 'table-bordered',
          hoverable && 'table-hover',
          stickyHeader && 'table-sticky-header',
          className
        )}
        {...props}
      >
        {caption && (
          <caption className={cn('table-caption', captionSide === 'top' && 'caption-top')}>
            {caption}
          </caption>
        )}
        {children}
      </table>
    );

    if (responsive) {
      return <div className="table-responsive">{table}</div>;
    }

    return table;
  }
);

Table.displayName = 'Table';

export const TableHead = forwardRef<HTMLTableSectionElement, TableHeadProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <thead ref={ref} className={cn('table-head', className)} {...props}>
        {children}
      </thead>
    );
  }
);

TableHead.displayName = 'TableHead';

export const TableBody = forwardRef<HTMLTableSectionElement, TableBodyProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <tbody ref={ref} className={cn('table-body', className)} {...props}>
        {children}
      </tbody>
    );
  }
);

TableBody.displayName = 'TableBody';

export const TableFoot = forwardRef<HTMLTableSectionElement, TableFootProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <tfoot ref={ref} className={cn('table-foot', className)} {...props}>
        {children}
      </tfoot>
    );
  }
);

TableFoot.displayName = 'TableFoot';

export const TableRow = forwardRef<HTMLTableRowElement, TableRowProps>(
  ({ selected = false, className, children, ...props }, ref) => {
    return (
      <tr
        ref={ref}
        className={cn('table-row', selected && 'table-row-selected', className)}
        aria-selected={selected}
        {...props}
      >
        {children}
      </tr>
    );
  }
);

TableRow.displayName = 'TableRow';

export const TableHeader = forwardRef<HTMLTableCellElement, TableHeaderProps>(
  ({ sortable = false, sortDirection = null, onSort, className, children, ...props }, ref) => {
    const handleClick = () => {
      if (sortable && onSort) {
        onSort();
      }
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
      if (sortable && onSort && (e.key === 'Enter' || e.key === ' ')) {
        e.preventDefault();
        onSort();
      }
    };

    return (
      <th
        ref={ref}
        className={cn(
          'table-header',
          sortable && 'table-header-sortable',
          sortDirection && `table-header-sort-${sortDirection}`,
          className
        )}
        onClick={handleClick}
        onKeyDown={handleKeyDown}
        tabIndex={sortable ? 0 : undefined}
        aria-sort={sortDirection === 'asc' ? 'ascending' : sortDirection === 'desc' ? 'descending' : undefined}
        {...props}
      >
        <span className="table-header-content">
          {children}
          {sortable && (
            <span className="table-sort-icon">
              <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2">
                {sortDirection === 'asc' ? (
                  <path d="M12 5v14M5 12l7-7 7 7" />
                ) : sortDirection === 'desc' ? (
                  <path d="M12 5v14M19 12l-7 7-7-7" />
                ) : (
                  <path d="M7 10l5-5 5 5M7 14l5 5 5-5" />
                )}
              </svg>
            </span>
          )}
        </span>
      </th>
    );
  }
);

TableHeader.displayName = 'TableHeader';

export const TableCell = forwardRef<HTMLTableCellElement, TableCellProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <td ref={ref} className={cn('table-cell', className)} {...props}>
        {children}
      </td>
    );
  }
);

TableCell.displayName = 'TableCell';
