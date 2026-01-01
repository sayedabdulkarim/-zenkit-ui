import { forwardRef, type HTMLAttributes } from 'react';
import { cn } from '../../utils/cn';

export interface PaginationProps extends Omit<HTMLAttributes<HTMLElement>, 'onChange'> {
  /** Current page */
  current?: number;
  /** Total number of pages */
  total: number;
  /** Items per page */
  pageSize?: number;
  /** Page change callback */
  onChange?: (page: number) => void;
  /** Show size changer */
  showSizeChanger?: boolean;
  /** Size change callback */
  onSizeChange?: (size: number) => void;
  /** Disabled state */
  disabled?: boolean;
  /** Show quick jumper */
  showQuickJumper?: boolean;
  /** Pagination size */
  size?: 'sm' | 'md' | 'lg';
  /** Show total count */
  showTotal?: boolean;
}

const sizeClasses = {
  sm: 'pagination-sm',
  md: '',
  lg: 'pagination-lg',
};

export const Pagination = forwardRef<HTMLElement, PaginationProps>(
  (
    {
      current = 1,
      total,
      pageSize = 10,
      onChange,
      disabled = false,
      size = 'md',
      showTotal = false,
      className,
      ...props
    },
    ref
  ) => {
    const totalPages = Math.ceil(total / pageSize);

    const handlePageClick = (page: number) => {
      if (disabled || page < 1 || page > totalPages || page === current) return;
      onChange?.(page);
    };

    const getPageNumbers = (): (number | string)[] => {
      const pages: (number | string)[] = [];
      const showEllipsis = totalPages > 7;

      if (!showEllipsis) {
        for (let i = 1; i <= totalPages; i++) {
          pages.push(i);
        }
      } else {
        pages.push(1);

        if (current > 4) {
          pages.push('...');
        }

        const start = Math.max(2, current - 1);
        const end = Math.min(totalPages - 1, current + 1);

        for (let i = start; i <= end; i++) {
          if (!pages.includes(i)) {
            pages.push(i);
          }
        }

        if (current < totalPages - 3) {
          pages.push('...');
        }

        if (!pages.includes(totalPages)) {
          pages.push(totalPages);
        }
      }

      return pages;
    };

    return (
      <nav ref={ref} aria-label="Pagination" className={className} {...props}>
        {showTotal && (
          <span className="pagination-total">
            Total {total} items
          </span>
        )}
        <ul className={cn('pagination', sizeClasses[size], disabled && 'disabled')}>
          <li className={cn('page-item', (current === 1 || disabled) && 'disabled')}>
            <button
              type="button"
              className="page-link"
              onClick={() => handlePageClick(current - 1)}
              disabled={current === 1 || disabled}
              aria-label="Previous page"
            >
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
          </li>

          {getPageNumbers().map((page, index) => (
            <li
              key={index}
              className={cn(
                'page-item',
                page === current && 'active',
                (disabled || page === '...') && 'disabled'
              )}
            >
              {page === '...' ? (
                <span className="page-link">...</span>
              ) : (
                <button
                  type="button"
                  className="page-link"
                  onClick={() => handlePageClick(page as number)}
                  disabled={disabled}
                  aria-current={page === current ? 'page' : undefined}
                >
                  {page}
                </button>
              )}
            </li>
          ))}

          <li className={cn('page-item', (current === totalPages || disabled) && 'disabled')}>
            <button
              type="button"
              className="page-link"
              onClick={() => handlePageClick(current + 1)}
              disabled={current === totalPages || disabled}
              aria-label="Next page"
            >
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </li>
        </ul>
      </nav>
    );
  }
);

Pagination.displayName = 'Pagination';
