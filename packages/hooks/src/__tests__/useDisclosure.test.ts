import { describe, it, expect, vi } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import { useDisclosure } from '../hooks/useDisclosure';

describe('useDisclosure', () => {
  it('should initialize with closed state by default', () => {
    const { result } = renderHook(() => useDisclosure());
    expect(result.current.isOpen).toBe(false);
  });

  it('should initialize with open state when defaultIsOpen is true', () => {
    const { result } = renderHook(() => useDisclosure({ defaultIsOpen: true }));
    expect(result.current.isOpen).toBe(true);
  });

  it('should open when onOpen is called', () => {
    const { result } = renderHook(() => useDisclosure());

    act(() => {
      result.current.onOpen();
    });

    expect(result.current.isOpen).toBe(true);
  });

  it('should close when onClose is called', () => {
    const { result } = renderHook(() => useDisclosure({ defaultIsOpen: true }));

    act(() => {
      result.current.onClose();
    });

    expect(result.current.isOpen).toBe(false);
  });

  it('should toggle when onToggle is called', () => {
    const { result } = renderHook(() => useDisclosure());

    act(() => {
      result.current.onToggle();
    });
    expect(result.current.isOpen).toBe(true);

    act(() => {
      result.current.onToggle();
    });
    expect(result.current.isOpen).toBe(false);
  });

  it('should call onOpen callback when opening', () => {
    const onOpenCallback = vi.fn();
    const { result } = renderHook(() =>
      useDisclosure({ onOpen: onOpenCallback })
    );

    act(() => {
      result.current.onOpen();
    });

    expect(onOpenCallback).toHaveBeenCalledTimes(1);
  });

  it('should call onClose callback when closing', () => {
    const onCloseCallback = vi.fn();
    const { result } = renderHook(() =>
      useDisclosure({ defaultIsOpen: true, onClose: onCloseCallback })
    );

    act(() => {
      result.current.onClose();
    });

    expect(onCloseCallback).toHaveBeenCalledTimes(1);
  });

  it('should call appropriate callback when toggling', () => {
    const onOpenCallback = vi.fn();
    const onCloseCallback = vi.fn();
    const { result } = renderHook(() =>
      useDisclosure({ onOpen: onOpenCallback, onClose: onCloseCallback })
    );

    act(() => {
      result.current.onToggle();
    });
    expect(onOpenCallback).toHaveBeenCalledTimes(1);

    act(() => {
      result.current.onToggle();
    });
    expect(onCloseCallback).toHaveBeenCalledTimes(1);
  });
});
