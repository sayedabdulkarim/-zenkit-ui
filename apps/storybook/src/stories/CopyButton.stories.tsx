import type { Meta, StoryObj } from '@storybook/react';
import { CopyButton, Button } from '@zenkit-ui/core';

const meta: Meta<typeof CopyButton> = {
  title: 'Components/CopyButton',
  component: CopyButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
    variant: { control: 'select', options: ['default', 'filled', 'outline', 'subtle'] },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: 'Text to copy',
  },
};

export const CustomLabels: Story = {
  args: {
    value: 'npm install @zenkit-ui/core',
    copyLabel: 'Copy',
    copiedLabel: 'Copied!',
  },
};

export const WithCode: Story = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.5rem 1rem', background: '#1e1e1e', borderRadius: '4px' }}>
      <code style={{ color: '#d4d4d4' }}>npm install @zenkit-ui/core</code>
      <CopyButton value="npm install @zenkit-ui/core" />
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
      <CopyButton value="small" size="sm" />
      <CopyButton value="medium" size="md" />
      <CopyButton value="large" size="lg" />
    </div>
  ),
};

export const Variants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem' }}>
      <CopyButton value="default" variant="default" />
      <CopyButton value="filled" variant="filled" />
      <CopyButton value="outline" variant="outline" />
      <CopyButton value="subtle" variant="subtle" />
    </div>
  ),
};

export const CustomTimeout: Story = {
  args: {
    value: 'Copied for 5 seconds',
    timeout: 5000,
    copyLabel: 'Click me',
    copiedLabel: 'Done!',
  },
};

export const WithRenderProp: Story = {
  render: () => (
    <CopyButton value="Custom render prop">
      {({ copied, copy }) => (
        <Button onClick={copy} color={copied ? 'success' : 'primary'}>
          {copied ? 'Copied!' : 'Copy to clipboard'}
        </Button>
      )}
    </CopyButton>
  ),
};

export const Disabled: Story = {
  args: {
    value: 'Cannot copy',
    disabled: true,
  },
};
