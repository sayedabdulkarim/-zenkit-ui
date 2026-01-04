# ZenKit UI

A modern React component library built on ZenKit CSS.

[![npm version](https://img.shields.io/npm/v/ui_zenkit.svg)](https://www.npmjs.com/package/ui_zenkit)
[![Storybook](https://img.shields.io/badge/Storybook-Live%20Demo-ff4785)](https://sayedabdulkarim.github.io/-zenkit-ui/)

## Features

- **Zero-runtime CSS** - Built on ZenKit CSS for optimal performance
- **Fully typed** - Written in TypeScript with complete type definitions
- **Accessible** - WCAG 2.1 AA compliant components
- **Customizable** - CSS Variables for easy theming
- **Tree-shakeable** - Import only what you need
- **186+ Components** - Comprehensive component library

## Installation

```bash
npm install ui_zenkit zenkit-css
# or
pnpm add ui_zenkit zenkit-css
```

## Quick Start

```tsx
// Import ZenKit CSS in your app's entry point
import 'zenkit-css/dist/zenkit.css';

// Use components
import { Button } from 'ui_zenkit';

function App() {
  return (
    <Button variant="solid" colorScheme="primary">
      Click me
    </Button>
  );
}
```

## Packages

### ui_zenkit

Core components including:

| Category | Components |
|----------|-----------|
| Layout | AppShell, Container, Grid, Flex, Stack, Group, Box, Center |
| Navigation | Navbar, Menu, Tabs, Breadcrumb, Pagination, Steps |
| Forms | Input, Select, Checkbox, Radio, Switch, DatePicker, Form |
| Data Display | Table, Card, Avatar, Badge, Tag, List, Tree |
| Feedback | Alert, Modal, Toast, Progress, Spinner, Skeleton |
| Overlay | Popover, Tooltip, Dropdown, Dialog, Drawer |
| Utility | Portal, Transition, ConfigProvider, FloatButton, Affix, VirtualList |

### @zenkit-ui/hooks

Reusable React hooks for building accessible UI components:

- `useDisclosure` - Modal/dropdown open/close state
- `useClickOutside` - Click outside detection
- `useFocusTrap` - Keyboard focus trapping
- `useControllable` - Controlled/uncontrolled component state
- `useMediaQuery` - Responsive breakpoint detection
- `useKeyboard` - Keyboard event handling
- `useClipboard` - Copy to clipboard functionality
- `useLocalStorage` - Persistent local storage state
- `useDebounce` - Debounced value updates
- `useIntersection` - Intersection observer hook

## Development

```bash
# Install dependencies
pnpm install

# Start Storybook
pnpm storybook

# Build packages
pnpm build
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Documentation

Check out our [Storybook](https://sayedabdulkarim.github.io/-zenkit-ui/) for full documentation and live examples of all 186+ components.

## License

MIT

---

Made with ❤️ by [Sayed Abdul Karim](https://github.com/sayedabdulkarim)
