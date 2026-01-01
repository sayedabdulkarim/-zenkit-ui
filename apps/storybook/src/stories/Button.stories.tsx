import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '@zenkit-ui/core';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['solid', 'outline', 'ghost', 'link', 'soft'],
      description: 'The visual style of the button',
    },
    colorScheme: {
      control: 'select',
      options: ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark'],
      description: 'The color scheme of the button',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'The size of the button',
    },
    fullWidth: {
      control: 'boolean',
      description: 'Whether the button takes full width',
    },
    loading: {
      control: 'boolean',
      description: 'Whether the button is in loading state',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the button is disabled',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Button',
  },
};

export const Variants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
      <Button variant="solid">Solid</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="link">Link</Button>
      <Button variant="soft">Soft</Button>
    </div>
  ),
};

export const ColorSchemes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
      <Button colorScheme="primary">Primary</Button>
      <Button colorScheme="secondary">Secondary</Button>
      <Button colorScheme="success">Success</Button>
      <Button colorScheme="danger">Danger</Button>
      <Button colorScheme="warning">Warning</Button>
      <Button colorScheme="info">Info</Button>
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
    </div>
  ),
};

export const OutlineVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
      <Button variant="outline" colorScheme="primary">Primary</Button>
      <Button variant="outline" colorScheme="secondary">Secondary</Button>
      <Button variant="outline" colorScheme="success">Success</Button>
      <Button variant="outline" colorScheme="danger">Danger</Button>
      <Button variant="outline" colorScheme="warning">Warning</Button>
      <Button variant="outline" colorScheme="info">Info</Button>
    </div>
  ),
};

export const Loading: Story = {
  args: {
    loading: true,
    children: 'Loading',
  },
};

export const LoadingWithText: Story = {
  args: {
    loading: true,
    loadingText: 'Please wait...',
    children: 'Submit',
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    children: 'Disabled',
  },
};

export const FullWidth: Story = {
  args: {
    fullWidth: true,
    children: 'Full Width Button',
  },
  parameters: {
    layout: 'padded',
  },
};

export const WithLeftIcon: Story = {
  args: {
    leftIcon: <span>←</span>,
    children: 'Back',
  },
};

export const WithRightIcon: Story = {
  args: {
    rightIcon: <span>→</span>,
    children: 'Next',
  },
};

export const IconOnly: Story = {
  args: {
    iconOnly: true,
    'aria-label': 'Settings',
    children: '⚙️',
  },
};
