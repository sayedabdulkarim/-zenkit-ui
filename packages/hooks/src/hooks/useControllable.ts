import { useState, useCallback, useRef, useEffect } from 'react';

export interface UseControllableOptions<T> {
  value?: T;
  defaultValue: T;
  onChange?: (value: T) => void;
}

export function useControllable<T>(
  options: UseControllableOptions<T>
): [T, (value: T) => void] {
  const { value: controlledValue, defaultValue, onChange } = options;
  const isControlled = controlledValue !== undefined;
  const [internalValue, setInternalValue] = useState(defaultValue);
  const valueRef = useRef(controlledValue ?? defaultValue);

  useEffect(() => {
    valueRef.current = controlledValue ?? internalValue;
  }, [controlledValue, internalValue]);

  const value = isControlled ? controlledValue : internalValue;

  const setValue = useCallback(
    (nextValue: T) => {
      if (!isControlled) {
        setInternalValue(nextValue);
      }
      onChange?.(nextValue);
    },
    [isControlled, onChange]
  );

  return [value, setValue];
}
