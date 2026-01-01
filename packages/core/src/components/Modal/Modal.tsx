import { forwardRef, useEffect, type HTMLAttributes, type ReactNode } from 'react';
import { cn } from '../../utils/cn';
import { createPortal } from 'react-dom';

type ModalSize = 'sm' | 'md' | 'lg' | 'xl' | 'full';

export interface ModalProps extends Omit<HTMLAttributes<HTMLDivElement>, 'title'> {
  /** Whether modal is open */
  isOpen: boolean;
  /** Close callback */
  onClose: () => void;
  /** Modal title */
  title?: ReactNode;
  /** Modal size */
  size?: ModalSize;
  /** Show close button */
  showCloseButton?: boolean;
  /** Close on overlay click */
  closeOnOverlayClick?: boolean;
  /** Close on escape key */
  closeOnEscape?: boolean;
  /** Center modal vertically */
  centered?: boolean;
  /** Scrollable body */
  scrollable?: boolean;
  /** Footer content */
  footer?: ReactNode;
  /** Prevent body scroll when open */
  lockScroll?: boolean;
}

const sizeClasses: Record<ModalSize, string> = {
  sm: 'modal-sm',
  md: '',
  lg: 'modal-lg',
  xl: 'modal-xl',
  full: 'modal-fullscreen',
};

export const Modal = forwardRef<HTMLDivElement, ModalProps>(
  (
    {
      isOpen,
      onClose,
      title,
      size = 'md',
      showCloseButton = true,
      closeOnOverlayClick = true,
      closeOnEscape = true,
      centered = false,
      scrollable = false,
      footer,
      lockScroll = true,
      className,
      children,
      ...props
    },
    ref
  ) => {
    // Handle escape key
    useEffect(() => {
      if (!isOpen || !closeOnEscape) return;

      const handleEscape = (e: KeyboardEvent) => {
        if (e.key === 'Escape') onClose();
      };

      document.addEventListener('keydown', handleEscape);
      return () => document.removeEventListener('keydown', handleEscape);
    }, [isOpen, closeOnEscape, onClose]);

    // Lock body scroll
    useEffect(() => {
      if (!lockScroll) return;

      if (isOpen) {
        document.body.style.overflow = 'hidden';
      }

      return () => {
        document.body.style.overflow = '';
      };
    }, [isOpen, lockScroll]);

    if (!isOpen) return null;

    const handleOverlayClick = (e: React.MouseEvent) => {
      if (closeOnOverlayClick && e.target === e.currentTarget) {
        onClose();
      }
    };

    const modalContent = (
      <div
        className={cn('modal', isOpen && 'show')}
        style={{ display: 'block' }}
        role="dialog"
        aria-modal="true"
        aria-labelledby={title ? 'modal-title' : undefined}
        onClick={handleOverlayClick}
      >
        <div
          className={cn(
            'modal-dialog',
            sizeClasses[size],
            centered && 'modal-dialog-centered',
            scrollable && 'modal-dialog-scrollable'
          )}
        >
          <div ref={ref} className={cn('modal-content', className)} {...props}>
            {(title || showCloseButton) && (
              <div className="modal-header">
                {title && (
                  <h5 className="modal-title" id="modal-title">
                    {title}
                  </h5>
                )}
                {showCloseButton && (
                  <button
                    type="button"
                    className="btn-close"
                    onClick={onClose}
                    aria-label="Close modal"
                  />
                )}
              </div>
            )}
            <div className="modal-body">{children}</div>
            {footer && <div className="modal-footer">{footer}</div>}
          </div>
        </div>
        <div className="modal-backdrop show" />
      </div>
    );

    if (typeof window === 'undefined') return null;

    return createPortal(modalContent, document.body);
  }
);

Modal.displayName = 'Modal';

// Convenience exports
export interface ModalHeaderProps extends HTMLAttributes<HTMLDivElement> {
  onClose?: () => void;
  showCloseButton?: boolean;
}

export const ModalHeader = forwardRef<HTMLDivElement, ModalHeaderProps>(
  ({ onClose, showCloseButton = true, className, children, ...props }, ref) => (
    <div ref={ref} className={cn('modal-header', className)} {...props}>
      {children}
      {showCloseButton && onClose && (
        <button type="button" className="btn-close" onClick={onClose} aria-label="Close" />
      )}
    </div>
  )
);

ModalHeader.displayName = 'ModalHeader';

export const ModalBody = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('modal-body', className)} {...props} />
  )
);

ModalBody.displayName = 'ModalBody';

export const ModalFooter = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('modal-footer', className)} {...props} />
  )
);

ModalFooter.displayName = 'ModalFooter';
