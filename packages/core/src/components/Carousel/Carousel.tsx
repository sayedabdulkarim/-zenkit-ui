'use client';

import { forwardRef, useState, useEffect, useRef, type HTMLAttributes } from 'react';
import { cn } from '../../utils/cn';

export interface CarouselProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> {
  /** Autoplay */
  autoplay?: boolean;
  /** Autoplay interval (ms) */
  interval?: number;
  /** Show arrows */
  arrows?: boolean;
  /** Show dots */
  dots?: boolean;
  /** Dots position */
  dotsPosition?: 'bottom' | 'top' | 'left' | 'right';
  /** Loop infinitely */
  loop?: boolean;
  /** Pause on hover */
  pauseOnHover?: boolean;
  /** On slide change */
  onChange?: (index: number) => void;
}

export const Carousel = forwardRef<HTMLDivElement, CarouselProps>(
  (
    {
      autoplay = false,
      interval = 3000,
      arrows = true,
      dots = true,
      dotsPosition = 'bottom',
      loop = true,
      pauseOnHover = true,
      onChange,
      className,
      children,
      ...props
    },
    ref
  ) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const slidesRef = useRef<HTMLDivElement>(null);

    const slides = Array.isArray(children) ? children : [children];
    const totalSlides = slides.length;

    useEffect(() => {
      if (!autoplay || isPaused || totalSlides <= 1) return;

      const timer = setInterval(() => {
        setCurrentIndex((prev) => {
          const next = prev + 1;
          if (next >= totalSlides) {
            return loop ? 0 : prev;
          }
          return next;
        });
      }, interval);

      return () => clearInterval(timer);
    }, [autoplay, interval, isPaused, totalSlides, loop]);

    useEffect(() => {
      onChange?.(currentIndex);
    }, [currentIndex, onChange]);

    const goTo = (index: number) => {
      if (index < 0) {
        setCurrentIndex(loop ? totalSlides - 1 : 0);
      } else if (index >= totalSlides) {
        setCurrentIndex(loop ? 0 : totalSlides - 1);
      } else {
        setCurrentIndex(index);
      }
    };

    const prev = () => goTo(currentIndex - 1);
    const next = () => goTo(currentIndex + 1);

    return (
      <div
        ref={ref}
        className={cn('carousel', `carousel-dots-${dotsPosition}`, className)}
        onMouseEnter={() => pauseOnHover && setIsPaused(true)}
        onMouseLeave={() => pauseOnHover && setIsPaused(false)}
        {...props}
      >
        <div className="carousel-container">
          <div
            ref={slidesRef}
            className="carousel-slides"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {slides.map((slide, index) => (
              <div key={index} className="carousel-slide">
                {slide}
              </div>
            ))}
          </div>
        </div>

        {arrows && totalSlides > 1 && (
          <>
            <button type="button" className="carousel-arrow carousel-arrow-prev" onClick={prev} aria-label="Previous">
              <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none">
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>
            <button type="button" className="carousel-arrow carousel-arrow-next" onClick={next} aria-label="Next">
              <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
          </>
        )}

        {dots && totalSlides > 1 && (
          <div className="carousel-dots">
            {slides.map((_, index) => (
              <button
                key={index}
                type="button"
                className={cn('carousel-dot', index === currentIndex && 'carousel-dot-active')}
                onClick={() => goTo(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    );
  }
);

Carousel.displayName = 'Carousel';

// Carousel Item
export interface CarouselItemProps extends HTMLAttributes<HTMLDivElement> {}

export const CarouselItem = forwardRef<HTMLDivElement, CarouselItemProps>(
  ({ className, children, ...props }, ref) => (
    <div ref={ref} className={cn('carousel-item', className)} {...props}>
      {children}
    </div>
  )
);

CarouselItem.displayName = 'CarouselItem';
