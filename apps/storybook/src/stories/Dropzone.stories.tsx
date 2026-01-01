import type { Meta, StoryObj } from '@storybook/react';
import { Dropzone } from '@zenkit-ui/core';

const meta: Meta<typeof Dropzone> = {
  title: 'Data Entry/Dropzone',
  component: Dropzone,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Dropzone
      onDrop={(files) => console.log('Dropped:', files)}
    />
  ),
};

export const WithPreview: Story = {
  render: () => (
    <Dropzone
      onDrop={(files) => console.log('Dropped:', files)}
      showPreview
      accept="image/*"
    />
  ),
};

export const Multiple: Story = {
  render: () => (
    <Dropzone
      onDrop={(files) => console.log('Dropped:', files)}
      multiple
    >
      <p>📁 Drop multiple files here</p>
      <p style={{ color: '#888', fontSize: '0.875rem' }}>or click to browse</p>
    </Dropzone>
  ),
};

export const AcceptImages: Story = {
  render: () => (
    <Dropzone
      onDrop={(files) => console.log('Dropped:', files)}
      accept="image/*"
    >
      <p>🖼️ Drop images here</p>
      <p style={{ color: '#888', fontSize: '0.875rem' }}>PNG, JPG, GIF only</p>
    </Dropzone>
  ),
};

export const MaxSize: Story = {
  render: () => (
    <Dropzone
      onDrop={(files) => console.log('Dropped:', files)}
      maxSize={5 * 1024 * 1024}
    >
      <p>📦 Drop files here</p>
      <p style={{ color: '#888', fontSize: '0.875rem' }}>Max file size: 5MB</p>
    </Dropzone>
  ),
};

export const Disabled: Story = {
  render: () => (
    <Dropzone
      onDrop={(files) => console.log('Dropped:', files)}
      disabled
    >
      <p>Upload disabled</p>
    </Dropzone>
  ),
};

export const CustomContent: Story = {
  render: () => (
    <Dropzone
      onDrop={(files) => console.log('Dropped:', files)}
    >
      <div style={{ textAlign: 'center' }}>
        <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>☁️</div>
        <h3 style={{ marginBottom: '0.5rem' }}>Upload your files</h3>
        <p style={{ color: '#888', marginBottom: '1rem' }}>
          Drag and drop your files here or click to browse
        </p>
        <button
          type="button"
          style={{
            padding: '0.5rem 1rem',
            background: '#1890ff',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
          }}
        >
          Select Files
        </button>
      </div>
    </Dropzone>
  ),
};
