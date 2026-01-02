import type { Meta, StoryObj } from '@storybook/react';
import { Box } from '@zenkit-ui/core';

const meta: Meta<typeof Box> = {
  title: 'Components/Box',
  component: Box,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    p: { control: 'select', options: ['none', 'xs', 'sm', 'md', 'lg', 'xl'] },
    m: { control: 'select', options: ['none', 'xs', 'sm', 'md', 'lg', 'xl', 'auto'] },
    bg: { control: 'select', options: ['transparent', 'primary', 'secondary', 'muted', 'accent', 'surface'] },
    radius: { control: 'select', options: ['none', 'sm', 'md', 'lg', 'xl', 'full'] },
    shadow: { control: 'select', options: ['none', 'sm', 'md', 'lg', 'xl'] },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Box content',
    p: 'md',
    bg: 'surface',
    radius: 'md',
    border: true,
  },
};

export const Padding: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem' }}>
      <Box p="xs" bg="muted" border>xs</Box>
      <Box p="sm" bg="muted" border>sm</Box>
      <Box p="md" bg="muted" border>md</Box>
      <Box p="lg" bg="muted" border>lg</Box>
      <Box p="xl" bg="muted" border>xl</Box>
    </div>
  ),
};

export const Backgrounds: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem' }}>
      <Box p="md" bg="primary" radius="md">Primary</Box>
      <Box p="md" bg="secondary" radius="md">Secondary</Box>
      <Box p="md" bg="muted" radius="md">Muted</Box>
      <Box p="md" bg="accent" radius="md">Accent</Box>
      <Box p="md" bg="surface" radius="md" border>Surface</Box>
    </div>
  ),
};

export const Shadows: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1.5rem', padding: '1rem' }}>
      <Box p="md" bg="surface" shadow="sm" radius="md">Small</Box>
      <Box p="md" bg="surface" shadow="md" radius="md">Medium</Box>
      <Box p="md" bg="surface" shadow="lg" radius="md">Large</Box>
      <Box p="md" bg="surface" shadow="xl" radius="md">XL</Box>
    </div>
  ),
};

export const Radius: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem' }}>
      <Box p="md" bg="muted" radius="none">None</Box>
      <Box p="md" bg="muted" radius="sm">Small</Box>
      <Box p="md" bg="muted" radius="md">Medium</Box>
      <Box p="md" bg="muted" radius="lg">Large</Box>
      <Box p="md" bg="muted" radius="xl">XL</Box>
      <Box p="md" bg="muted" radius="full">Full</Box>
    </div>
  ),
};

export const Display: Story = {
  render: () => (
    <Box p="md" bg="muted" display="flex" style={{ gap: '1rem' }}>
      <Box p="sm" bg="primary">Item 1</Box>
      <Box p="sm" bg="secondary">Item 2</Box>
      <Box p="sm" bg="accent">Item 3</Box>
    </Box>
  ),
};
