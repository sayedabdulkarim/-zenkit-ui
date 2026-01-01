'use client';

import { forwardRef, useState, useEffect, type HTMLAttributes, type ReactNode } from 'react';
import { cn } from '../../utils/cn';

export interface TourStep {
  /** Target element selector or ref */
  target: string | HTMLElement | null;
  /** Step title */
  title: ReactNode;
  /** Step description */
  description?: ReactNode;
  /** Placement */
  placement?: 'top' | 'bottom' | 'left' | 'right';
  /** Cover image */
  cover?: ReactNode;
  /** Custom arrow style */
  arrow?: boolean;
}

export interface TourProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> {
  /** Tour steps */
  steps: TourStep[];
  /** Open state */
  open?: boolean;
  /** On open change */
  onOpenChange?: (open: boolean) => void;
  /** Current step index */
  current?: number;
  /** On step change */
  onChange?: (current: number) => void;
  /** On finish callback */
  onFinish?: () => void;
  /** Show mask */
  mask?: boolean;
  /** Arrow visibility */
  arrow?: boolean;
  /** Next button text */
  nextText?: string;
  /** Previous button text */
  prevText?: string;
  /** Finish button text */
  finishText?: string;
  /** Skip button text */
  skipText?: string;
  /** Show skip button */
  showSkip?: boolean;
}

export const Tour = forwardRef<HTMLDivElement, TourProps>(
  (
    {
      steps,
      open = false,
      onOpenChange,
      current: controlledCurrent,
      onChange,
      onFinish,
      mask = true,
      arrow = true,
      nextText = 'Next',
      prevText = 'Previous',
      finishText = 'Finish',
      skipText = 'Skip',
      showSkip = true,
      className,
      ...props
    },
    ref
  ) => {
    const [current, setCurrent] = useState(controlledCurrent ?? 0);
    const [position, setPosition] = useState({ top: 0, left: 0 });
    const [targetRect, setTargetRect] = useState<DOMRect | null>(null);

    const currentStep = steps[current];
    const isFirst = current === 0;
    const isLast = current === steps.length - 1;

    useEffect(() => {
      if (controlledCurrent !== undefined) {
        setCurrent(controlledCurrent);
      }
    }, [controlledCurrent]);

    useEffect(() => {
      if (!open || !currentStep) return;

      const getTarget = () => {
        if (typeof currentStep.target === 'string') {
          return document.querySelector(currentStep.target);
        }
        return currentStep.target;
      };

      const target = getTarget();
      if (target) {
        const rect = target.getBoundingClientRect();
        setTargetRect(rect);

        const placement = currentStep.placement || 'bottom';
        let top = rect.bottom + 10;
        let left = rect.left + rect.width / 2;

        if (placement === 'top') {
          top = rect.top - 10;
        } else if (placement === 'left') {
          top = rect.top + rect.height / 2;
          left = rect.left - 10;
        } else if (placement === 'right') {
          top = rect.top + rect.height / 2;
          left = rect.right + 10;
        }

        setPosition({ top, left });
      }
    }, [open, current, currentStep]);

    const handleNext = () => {
      if (isLast) {
        onFinish?.();
        onOpenChange?.(false);
      } else {
        const next = current + 1;
        setCurrent(next);
        onChange?.(next);
      }
    };

    const handlePrev = () => {
      const prev = current - 1;
      setCurrent(prev);
      onChange?.(prev);
    };

    const handleSkip = () => {
      onOpenChange?.(false);
    };

    if (!open) return null;

    return (
      <>
        {mask && targetRect && (
          <div className="tour-mask">
            <div
              className="tour-mask-spotlight"
              style={{
                top: targetRect.top - 4,
                left: targetRect.left - 4,
                width: targetRect.width + 8,
                height: targetRect.height + 8,
              }}
            />
          </div>
        )}
        <div
          ref={ref}
          className={cn(
            'tour',
            `tour-${currentStep?.placement || 'bottom'}`,
            className
          )}
          style={{ top: position.top, left: position.left }}
          {...props}
        >
          {arrow && <div className="tour-arrow" />}
          <div className="tour-content">
            {currentStep?.cover && <div className="tour-cover">{currentStep.cover}</div>}
            <div className="tour-header">
              <div className="tour-title">{currentStep?.title}</div>
            </div>
            {currentStep?.description && (
              <div className="tour-description">{currentStep.description}</div>
            )}
            <div className="tour-footer">
              <div className="tour-indicators">
                {steps.map((_, i) => (
                  <span
                    key={i}
                    className={cn('tour-indicator', i === current && 'tour-indicator-active')}
                  />
                ))}
              </div>
              <div className="tour-buttons">
                {showSkip && !isLast && (
                  <button type="button" className="tour-btn tour-btn-skip" onClick={handleSkip}>
                    {skipText}
                  </button>
                )}
                {!isFirst && (
                  <button type="button" className="tour-btn tour-btn-prev" onClick={handlePrev}>
                    {prevText}
                  </button>
                )}
                <button type="button" className="tour-btn tour-btn-next" onClick={handleNext}>
                  {isLast ? finishText : nextText}
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
);

Tour.displayName = 'Tour';
