import { forwardRef, useState, type HTMLAttributes, type ReactNode } from 'react';
import { cn } from '../../utils/cn';

type AlertVariant = 'filled' | 'outlined' | 'soft';
type AlertStatus = 'info' | 'success' | 'warning' | 'danger';

export interface AlertProps extends Omit<HTMLAttributes<HTMLDivElement>, 'title'> {
  /** Alert status/type */
  status?: AlertStatus;
  /** Alert variant */
  variant?: AlertVariant;
  /** Alert title */
  title?: ReactNode;
  /** Alert icon */
  icon?: ReactNode;
  /** Show close button */
  closable?: boolean;
  /** Close callback */
  onClose?: () => void;
  /** Custom close button */
  closeButton?: ReactNode;
  /** Action buttons */
  action?: ReactNode;
}

const statusClasses: Record<AlertStatus, string> = {
  info: 'alert-info',
  success: 'alert-success',
  warning: 'alert-warning',
  danger: 'alert-danger',
};

const defaultIcons: Record<AlertStatus, ReactNode> = {
  info: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 16v-4M12 8h.01" />
    </svg>
  ),
  success: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20">
      <circle cx="12" cy="12" r="10" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  ),
  warning: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20">
      <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
      <path d="M12 9v4M12 17h.01" />
    </svg>
  ),
  danger: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20">
      <circle cx="12" cy="12" r="10" />
      <path d="M15 9l-6 6M9 9l6 6" />
    </svg>
  ),
};

export const Alert = forwardRef<HTMLDivElement, AlertProps>(
  (
    {
      status = 'info',
      variant = 'soft',
      title,
      icon,
      closable = false,
      onClose,
      closeButton,
      action,
      className,
      children,
      ...props
    },
    ref
  ) => {
    const [visible, setVisible] = useState(true);

    const handleClose = () => {
      setVisible(false);
      onClose?.();
    };

    if (!visible) return null;

    const alertIcon = icon === undefined ? defaultIcons[status] : icon;

    return (
      <div
        ref={ref}
        role="alert"
        className={cn(
          'alert',
          statusClasses[status],
          variant === 'outlined' && 'alert-outlined',
          variant === 'filled' && 'alert-filled',
          className
        )}
        {...props}
      >
        {alertIcon && <div className="alert-icon">{alertIcon}</div>}
        <div className="alert-content">
          {title && <div className="alert-title">{title}</div>}
          {children && <div className="alert-description">{children}</div>}
        </div>
        {action && <div className="alert-action">{action}</div>}
        {closable && (
          closeButton || (
            <button
              type="button"
              className="alert-close"
              onClick={handleClose}
              aria-label="Close alert"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>
          )
        )}
      </div>
    );
  }
);

Alert.displayName = 'Alert';
