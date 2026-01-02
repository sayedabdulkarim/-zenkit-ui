'use client';

import { forwardRef, useState, useRef, useEffect, type HTMLAttributes, type ReactNode, type CSSProperties } from 'react';
import { cn } from '../../utils/cn';

export interface LazyLoadProps extends HTMLAttributes<HTMLDivElement> {
  /** Children to lazy load */
  children: ReactNode;
  /** Placeholder content while loading */
  placeholder?: ReactNode;
  /** Height of the placeholder */
  height?: number | string;
  /** Width of the placeholder */
  width?: number | string;
  /** Offset from viewport to trigger load */
  offset?: number | string;
  /** Root margin for intersection observer */
  rootMargin?: string;
  /** Threshold for intersection observer */
  threshold?: number | number[];
  /** Once loaded, keep rendered */
  once?: boolean;
  /** Callback when element becomes visible */
  onVisible?: () => void;
  /** Callback when element is hidden */
  onHidden?: () => void;
  /** Animation when appearing */
  animation?: 'fade' | 'slide' | 'zoom' | 'none';
  /** Animation duration */
  animationDuration?: number;
  /** Disabled lazy loading */
  disabled?: boolean;
  /** Use skeleton placeholder */
  skeleton?: boolean;
  /** Skeleton animation */
  skeletonAnimation?: 'pulse' | 'wave' | 'none';
}

export const LazyLoad = forwardRef<HTMLDivElement, LazyLoadProps>(
  (
    {
      className,
      children,
      placeholder,
      height,
      width,
      offset = 0,
      rootMargin,
      threshold = 0,
      once = true,
      onVisible,
      onHidden,
      animation = 'fade',
      animationDuration = 300,
      disabled = false,
      skeleton = false,
      skeletonAnimation = 'pulse',
      style,
      ...props
    },
    ref
  ) => {
    const [isVisible, setIsVisible] = useState(disabled);
    const [hasLoaded, setHasLoaded] = useState(disabled);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      if (disabled) {
        setIsVisible(true);
        setHasLoaded(true);
        return;
      }

      const element = containerRef.current;
      if (!element) return;

      // Calculate root margin
      const margin = rootMargin || (typeof offset === 'number' ? `${offset}px` : offset);

      const observer = new IntersectionObserver(
        ([entry]) => {
          const visible = entry.isIntersecting;

          if (visible) {
            setIsVisible(true);
            setHasLoaded(true);
            onVisible?.();

            if (once) {
              observer.disconnect();
            }
          } else if (!once && hasLoaded) {
            setIsVisible(false);
            onHidden?.();
          }
        },
        {
          rootMargin: margin,
          threshold,
        }
      );

      observer.observe(element);

      return () => observer.disconnect();
    }, [disabled, offset, rootMargin, threshold, once, hasLoaded, onVisible, onHidden]);

    // Set ref
    useEffect(() => {
      if (typeof ref === 'function') {
        ref(containerRef.current);
      } else if (ref) {
        ref.current = containerRef.current;
      }
    }, [ref]);

    const animationStyles: CSSProperties = {
      transition: animation !== 'none' ? `opacity ${animationDuration}ms ease, transform ${animationDuration}ms ease` : undefined,
      opacity: isVisible ? 1 : 0,
      transform: isVisible
        ? 'none'
        : animation === 'slide'
        ? 'translateY(20px)'
        : animation === 'zoom'
        ? 'scale(0.95)'
        : undefined,
    };

    const placeholderStyles: CSSProperties = {
      height,
      width,
      minHeight: height,
      minWidth: width,
    };

    const defaultPlaceholder = skeleton ? (
      <div
        className={cn(
          'zk-lazy-load__skeleton',
          skeletonAnimation === 'pulse' && 'zk-lazy-load__skeleton--pulse',
          skeletonAnimation === 'wave' && 'zk-lazy-load__skeleton--wave'
        )}
        style={placeholderStyles}
      />
    ) : (
      <div className="zk-lazy-load__placeholder" style={placeholderStyles} />
    );

    return (
      <div
        ref={containerRef}
        className={cn(
          'zk-lazy-load',
          isVisible && 'zk-lazy-load--visible',
          hasLoaded && 'zk-lazy-load--loaded',
          className
        )}
        style={{
          ...style,
          ...(hasLoaded ? {} : placeholderStyles),
        }}
        {...props}
      >
        {hasLoaded ? (
          <div style={animation !== 'none' ? animationStyles : undefined}>
            {children}
          </div>
        ) : (
          placeholder || defaultPlaceholder
        )}
      </div>
    );
  }
);

LazyLoad.displayName = 'LazyLoad';

// Lazy Image component
export interface LazyImageProps extends Omit<React.ImgHTMLAttributes<HTMLImageElement>, 'onLoad' | 'onError'> {
  /** Placeholder image src */
  placeholderSrc?: string;
  /** Blur placeholder data URL */
  blurDataURL?: string;
  /** On load callback */
  onLoad?: () => void;
  /** On error callback */
  onError?: () => void;
  /** Offset from viewport */
  offset?: number | string;
  /** Animation style */
  animation?: 'fade' | 'blur' | 'none';
  /** Animation duration */
  animationDuration?: number;
}

export const LazyImage = forwardRef<HTMLImageElement, LazyImageProps>(
  (
    {
      className,
      src,
      alt,
      placeholderSrc,
      blurDataURL,
      onLoad,
      onError,
      offset = 100,
      animation = 'fade',
      animationDuration = 300,
      style,
      ...props
    },
    ref
  ) => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const [hasError, setHasError] = useState(false);
    const imgRef = useRef<HTMLImageElement>(null);

    useEffect(() => {
      const element = imgRef.current;
      if (!element) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
          }
        },
        {
          rootMargin: typeof offset === 'number' ? `${offset}px` : offset,
        }
      );

      observer.observe(element);

      return () => observer.disconnect();
    }, [offset]);

    const handleLoad = () => {
      setIsLoaded(true);
      onLoad?.();
    };

    const handleError = () => {
      setHasError(true);
      onError?.();
    };

    // Set ref
    useEffect(() => {
      if (typeof ref === 'function') {
        ref(imgRef.current);
      } else if (ref) {
        ref.current = imgRef.current;
      }
    }, [ref]);

    const imageStyles: CSSProperties = {
      ...style,
      transition: animation !== 'none' ? `opacity ${animationDuration}ms ease, filter ${animationDuration}ms ease` : undefined,
      opacity: isLoaded ? 1 : animation === 'fade' ? 0 : 1,
      filter: !isLoaded && animation === 'blur' && blurDataURL ? 'blur(10px)' : 'none',
    };

    return (
      <img
        ref={imgRef}
        className={cn(
          'zk-lazy-image',
          isLoaded && 'zk-lazy-image--loaded',
          hasError && 'zk-lazy-image--error',
          className
        )}
        src={isVisible ? (hasError && placeholderSrc ? placeholderSrc : src) : (blurDataURL || placeholderSrc || '')}
        alt={alt}
        onLoad={handleLoad}
        onError={handleError}
        style={imageStyles}
        {...props}
      />
    );
  }
);

LazyImage.displayName = 'LazyImage';
