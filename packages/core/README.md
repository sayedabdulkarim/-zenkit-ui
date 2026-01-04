# ui_zenkit

A modern React component library built on zenkit-css.

## Installation

```bash
npm install ui_zenkit zenkit-css
# or
pnpm add ui_zenkit zenkit-css
# or
yarn add ui_zenkit zenkit-css
```

## Usage

First, import ZenKit CSS in your app's entry point:

```tsx
import 'zenkit-css/dist/zenkit.css';
```

Then use components:

```tsx
import { Button } from 'ui_zenkit';

function App() {
  return (
    <Button variant="solid" colorScheme="primary">
      Click me
    </Button>
  );
}
```

## Components

186+ components including:
- **Button** - Versatile button with variants, sizes, loading states
- **Input** - Form input with validation states
- **Modal** - Dialog/modal component
- **Card** - Content container
- **Table** - Data table component
- And many more...

## Documentation

Check out our [Storybook](https://sayedabdulkarim.github.io/-zenkit-ui/) for full documentation and examples.

## Repository

[GitHub](https://github.com/sayedabdulkarim/-zenkit-ui)

## License

MIT
