import { forwardRef, type HTMLAttributes, type ReactNode } from 'react';
import { cn } from '../../utils/cn';

type StepsDirection = 'horizontal' | 'vertical';
type StepStatus = 'wait' | 'process' | 'finish' | 'error';

export interface StepsProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> {
  /** Current step index (0-based) */
  current?: number;
  /** Steps direction */
  direction?: StepsDirection;
  /** Size variant */
  size?: 'sm' | 'md';
  /** Clickable steps */
  clickable?: boolean;
  /** Step click callback */
  onChange?: (step: number) => void;
}

export interface StepProps extends Omit<HTMLAttributes<HTMLDivElement>, 'title'> {
  /** Step title */
  title: ReactNode;
  /** Step description */
  description?: ReactNode;
  /** Step icon */
  icon?: ReactNode;
  /** Step status override */
  status?: StepStatus;
  /** Disabled state */
  disabled?: boolean;
}

interface StepInternalProps extends StepProps {
  stepIndex: number;
  isLast: boolean;
  currentStatus: StepStatus;
  clickable?: boolean;
  onStepClick?: () => void;
}

const StepInternal = forwardRef<HTMLDivElement, StepInternalProps>(
  (
    {
      title,
      description,
      icon,
      status,
      disabled = false,
      stepIndex,
      isLast,
      currentStatus,
      clickable,
      onStepClick,
      className,
      ...props
    },
    ref
  ) => {
    const finalStatus = status || currentStatus;

    const handleClick = () => {
      if (clickable && !disabled && onStepClick) {
        onStepClick();
      }
    };

    const renderIcon = () => {
      if (icon) return <span className="step-icon-custom">{icon}</span>;

      if (finalStatus === 'finish') {
        return (
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M20 6L9 17l-5-5" />
          </svg>
        );
      }

      if (finalStatus === 'error') {
        return (
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        );
      }

      return <span className="step-icon-number">{stepIndex + 1}</span>;
    };

    return (
      <div
        ref={ref}
        className={cn(
          'step',
          `step-${finalStatus}`,
          isLast && 'step-last',
          disabled && 'step-disabled',
          clickable && !disabled && 'step-clickable',
          className
        )}
        onClick={handleClick}
        role={clickable ? 'button' : undefined}
        tabIndex={clickable && !disabled ? 0 : undefined}
        aria-disabled={disabled}
        onKeyDown={(e) => {
          if (clickable && !disabled && (e.key === 'Enter' || e.key === ' ')) {
            e.preventDefault();
            handleClick();
          }
        }}
        {...props}
      >
        <div className="step-icon">{renderIcon()}</div>
        <div className="step-content">
          <div className="step-title">{title}</div>
          {description && <div className="step-description">{description}</div>}
        </div>
        {!isLast && <div className="step-connector" />}
      </div>
    );
  }
);

StepInternal.displayName = 'StepInternal';

export const Steps = forwardRef<HTMLDivElement, StepsProps>(
  (
    {
      current = 0,
      direction = 'horizontal',
      size = 'md',
      clickable = false,
      onChange,
      className,
      children,
      ...props
    },
    ref
  ) => {
    const childArray = Array.isArray(children) ? children : [children];

    const getStatus = (index: number): StepStatus => {
      if (index < current) return 'finish';
      if (index === current) return 'process';
      return 'wait';
    };

    return (
      <div
        ref={ref}
        className={cn(
          'steps',
          direction === 'vertical' && 'steps-vertical',
          size === 'sm' && 'steps-sm',
          className
        )}
        {...props}
      >
        {childArray.map((child: any, index) => {
          if (!child) return null;
          return (
            <StepInternal
              key={index}
              {...child.props}
              stepIndex={index}
              isLast={index === childArray.length - 1}
              currentStatus={getStatus(index)}
              clickable={clickable}
              onStepClick={() => onChange?.(index)}
            />
          );
        })}
      </div>
    );
  }
);

Steps.displayName = 'Steps';

export const Step = forwardRef<HTMLDivElement, StepProps>(
  (_props, _ref) => {
    // This component is just for defining step props
    // The actual rendering is done by StepInternal
    return null;
  }
);

Step.displayName = 'Step';
