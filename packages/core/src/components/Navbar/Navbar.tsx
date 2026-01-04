import { forwardRef, type HTMLAttributes } from 'react';
import { cn } from '../../utils/cn';

export interface NavbarProps extends HTMLAttributes<HTMLElement> {
  /** Fixed position */
  position?: 'static' | 'sticky' | 'fixed';
  /** Max width */
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  /** Bordered bottom */
  bordered?: boolean;
  /** Blur background */
  blurred?: boolean;
}

export const Navbar = forwardRef<HTMLElement, NavbarProps>(
  (
    {
      position = 'sticky',
      maxWidth = 'xl',
      bordered = true,
      blurred = true,
      className,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <nav
        ref={ref}
        className={cn(
          'navbar',
          `navbar-${position}`,
          `navbar-max-${maxWidth}`,
          bordered && 'navbar-bordered',
          blurred && 'navbar-blurred',
          className
        )}
        {...props}
      >
        <div className="navbar-container">{children}</div>
      </nav>
    );
  }
);

Navbar.displayName = 'Navbar';

// Navbar Brand
export interface NavbarBrandProps extends HTMLAttributes<HTMLDivElement> {}

export const NavbarBrand = forwardRef<HTMLDivElement, NavbarBrandProps>(
  ({ className, children, ...props }, ref) => (
    <div ref={ref} className={cn('navbar-brand', className)} {...props}>
      {children}
    </div>
  )
);

NavbarBrand.displayName = 'NavbarBrand';

// Navbar Content
export interface NavbarContentProps extends HTMLAttributes<HTMLUListElement> {
  /** Justify content */
  justify?: 'start' | 'center' | 'end';
}

export const NavbarContent = forwardRef<HTMLUListElement, NavbarContentProps>(
  ({ justify = 'start', className, children, ...props }, ref) => (
    <ul
      ref={ref}
      className={cn('navbar-nav', `navbar-nav-${justify}`, className)}
      {...props}
    >
      {children}
    </ul>
  )
);

NavbarContent.displayName = 'NavbarContent';

// Navbar Item
export interface NavbarItemProps extends HTMLAttributes<HTMLLIElement> {
  /** Active state */
  active?: boolean;
}

export const NavbarItem = forwardRef<HTMLLIElement, NavbarItemProps>(
  ({ active = false, className, children, ...props }, ref) => (
    <li
      ref={ref}
      className={cn('nav-item', active && 'active', className)}
      {...props}
    >
      {children}
    </li>
  )
);

NavbarItem.displayName = 'NavbarItem';

// Navbar Menu Toggle (for mobile)
export interface NavbarMenuToggleProps extends HTMLAttributes<HTMLButtonElement> {
  /** Is menu open */
  isOpen?: boolean;
}

export const NavbarMenuToggle = forwardRef<HTMLButtonElement, NavbarMenuToggleProps>(
  ({ isOpen = false, className, ...props }, ref) => (
    <button
      ref={ref}
      type="button"
      aria-label={isOpen ? 'Close menu' : 'Open menu'}
      aria-expanded={isOpen}
      className={cn('navbar-toggle', isOpen && 'active', className)}
      {...props}
    >
      <span />
      <span />
      <span />
    </button>
  )
);

NavbarMenuToggle.displayName = 'NavbarMenuToggle';

// Navbar Menu (mobile dropdown)
export interface NavbarMenuProps extends HTMLAttributes<HTMLDivElement> {
  /** Is menu open */
  isOpen?: boolean;
}

export const NavbarMenu = forwardRef<HTMLDivElement, NavbarMenuProps>(
  ({ isOpen = false, className, children, ...props }, ref) => (
    <div
      ref={ref}
      className={cn('navbar-collapse', isOpen && 'show', className)}
      {...props}
    >
      {children}
    </div>
  )
);

NavbarMenu.displayName = 'NavbarMenu';

// Navbar Menu Item
export interface NavbarMenuItemProps extends HTMLAttributes<HTMLDivElement> {}

export const NavbarMenuItem = forwardRef<HTMLDivElement, NavbarMenuItemProps>(
  ({ className, children, ...props }, ref) => (
    <div ref={ref} className={cn('nav-item', className)} {...props}>
      {children}
    </div>
  )
);

NavbarMenuItem.displayName = 'NavbarMenuItem';
