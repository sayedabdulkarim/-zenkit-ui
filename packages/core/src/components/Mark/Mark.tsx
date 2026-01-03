import { forwardRef, type HTMLAttributes } from 'react';
import { cn } from '../../utils/cn';

export type MarkColor =
  | 'yellow'
  | 'blue'
  | 'cyan'
  | 'green'
  | 'lime'
  | 'orange'
  | 'pink'
  | 'red'
  | 'grape'
  | 'violet'
  | 'indigo'
  | 'teal'
  | 'dark'
  | 'light';

export interface MarkProps extends HTMLAttributes<HTMLElement> {
  /** Highlight color */
  color?: MarkColor;
}

const colorClasses: Record<MarkColor, string> = {
  yellow: 'mark-yellow',
  blue: 'mark-blue',
  cyan: 'mark-cyan',
  green: 'mark-green',
  lime: 'mark-lime',
  orange: 'mark-orange',
  pink: 'mark-pink',
  red: 'mark-red',
  grape: 'mark-grape',
  violet: 'mark-violet',
  indigo: 'mark-indigo',
  teal: 'mark-teal',
  dark: 'mark-dark',
  light: 'mark-light',
};

export const Mark = forwardRef<HTMLElement, MarkProps>(
  ({ color, className, children, ...props }, ref) => {
    return (
      <mark
        ref={ref}
        className={cn('mark', color && colorClasses[color], className)}
        {...props}
      >
        {children}
      </mark>
    );
  }
);

Mark.displayName = 'Mark';
