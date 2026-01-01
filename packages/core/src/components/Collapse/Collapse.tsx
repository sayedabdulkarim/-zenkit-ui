import {
  forwardRef,
  createContext,
  useContext,
  useState,
  type HTMLAttributes,
  type ReactNode,
} from 'react';
import { cn } from '../../utils/cn';

interface CollapseContextValue {
  activeKeys: string[];
  toggleKey: (key: string) => void;
  accordion: boolean;
}

const CollapseContext = createContext<CollapseContextValue | null>(null);

const useCollapseContext = () => {
  const context = useContext(CollapseContext);
  if (!context) {
    throw new Error('Collapse components must be used within a Collapse provider');
  }
  return context;
};

export interface CollapseProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> {
  /** Default active panel keys */
  defaultActiveKey?: string | string[];
  /** Controlled active panel keys */
  activeKey?: string | string[];
  /** Active key change callback */
  onChange?: (keys: string[]) => void;
  /** Accordion mode (only one panel open) */
  accordion?: boolean;
  /** Bordered style */
  bordered?: boolean;
}

export interface CollapsePanelProps extends HTMLAttributes<HTMLDivElement> {
  /** Panel unique key */
  panelKey: string;
  /** Panel header */
  header: ReactNode;
  /** Disabled state */
  disabled?: boolean;
  /** Show arrow icon */
  showArrow?: boolean;
  /** Extra content in header */
  extra?: ReactNode;
}

const normalizeKeys = (keys?: string | string[]): string[] => {
  if (!keys) return [];
  return Array.isArray(keys) ? keys : [keys];
};

export const Collapse = forwardRef<HTMLDivElement, CollapseProps>(
  (
    {
      defaultActiveKey,
      activeKey: controlledActiveKey,
      onChange,
      accordion = false,
      bordered = true,
      className,
      children,
      ...props
    },
    ref
  ) => {
    const [internalActiveKeys, setInternalActiveKeys] = useState<string[]>(
      normalizeKeys(defaultActiveKey)
    );
    const activeKeys = controlledActiveKey !== undefined
      ? normalizeKeys(controlledActiveKey)
      : internalActiveKeys;

    const toggleKey = (key: string) => {
      let newKeys: string[];

      if (accordion) {
        newKeys = activeKeys.includes(key) ? [] : [key];
      } else {
        newKeys = activeKeys.includes(key)
          ? activeKeys.filter((k) => k !== key)
          : [...activeKeys, key];
      }

      if (controlledActiveKey === undefined) {
        setInternalActiveKeys(newKeys);
      }
      onChange?.(newKeys);
    };

    return (
      <CollapseContext.Provider value={{ activeKeys, toggleKey, accordion }}>
        <div
          ref={ref}
          className={cn('collapse-container', bordered && 'collapse-bordered', className)}
          {...props}
        >
          {children}
        </div>
      </CollapseContext.Provider>
    );
  }
);

Collapse.displayName = 'Collapse';

export const CollapsePanel = forwardRef<HTMLDivElement, CollapsePanelProps>(
  (
    {
      panelKey,
      header,
      disabled = false,
      showArrow = true,
      extra,
      className,
      children,
      ...props
    },
    ref
  ) => {
    const { activeKeys, toggleKey } = useCollapseContext();
    const isActive = activeKeys.includes(panelKey);

    const handleToggle = () => {
      if (!disabled) {
        toggleKey(panelKey);
      }
    };

    return (
      <div
        ref={ref}
        className={cn(
          'collapse-panel',
          isActive && 'collapse-panel-active',
          disabled && 'collapse-panel-disabled',
          className
        )}
        {...props}
      >
        <div
          className="collapse-header"
          onClick={handleToggle}
          role="button"
          tabIndex={disabled ? -1 : 0}
          aria-expanded={isActive}
          aria-disabled={disabled}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              handleToggle();
            }
          }}
        >
          {showArrow && (
            <span className={cn('collapse-arrow', isActive && 'collapse-arrow-active')}>
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </span>
          )}
          <span className="collapse-header-text">{header}</span>
          {extra && <span className="collapse-extra">{extra}</span>}
        </div>
        <div
          className={cn('collapse-content', isActive && 'collapse-content-active')}
          aria-hidden={!isActive}
        >
          <div className="collapse-content-box">{children}</div>
        </div>
      </div>
    );
  }
);

CollapsePanel.displayName = 'CollapsePanel';
