import { useEffect, useCallback } from 'react';

export type KeyboardKey =
  | 'Escape'
  | 'Enter'
  | 'Space'
  | 'Tab'
  | 'ArrowUp'
  | 'ArrowDown'
  | 'ArrowLeft'
  | 'ArrowRight'
  | 'Home'
  | 'End'
  | 'PageUp'
  | 'PageDown';

export interface UseKeyboardOptions {
  key: KeyboardKey | KeyboardKey[];
  handler: (event: KeyboardEvent) => void;
  enabled?: boolean;
  preventDefault?: boolean;
}

export function useKeyboard(options: UseKeyboardOptions): void {
  const { key, handler, enabled = true, preventDefault = false } = options;

  const keys = Array.isArray(key) ? key : [key];

  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (!enabled) return;

      if (keys.includes(event.key as KeyboardKey)) {
        if (preventDefault) {
          event.preventDefault();
        }
        handler(event);
      }
    },
    [keys, handler, enabled, preventDefault]
  );

  useEffect(() => {
    if (!enabled) return;

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown, enabled]);
}

export function useEscapeKey(
  handler: () => void,
  enabled: boolean = true
): void {
  useKeyboard({ key: 'Escape', handler, enabled });
}
