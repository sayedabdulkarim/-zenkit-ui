import { forwardRef, type ButtonHTMLAttributes } from 'react';
import { cn } from '../../utils/cn';

export interface UnstyledButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** Make button full width */
  block?: boolean;
}

export const UnstyledButton = forwardRef<HTMLButtonElement, UnstyledButtonProps>(
  ({ block = false, className, children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        type="button"
        className={cn(
          'unstyled-button',
          block && 'unstyled-button-block',
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

UnstyledButton.displayName = 'UnstyledButton';
