import { forwardRef, useState, useEffect, type HTMLAttributes, type ReactNode } from 'react';
import { cn } from '../../utils/cn';

export interface BackTopProps extends HTMLAttributes<HTMLDivElement> {
  /** Scroll target (defaults to window) */
  target?: () => HTMLElement | Window;
  /** Visibility threshold (px from top) */
  visibilityHeight?: number;
  /** Duration of scroll animation (ms) */
  duration?: number;
  /** Custom content */
  children?: ReactNode;
  /** Click callback */
  onClick?: () => void;
}

const defaultIcon = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20">
    <path d="M12 19V5M5 12l7-7 7 7" />
  </svg>
);

export const BackTop = forwardRef<HTMLDivElement, BackTopProps>(
  (
    {
      target,
      visibilityHeight = 400,
      duration = 450,
      onClick,
      className,
      children,
      ...props
    },
    ref
  ) => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
      const scrollTarget = target ? target() : window;

      const handleScroll = () => {
        const scrollTop =
          scrollTarget === window
            ? window.pageYOffset || document.documentElement.scrollTop
            : (scrollTarget as HTMLElement).scrollTop;

        setVisible(scrollTop > visibilityHeight);
      };

      scrollTarget.addEventListener('scroll', handleScroll);
      handleScroll(); // Check initial state

      return () => {
        scrollTarget.removeEventListener('scroll', handleScroll);
      };
    }, [target, visibilityHeight]);

    const scrollToTop = () => {
      const scrollTarget = target ? target() : window;
      const startTime = performance.now();
      const scrollTop =
        scrollTarget === window
          ? window.pageYOffset || document.documentElement.scrollTop
          : (scrollTarget as HTMLElement).scrollTop;

      const animateScroll = (currentTime: number) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const easeProgress = 1 - Math.pow(1 - progress, 3); // Ease out cubic

        const newScrollTop = scrollTop * (1 - easeProgress);

        if (scrollTarget === window) {
          window.scrollTo(0, newScrollTop);
        } else {
          (scrollTarget as HTMLElement).scrollTop = newScrollTop;
        }

        if (progress < 1) {
          requestAnimationFrame(animateScroll);
        }
      };

      requestAnimationFrame(animateScroll);
      onClick?.();
    };

    if (!visible) return null;

    return (
      <div
        ref={ref}
        className={cn('back-top', className)}
        onClick={scrollToTop}
        role="button"
        tabIndex={0}
        aria-label="Back to top"
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            scrollToTop();
          }
        }}
        {...props}
      >
        {children || <div className="back-top-content">{defaultIcon}</div>}
      </div>
    );
  }
);

BackTop.displayName = 'BackTop';
