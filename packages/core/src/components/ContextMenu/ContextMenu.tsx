'use client';

import { forwardRef, useState, useRef, useEffect, type HTMLAttributes, type ReactNode } from 'react';
import { cn } from '../../utils/cn';

export interface ContextMenuItem {
  key: string;
  label: ReactNode;
  icon?: ReactNode;
  shortcut?: string;
  disabled?: boolean;
  danger?: boolean;
  children?: ContextMenuItem[];
  onSelect?: () => void;
}

export interface ContextMenuProps extends HTMLAttributes<HTMLDivElement> {
  /** Menu items */
  items: ContextMenuItem[];
  /** Trigger element */
  children: ReactNode;
  /** Disabled state */
  disabled?: boolean;
}

export const ContextMenu = forwardRef<HTMLDivElement, ContextMenuProps>(
  ({ items, children, disabled = false, className, ...props }, ref) => {
    const [open, setOpen] = useState(false);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const menuRef = useRef<HTMLDivElement>(null);

    const handleContextMenu = (e: React.MouseEvent) => {
      if (disabled) return;
      e.preventDefault();
      setPosition({ x: e.clientX, y: e.clientY });
      setOpen(true);
    };

    useEffect(() => {
      const handleClick = (e: MouseEvent) => {
        if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
          setOpen(false);
        }
      };

      const handleEscape = (e: KeyboardEvent) => {
        if (e.key === 'Escape') setOpen(false);
      };

      if (open) {
        document.addEventListener('click', handleClick);
        document.addEventListener('keydown', handleEscape);
      }

      return () => {
        document.removeEventListener('click', handleClick);
        document.removeEventListener('keydown', handleEscape);
      };
    }, [open]);

    const renderItems = (menuItems: ContextMenuItem[]) => {
      return menuItems.map((item) => {
        if (item.children) {
          return (
            <div key={item.key} className="context-menu-submenu">
              <div className={cn('context-menu-item', item.disabled && 'context-menu-item-disabled')}>
                {item.icon && <span className="context-menu-item-icon">{item.icon}</span>}
                <span className="context-menu-item-label">{item.label}</span>
                <svg className="context-menu-submenu-arrow" viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none">
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </div>
              <div className="context-menu-submenu-content">{renderItems(item.children)}</div>
            </div>
          );
        }

        return (
          <div
            key={item.key}
            className={cn(
              'context-menu-item',
              item.disabled && 'context-menu-item-disabled',
              item.danger && 'context-menu-item-danger'
            )}
            onClick={() => {
              if (!item.disabled) {
                item.onSelect?.();
                setOpen(false);
              }
            }}
          >
            {item.icon && <span className="context-menu-item-icon">{item.icon}</span>}
            <span className="context-menu-item-label">{item.label}</span>
            {item.shortcut && <span className="context-menu-item-shortcut">{item.shortcut}</span>}
          </div>
        );
      });
    };

    return (
      <div ref={ref} className={cn('context-menu-trigger', className)} onContextMenu={handleContextMenu} {...props}>
        {children}
        {open && (
          <div
            ref={menuRef}
            className="context-menu"
            style={{ left: position.x, top: position.y }}
          >
            {renderItems(items)}
          </div>
        )}
      </div>
    );
  }
);

ContextMenu.displayName = 'ContextMenu';

// Context Menu Separator
export const ContextMenuSeparator = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('context-menu-separator', className)} {...props} />
  )
);

ContextMenuSeparator.displayName = 'ContextMenuSeparator';
