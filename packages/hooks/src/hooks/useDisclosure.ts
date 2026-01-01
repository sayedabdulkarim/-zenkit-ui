import { useState, useCallback } from 'react';

export interface UseDisclosureReturn {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  onToggle: () => void;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface UseDisclosureOptions {
  defaultIsOpen?: boolean;
  onOpen?: () => void;
  onClose?: () => void;
}

export function useDisclosure(
  options: UseDisclosureOptions = {}
): UseDisclosureReturn {
  const { defaultIsOpen = false, onOpen: onOpenCallback, onClose: onCloseCallback } = options;
  const [isOpen, setIsOpen] = useState(defaultIsOpen);

  const onOpen = useCallback(() => {
    setIsOpen(true);
    onOpenCallback?.();
  }, [onOpenCallback]);

  const onClose = useCallback(() => {
    setIsOpen(false);
    onCloseCallback?.();
  }, [onCloseCallback]);

  const onToggle = useCallback(() => {
    const nextState = !isOpen;
    setIsOpen(nextState);
    if (nextState) {
      onOpenCallback?.();
    } else {
      onCloseCallback?.();
    }
  }, [isOpen, onOpenCallback, onCloseCallback]);

  return {
    isOpen,
    onOpen,
    onClose,
    onToggle,
    setIsOpen,
  };
}
