import { forwardRef, useState, useEffect, type HTMLAttributes, type ReactNode } from 'react';
import { createPortal } from 'react-dom';
import { cn } from '../../utils/cn';

type NotificationType = 'info' | 'success' | 'warning' | 'error';
type NotificationPlacement = 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left' | 'top-center' | 'bottom-center';

export interface NotificationProps extends Omit<HTMLAttributes<HTMLDivElement>, 'title'> {
  /** Notification type */
  type?: NotificationType;
  /** Notification title */
  title?: ReactNode;
  /** Notification message */
  message: ReactNode;
  /** Custom icon */
  icon?: ReactNode;
  /** Show close button */
  closable?: boolean;
  /** Close callback */
  onClose?: () => void;
  /** Auto close duration in ms (0 to disable) */
  duration?: number;
  /** Action buttons */
  action?: ReactNode;
}

interface NotificationContainerProps {
  placement?: NotificationPlacement;
  notifications: NotificationItem[];
  onClose: (id: string) => void;
}

interface NotificationItem {
  id: string;
  props: NotificationProps;
}

const typeIcons: Record<NotificationType, ReactNode> = {
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
  error: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20">
      <circle cx="12" cy="12" r="10" />
      <path d="M15 9l-6 6M9 9l6 6" />
    </svg>
  ),
};

export const Notification = forwardRef<HTMLDivElement, NotificationProps>(
  (
    {
      type = 'info',
      title,
      message,
      icon,
      closable = true,
      onClose,
      duration = 4500,
      action,
      className,
      ...props
    },
    ref
  ) => {
    const [visible, setVisible] = useState(true);

    useEffect(() => {
      if (duration > 0) {
        const timer = setTimeout(() => {
          handleClose();
        }, duration);
        return () => clearTimeout(timer);
      }
    }, [duration]);

    const handleClose = () => {
      setVisible(false);
      onClose?.();
    };

    if (!visible) return null;

    const displayIcon = icon === undefined ? typeIcons[type] : icon;

    return (
      <div
        ref={ref}
        className={cn('notification', `notification-${type}`, className)}
        role="alert"
        {...props}
      >
        {displayIcon && <div className="notification-icon">{displayIcon}</div>}
        <div className="notification-content">
          {title && <div className="notification-title">{title}</div>}
          <div className="notification-message">{message}</div>
          {action && <div className="notification-action">{action}</div>}
        </div>
        {closable && (
          <button
            type="button"
            className="notification-close"
            onClick={handleClose}
            aria-label="Close notification"
          >
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        )}
      </div>
    );
  }
);

Notification.displayName = 'Notification';

// Notification container for stacking multiple notifications
export const NotificationContainer = forwardRef<HTMLDivElement, NotificationContainerProps>(
  ({ placement = 'top-right', notifications, onClose, ...props }, ref) => {
    const placementClasses: Record<NotificationPlacement, string> = {
      'top-right': 'notification-container-top-right',
      'top-left': 'notification-container-top-left',
      'bottom-right': 'notification-container-bottom-right',
      'bottom-left': 'notification-container-bottom-left',
      'top-center': 'notification-container-top-center',
      'bottom-center': 'notification-container-bottom-center',
    };

    if (notifications.length === 0) return null;

    return createPortal(
      <div
        ref={ref}
        className={cn('notification-container', placementClasses[placement])}
        {...props}
      >
        {notifications.map((item) => (
          <Notification
            key={item.id}
            {...item.props}
            onClose={() => onClose(item.id)}
          />
        ))}
      </div>,
      document.body
    );
  }
);

NotificationContainer.displayName = 'NotificationContainer';
