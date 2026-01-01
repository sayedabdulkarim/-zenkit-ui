import { forwardRef, createContext, useContext, type FormHTMLAttributes, type ReactNode } from 'react';
import { cn } from '../../utils/cn';

// Form Context
interface FormContextValue {
  layout?: 'vertical' | 'horizontal' | 'inline';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  requiredMark?: boolean | 'optional';
}

const FormContext = createContext<FormContextValue>({});

export const useFormContext = () => useContext(FormContext);

// Form Component
export interface FormProps extends FormHTMLAttributes<HTMLFormElement> {
  /** Form layout */
  layout?: 'vertical' | 'horizontal' | 'inline';
  /** Form size */
  size?: 'sm' | 'md' | 'lg';
  /** Disable all form fields */
  disabled?: boolean;
  /** Show required mark */
  requiredMark?: boolean | 'optional';
}

export const Form = forwardRef<HTMLFormElement, FormProps>(
  (
    {
      layout = 'vertical',
      size = 'md',
      disabled = false,
      requiredMark = true,
      className,
      children,
      onSubmit,
      ...props
    },
    ref
  ) => {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      onSubmit?.(e);
    };

    return (
      <FormContext.Provider value={{ layout, size, disabled, requiredMark }}>
        <form
          ref={ref}
          onSubmit={handleSubmit}
          className={cn(
            'form',
            `form-${layout}`,
            disabled && 'form-disabled',
            className
          )}
          {...props}
        >
          {children}
        </form>
      </FormContext.Provider>
    );
  }
);

Form.displayName = 'Form';

// FormItem Component
export interface FormItemProps {
  /** Label text */
  label?: ReactNode;
  /** Helper text */
  helperText?: ReactNode;
  /** Error message */
  error?: ReactNode;
  /** Required field */
  required?: boolean;
  /** HTML for attribute */
  htmlFor?: string;
  /** Children elements */
  children?: ReactNode;
  /** Additional class name */
  className?: string;
}

export const FormItem = ({
  label,
  helperText,
  error,
  required = false,
  htmlFor,
  children,
  className,
}: FormItemProps) => {
  const { layout, requiredMark } = useFormContext();
  const hasError = !!error;

  const showRequiredMark = required && requiredMark === true;
  const showOptionalMark = !required && requiredMark === 'optional';

  return (
    <div
      className={cn(
        'form-group',
        layout === 'horizontal' && 'form-group-horizontal',
        layout === 'inline' && 'form-group-inline',
        hasError && 'has-error',
        className
      )}
    >
      {label && (
        <label htmlFor={htmlFor} className="form-label">
          {label}
          {showRequiredMark && <span className="form-required">*</span>}
          {showOptionalMark && <span className="form-optional">(optional)</span>}
        </label>
      )}
      <div className="form-control-wrapper">
        {children}
        {helperText && !hasError && (
          <div className="form-text">{helperText}</div>
        )}
        {hasError && (
          <div className="invalid-feedback" role="alert">
            {error}
          </div>
        )}
      </div>
    </div>
  );
};

FormItem.displayName = 'FormItem';
