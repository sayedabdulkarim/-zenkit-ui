import {
  forwardRef,
  createContext,
  useContext,
  useState,
  type HTMLAttributes,
  type ButtonHTMLAttributes,
  type ReactNode,
} from 'react';
import { cn } from '../../utils/cn';

export type DisclosureSize = 'sm' | 'md' | 'lg';
export type DisclosureVariant = 'default' | 'flush' | 'card';

interface DisclosureContextValue {
  open: boolean;
  toggle: () => void;
}

const DisclosureContext = createContext<DisclosureContextValue | null>(null);

const useDisclosure = () => {
  const context = useContext(DisclosureContext);
  if (!context) {
    throw new Error('Disclosure components must be used within a Disclosure');
  }
  return context;
};

export interface DisclosureProps extends HTMLAttributes<HTMLDivElement> {
  /** Controlled open state */
  open?: boolean;
  /** Default open state (uncontrolled) */
  defaultOpen?: boolean;
  /** Callback when open state changes */
  onOpenChange?: (open: boolean) => void;
  /** Size variant */
  size?: DisclosureSize;
  /** Visual variant */
  variant?: DisclosureVariant;
  /** Disabled state */
  disabled?: boolean;
}

export interface DisclosureButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** Icon to display */
  icon?: ReactNode;
}

export interface DisclosurePanelProps extends HTMLAttributes<HTMLDivElement> {}

export interface DisclosureGroupProps extends HTMLAttributes<HTMLDivElement> {
  /** Whether only one item can be open at a time */
  accordion?: boolean;
  /** Separated items (with gap) */
  separated?: boolean;
}

const sizeClasses: Record<DisclosureSize, string> = {
  sm: 'disclosure-sm',
  md: '',
  lg: 'disclosure-lg',
};

const variantClasses: Record<DisclosureVariant, string> = {
  default: '',
  flush: 'disclosure-flush',
  card: 'disclosure-card',
};

export const Disclosure = forwardRef<HTMLDivElement, DisclosureProps>(
  (
    {
      open: controlledOpen,
      defaultOpen = false,
      onOpenChange,
      size = 'md',
      variant = 'default',
      disabled = false,
      className,
      children,
      ...props
    },
    ref
  ) => {
    const [uncontrolledOpen, setUncontrolledOpen] = useState(defaultOpen);
    const isControlled = controlledOpen !== undefined;
    const isOpen = isControlled ? controlledOpen : uncontrolledOpen;

    const toggle = () => {
      if (disabled) return;
      const newValue = !isOpen;
      if (!isControlled) {
        setUncontrolledOpen(newValue);
      }
      onOpenChange?.(newValue);
    };

    return (
      <DisclosureContext.Provider value={{ open: isOpen, toggle }}>
        <div
          ref={ref}
          className={cn(
            'disclosure',
            sizeClasses[size],
            variantClasses[variant],
            isOpen && 'disclosure-open',
            disabled && 'disclosure-disabled',
            className
          )}
          {...props}
        >
          {children}
        </div>
      </DisclosureContext.Provider>
    );
  }
);

Disclosure.displayName = 'Disclosure';

export const DisclosureButton = forwardRef<HTMLButtonElement, DisclosureButtonProps>(
  ({ icon, className, children, ...props }, ref) => {
    const { open, toggle } = useDisclosure();

    const defaultIcon = (
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="disclosure-button-icon"
      >
        <path
          fillRule="evenodd"
          d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
          clipRule="evenodd"
        />
      </svg>
    );

    return (
      <button
        ref={ref}
        type="button"
        className={cn('disclosure-button', className)}
        onClick={toggle}
        aria-expanded={open}
        {...props}
      >
        <span>{children}</span>
        {icon !== undefined ? icon : defaultIcon}
      </button>
    );
  }
);

DisclosureButton.displayName = 'DisclosureButton';

export const DisclosurePanel = forwardRef<HTMLDivElement, DisclosurePanelProps>(
  ({ className, children, ...props }, ref) => {
    const { open } = useDisclosure();

    if (!open) return null;

    return (
      <div ref={ref} className={cn('disclosure-panel', className)} {...props}>
        {children}
      </div>
    );
  }
);

DisclosurePanel.displayName = 'DisclosurePanel';

export const DisclosureGroup = forwardRef<HTMLDivElement, DisclosureGroupProps>(
  ({ accordion = false, separated = false, className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          separated ? 'disclosure-group-separated' : 'disclosure-group',
          className
        )}
        data-accordion={accordion || undefined}
        {...props}
      >
        {children}
      </div>
    );
  }
);

DisclosureGroup.displayName = 'DisclosureGroup';
