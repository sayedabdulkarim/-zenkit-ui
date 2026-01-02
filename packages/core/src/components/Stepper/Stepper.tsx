'use client';

import React, { forwardRef, createContext, useContext, useCallback } from 'react';
import { cn } from '../../utils/cn';

export interface StepperContextValue {
  activeStep: number;
  orientation: 'horizontal' | 'vertical';
  size: 'sm' | 'md' | 'lg';
  color: 'primary' | 'secondary' | 'success';
}

const StepperContext = createContext<StepperContextValue | null>(null);

export const useStepper = () => {
  const context = useContext(StepperContext);
  if (!context) {
    throw new Error('useStepper must be used within a Stepper');
  }
  return context;
};

export interface StepperProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  /** Current active step (0-indexed) */
  activeStep?: number;
  /** Called when step changes */
  onStepChange?: (step: number) => void;
  /** Orientation of the stepper */
  orientation?: 'horizontal' | 'vertical';
  /** Size variant */
  size?: 'sm' | 'md' | 'lg';
  /** Color variant */
  color?: 'primary' | 'secondary' | 'success';
  /** Whether to allow clicking on steps */
  allowStepClick?: boolean;
  /** Whether to show step numbers */
  showStepNumbers?: boolean;
  /** Icon for completed steps */
  completedIcon?: React.ReactNode;
}

export const Stepper = forwardRef<HTMLDivElement, StepperProps>(
  (
    {
      className,
      activeStep = 0,
      onStepChange,
      orientation = 'horizontal',
      size = 'md',
      color = 'primary',
      allowStepClick = true,
      showStepNumbers = true,
      completedIcon = '✓',
      children,
      ...props
    },
    ref
  ) => {
    const steps = React.Children.toArray(children);

    const handleStepClick = useCallback(
      (index: number) => {
        if (allowStepClick) {
          onStepChange?.(index);
        }
      },
      [allowStepClick, onStepChange]
    );

    const contextValue: StepperContextValue = {
      activeStep,
      orientation,
      size,
      color,
    };

    return (
      <StepperContext.Provider value={contextValue}>
        <div
          ref={ref}
          className={cn(
            'zk-stepper',
            `zk-stepper--${orientation}`,
            `zk-stepper--${size}`,
            `zk-stepper--${color}`,
            className
          )}
          role="navigation"
          aria-label="Progress"
          {...props}
        >
          {steps.map((step, index) => {
            const isCompleted = index < activeStep;
            const isActive = index === activeStep;

            return (
              <React.Fragment key={index}>
                <div
                  className={cn(
                    'zk-stepper__step',
                    isCompleted && 'zk-stepper__step--completed',
                    isActive && 'zk-stepper__step--active',
                    allowStepClick && 'zk-stepper__step--clickable'
                  )}
                  onClick={() => handleStepClick(index)}
                  role={allowStepClick ? 'button' : undefined}
                  tabIndex={allowStepClick ? 0 : undefined}
                  aria-current={isActive ? 'step' : undefined}
                >
                  <div className="zk-stepper__indicator">
                    {isCompleted ? completedIcon : showStepNumbers ? index + 1 : null}
                  </div>
                  <div className="zk-stepper__content">{step}</div>
                </div>
                {index < steps.length - 1 && (
                  <div
                    className={cn(
                      'zk-stepper__separator',
                      index < activeStep && 'zk-stepper__separator--completed'
                    )}
                  />
                )}
              </React.Fragment>
            );
          })}
        </div>
      </StepperContext.Provider>
    );
  }
);

Stepper.displayName = 'Stepper';

// Step component
export interface StepperStepProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Step label */
  label?: React.ReactNode;
  /** Step description */
  description?: React.ReactNode;
  /** Optional icon */
  icon?: React.ReactNode;
  /** Whether step has an error */
  error?: boolean;
  /** Whether step is loading */
  loading?: boolean;
}

export const StepperStep = forwardRef<HTMLDivElement, StepperStepProps>(
  ({ className, label, description, icon, error, loading, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'zk-stepper-step',
          error && 'zk-stepper-step--error',
          loading && 'zk-stepper-step--loading',
          className
        )}
        {...props}
      >
        {icon && <span className="zk-stepper-step__icon">{icon}</span>}
        <div className="zk-stepper-step__text">
          {label && <span className="zk-stepper-step__label">{label}</span>}
          {description && <span className="zk-stepper-step__description">{description}</span>}
        </div>
        {children}
      </div>
    );
  }
);

StepperStep.displayName = 'StepperStep';
