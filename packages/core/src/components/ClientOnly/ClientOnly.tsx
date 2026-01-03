import { useState, useEffect, type ReactNode } from 'react';

export interface ClientOnlyProps {
  /** Content to render only on client */
  children: ReactNode;
  /** Fallback to show during SSR */
  fallback?: ReactNode;
}

/**
 * ClientOnly - Renders children only on the client side.
 * Useful for components that depend on browser APIs or need to avoid hydration mismatches.
 */
export function ClientOnly({ children, fallback = null }: ClientOnlyProps) {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return <>{fallback}</>;
  }

  return <>{children}</>;
}

ClientOnly.displayName = 'ClientOnly';
