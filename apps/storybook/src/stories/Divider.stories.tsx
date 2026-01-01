import type { Meta, StoryObj } from '@storybook/react';
import { Divider } from '@zenkit-ui/core';

const meta: Meta<typeof Divider> = {
  title: 'Components/Divider',
  component: Divider,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    orientation: { control: 'select', options: ['horizontal', 'vertical'] },
    variant: { control: 'select', options: ['solid', 'dashed', 'dotted'] },
    labelPosition: { control: 'select', options: ['left', 'center', 'right'] },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const WithText: Story = {
  render: () => (
    <div>
      <p>Content above</p>
      <Divider>OR</Divider>
      <p>Content below</p>
    </div>
  ),
};

export const TextPositions: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <Divider labelPosition="left">Left</Divider>
      <Divider labelPosition="center">Center</Divider>
      <Divider labelPosition="right">Right</Divider>
    </div>
  ),
};

export const Variants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <Divider variant="solid" />
      <Divider variant="dashed" />
      <Divider variant="dotted" />
    </div>
  ),
};

export const Vertical: Story = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', height: '50px' }}>
      <span>Left</span>
      <Divider orientation="vertical" />
      <span>Center</span>
      <Divider orientation="vertical" />
      <span>Right</span>
    </div>
  ),
};
