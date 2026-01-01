import {
  forwardRef,
  createContext,
  useContext,
  useState,
  type HTMLAttributes,
  type ReactNode,
} from 'react';
import { cn } from '../../utils/cn';

type MenuMode = 'vertical' | 'horizontal' | 'inline';

interface MenuContextValue {
  mode: MenuMode;
  activeKey: string;
  openKeys: string[];
  setActiveKey: (key: string) => void;
  toggleOpen: (key: string) => void;
}

const MenuContext = createContext<MenuContextValue | null>(null);

const useMenuContext = () => {
  const context = useContext(MenuContext);
  if (!context) {
    throw new Error('Menu components must be used within a Menu provider');
  }
  return context;
};

export interface MenuProps extends Omit<HTMLAttributes<HTMLElement>, 'onSelect'> {
  /** Menu mode */
  mode?: MenuMode;
  /** Default active menu item key */
  defaultActiveKey?: string;
  /** Controlled active menu item key */
  activeKey?: string;
  /** Default open submenu keys */
  defaultOpenKeys?: string[];
  /** Controlled open submenu keys */
  openKeys?: string[];
  /** Active key change callback */
  onSelect?: (key: string) => void;
  /** Open keys change callback */
  onOpenChange?: (keys: string[]) => void;
  /** Collapsed state (for inline mode) */
  collapsed?: boolean;
}

export interface MenuItemProps extends HTMLAttributes<HTMLLIElement> {
  /** Menu item key */
  itemKey: string;
  /** Disabled state */
  disabled?: boolean;
  /** Item icon */
  icon?: ReactNode;
}

export interface SubMenuProps extends Omit<HTMLAttributes<HTMLLIElement>, 'title'> {
  /** Submenu key */
  subKey: string;
  /** Submenu title */
  title: ReactNode;
  /** Submenu icon */
  icon?: ReactNode;
  /** Disabled state */
  disabled?: boolean;
}

export interface MenuGroupProps extends Omit<HTMLAttributes<HTMLLIElement>, 'title'> {
  /** Group title */
  title: ReactNode;
}

export interface MenuDividerProps extends HTMLAttributes<HTMLLIElement> {}

export const Menu = forwardRef<HTMLElement, MenuProps>(
  (
    {
      mode = 'vertical',
      defaultActiveKey = '',
      activeKey: controlledActiveKey,
      defaultOpenKeys = [],
      openKeys: controlledOpenKeys,
      onSelect,
      onOpenChange,
      collapsed = false,
      className,
      children,
      ...props
    },
    ref
  ) => {
    const [internalActiveKey, setInternalActiveKey] = useState(defaultActiveKey);
    const [internalOpenKeys, setInternalOpenKeys] = useState<string[]>(defaultOpenKeys);

    const activeKey = controlledActiveKey ?? internalActiveKey;
    const openKeys = controlledOpenKeys ?? internalOpenKeys;

    const setActiveKey = (key: string) => {
      if (controlledActiveKey === undefined) {
        setInternalActiveKey(key);
      }
      onSelect?.(key);
    };

    const toggleOpen = (key: string) => {
      const newOpenKeys = openKeys.includes(key)
        ? openKeys.filter((k) => k !== key)
        : [...openKeys, key];

      if (controlledOpenKeys === undefined) {
        setInternalOpenKeys(newOpenKeys);
      }
      onOpenChange?.(newOpenKeys);
    };

    return (
      <MenuContext.Provider value={{ mode, activeKey, openKeys, setActiveKey, toggleOpen }}>
        <nav
          ref={ref}
          className={cn(
            'menu',
            `menu-${mode}`,
            collapsed && 'menu-collapsed',
            className
          )}
          {...props}
        >
          <ul className="menu-list" role="menu">
            {children}
          </ul>
        </nav>
      </MenuContext.Provider>
    );
  }
);

Menu.displayName = 'Menu';

export const MenuItem = forwardRef<HTMLLIElement, MenuItemProps>(
  ({ itemKey, disabled = false, icon, className, children, onClick, ...props }, ref) => {
    const { activeKey, setActiveKey } = useMenuContext();
    const isActive = activeKey === itemKey;

    const handleClick = (e: React.MouseEvent<HTMLLIElement>) => {
      if (!disabled) {
        setActiveKey(itemKey);
        onClick?.(e);
      }
    };

    return (
      <li
        ref={ref}
        role="menuitem"
        className={cn(
          'menu-item',
          isActive && 'menu-item-active',
          disabled && 'menu-item-disabled',
          className
        )}
        onClick={handleClick}
        aria-disabled={disabled}
        tabIndex={disabled ? -1 : 0}
        {...props}
      >
        {icon && <span className="menu-item-icon">{icon}</span>}
        <span className="menu-item-content">{children}</span>
      </li>
    );
  }
);

MenuItem.displayName = 'MenuItem';

export const SubMenu = forwardRef<HTMLLIElement, SubMenuProps>(
  ({ subKey, title, icon, disabled = false, className, children, ...props }, ref) => {
    const { openKeys, toggleOpen } = useMenuContext();
    const isOpen = openKeys.includes(subKey);

    const handleToggle = () => {
      if (!disabled) {
        toggleOpen(subKey);
      }
    };

    return (
      <li
        ref={ref}
        className={cn(
          'submenu',
          isOpen && 'submenu-open',
          disabled && 'submenu-disabled',
          className
        )}
        {...props}
      >
        <div
          className="submenu-title"
          onClick={handleToggle}
          role="button"
          tabIndex={disabled ? -1 : 0}
          aria-expanded={isOpen}
          aria-disabled={disabled}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              handleToggle();
            }
          }}
        >
          {icon && <span className="menu-item-icon">{icon}</span>}
          <span className="submenu-title-content">{title}</span>
          <span className={cn('submenu-arrow', isOpen && 'submenu-arrow-open')}>
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M6 9l6 6 6-6" />
            </svg>
          </span>
        </div>
        <ul
          className={cn('submenu-list', isOpen && 'submenu-list-open')}
          role="menu"
          aria-hidden={!isOpen}
        >
          {children}
        </ul>
      </li>
    );
  }
);

SubMenu.displayName = 'SubMenu';

export const MenuGroup = forwardRef<HTMLLIElement, MenuGroupProps>(
  ({ title, className, children, ...props }, ref) => {
    return (
      <li ref={ref} className={cn('menu-group', className)} role="group" {...props}>
        <div className="menu-group-title">{title}</div>
        <ul className="menu-group-list" role="menu">
          {children}
        </ul>
      </li>
    );
  }
);

MenuGroup.displayName = 'MenuGroup';

export const MenuDivider = forwardRef<HTMLLIElement, MenuDividerProps>(
  ({ className, ...props }, ref) => {
    return (
      <li
        ref={ref}
        className={cn('menu-divider', className)}
        role="separator"
        {...props}
      />
    );
  }
);

MenuDivider.displayName = 'MenuDivider';
