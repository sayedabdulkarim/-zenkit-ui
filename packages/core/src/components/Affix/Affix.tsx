'use client';

import { forwardRef, useState, useEffect, useRef, type HTMLAttributes, type ReactNode } from 'react';
import { cn } from '../../utils/cn';

export interface AffixProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> {
  /** Offset from top when affixed */
  offsetTop?: number;
  /** Offset from bottom when affixed */
  offsetBottom?: number;
  /** Target container for scroll events */
  target?: () => HTMLElement | Window | null;
  /** Callback when affix state changes */
  onChange?: (affixed: boolean) => void;
  /** Children */
  children: ReactNode;
}

export const Affix = forwardRef<HTMLDivElement, AffixProps>(
  (
    {
      offsetTop,
      offsetBottom,
      target,
      onChange,
      className,
      children,
      style,
      ...props
    },
    ref
  ) => {
    const [affixed, setAffixed] = useState(false);
    const [affixStyle, setAffixStyle] = useState<React.CSSProperties>({});
    const [placeholderStyle, setPlaceholderStyle] = useState<React.CSSProperties>({});
    const placeholderRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      const getTarget = () => {
        if (target) {
          return target();
        }
        return window;
      };

      const handleScroll = () => {
        const targetElement = getTarget();
        if (!targetElement || !placeholderRef.current) return;

        const rect = placeholderRef.current.getBoundingClientRect();
        const targetRect = targetElement === window
          ? { top: 0, bottom: window.innerHeight }
          : (targetElement as HTMLElement).getBoundingClientRect();

        let shouldAffix = false;
        let newStyle: React.CSSProperties = {};

        if (offsetTop !== undefined) {
          if (rect.top - targetRect.top < offsetTop) {
            shouldAffix = true;
            newStyle = {
              position: 'fixed',
              top: offsetTop + (targetElement === window ? 0 : targetRect.top),
              width: rect.width,
            };
          }
        } else if (offsetBottom !== undefined) {
          if (targetRect.bottom - rect.bottom < offsetBottom) {
            shouldAffix = true;
            newStyle = {
              position: 'fixed',
              bottom: offsetBottom + (targetElement === window ? 0 : window.innerHeight - targetRect.bottom),
              width: rect.width,
            };
          }
        }

        if (shouldAffix !== affixed) {
          setAffixed(shouldAffix);
          onChange?.(shouldAffix);
        }

        if (shouldAffix) {
          setAffixStyle(newStyle);
          setPlaceholderStyle({
            width: rect.width,
            height: rect.height,
          });
        } else {
          setAffixStyle({});
          setPlaceholderStyle({});
        }
      };

      const targetElement = getTarget();
      if (targetElement) {
        targetElement.addEventListener('scroll', handleScroll);
        targetElement.addEventListener('resize', handleScroll);
        handleScroll();
      }

      return () => {
        if (targetElement) {
          targetElement.removeEventListener('scroll', handleScroll);
          targetElement.removeEventListener('resize', handleScroll);
        }
      };
    }, [offsetTop, offsetBottom, target, affixed, onChange]);

    return (
      <div ref={placeholderRef} style={affixed ? placeholderStyle : undefined}>
        <div
          ref={ref}
          className={cn('affix', affixed && 'affix-fixed', className)}
          style={{ ...style, ...affixStyle }}
          {...props}
        >
          {children}
        </div>
      </div>
    );
  }
);

Affix.displayName = 'Affix';
