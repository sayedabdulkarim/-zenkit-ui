import { forwardRef, type HTMLAttributes, type ReactNode } from 'react';
import { cn } from '../../utils/cn';

export interface FieldsetProps extends HTMLAttributes<HTMLFieldSetElement> {
  /** Legend/title */
  legend?: ReactNode;
  /** Disabled state */
  disabled?: boolean;
  /** Variant */
  variant?: 'default' | 'outlined' | 'filled';
}

export const Fieldset = forwardRef<HTMLFieldSetElement, FieldsetProps>(
  ({ legend, disabled = false, variant = 'default', className, children, ...props }, ref) => {
    return (
      <fieldset
        ref={ref}
        disabled={disabled}
        className={cn(
          'fieldset',
          `fieldset-${variant}`,
          disabled && 'fieldset-disabled',
          className
        )}
        {...props}
      >
        {legend && <legend className="fieldset-legend">{legend}</legend>}
        <div className="fieldset-content">{children}</div>
      </fieldset>
    );
  }
);

Fieldset.displayName = 'Fieldset';

// Field component for grouping form fields
export interface FieldProps extends HTMLAttributes<HTMLDivElement> {
  /** Field label */
  label?: ReactNode;
  /** Label position */
  labelPosition?: 'top' | 'left';
  /** Required indicator */
  required?: boolean;
  /** Help text */
  help?: ReactNode;
  /** Error text */
  error?: ReactNode;
}

export const Field = forwardRef<HTMLDivElement, FieldProps>(
  (
    {
      label,
      labelPosition = 'top',
      required = false,
      help,
      error,
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
          'field',
          `field-label-${labelPosition}`,
          error && 'field-error',
          className
        )}
        {...props}
      >
        {label && (
          <label className="field-label">
            {label}
            {required && <span className="field-required">*</span>}
          </label>
        )}
        <div className="field-control">{children}</div>
        {error && <span className="field-error-text">{error}</span>}
        {!error && help && <span className="field-help">{help}</span>}
      </div>
    );
  }
);

Field.displayName = 'Field';
