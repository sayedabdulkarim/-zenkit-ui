// State & Control Hooks
export { useDisclosure } from './hooks/useDisclosure';
export type { UseDisclosureReturn, UseDisclosureOptions } from './hooks/useDisclosure';

export { useControllable } from './hooks/useControllable';
export type { UseControllableOptions } from './hooks/useControllable';

// DOM & Event Hooks
export { useClickOutside } from './hooks/useClickOutside';
export { useFocusTrap } from './hooks/useFocusTrap';
export type { UseFocusTrapOptions } from './hooks/useFocusTrap';

// Keyboard Hooks
export { useKeyboard, useEscapeKey } from './hooks/useKeyboard';
export type { UseKeyboardOptions, KeyboardKey } from './hooks/useKeyboard';

// Utility Hooks
export { useId } from './hooks/useId';
export {
  useMediaQuery,
  usePrefersReducedMotion,
  usePrefersDarkMode,
  useIsMobile,
} from './hooks/useMediaQuery';
