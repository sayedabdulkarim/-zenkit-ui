import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Tag } from '@zenkit-ui/core';

const meta: Meta<typeof Tag> = {
  title: 'Components/Tag',
  component: Tag,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'select', options: ['solid', 'soft', 'outline'] },
    color: { control: 'select', options: ['default', 'primary', 'secondary', 'success', 'danger', 'warning', 'info'] },
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Tag',
  },
};

export const Colors: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
      <Tag color="default">Default</Tag>
      <Tag color="primary">Primary</Tag>
      <Tag color="secondary">Secondary</Tag>
      <Tag color="success">Success</Tag>
      <Tag color="danger">Danger</Tag>
      <Tag color="warning">Warning</Tag>
      <Tag color="info">Info</Tag>
    </div>
  ),
};

export const Variants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '0.5rem' }}>
      <Tag variant="soft" color="primary">Soft</Tag>
      <Tag variant="solid" color="primary">Solid</Tag>
      <Tag variant="outline" color="primary">Outline</Tag>
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
      <Tag size="sm">Small</Tag>
      <Tag size="md">Medium</Tag>
      <Tag size="lg">Large</Tag>
    </div>
  ),
};

export const Closable: Story = {
  render: () => {
    const [tags, setTags] = useState(['React', 'Vue', 'Angular', 'Svelte']);
    return (
      <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
        {tags.map((tag) => (
          <Tag
            key={tag}
            closable
            onClose={() => setTags(tags.filter((t) => t !== tag))}
          >
            {tag}
          </Tag>
        ))}
      </div>
    );
  },
};

export const WithIcon: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '0.5rem' }}>
      <Tag icon={<span>🏷️</span>}>Label</Tag>
      <Tag icon={<span>⭐</span>} color="warning">Featured</Tag>
      <Tag icon={<span>✓</span>} color="success">Verified</Tag>
    </div>
  ),
};
