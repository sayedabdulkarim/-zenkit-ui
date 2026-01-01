import type { Meta, StoryObj } from '@storybook/react';
import { Tooltip, Button } from '@zenkit-ui/core';

const meta: Meta<typeof Tooltip> = {
  title: 'Components/Tooltip',
  component: Tooltip,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Tooltip content="This is a tooltip">
      <Button>Hover me</Button>
    </Tooltip>
  ),
};

export const Placements: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', padding: '3rem' }}>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Tooltip content="Top tooltip" placement="top">
          <Button>Top</Button>
        </Tooltip>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Tooltip content="Left tooltip" placement="left">
          <Button>Left</Button>
        </Tooltip>
        <Tooltip content="Right tooltip" placement="right">
          <Button>Right</Button>
        </Tooltip>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Tooltip content="Bottom tooltip" placement="bottom">
          <Button>Bottom</Button>
        </Tooltip>
      </div>
    </div>
  ),
};

export const WithDelay: Story = {
  render: () => (
    <Tooltip content="Appears after 500ms" delay={500}>
      <Button>Hover (delayed)</Button>
    </Tooltip>
  ),
};

export const Disabled: Story = {
  render: () => (
    <Tooltip content="Won't appear" disabled>
      <Button>Disabled tooltip</Button>
    </Tooltip>
  ),
};

export const NoArrow: Story = {
  render: () => (
    <Tooltip content="No arrow" arrow={false}>
      <Button>No arrow</Button>
    </Tooltip>
  ),
};

export const LongContent: Story = {
  render: () => (
    <Tooltip content="This is a longer tooltip content that provides more detailed information about the element.">
      <Button>Hover for details</Button>
    </Tooltip>
  ),
};
