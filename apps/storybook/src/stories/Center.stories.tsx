import type { Meta, StoryObj } from '@storybook/react';
import { Center, Box } from '@zenkit-ui/core';

const meta: Meta<typeof Center> = {
  title: 'Components/Center',
  component: Center,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Center style={{ width: '300px', height: '200px', border: '1px dashed gray' }}>
      <Box p="md" bg="primary" radius="md">Centered Content</Box>
    </Center>
  ),
};

export const Inline: Story = {
  render: () => (
    <div>
      <span>Text before </span>
      <Center inline style={{ width: '100px', height: '50px', border: '1px dashed gray' }}>
        <span>Inline</span>
      </Center>
      <span> text after</span>
    </div>
  ),
};

export const FullPage: Story = {
  render: () => (
    <Center style={{ width: '100%', height: '400px', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}>
      <Box p="lg" bg="surface" radius="lg" shadow="lg">
        <h2>Welcome</h2>
        <p>Perfectly centered in the viewport</p>
      </Box>
    </Center>
  ),
};

export const WithIcon: Story = {
  render: () => (
    <Center style={{ width: '60px', height: '60px', background: '#228be6', borderRadius: '50%' }}>
      <span style={{ fontSize: '24px', color: 'white' }}>✓</span>
    </Center>
  ),
};

export const StackedItems: Story = {
  render: () => (
    <Center style={{ width: '300px', height: '200px', border: '1px dashed gray' }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
        <Box p="sm" bg="primary" radius="md">Item 1</Box>
        <Box p="sm" bg="secondary" radius="md">Item 2</Box>
        <Box p="sm" bg="accent" radius="md">Item 3</Box>
      </div>
    </Center>
  ),
};
