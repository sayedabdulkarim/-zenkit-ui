import type { Meta, StoryObj } from '@storybook/react';
import { Indicator, Avatar, Button, Badge } from '@zenkit-ui/core';

const meta: Meta<typeof Indicator> = {
  title: 'Components/Indicator',
  component: Indicator,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    color: { control: 'select', options: ['primary', 'secondary', 'success', 'warning', 'error'] },
    position: { control: 'select', options: ['top-start', 'top-end', 'bottom-start', 'bottom-end'] },
    size: { control: 'select', options: ['xs', 'sm', 'md', 'lg'] },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Indicator>
      <Avatar name="John Doe" />
    </Indicator>
  ),
};

export const WithLabel: Story = {
  render: () => (
    <Indicator label={5}>
      <Avatar name="Jane Smith" />
    </Indicator>
  ),
};

export const Colors: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '2rem' }}>
      <Indicator color="primary"><Avatar name="A" /></Indicator>
      <Indicator color="secondary"><Avatar name="B" /></Indicator>
      <Indicator color="success"><Avatar name="C" /></Indicator>
      <Indicator color="warning"><Avatar name="D" /></Indicator>
      <Indicator color="error"><Avatar name="E" /></Indicator>
    </div>
  ),
};

export const Positions: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '2rem' }}>
      <Indicator position="top-start" label="1"><Avatar name="TS" /></Indicator>
      <Indicator position="top-end" label="2"><Avatar name="TE" /></Indicator>
      <Indicator position="bottom-start" label="3"><Avatar name="BS" /></Indicator>
      <Indicator position="bottom-end" label="4"><Avatar name="BE" /></Indicator>
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '2rem' }}>
      <Indicator size="xs"><Avatar name="XS" /></Indicator>
      <Indicator size="sm"><Avatar name="SM" /></Indicator>
      <Indicator size="md"><Avatar name="MD" /></Indicator>
      <Indicator size="lg"><Avatar name="LG" /></Indicator>
    </div>
  ),
};

export const OnButton: Story = {
  render: () => (
    <Indicator label={3} color="error">
      <Button>Notifications</Button>
    </Indicator>
  ),
};

export const Processing: Story = {
  render: () => (
    <Indicator processing color="success">
      <Avatar name="Online" />
    </Indicator>
  ),
};

export const Disabled: Story = {
  render: () => (
    <Indicator disabled>
      <Avatar name="No Indicator" />
    </Indicator>
  ),
};

export const OverflowLabel: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '2rem' }}>
      <Indicator label={5}><Avatar name="A" /></Indicator>
      <Indicator label={99}><Avatar name="B" /></Indicator>
      <Indicator label="99+" overflowCount={99}><Avatar name="C" /></Indicator>
    </div>
  ),
};
