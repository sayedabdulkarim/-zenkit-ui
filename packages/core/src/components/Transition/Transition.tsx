'use client';

import { forwardRef, useState, useEffect, type HTMLAttributes, type ReactNode } from 'react';
import { cn } from '../../utils/cn';

export type TransitionType =
  | 'fade'
  | 'slide-up'
  | 'slide-down'
  | 'slide-left'
  | 'slide-right'
  | 'scale'
  | 'scale-y'
  | 'scale-x'
  | 'rotate'
  | 'flip'
  | 'collapse';

export interface TransitionProps extends Omit<HTMLAttributes<HTMLDivElement>, 'children'> {
  /** Whether to show the element */
  show: boolean;
  /** Transition type */
  type?: TransitionType;
  /** Duration in milliseconds */
  duration?: number;
  /** Delay in milliseconds */
  delay?: number;
  /** Timing function */
  timing?: 'linear' | 'ease' | 'ease-in' | 'ease-out' | 'ease-in-out';
  /** Whether to unmount when hidden */
  unmountOnExit?: boolean;
  /** Enter callback */
  onEnter?: () => void;
  /** Entered callback */
  onEntered?: () => void;
  /** Exit callback */
  onExit?: () => void;
  /** Exited callback */
  onExited?: () => void;
  /** Children */
  children: ReactNode;
}

export const Transition = forwardRef<HTMLDivElement, TransitionProps>(
  (
    {
      show,
      type = 'fade',
      duration = 200,
      delay = 0,
      timing = 'ease',
      unmountOnExit = false,
      onEnter,
      onEntered,
      onExit,
      onExited,
      className,
      children,
      style,
      ...props
    },
    ref
  ) => {
    const [mounted, setMounted] = useState(show);
    const [state, setState] = useState<'entering' | 'entered' | 'exiting' | 'exited'>(
      show ? 'entered' : 'exited'
    );

    useEffect(() => {
      if (show) {
        setMounted(true);
        setState('entering');
        onEnter?.();

        const timer = setTimeout(() => {
          setState('entered');
          onEntered?.();
        }, duration + delay);

        return () => clearTimeout(timer);
      } else {
        setState('exiting');
        onExit?.();

        const timer = setTimeout(() => {
          setState('exited');
          onExited?.();
          if (unmountOnExit) {
            setMounted(false);
          }
        }, duration + delay);

        return () => clearTimeout(timer);
      }
    }, [show, duration, delay, unmountOnExit, onEnter, onEntered, onExit, onExited]);

    if (!mounted) {
      return null;
    }

    return (
      <div
        ref={ref}
        className={cn(
          'transition',
          `transition-${type}`,
          `transition-${state}`,
          className
        )}
        style={{
          transitionDuration: `${duration}ms`,
          transitionDelay: `${delay}ms`,
          transitionTimingFunction: timing,
          ...style,
        }}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Transition.displayName = 'Transition';
