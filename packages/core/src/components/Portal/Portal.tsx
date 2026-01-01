'use client';

import { useEffect, useState, type ReactNode } from 'react';
import { createPortal } from 'react-dom';

export interface PortalProps {
  /** Children to render in portal */
  children: ReactNode;
  /** Target container element or selector */
  container?: HTMLElement | string | null;
  /** Whether portal is disabled (render inline) */
  disabled?: boolean;
}

export const Portal = ({
  children,
  container,
  disabled = false,
}: PortalProps) => {
  const [mounted, setMounted] = useState(false);
  const [targetElement, setTargetElement] = useState<HTMLElement | null>(null);

  useEffect(() => {
    setMounted(true);

    if (disabled) {
      setTargetElement(null);
      return;
    }

    if (container === null) {
      setTargetElement(null);
      return;
    }

    if (typeof container === 'string') {
      const element = document.querySelector(container);
      setTargetElement(element as HTMLElement | null);
    } else if (container instanceof HTMLElement) {
      setTargetElement(container);
    } else {
      setTargetElement(document.body);
    }
  }, [container, disabled]);

  if (!mounted) {
    return null;
  }

  if (disabled || !targetElement) {
    return <>{children}</>;
  }

  return createPortal(children, targetElement);
};

Portal.displayName = 'Portal';
