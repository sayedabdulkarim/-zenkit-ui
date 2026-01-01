import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { TagsInput } from '@zenkit-ui/core';

const meta: Meta<typeof TagsInput> = {
  title: 'Data Entry/TagsInput',
  component: TagsInput,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    const [tags, setTags] = useState<string[]>(['React', 'TypeScript']);
    return (
      <TagsInput
        value={tags}
        onChange={setTags}
        placeholder="Add tags..."
      />
    );
  },
};

export const Empty: Story = {
  render: () => {
    const [tags, setTags] = useState<string[]>([]);
    return (
      <TagsInput
        value={tags}
        onChange={setTags}
        placeholder="Type and press Enter to add tags"
      />
    );
  },
};

export const MaxTags: Story = {
  render: () => {
    const [tags, setTags] = useState<string[]>(['One', 'Two']);
    return (
      <TagsInput
        value={tags}
        onChange={setTags}
        maxTags={5}
        placeholder="Max 5 tags"
      />
    );
  },
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: '300px' }}>
      <TagsInput size="sm" value={['Small']} placeholder="Small" />
      <TagsInput size="md" value={['Medium']} placeholder="Medium" />
      <TagsInput size="lg" value={['Large']} placeholder="Large" />
    </div>
  ),
};

export const Clearable: Story = {
  render: () => {
    const [tags, setTags] = useState<string[]>(['Tag 1', 'Tag 2', 'Tag 3']);
    return (
      <TagsInput
        value={tags}
        onChange={setTags}
        clearable
        placeholder="Clearable tags"
      />
    );
  },
};

export const Disabled: Story = {
  args: {
    value: ['Disabled', 'Tags'],
    disabled: true,
  },
};

export const WithValidation: Story = {
  render: () => {
    const [tags, setTags] = useState<string[]>([]);
    return (
      <TagsInput
        value={tags}
        onChange={setTags}
        validate={(tag) => tag.length >= 2}
        placeholder="Min 2 characters per tag"
      />
    );
  },
};
