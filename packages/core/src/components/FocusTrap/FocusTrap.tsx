'use client';

import React, { forwardRef, useEffect, useRef, useCallback } from 'react';

export interface FocusTrapProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Whether the focus trap is active */
  active?: boolean;
  /** Whether to focus the first element on mount */
  autoFocus?: boolean;
  /** Whether to return focus on unmount */
  returnFocus?: boolean;
  /** Called when escape is pressed */
  onEscape?: () => void;
  /** Initial focus element selector or ref */
  initialFocus?: string | React.RefObject<HTMLElement>;
  /** Final focus element (for return focus) */
  finalFocus?: React.RefObject<HTMLElement>;
}

const FOCUSABLE_SELECTORS = [
  'a[href]',
  'button:not([disabled])',
  'input:not([disabled])',
  'select:not([disabled])',
  'textarea:not([disabled])',
  '[tabindex]:not([tabindex="-1"])',
].join(', ');

export const FocusTrap = forwardRef<HTMLDivElement, FocusTrapProps>(
  (
    {
      children,
      active = true,
      autoFocus = true,
      returnFocus = true,
      onEscape,
      initialFocus,
      finalFocus,
      ...props
    },
    ref
  ) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const previouslyFocused = useRef<HTMLElement | null>(null);

    const getFocusableElements = useCallback(() => {
      if (!containerRef.current) return [];
      return Array.from(
        containerRef.current.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTORS)
      ).filter((el) => el.offsetParent !== null);
    }, []);

    const focusFirst = useCallback(() => {
      if (initialFocus) {
        if (typeof initialFocus === 'string') {
          const element = containerRef.current?.querySelector<HTMLElement>(initialFocus);
          element?.focus();
          return;
        }
        initialFocus.current?.focus();
        return;
      }

      const focusable = getFocusableElements();
      focusable[0]?.focus();
    }, [initialFocus, getFocusableElements]);

    const handleKeyDown = useCallback(
      (event: KeyboardEvent) => {
        if (!active) return;

        if (event.key === 'Escape') {
          onEscape?.();
          return;
        }

        if (event.key !== 'Tab') return;

        const focusable = getFocusableElements();
        if (focusable.length === 0) return;

        const firstElement = focusable[0];
        const lastElement = focusable[focusable.length - 1];

        if (event.shiftKey) {
          if (document.activeElement === firstElement) {
            event.preventDefault();
            lastElement.focus();
          }
        } else {
          if (document.activeElement === lastElement) {
            event.preventDefault();
            firstElement.focus();
          }
        }
      },
      [active, getFocusableElements, onEscape]
    );

    useEffect(() => {
      if (!active) return;

      previouslyFocused.current = document.activeElement as HTMLElement;

      if (autoFocus) {
        // Delay to ensure content is rendered
        requestAnimationFrame(() => {
          focusFirst();
        });
      }

      document.addEventListener('keydown', handleKeyDown);

      return () => {
        document.removeEventListener('keydown', handleKeyDown);

        if (returnFocus) {
          const focusTarget = finalFocus?.current || previouslyFocused.current;
          focusTarget?.focus();
        }
      };
    }, [active, autoFocus, returnFocus, focusFirst, handleKeyDown, finalFocus]);

    return (
      <div
        ref={(node) => {
          (containerRef as React.MutableRefObject<HTMLDivElement | null>).current = node;
          if (typeof ref === 'function') {
            ref(node);
          } else if (ref) {
            ref.current = node;
          }
        }}
        {...props}
      >
        {children}
      </div>
    );
  }
);

FocusTrap.displayName = 'FocusTrap';
