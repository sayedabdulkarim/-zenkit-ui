'use client';

import { forwardRef, useEffect, useRef, type HTMLAttributes } from 'react';
import { cn } from '../../utils/cn';

export interface QRCodeProps extends HTMLAttributes<HTMLDivElement> {
  /** Value to encode */
  value: string;
  /** Size in pixels */
  size?: number;
  /** Background color */
  bgColor?: string;
  /** Foreground color */
  fgColor?: string;
  /** Error correction level */
  level?: 'L' | 'M' | 'Q' | 'H';
  /** Include margin */
  includeMargin?: boolean;
  /** Icon in center */
  icon?: string;
  /** Icon size */
  iconSize?: number;
  /** Status */
  status?: 'active' | 'expired' | 'loading';
  /** On refresh (for expired) */
  onRefresh?: () => void;
}

// Simple QR code generator (basic implementation)
const generateQRMatrix = (value: string, _size: number): boolean[][] => {
  // This is a simplified visual representation
  // In production, use a proper QR library like qrcode
  const matrix: boolean[][] = [];
  const moduleCount = 21; // Version 1 QR code

  for (let i = 0; i < moduleCount; i++) {
    matrix[i] = [];
    for (let j = 0; j < moduleCount; j++) {
      // Create a pattern based on the value
      const hash = (value.charCodeAt((i + j) % value.length) || 0) + i * j;
      matrix[i][j] = hash % 3 === 0;
    }
  }

  // Add position patterns (corners)
  const addPositionPattern = (row: number, col: number) => {
    for (let i = 0; i < 7; i++) {
      for (let j = 0; j < 7; j++) {
        if (row + i < moduleCount && col + j < moduleCount) {
          matrix[row + i][col + j] =
            i === 0 || i === 6 || j === 0 || j === 6 ||
            (i >= 2 && i <= 4 && j >= 2 && j <= 4);
        }
      }
    }
  };

  addPositionPattern(0, 0);
  addPositionPattern(0, moduleCount - 7);
  addPositionPattern(moduleCount - 7, 0);

  return matrix;
};

export const QRCode = forwardRef<HTMLDivElement, QRCodeProps>(
  (
    {
      value,
      size = 128,
      bgColor = '#ffffff',
      fgColor = '#000000',
      level = 'M',
      includeMargin = true,
      icon,
      iconSize = 40,
      status = 'active',
      onRefresh,
      className,
      ...props
    },
    ref
  ) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
      const canvas = canvasRef.current;
      if (!canvas) return;

      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      const matrix = generateQRMatrix(value, size);
      const moduleCount = matrix.length;
      const margin = includeMargin ? 4 : 0;
      const moduleSize = size / (moduleCount + margin * 2);

      // Clear canvas
      ctx.fillStyle = bgColor;
      ctx.fillRect(0, 0, size, size);

      // Draw modules
      ctx.fillStyle = fgColor;
      matrix.forEach((row, i) => {
        row.forEach((cell, j) => {
          if (cell) {
            ctx.fillRect(
              (j + margin) * moduleSize,
              (i + margin) * moduleSize,
              moduleSize,
              moduleSize
            );
          }
        });
      });

      // Draw icon if provided
      if (icon && status === 'active') {
        const img = new Image();
        img.crossOrigin = 'anonymous';
        img.onload = () => {
          const x = (size - iconSize) / 2;
          const y = (size - iconSize) / 2;
          ctx.fillStyle = bgColor;
          ctx.fillRect(x - 4, y - 4, iconSize + 8, iconSize + 8);
          ctx.drawImage(img, x, y, iconSize, iconSize);
        };
        img.src = icon;
      }
    }, [value, size, bgColor, fgColor, includeMargin, icon, iconSize, status]);

    return (
      <div
        ref={ref}
        className={cn('qrcode', `qrcode-${status}`, className)}
        style={{ width: size, height: size }}
        {...props}
      >
        <canvas ref={canvasRef} width={size} height={size} className="qrcode-canvas" />

        {status === 'loading' && (
          <div className="qrcode-overlay">
            <span className="qrcode-spinner" />
          </div>
        )}

        {status === 'expired' && (
          <div className="qrcode-overlay">
            <span className="qrcode-expired-text">QR Code expired</span>
            {onRefresh && (
              <button type="button" className="qrcode-refresh" onClick={onRefresh}>
                Refresh
              </button>
            )}
          </div>
        )}
      </div>
    );
  }
);

QRCode.displayName = 'QRCode';
