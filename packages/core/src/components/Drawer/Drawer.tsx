import {
  forwardRef,
  useEffect,
  type HTMLAttributes,
  type ReactNode,
} from 'react';
import { createPortal } from 'react-dom';
import { cn } from '../../utils/cn';

type DrawerPlacement = 'left' | 'right' | 'top' | 'bottom';
type DrawerSize = 'sm' | 'md' | 'lg' | 'full';

export interface DrawerProps extends Omit<HTMLAttributes<HTMLDivElement>, 'title'> {
  /** Drawer open state */
  open: boolean;
  /** Close callback */
  onClose: () => void;
  /** Drawer title */
  title?: ReactNode;
  /** Drawer placement */
  placement?: DrawerPlacement;
  /** Drawer size */
  size?: DrawerSize;
  /** Show close button */
  closable?: boolean;
  /** Show overlay/mask */
  mask?: boolean;
  /** Close on mask click */
  maskClosable?: boolean;
  /** Close on escape key */
  closeOnEsc?: boolean;
  /** Footer content */
  footer?: ReactNode;
  /** Custom width (overrides size) */
  width?: number | string;
  /** Custom height (overrides size for top/bottom) */
  height?: number | string;
}

const sizeMap: Record<DrawerSize, string> = {
  sm: '320px',
  md: '400px',
  lg: '560px',
  full: '100%',
};

export const Drawer = forwardRef<HTMLDivElement, DrawerProps>(
  (
    {
      open,
      onClose,
      title,
      placement = 'right',
      size = 'md',
      closable = true,
      mask = true,
      maskClosable = true,
      closeOnEsc = true,
      footer,
      width,
      height,
      className,
      children,
      ...props
    },
    ref
  ) => {
    // Handle escape key
    useEffect(() => {
      const handleEscape = (event: KeyboardEvent) => {
        if (closeOnEsc && event.key === 'Escape') {
          onClose();
        }
      };

      if (open) {
        document.addEventListener('keydown', handleEscape);
        document.body.style.overflow = 'hidden';
      }

      return () => {
        document.removeEventListener('keydown', handleEscape);
        document.body.style.overflow = '';
      };
    }, [open, closeOnEsc, onClose]);

    if (!open) return null;

    const isVertical = placement === 'top' || placement === 'bottom';
    const dimensionStyle = isVertical
      ? { height: height || sizeMap[size] }
      : { width: width || sizeMap[size] };

    const placementClasses: Record<DrawerPlacement, string> = {
      left: 'drawer-left',
      right: 'drawer-right',
      top: 'drawer-top',
      bottom: 'drawer-bottom',
    };

    const handleMaskClick = () => {
      if (maskClosable) {
        onClose();
      }
    };

    const drawerContent = (
      <div className={cn('drawer-root', open && 'drawer-open')}>
        {mask && (
          <div
            className="drawer-mask"
            onClick={handleMaskClick}
            aria-hidden="true"
          />
        )}
        <div
          ref={ref}
          className={cn('drawer', placementClasses[placement], className)}
          style={dimensionStyle}
          role="dialog"
          aria-modal="true"
          {...props}
        >
          {(title || closable) && (
            <div className="drawer-header">
              {title && <div className="drawer-title">{title}</div>}
              {closable && (
                <button
                  type="button"
                  className="drawer-close"
                  onClick={onClose}
                  aria-label="Close drawer"
                >
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M18 6L6 18M6 6l12 12" />
                  </svg>
                </button>
              )}
            </div>
          )}
          <div className="drawer-body">{children}</div>
          {footer && <div className="drawer-footer">{footer}</div>}
        </div>
      </div>
    );

    return createPortal(drawerContent, document.body);
  }
);

Drawer.displayName = 'Drawer';
