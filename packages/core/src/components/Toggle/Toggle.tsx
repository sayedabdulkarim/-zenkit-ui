import { forwardRef, type ButtonHTMLAttributes } from 'react';
import { cn } from '../../utils/cn';

export interface ToggleProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** Pressed state */
  pressed?: boolean;
  /** Default pressed state */
  defaultPressed?: boolean;
  /** On pressed change */
  onPressedChange?: (pressed: boolean) => void;
  /** Size */
  size?: 'sm' | 'md' | 'lg';
  /** Variant */
  variant?: 'default' | 'outline';
}

export const Toggle = forwardRef<HTMLButtonElement, ToggleProps>(
  (
    {
      pressed,
      defaultPressed = false,
      onPressedChange,
      size = 'md',
      variant = 'default',
      disabled,
      className,
      children,
      onClick,
      ...props
    },
    ref
  ) => {
    const isControlled = pressed !== undefined;
    const isPressed = isControlled ? pressed : defaultPressed;

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      if (!isControlled) {
        onPressedChange?.(!isPressed);
      } else {
        onPressedChange?.(!pressed);
      }
      onClick?.(e);
    };

    return (
      <button
        ref={ref}
        type="button"
        aria-pressed={isPressed}
        disabled={disabled}
        className={cn(
          'toggle',
          `toggle-${size}`,
          `toggle-${variant}`,
          isPressed && 'toggle-pressed',
          className
        )}
        onClick={handleClick}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Toggle.displayName = 'Toggle';
