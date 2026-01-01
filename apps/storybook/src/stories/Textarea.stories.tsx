import type { Meta, StoryObj } from '@storybook/react';
import { Textarea } from '@zenkit-ui/core';

const meta: Meta<typeof Textarea> = {
  title: 'Components/Textarea',
  component: Textarea,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: 'Enter your message...',
    rows: 4,
  },
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: '300px' }}>
      <Textarea size="sm" placeholder="Small textarea" rows={3} />
      <Textarea size="md" placeholder="Medium textarea" rows={3} />
      <Textarea size="lg" placeholder="Large textarea" rows={3} />
    </div>
  ),
};

export const AutoGrow: Story = {
  args: {
    placeholder: 'Start typing... I will grow!',
    autoGrow: true,
    minRows: 2,
    maxRows: 8,
  },
};

export const WithCharacterCount: Story = {
  args: {
    placeholder: 'Max 100 characters...',
    showCount: true,
    maxLength: 100,
    rows: 3,
  },
};

export const ErrorState: Story = {
  args: {
    placeholder: 'Invalid input',
    error: true,
    defaultValue: 'This field has an error',
    rows: 3,
  },
};

export const Disabled: Story = {
  args: {
    placeholder: 'Disabled textarea',
    disabled: true,
    defaultValue: 'Cannot edit this',
    rows: 3,
  },
};

export const FullWidth: Story = {
  args: {
    placeholder: 'Full width textarea',
    fullWidth: true,
    rows: 4,
  },
  parameters: {
    layout: 'padded',
  },
};
