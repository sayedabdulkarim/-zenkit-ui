import type { Meta, StoryObj } from '@storybook/react';
import { HeadingText } from '@zenkit-ui/core';

const meta: Meta<typeof HeadingText> = {
  title: 'Components/HeadingText',
  component: HeadingText,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    level: { control: 'select', options: [1, 2, 3, 4, 5, 6] },
    size: { control: 'select', options: ['xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl'] },
    weight: { control: 'select', options: ['light', 'normal', 'medium', 'semibold', 'bold'] },
    align: { control: 'select', options: ['left', 'center', 'right'] },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Heading Text',
  },
};

export const Levels: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <HeadingText level={1}>Heading 1</HeadingText>
      <HeadingText level={2}>Heading 2</HeadingText>
      <HeadingText level={3}>Heading 3</HeadingText>
      <HeadingText level={4}>Heading 4</HeadingText>
      <HeadingText level={5}>Heading 5</HeadingText>
      <HeadingText level={6}>Heading 6</HeadingText>
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
      <HeadingText size="xs">Extra Small</HeadingText>
      <HeadingText size="sm">Small</HeadingText>
      <HeadingText size="md">Medium</HeadingText>
      <HeadingText size="lg">Large</HeadingText>
      <HeadingText size="xl">Extra Large</HeadingText>
      <HeadingText size="2xl">2X Large</HeadingText>
      <HeadingText size="3xl">3X Large</HeadingText>
      <HeadingText size="4xl">4X Large</HeadingText>
    </div>
  ),
};

export const Colors: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
      <HeadingText color="default">Default Color</HeadingText>
      <HeadingText color="primary">Primary Color</HeadingText>
      <HeadingText color="secondary">Secondary Color</HeadingText>
      <HeadingText color="muted">Muted Color</HeadingText>
    </div>
  ),
};

export const Weights: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
      <HeadingText weight="light">Light Weight</HeadingText>
      <HeadingText weight="normal">Normal Weight</HeadingText>
      <HeadingText weight="medium">Medium Weight</HeadingText>
      <HeadingText weight="semibold">Semibold Weight</HeadingText>
      <HeadingText weight="bold">Bold Weight</HeadingText>
    </div>
  ),
};

export const Alignment: Story = {
  render: () => (
    <div style={{ width: '400px', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
      <HeadingText align="left">Left Aligned</HeadingText>
      <HeadingText align="center">Center Aligned</HeadingText>
      <HeadingText align="right">Right Aligned</HeadingText>
    </div>
  ),
};
