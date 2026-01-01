import type { Meta, StoryObj } from '@storybook/react';
import { Popover, Button } from '@zenkit-ui/core';

const meta: Meta<typeof Popover> = {
  title: 'Components/Popover',
  component: Popover,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Popover content="This is popover content">
      <Button>Click me</Button>
    </Popover>
  ),
};

export const WithTitle: Story = {
  render: () => (
    <Popover title="Popover Title" content="This is the popover body content with more details.">
      <Button>With Title</Button>
    </Popover>
  ),
};

export const Placements: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', padding: '5rem' }}>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Popover content="Top popover" placement="top">
          <Button>Top</Button>
        </Popover>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Popover content="Left popover" placement="left">
          <Button>Left</Button>
        </Popover>
        <Popover content="Right popover" placement="right">
          <Button>Right</Button>
        </Popover>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Popover content="Bottom popover" placement="bottom">
          <Button>Bottom</Button>
        </Popover>
      </div>
    </div>
  ),
};

export const HoverTrigger: Story = {
  render: () => (
    <Popover content="Hover triggered popover" trigger="hover">
      <Button>Hover me</Button>
    </Popover>
  ),
};

export const RichContent: Story = {
  render: () => (
    <Popover
      title="User Settings"
      content={
        <div>
          <p style={{ margin: '0 0 0.5rem' }}>Manage your account settings and preferences.</p>
          <Button size="sm">Go to Settings</Button>
        </div>
      }
    >
      <Button>Settings</Button>
    </Popover>
  ),
};
