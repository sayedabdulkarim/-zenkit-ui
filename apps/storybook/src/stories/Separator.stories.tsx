import type { Meta, StoryObj } from '@storybook/react';
import { Separator } from '@zenkit-ui/core';

const meta: Meta<typeof Separator> = {
  title: 'Components/Separator',
  component: Separator,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    orientation: { control: 'select', options: ['horizontal', 'vertical'] },
    variant: { control: 'select', options: ['solid', 'dashed', 'dotted'] },
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div style={{ width: '300px' }}>
      <p>Content above</p>
      <Separator />
      <p>Content below</p>
    </div>
  ),
};

export const Vertical: Story = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', height: '50px', gap: '1rem' }}>
      <span>Left</span>
      <Separator orientation="vertical" />
      <span>Right</span>
    </div>
  ),
};

export const Variants: Story = {
  render: () => (
    <div style={{ width: '300px', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <div>
        <p>Solid</p>
        <Separator variant="solid" />
      </div>
      <div>
        <p>Dashed</p>
        <Separator variant="dashed" />
      </div>
      <div>
        <p>Dotted</p>
        <Separator variant="dotted" />
      </div>
    </div>
  ),
};

export const WithLabel: Story = {
  render: () => (
    <div style={{ width: '300px' }}>
      <Separator label="OR" />
    </div>
  ),
};

export const LabelPositions: Story = {
  render: () => (
    <div style={{ width: '300px', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <Separator label="Left" labelPosition="left" />
      <Separator label="Center" labelPosition="center" />
      <Separator label="Right" labelPosition="right" />
    </div>
  ),
};
