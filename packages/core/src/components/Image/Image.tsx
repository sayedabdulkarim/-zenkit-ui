import { forwardRef, useState, type ImgHTMLAttributes, type ReactNode } from 'react';
import { cn } from '../../utils/cn';

export interface ImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  /** Fallback content when image fails to load */
  fallback?: ReactNode;
  /** Preview on click */
  preview?: boolean;
  /** Placeholder while loading */
  placeholder?: ReactNode;
  /** Border radius */
  rounded?: boolean | 'sm' | 'md' | 'lg' | 'full';
  /** Object fit */
  fit?: 'contain' | 'cover' | 'fill' | 'none' | 'scale-down';
}

export const Image = forwardRef<HTMLImageElement, ImageProps>(
  (
    {
      src,
      alt = '',
      fallback,
      preview = false,
      placeholder,
      rounded = false,
      fit = 'cover',
      className,
      style,
      onError,
      onLoad,
      ...props
    },
    ref
  ) => {
    const [status, setStatus] = useState<'loading' | 'loaded' | 'error'>('loading');
    const [showPreview, setShowPreview] = useState(false);

    const handleLoad = (e: React.SyntheticEvent<HTMLImageElement>) => {
      setStatus('loaded');
      onLoad?.(e);
    };

    const handleError = (e: React.SyntheticEvent<HTMLImageElement>) => {
      setStatus('error');
      onError?.(e);
    };

    const handleClick = () => {
      if (preview && status === 'loaded') {
        setShowPreview(true);
      }
    };

    const handleClosePreview = () => {
      setShowPreview(false);
    };

    const roundedClasses = {
      true: 'rounded',
      sm: 'rounded-sm',
      md: 'rounded-md',
      lg: 'rounded-lg',
      full: 'rounded-full',
    };

    const fitStyles: Record<string, React.CSSProperties['objectFit']> = {
      contain: 'contain',
      cover: 'cover',
      fill: 'fill',
      none: 'none',
      'scale-down': 'scale-down',
    };

    if (status === 'error' && fallback) {
      return <div className={cn('image-fallback', className)}>{fallback}</div>;
    }

    return (
      <>
        <div
          className={cn(
            'image-wrapper',
            preview && status === 'loaded' && 'image-preview-enabled',
            className
          )}
          onClick={handleClick}
        >
          {status === 'loading' && placeholder && (
            <div className="image-placeholder">{placeholder}</div>
          )}
          <img
            ref={ref}
            src={src}
            alt={alt}
            className={cn(
              'image',
              rounded && roundedClasses[rounded === true ? 'true' : rounded],
              status === 'loading' && 'image-loading'
            )}
            style={{
              objectFit: fitStyles[fit],
              ...style,
            }}
            onLoad={handleLoad}
            onError={handleError}
            {...props}
          />
        </div>

        {showPreview && (
          <div className="image-preview-overlay" onClick={handleClosePreview}>
            <button
              className="image-preview-close"
              onClick={handleClosePreview}
              aria-label="Close preview"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="24" height="24">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>
            <img src={src} alt={alt} className="image-preview-img" />
          </div>
        )}
      </>
    );
  }
);

Image.displayName = 'Image';
