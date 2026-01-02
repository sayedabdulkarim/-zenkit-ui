import type { Meta, StoryObj } from '@storybook/react';
import { Paper } from '@zenkit-ui/core';

const meta: Meta<typeof Paper> = {
  title: 'Components/Paper',
  component: Paper,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    shadow: { control: 'select', options: ['none', 'xs', 'sm', 'md', 'lg', 'xl'] },
    radius: { control: 'select', options: ['none', 'xs', 'sm', 'md', 'lg', 'xl'] },
    p: { control: 'select', options: ['none', 'xs', 'sm', 'md', 'lg', 'xl'] },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'This is a Paper component',
    p: 'md',
  },
};

export const Shadows: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1.5rem', padding: '1rem' }}>
      <Paper p="md" shadow="xs">xs shadow</Paper>
      <Paper p="md" shadow="sm">sm shadow</Paper>
      <Paper p="md" shadow="md">md shadow</Paper>
      <Paper p="md" shadow="lg">lg shadow</Paper>
      <Paper p="md" shadow="xl">xl shadow</Paper>
    </div>
  ),
};

export const Radius: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem' }}>
      <Paper p="md" shadow="sm" radius="none">none</Paper>
      <Paper p="md" shadow="sm" radius="xs">xs</Paper>
      <Paper p="md" shadow="sm" radius="sm">sm</Paper>
      <Paper p="md" shadow="sm" radius="md">md</Paper>
      <Paper p="md" shadow="sm" radius="lg">lg</Paper>
      <Paper p="md" shadow="sm" radius="xl">xl</Paper>
    </div>
  ),
};

export const WithBorder: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem' }}>
      <Paper p="md" withBorder>With Border</Paper>
      <Paper p="md" shadow="sm">With Shadow</Paper>
      <Paper p="md" withBorder shadow="sm">Both</Paper>
    </div>
  ),
};

export const Padding: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
      <Paper shadow="sm" p="xs">xs padding</Paper>
      <Paper shadow="sm" p="sm">sm padding</Paper>
      <Paper shadow="sm" p="md">md padding</Paper>
      <Paper shadow="sm" p="lg">lg padding</Paper>
      <Paper shadow="sm" p="xl">xl padding</Paper>
    </div>
  ),
};

export const CardExample: Story = {
  render: () => (
    <Paper shadow="md" radius="md" p="lg" style={{ maxWidth: '300px' }}>
      <h3 style={{ marginTop: 0 }}>Card Title</h3>
      <p style={{ color: '#666' }}>
        This is an example of using Paper as a card component with shadow and padding.
      </p>
      <button style={{ padding: '0.5rem 1rem', cursor: 'pointer' }}>Learn More</button>
    </Paper>
  ),
};
