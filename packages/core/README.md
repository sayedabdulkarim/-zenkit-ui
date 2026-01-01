# @zenkit-ui/core

Core components for ZenKit UI - A modern React component library built on ZenKit CSS.

## Installation

```bash
npm install @zenkit-ui/core zenkit-css
# or
pnpm add @zenkit-ui/core zenkit-css
# or
yarn add @zenkit-ui/core zenkit-css
```

## Usage

First, import ZenKit CSS in your app's entry point:

```tsx
import 'zenkit-css/dist/zenkit.css';
```

Then use components:

```tsx
import { Button } from '@zenkit-ui/core';

function App() {
  return (
    <Button variant="solid" colorScheme="primary">
      Click me
    </Button>
  );
}
```

## Components

- **Button** - Versatile button with variants, sizes, loading states, and icons

More components coming soon!

## Props

### Button

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| variant | 'solid' \| 'outline' \| 'ghost' \| 'link' \| 'soft' | 'solid' | Button style variant |
| colorScheme | ColorScheme | 'primary' | Color scheme |
| size | 'sm' \| 'md' \| 'lg' | 'md' | Button size |
| fullWidth | boolean | false | Full width button |
| loading | boolean | false | Loading state |
| loadingText | string | - | Text shown during loading |
| leftIcon | ReactNode | - | Icon on the left |
| rightIcon | ReactNode | - | Icon on the right |
| iconOnly | boolean | false | Icon-only button |

## License

MIT
