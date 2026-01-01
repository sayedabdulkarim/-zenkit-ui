'use client';

import { forwardRef, useState, useRef, useEffect, type HTMLAttributes, type ReactNode } from 'react';
import { cn } from '../../utils/cn';

export interface MenubarItem {
  key: string;
  label: ReactNode;
  icon?: ReactNode;
  shortcut?: string;
  disabled?: boolean;
  children?: MenubarItem[];
  onSelect?: () => void;
  type?: 'item' | 'separator' | 'checkbox' | 'radio';
  checked?: boolean;
}

export interface MenubarProps extends HTMLAttributes<HTMLDivElement> {
  /** Loop keyboard navigation */
  loop?: boolean;
}

export const Menubar = forwardRef<HTMLDivElement, MenubarProps>(
  ({ loop = true, className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        role="menubar"
        className={cn('menubar', className)}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Menubar.displayName = 'Menubar';

// Menubar Menu
export interface MenubarMenuProps extends HTMLAttributes<HTMLDivElement> {
  /** Trigger label */
  trigger: ReactNode;
  /** Menu items */
  items: MenubarItem[];
}

export const MenubarMenu = forwardRef<HTMLDivElement, MenubarMenuProps>(
  ({ trigger, items, className, ...props }, _ref) => {
    const [open, setOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      const handleClickOutside = (e: MouseEvent) => {
        if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
          setOpen(false);
        }
      };

      if (open) {
        document.addEventListener('mousedown', handleClickOutside);
      }

      return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [open]);

    const renderItems = (menuItems: MenubarItem[]) => {
      return menuItems.map((item) => {
        if (item.type === 'separator') {
          return <div key={item.key} className="menubar-separator" />;
        }

        if (item.children) {
          return (
            <div key={item.key} className="menubar-submenu">
              <div className={cn('menubar-item', item.disabled && 'menubar-item-disabled')}>
                {item.icon && <span className="menubar-item-icon">{item.icon}</span>}
                <span className="menubar-item-label">{item.label}</span>
                <svg className="menubar-submenu-arrow" viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" strokeWidth="2" fill="none">
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </div>
              <div className="menubar-submenu-content">{renderItems(item.children)}</div>
            </div>
          );
        }

        return (
          <div
            key={item.key}
            role="menuitem"
            className={cn(
              'menubar-item',
              item.disabled && 'menubar-item-disabled',
              item.checked && 'menubar-item-checked'
            )}
            onClick={() => {
              if (!item.disabled) {
                item.onSelect?.();
                setOpen(false);
              }
            }}
          >
            {item.type === 'checkbox' && (
              <span className="menubar-item-check">
                {item.checked && (
                  <svg viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" strokeWidth="2" fill="none">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                )}
              </span>
            )}
            {item.icon && <span className="menubar-item-icon">{item.icon}</span>}
            <span className="menubar-item-label">{item.label}</span>
            {item.shortcut && <span className="menubar-item-shortcut">{item.shortcut}</span>}
          </div>
        );
      });
    };

    return (
      <div ref={menuRef} className={cn('menubar-menu', className)} {...props}>
        <button
          type="button"
          role="menuitem"
          aria-haspopup="true"
          aria-expanded={open}
          className={cn('menubar-trigger', open && 'menubar-trigger-open')}
          onClick={() => setOpen(!open)}
          onMouseEnter={() => {
            // Open on hover if another menu is open
            const anyOpen = document.querySelector('.menubar-trigger-open');
            if (anyOpen && anyOpen !== menuRef.current?.querySelector('.menubar-trigger')) {
              setOpen(true);
            }
          }}
        >
          {trigger}
        </button>
        {open && (
          <div className="menubar-content" role="menu">
            {renderItems(items)}
          </div>
        )}
      </div>
    );
  }
);

MenubarMenu.displayName = 'MenubarMenu';
