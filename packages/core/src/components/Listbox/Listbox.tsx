import {
  forwardRef,
  createContext,
  type HTMLAttributes,
  type ButtonHTMLAttributes,
  type ReactNode,
} from 'react';
import { cn } from '../../utils/cn';

export type ListboxSize = 'sm' | 'md' | 'lg';

interface ListboxContextValue {
  size: ListboxSize;
  multiple: boolean;
}

const ListboxContext = createContext<ListboxContextValue>({
  size: 'md',
  multiple: false,
});

export interface ListboxProps extends HTMLAttributes<HTMLDivElement> {
  /** Size variant */
  size?: ListboxSize;
  /** Allow multiple selection */
  multiple?: boolean;
}

export interface ListboxButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** Placeholder text when no selection */
  placeholder?: string;
  /** Icon to show */
  icon?: ReactNode;
}

export interface ListboxOptionsProps extends HTMLAttributes<HTMLUListElement> {}

export interface ListboxOptionProps extends HTMLAttributes<HTMLLIElement> {
  /** Option value */
  value: string;
  /** Whether option is selected */
  selected?: boolean;
  /** Whether option is disabled */
  disabled?: boolean;
  /** Whether option is currently active/focused */
  active?: boolean;
  /** Icon to display */
  icon?: ReactNode;
  /** Description text */
  description?: string;
}

export interface ListboxGroupProps extends HTMLAttributes<HTMLDivElement> {
  /** Group label */
  label: string;
}

const sizeClasses: Record<ListboxSize, string> = {
  sm: 'listbox-sm',
  md: '',
  lg: 'listbox-lg',
};

export const Listbox = forwardRef<HTMLDivElement, ListboxProps>(
  ({ size = 'md', multiple = false, className, children, ...props }, ref) => {
    return (
      <ListboxContext.Provider value={{ size, multiple }}>
        <div
          ref={ref}
          className={cn('listbox', sizeClasses[size], multiple && 'listbox-multiple', className)}
          role="listbox"
          aria-multiselectable={multiple}
          {...props}
        >
          {children}
        </div>
      </ListboxContext.Provider>
    );
  }
);

Listbox.displayName = 'Listbox';

export const ListboxButton = forwardRef<HTMLButtonElement, ListboxButtonProps>(
  ({ placeholder, icon, className, children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        type="button"
        className={cn('listbox-button', className)}
        {...props}
      >
        <span>{children || placeholder}</span>
        {icon && <span className="listbox-button-icon">{icon}</span>}
      </button>
    );
  }
);

ListboxButton.displayName = 'ListboxButton';

export const ListboxOptions = forwardRef<HTMLUListElement, ListboxOptionsProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <ul
        ref={ref}
        className={cn('listbox-options', className)}
        role="listbox"
        {...props}
      >
        {children}
      </ul>
    );
  }
);

ListboxOptions.displayName = 'ListboxOptions';

export const ListboxOption = forwardRef<HTMLLIElement, ListboxOptionProps>(
  (
    {
      value,
      selected = false,
      disabled = false,
      active = false,
      icon,
      description,
      className,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <li
        ref={ref}
        role="option"
        aria-selected={selected}
        aria-disabled={disabled}
        data-value={value}
        className={cn(
          'listbox-option',
          selected && 'listbox-option-selected',
          disabled && 'listbox-option-disabled',
          active && 'listbox-option-active',
          className
        )}
        {...props}
      >
        {selected && (
          <span className="listbox-option-check">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
              <path d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z" />
            </svg>
          </span>
        )}
        {icon && <span className="listbox-option-icon">{icon}</span>}
        <span className="listbox-option-content">
          <span className="listbox-option-label">{children}</span>
          {description && <span className="listbox-option-description">{description}</span>}
        </span>
      </li>
    );
  }
);

ListboxOption.displayName = 'ListboxOption';

export const ListboxGroup = forwardRef<HTMLDivElement, ListboxGroupProps>(
  ({ label, className, children, ...props }, ref) => {
    return (
      <div ref={ref} className={cn('listbox-group', className)} role="group" {...props}>
        <div className="listbox-group-label">{label}</div>
        {children}
      </div>
    );
  }
);

ListboxGroup.displayName = 'ListboxGroup';

export const ListboxDivider = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    return <div ref={ref} className={cn('listbox-divider', className)} role="separator" {...props} />;
  }
);

ListboxDivider.displayName = 'ListboxDivider';

export const ListboxEmpty = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, children = 'No options', ...props }, ref) => {
    return (
      <div ref={ref} className={cn('listbox-empty', className)} {...props}>
        {children}
      </div>
    );
  }
);

ListboxEmpty.displayName = 'ListboxEmpty';
