import { forwardRef, type ButtonHTMLAttributes } from 'react';
import { cn } from '../../utils/cn';

type CloseButtonSize = 'sm' | 'md' | 'lg';

export interface CloseButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** Button size */
  size?: CloseButtonSize;
  /** Accessible label */
  'aria-label'?: string;
}

const sizeClasses: Record<CloseButtonSize, string> = {
  sm: 'close-btn-sm',
  md: '',
  lg: 'close-btn-lg',
};

export const CloseButton = forwardRef<HTMLButtonElement, CloseButtonProps>(
  (
    {
      size = 'md',
      'aria-label': ariaLabel = 'Close',
      className,
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        type="button"
        aria-label={ariaLabel}
        className={cn('close-btn', sizeClasses[size], className)}
        {...props}
      >
        <svg
          viewBox="0 0 24 24"
          width="1em"
          height="1em"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        >
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      </button>
    );
  }
);

CloseButton.displayName = 'CloseButton';
