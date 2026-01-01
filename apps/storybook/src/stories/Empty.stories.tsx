import type { Meta, StoryObj } from '@storybook/react';
import { Empty, Button } from '@zenkit-ui/core';

const meta: Meta<typeof Empty> = {
  title: 'Components/Empty',
  component: Empty,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const CustomDescription: Story = {
  args: {
    description: 'No items found in your cart',
  },
};

export const WithAction: Story = {
  render: () => (
    <Empty description="No results found">
      <Button>Create New</Button>
    </Empty>
  ),
};

export const NoDescription: Story = {
  args: {
    description: false,
  },
};

export const CustomImage: Story = {
  render: () => (
    <Empty
      image={
        <svg viewBox="0 0 24 24" width="64" height="64" fill="none" stroke="#d9d9d9" strokeWidth="1">
          <path d="M12 2v20M2 12h20" />
          <circle cx="12" cy="12" r="10" />
        </svg>
      }
      description="Custom empty state"
    />
  ),
};

export const LargeImage: Story = {
  args: {
    imageSize: 120,
    description: 'Larger image size',
  },
};

export const InContext: Story = {
  render: () => (
    <div style={{ border: '1px solid #e8e8e8', borderRadius: '8px', padding: '2rem', width: '400px' }}>
      <h3 style={{ marginBottom: '1rem' }}>My Items</h3>
      <Empty description="You haven't added any items yet">
        <Button size="sm">Add Item</Button>
      </Empty>
    </div>
  ),
};
