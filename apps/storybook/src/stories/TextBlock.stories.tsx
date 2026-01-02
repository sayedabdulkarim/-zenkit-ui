import type { Meta, StoryObj } from '@storybook/react';
import { TextBlock } from '@zenkit-ui/core';

const meta: Meta<typeof TextBlock> = {
  title: 'Components/TextBlock',
  component: TextBlock,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    as: { control: 'select', options: ['p', 'span', 'div', 'label', 'small', 'strong', 'em'] },
    size: { control: 'select', options: ['xs', 'sm', 'md', 'lg', 'xl'] },
    weight: { control: 'select', options: ['light', 'normal', 'medium', 'semibold', 'bold'] },
    color: { control: 'select', options: ['default', 'muted', 'primary', 'secondary', 'success', 'warning', 'error'] },
    align: { control: 'select', options: ['left', 'center', 'right', 'justify'] },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'This is a text block component for displaying text content.',
  },
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
      <TextBlock size="xs">Extra Small Text</TextBlock>
      <TextBlock size="sm">Small Text</TextBlock>
      <TextBlock size="md">Medium Text</TextBlock>
      <TextBlock size="lg">Large Text</TextBlock>
      <TextBlock size="xl">Extra Large Text</TextBlock>
    </div>
  ),
};

export const Colors: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
      <TextBlock color="default">Default Color</TextBlock>
      <TextBlock color="muted">Muted Color</TextBlock>
      <TextBlock color="primary">Primary Color</TextBlock>
      <TextBlock color="secondary">Secondary Color</TextBlock>
      <TextBlock color="success">Success Color</TextBlock>
      <TextBlock color="warning">Warning Color</TextBlock>
      <TextBlock color="error">Error Color</TextBlock>
    </div>
  ),
};

export const Weights: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
      <TextBlock weight="light">Light Weight</TextBlock>
      <TextBlock weight="normal">Normal Weight</TextBlock>
      <TextBlock weight="medium">Medium Weight</TextBlock>
      <TextBlock weight="semibold">Semibold Weight</TextBlock>
      <TextBlock weight="bold">Bold Weight</TextBlock>
    </div>
  ),
};

export const Truncate: Story = {
  render: () => (
    <div style={{ width: '200px' }}>
      <TextBlock truncate>
        This is a very long text that will be truncated with an ellipsis when it exceeds the container width.
      </TextBlock>
    </div>
  ),
};

export const LineClamp: Story = {
  render: () => (
    <div style={{ width: '300px' }}>
      <TextBlock lineClamp={2}>
        This is a multi-line text that will be clamped to 2 lines. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
      </TextBlock>
    </div>
  ),
};

export const Transform: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
      <TextBlock transform="uppercase">uppercase text</TextBlock>
      <TextBlock transform="lowercase">LOWERCASE TEXT</TextBlock>
      <TextBlock transform="capitalize">capitalize text</TextBlock>
    </div>
  ),
};
