import type { Meta, StoryObj } from '@storybook/react';
import { FileInput } from '@zenkit-ui/core';

const meta: Meta<typeof FileInput> = {
  title: 'Components/FileInput',
  component: FileInput,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
    variant: { control: 'select', options: ['default', 'filled', 'dropzone'] },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: 'Choose a file',
  },
};

export const WithLabel: Story = {
  args: {
    label: 'Upload Document',
    placeholder: 'Click to select file',
  },
};

export const AcceptTypes: Story = {
  args: {
    label: 'Upload Image',
    accept: 'image/*',
    placeholder: 'Select an image file',
  },
};

export const Multiple: Story = {
  args: {
    label: 'Upload Files',
    multiple: true,
    placeholder: 'Select multiple files',
  },
};

export const Dropzone: Story = {
  args: {
    variant: 'dropzone',
    label: 'Upload Files',
    placeholder: 'Drag and drop files here or click to browse',
  },
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: '300px' }}>
      <FileInput size="sm" placeholder="Small" />
      <FileInput size="md" placeholder="Medium" />
      <FileInput size="lg" placeholder="Large" />
    </div>
  ),
};

export const Disabled: Story = {
  args: {
    label: 'Disabled Input',
    placeholder: 'Cannot select files',
    disabled: true,
  },
};

export const WithError: Story = {
  args: {
    label: 'Required File',
    placeholder: 'Select a file',
    error: 'Please select a file',
  },
};
