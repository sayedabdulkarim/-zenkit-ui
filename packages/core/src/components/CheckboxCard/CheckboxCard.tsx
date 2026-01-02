'use client';

import React, { forwardRef } from 'react';
import { cn } from '../../utils/cn';

export interface CheckboxCardProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type' | 'size'> {
  /** Card label/title */
  label?: React.ReactNode;
  /** Card description */
  description?: React.ReactNode;
  /** Icon or image to display */
  icon?: React.ReactNode;
  /** Whether the card is checked */
  checked?: boolean;
  /** Default checked state */
  defaultChecked?: boolean;
  /** Called when checked state changes */
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  /** Size variant */
  size?: 'sm' | 'md' | 'lg';
  /** Whether the checkbox is inside or overlaid */
  checkboxPosition?: 'top-start' | 'top-end' | 'hidden';
  /** Whether to show as radio instead of checkbox */
  radio?: boolean;
  /** Border radius */
  radius?: 'sm' | 'md' | 'lg';
}

export const CheckboxCard = forwardRef<HTMLInputElement, CheckboxCardProps>(
  (
    {
      className,
      label,
      description,
      icon,
      checked,
      defaultChecked,
      onChange,
      size = 'md',
      checkboxPosition = 'top-end',
      radio,
      radius = 'md',
      disabled,
      name,
      value,
      ...props
    },
    ref
  ) => {
    return (
      <label
        className={cn(
          'zk-checkbox-card',
          `zk-checkbox-card--${size}`,
          `zk-checkbox-card--radius-${radius}`,
          `zk-checkbox-card--checkbox-${checkboxPosition}`,
          checked && 'zk-checkbox-card--checked',
          disabled && 'zk-checkbox-card--disabled',
          className
        )}
      >
        <input
          ref={ref}
          type={radio ? 'radio' : 'checkbox'}
          className="zk-checkbox-card__input"
          checked={checked}
          defaultChecked={defaultChecked}
          onChange={onChange}
          disabled={disabled}
          name={name}
          value={value}
          {...props}
        />
        {checkboxPosition !== 'hidden' && (
          <span className="zk-checkbox-card__checkbox">
            {radio ? (
              <span className="zk-checkbox-card__radio-indicator" />
            ) : (
              <span className="zk-checkbox-card__check-indicator">✓</span>
            )}
          </span>
        )}
        <div className="zk-checkbox-card__content">
          {icon && <div className="zk-checkbox-card__icon">{icon}</div>}
          <div className="zk-checkbox-card__text">
            {label && <div className="zk-checkbox-card__label">{label}</div>}
            {description && (
              <div className="zk-checkbox-card__description">{description}</div>
            )}
          </div>
        </div>
      </label>
    );
  }
);

CheckboxCard.displayName = 'CheckboxCard';
