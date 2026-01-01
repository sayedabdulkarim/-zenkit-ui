import type { Meta, StoryObj } from '@storybook/react';
import { Snippet } from '@zenkit-ui/core';

const meta: Meta<typeof Snippet> = {
  title: 'Data Display/Snippet',
  component: Snippet,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'npm install @zenkit-ui/core',
  },
};

export const WithSymbol: Story = {
  args: {
    children: 'npm install @zenkit-ui/core',
    symbol: '$',
  },
};

export const Colors: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <Snippet color="default">npm install</Snippet>
      <Snippet color="primary">npm install</Snippet>
      <Snippet color="secondary">npm install</Snippet>
      <Snippet color="success">npm install</Snippet>
      <Snippet color="warning">npm install</Snippet>
      <Snippet color="danger">npm install</Snippet>
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <Snippet size="sm">pnpm install</Snippet>
      <Snippet size="md">pnpm install</Snippet>
      <Snippet size="lg">pnpm install</Snippet>
    </div>
  ),
};

export const Copyable: Story = {
  args: {
    children: 'npm install @zenkit-ui/core',
    copyable: true,
  },
};

export const DisableCopy: Story = {
  args: {
    children: 'npm install @zenkit-ui/core',
    disableCopy: true,
  },
};

export const HideSymbol: Story = {
  args: {
    children: 'npm install @zenkit-ui/core',
    hideSymbol: true,
    copyable: true,
  },
};

export const MultipleCommands: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
      <Snippet symbol="1.">git clone https://github.com/example/repo</Snippet>
      <Snippet symbol="2.">cd repo</Snippet>
      <Snippet symbol="3.">npm install</Snippet>
      <Snippet symbol="4.">npm run dev</Snippet>
    </div>
  ),
};
