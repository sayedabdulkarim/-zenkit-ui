import { forwardRef, type HTMLAttributes, type CSSProperties, type ReactNode } from 'react';
import { cn } from '../../utils/cn';

export type BackgroundImageRadius = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type BackgroundImageRatio = '16-9' | '4-3' | '1-1' | '21-9';
export type BackgroundImageOverlay = 'dark' | 'light' | 'gradient';

export interface BackgroundImageProps extends HTMLAttributes<HTMLDivElement> {
  /** Image source URL */
  src: string;
  /** Border radius */
  radius?: BackgroundImageRadius;
  /** Aspect ratio */
  ratio?: BackgroundImageRatio;
  /** Fill container (width and height 100%) */
  fill?: boolean;
  /** Fixed background attachment (parallax effect) */
  fixed?: boolean;
  /** Overlay type */
  overlay?: BackgroundImageOverlay;
  /** Content to render on top of the image */
  children?: ReactNode;
}

const radiusClasses: Record<BackgroundImageRadius, string> = {
  xs: 'background-image-radius-xs',
  sm: 'background-image-radius-sm',
  md: 'background-image-radius-md',
  lg: 'background-image-radius-lg',
  xl: 'background-image-radius-xl',
};

const ratioClasses: Record<BackgroundImageRatio, string> = {
  '16-9': 'background-image-ratio-16-9',
  '4-3': 'background-image-ratio-4-3',
  '1-1': 'background-image-ratio-1-1',
  '21-9': 'background-image-ratio-21-9',
};

const overlayClasses: Record<BackgroundImageOverlay, string> = {
  dark: 'background-image-overlay',
  light: 'background-image-overlay background-image-overlay-light',
  gradient: 'background-image-overlay background-image-overlay-gradient',
};

export const BackgroundImage = forwardRef<HTMLDivElement, BackgroundImageProps>(
  (
    {
      src,
      radius,
      ratio,
      fill = false,
      fixed = false,
      overlay,
      className,
      style,
      children,
      ...props
    },
    ref
  ) => {
    const imageStyle: CSSProperties = {
      ...style,
      backgroundImage: `url(${src})`,
    };

    return (
      <div
        ref={ref}
        className={cn(
          'background-image',
          radius && radiusClasses[radius],
          ratio && ratioClasses[ratio],
          fill && 'background-image-fill',
          fixed && 'background-image-fixed',
          className
        )}
        style={imageStyle}
        {...props}
      >
        {overlay && <div className={overlayClasses[overlay]} />}
        {children && <div className="background-image-content">{children}</div>}
      </div>
    );
  }
);

BackgroundImage.displayName = 'BackgroundImage';
