'use client';

import { forwardRef, useEffect, useRef, type HTMLAttributes } from 'react';
import { cn } from '../../utils/cn';

export interface WatermarkProps extends Omit<HTMLAttributes<HTMLDivElement>, 'content'> {
  /** Watermark text */
  content?: string | string[];
  /** Font size */
  fontSize?: number;
  /** Font color */
  fontColor?: string;
  /** Font family */
  fontFamily?: string;
  /** Rotation angle */
  rotate?: number;
  /** Gap between watermarks */
  gap?: [number, number];
  /** Offset from origin */
  offset?: [number, number];
  /** Z-index */
  zIndex?: number;
  /** Image source (alternative to text) */
  image?: string;
  /** Image width */
  imageWidth?: number;
  /** Image height */
  imageHeight?: number;
}

export const Watermark = forwardRef<HTMLDivElement, WatermarkProps>(
  (
    {
      content = '',
      fontSize = 16,
      fontColor = 'rgba(0, 0, 0, 0.1)',
      fontFamily = 'sans-serif',
      rotate = -22,
      gap = [100, 100],
      offset = [0, 0],
      zIndex = 9,
      image,
      imageWidth = 120,
      imageHeight = 64,
      className,
      children,
      style,
      ...props
    },
    ref
  ) => {
    const watermarkRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      const container = watermarkRef.current;
      if (!container) return;

      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      const ratio = window.devicePixelRatio || 1;
      const canvasWidth = (gap[0] + (image ? imageWidth : 200)) * ratio;
      const canvasHeight = (gap[1] + (image ? imageHeight : 100)) * ratio;

      canvas.width = canvasWidth;
      canvas.height = canvasHeight;

      ctx.scale(ratio, ratio);
      ctx.translate(canvasWidth / 2 / ratio, canvasHeight / 2 / ratio);
      ctx.rotate((rotate * Math.PI) / 180);

      if (image) {
        const img = new Image();
        img.crossOrigin = 'anonymous';
        img.onload = () => {
          ctx.drawImage(img, -imageWidth / 2, -imageHeight / 2, imageWidth, imageHeight);
          container.style.backgroundImage = `url(${canvas.toDataURL()})`;
        };
        img.src = image;
      } else {
        ctx.font = `${fontSize}px ${fontFamily}`;
        ctx.fillStyle = fontColor;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';

        const lines = Array.isArray(content) ? content : [content];
        const lineHeight = fontSize * 1.5;
        const startY = -((lines.length - 1) * lineHeight) / 2;

        lines.forEach((line, index) => {
          ctx.fillText(line, 0, startY + index * lineHeight);
        });

        container.style.backgroundImage = `url(${canvas.toDataURL()})`;
      }

      container.style.backgroundPosition = `${offset[0]}px ${offset[1]}px`;
    }, [content, fontSize, fontColor, fontFamily, rotate, gap, offset, image, imageWidth, imageHeight]);

    return (
      <div ref={ref} className={cn('watermark', className)} style={style} {...props}>
        {children}
        <div
          ref={watermarkRef}
          className="watermark-layer"
          style={{ zIndex }}
        />
      </div>
    );
  }
);

Watermark.displayName = 'Watermark';
