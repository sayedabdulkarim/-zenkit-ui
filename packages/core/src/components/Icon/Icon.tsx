import { forwardRef, type SVGAttributes } from 'react';
import { cn } from '../../utils/cn';

type IconSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  /** Icon size */
  size?: IconSize;
  /** Icon color */
  color?: string;
  /** Spin animation */
  spin?: boolean;
  /** Icon name (for icon fonts) */
  name?: string;
}

const sizeMap: Record<IconSize, number> = {
  xs: 12,
  sm: 16,
  md: 20,
  lg: 24,
  xl: 32,
};

export const Icon = forwardRef<SVGSVGElement, IconProps>(
  (
    {
      size = 'md',
      color = 'currentColor',
      spin = false,
      name,
      className,
      children,
      ...props
    },
    ref
  ) => {
    const dimension = sizeMap[size];

    return (
      <svg
        ref={ref}
        className={cn(
          'icon',
          spin && 'icon-spin',
          className
        )}
        width={dimension}
        height={dimension}
        viewBox="0 0 24 24"
        fill="none"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
        data-icon={name}
        {...props}
      >
        {children}
      </svg>
    );
  }
);

Icon.displayName = 'Icon';

// Common icons
export const Icons = {
  Check: () => <path d="M20 6L9 17l-5-5" />,
  X: () => <><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></>,
  ChevronDown: () => <polyline points="6 9 12 15 18 9" />,
  ChevronUp: () => <polyline points="18 15 12 9 6 15" />,
  ChevronLeft: () => <polyline points="15 18 9 12 15 6" />,
  ChevronRight: () => <polyline points="9 18 15 12 9 6" />,
  Search: () => <><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></>,
  Menu: () => <><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="18" x2="21" y2="18" /></>,
  Plus: () => <><line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" /></>,
  Minus: () => <line x1="5" y1="12" x2="19" y2="12" />,
  Info: () => <><circle cx="12" cy="12" r="10" /><line x1="12" y1="16" x2="12" y2="12" /><line x1="12" y1="8" x2="12.01" y2="8" /></>,
  Warning: () => <><path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" /><line x1="12" y1="9" x2="12" y2="13" /><line x1="12" y1="17" x2="12.01" y2="17" /></>,
  Error: () => <><circle cx="12" cy="12" r="10" /><line x1="15" y1="9" x2="9" y2="15" /><line x1="9" y1="9" x2="15" y2="15" /></>,
  Success: () => <><path d="M22 11.08V12a10 10 0 11-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></>,
  Loading: () => <><line x1="12" y1="2" x2="12" y2="6" /><line x1="12" y1="18" x2="12" y2="22" /><line x1="4.93" y1="4.93" x2="7.76" y2="7.76" /><line x1="16.24" y1="16.24" x2="19.07" y2="19.07" /><line x1="2" y1="12" x2="6" y2="12" /><line x1="18" y1="12" x2="22" y2="12" /><line x1="4.93" y1="19.07" x2="7.76" y2="16.24" /><line x1="16.24" y1="7.76" x2="19.07" y2="4.93" /></>,
};
