import {
  forwardRef,
  createContext,
  useContext,
  useState,
  useRef,
  useEffect,
  type HTMLAttributes,
  type ReactNode,
  type ButtonHTMLAttributes,
} from 'react';
import { cn } from '../../utils/cn';

type DropdownPlacement = 'bottom-start' | 'bottom-end' | 'top-start' | 'top-end';

interface DropdownContextValue {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  toggle: () => void;
  close: () => void;
}

const DropdownContext = createContext<DropdownContextValue | null>(null);

const useDropdownContext = () => {
  const context = useContext(DropdownContext);
  if (!context) {
    throw new Error('Dropdown components must be used within a Dropdown provider');
  }
  return context;
};

export interface DropdownProps extends HTMLAttributes<HTMLDivElement> {
  /** Controlled open state */
  open?: boolean;
  /** Open state change callback */
  onOpenChange?: (open: boolean) => void;
  /** Placement of dropdown menu */
  placement?: DropdownPlacement;
}

export interface DropdownTriggerProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** As child - renders children as trigger */
  asChild?: boolean;
}

export interface DropdownMenuProps extends HTMLAttributes<HTMLDivElement> {}

export interface DropdownItemProps extends HTMLAttributes<HTMLDivElement> {
  /** Disabled state */
  disabled?: boolean;
  /** Danger/destructive action */
  danger?: boolean;
  /** Icon */
  icon?: ReactNode;
  /** Click handler */
  onSelect?: () => void;
}

export interface DropdownDividerProps extends HTMLAttributes<HTMLHRElement> {}

export interface DropdownHeaderProps extends HTMLAttributes<HTMLDivElement> {}

export const Dropdown = forwardRef<HTMLDivElement, DropdownProps>(
  (
    {
      open: controlledOpen,
      onOpenChange,
      placement = 'bottom-start',
      className,
      children,
      ...props
    },
    ref
  ) => {
    const [internalOpen, setInternalOpen] = useState(false);
    const isOpen = controlledOpen ?? internalOpen;
    const dropdownRef = useRef<HTMLDivElement>(null);

    const setIsOpen = (open: boolean) => {
      if (controlledOpen === undefined) {
        setInternalOpen(open);
      }
      onOpenChange?.(open);
    };

    const toggle = () => setIsOpen(!isOpen);
    const close = () => setIsOpen(false);

    // Close on outside click
    useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
          close();
        }
      };

      if (isOpen) {
        document.addEventListener('mousedown', handleClickOutside);
      }

      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, [isOpen]);

    // Close on escape
    useEffect(() => {
      const handleEscape = (event: KeyboardEvent) => {
        if (event.key === 'Escape') {
          close();
        }
      };

      if (isOpen) {
        document.addEventListener('keydown', handleEscape);
      }

      return () => {
        document.removeEventListener('keydown', handleEscape);
      };
    }, [isOpen]);

    const placementClasses: Record<DropdownPlacement, string> = {
      'bottom-start': 'dropdown',
      'bottom-end': 'dropdown dropend',
      'top-start': 'dropup',
      'top-end': 'dropup dropend',
    };

    return (
      <DropdownContext.Provider value={{ isOpen, setIsOpen, toggle, close }}>
        <div
          ref={(node) => {
            (dropdownRef as React.MutableRefObject<HTMLDivElement | null>).current = node;
            if (typeof ref === 'function') ref(node);
            else if (ref) ref.current = node;
          }}
          className={cn(placementClasses[placement], className)}
          {...props}
        >
          {children}
        </div>
      </DropdownContext.Provider>
    );
  }
);

Dropdown.displayName = 'Dropdown';

export const DropdownTrigger = forwardRef<HTMLButtonElement, DropdownTriggerProps>(
  ({ asChild = false, className, children, onClick, ...props }, ref) => {
    const { toggle, isOpen } = useDropdownContext();

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      toggle();
      onClick?.(e);
    };

    return (
      <button
        ref={ref}
        type="button"
        className={cn('btn dropdown-toggle', className)}
        onClick={handleClick}
        aria-expanded={isOpen}
        aria-haspopup="true"
        {...props}
      >
        {children}
      </button>
    );
  }
);

DropdownTrigger.displayName = 'DropdownTrigger';

export const DropdownMenu = forwardRef<HTMLDivElement, DropdownMenuProps>(
  ({ className, children, ...props }, ref) => {
    const { isOpen } = useDropdownContext();

    return (
      <div
        ref={ref}
        className={cn('dropdown-menu', isOpen && 'show', className)}
        role="menu"
        {...props}
      >
        {children}
      </div>
    );
  }
);

DropdownMenu.displayName = 'DropdownMenu';

export const DropdownItem = forwardRef<HTMLDivElement, DropdownItemProps>(
  ({ disabled = false, danger = false, icon, onSelect, className, children, onClick, ...props }, ref) => {
    const { close } = useDropdownContext();

    const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
      if (disabled) return;
      onSelect?.();
      close();
      onClick?.(e);
    };

    return (
      <div
        ref={ref}
        role="menuitem"
        className={cn(
          'dropdown-item',
          disabled && 'disabled',
          danger && 'dropdown-item-danger',
          className
        )}
        onClick={handleClick}
        aria-disabled={disabled}
        tabIndex={disabled ? -1 : 0}
        {...props}
      >
        {icon && <span className="dropdown-item-icon">{icon}</span>}
        {children}
      </div>
    );
  }
);

DropdownItem.displayName = 'DropdownItem';

export const DropdownDivider = forwardRef<HTMLHRElement, DropdownDividerProps>(
  ({ className, ...props }, ref) => {
    return <hr ref={ref} className={cn('dropdown-divider', className)} {...props} />;
  }
);

DropdownDivider.displayName = 'DropdownDivider';

export const DropdownHeader = forwardRef<HTMLDivElement, DropdownHeaderProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div ref={ref} className={cn('dropdown-header', className)} {...props}>
        {children}
      </div>
    );
  }
);

DropdownHeader.displayName = 'DropdownHeader';
