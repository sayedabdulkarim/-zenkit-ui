import type { CSSProperties, ReactNode } from 'react';

export type Size = 'sm' | 'md' | 'lg';

export type Variant = 'solid' | 'outline' | 'ghost' | 'link';

export type ColorScheme =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'danger'
  | 'warning'
  | 'info'
  | 'light'
  | 'dark';

export interface BaseProps {
  className?: string;
  style?: CSSProperties;
  children?: ReactNode;
}

export type PolymorphicRef<T extends React.ElementType> =
  React.ComponentPropsWithRef<T>['ref'];

export type PolymorphicComponentProps<
  T extends React.ElementType,
  Props = object,
> = Props &
  Omit<React.ComponentPropsWithoutRef<T>, keyof Props> & {
    as?: T;
  };

export type PolymorphicComponentPropsWithRef<
  T extends React.ElementType,
  Props = object,
> = PolymorphicComponentProps<T, Props> & { ref?: PolymorphicRef<T> };
