import { forwardRef, type HTMLAttributes } from 'react';
import { cn } from '../../utils/cn';

export interface KbdProps extends HTMLAttributes<HTMLElement> {
  /** Key combination (array for multiple keys) */
  keys?: string | string[];
  /** Size */
  size?: 'sm' | 'md' | 'lg';
}

const KEY_MAP: Record<string, string> = {
  command: '⌘',
  cmd: '⌘',
  ctrl: 'Ctrl',
  control: 'Ctrl',
  alt: 'Alt',
  option: '⌥',
  opt: '⌥',
  shift: '⇧',
  enter: '↵',
  return: '↵',
  backspace: '⌫',
  delete: '⌦',
  escape: 'Esc',
  esc: 'Esc',
  tab: '⇥',
  space: 'Space',
  up: '↑',
  down: '↓',
  left: '←',
  right: '→',
  pageup: 'PgUp',
  pagedown: 'PgDn',
  home: 'Home',
  end: 'End',
};

const formatKey = (key: string): string => {
  const lower = key.toLowerCase();
  return KEY_MAP[lower] || key.toUpperCase();
};

export const Kbd = forwardRef<HTMLElement, KbdProps>(
  ({ keys, size = 'md', className, children, ...props }, ref) => {
    if (children) {
      return (
        <kbd ref={ref} className={cn('kbd', `kbd-${size}`, className)} {...props}>
          {children}
        </kbd>
      );
    }

    if (!keys) return null;

    const keyArray = Array.isArray(keys) ? keys : [keys];

    return (
      <span className={cn('kbd-group', className)}>
        {keyArray.map((key, index) => (
          <span key={index}>
            <kbd ref={index === 0 ? ref : undefined} className={cn('kbd', `kbd-${size}`)} {...props}>
              {formatKey(key)}
            </kbd>
            {index < keyArray.length - 1 && <span className="kbd-separator">+</span>}
          </span>
        ))}
      </span>
    );
  }
);

Kbd.displayName = 'Kbd';
