import {
  forwardRef,
  createContext,
  useContext,
  useState,
  type HTMLAttributes,
  type ReactNode,
  type ButtonHTMLAttributes,
} from 'react';
import { cn } from '../../utils/cn';

type TabsVariant = 'default' | 'pills' | 'underline';

interface TabsContextValue {
  activeKey: string;
  setActiveKey: (key: string) => void;
  variant: TabsVariant;
}

const TabsContext = createContext<TabsContextValue | null>(null);

const useTabsContext = () => {
  const context = useContext(TabsContext);
  if (!context) {
    throw new Error('Tabs components must be used within a Tabs provider');
  }
  return context;
};

export interface TabsProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> {
  /** Default active tab key */
  defaultActiveKey?: string;
  /** Controlled active tab key */
  activeKey?: string;
  /** Tab change callback */
  onChange?: (key: string) => void;
  /** Tabs variant */
  variant?: TabsVariant;
  /** Full width tabs */
  fullWidth?: boolean;
}

export interface TabListProps extends HTMLAttributes<HTMLDivElement> {}

export interface TabProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** Tab key identifier */
  tabKey: string;
  /** Disabled state */
  disabled?: boolean;
  /** Tab icon */
  icon?: ReactNode;
}

export interface TabPanelProps extends HTMLAttributes<HTMLDivElement> {
  /** Panel key matching tab key */
  tabKey: string;
}

export const Tabs = forwardRef<HTMLDivElement, TabsProps>(
  (
    {
      defaultActiveKey = '',
      activeKey: controlledActiveKey,
      onChange,
      variant = 'default',
      fullWidth = false,
      className,
      children,
      ...props
    },
    ref
  ) => {
    const [internalActiveKey, setInternalActiveKey] = useState(defaultActiveKey);
    const activeKey = controlledActiveKey ?? internalActiveKey;

    const setActiveKey = (key: string) => {
      if (controlledActiveKey === undefined) {
        setInternalActiveKey(key);
      }
      onChange?.(key);
    };

    return (
      <TabsContext.Provider value={{ activeKey, setActiveKey, variant }}>
        <div
          ref={ref}
          className={cn('tabs', fullWidth && 'tabs-full-width', className)}
          {...props}
        >
          {children}
        </div>
      </TabsContext.Provider>
    );
  }
);

Tabs.displayName = 'Tabs';

export const TabList = forwardRef<HTMLDivElement, TabListProps>(
  ({ className, children, ...props }, ref) => {
    const { variant } = useTabsContext();

    return (
      <div
        ref={ref}
        role="tablist"
        className={cn(
          'nav',
          variant === 'pills' && 'nav-pills',
          variant === 'underline' && 'nav-underline',
          variant === 'default' && 'nav-tabs',
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

TabList.displayName = 'TabList';

export const Tab = forwardRef<HTMLButtonElement, TabProps>(
  ({ tabKey, disabled = false, icon, className, children, ...props }, ref) => {
    const { activeKey, setActiveKey } = useTabsContext();
    const isActive = activeKey === tabKey;

    return (
      <button
        ref={ref}
        type="button"
        role="tab"
        aria-selected={isActive}
        aria-disabled={disabled}
        disabled={disabled}
        className={cn('nav-link', isActive && 'active', disabled && 'disabled', className)}
        onClick={() => !disabled && setActiveKey(tabKey)}
        {...props}
      >
        {icon && <span className="nav-link-icon">{icon}</span>}
        {children}
      </button>
    );
  }
);

Tab.displayName = 'Tab';

export const TabPanel = forwardRef<HTMLDivElement, TabPanelProps>(
  ({ tabKey, className, children, ...props }, ref) => {
    const { activeKey } = useTabsContext();
    const isActive = activeKey === tabKey;

    if (!isActive) return null;

    return (
      <div
        ref={ref}
        role="tabpanel"
        className={cn('tab-pane', isActive && 'active', className)}
        {...props}
      >
        {children}
      </div>
    );
  }
);

TabPanel.displayName = 'TabPanel';
