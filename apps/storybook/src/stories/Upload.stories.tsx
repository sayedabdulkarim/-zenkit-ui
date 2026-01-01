import type { Meta, StoryObj } from '@storybook/react';
import { Upload } from '@zenkit-ui/core';

const meta: Meta<typeof Upload> = {
  title: 'Data Entry/Upload',
  component: Upload,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Upload
      onUpload={(files) => console.log('Uploaded:', files)}
    />
  ),
};

export const Drag: Story = {
  render: () => (
    <Upload
      type="drag"
      onUpload={(files) => console.log('Uploaded:', files)}
    >
      <div style={{ padding: '2rem', textAlign: 'center' }}>
        <p>📁 Drag files here or click to upload</p>
        <p style={{ color: '#888', fontSize: '0.875rem' }}>
          Support for single or bulk upload
        </p>
      </div>
    </Upload>
  ),
};

export const Multiple: Story = {
  render: () => (
    <Upload
      multiple
      onUpload={(files) => console.log('Uploaded:', files)}
    />
  ),
};

export const AcceptImages: Story = {
  render: () => (
    <Upload
      accept="image/*"
      type="drag"
      onUpload={(files) => console.log('Uploaded:', files)}
    >
      <div style={{ padding: '2rem', textAlign: 'center' }}>
        <p>🖼️ Upload images only</p>
        <p style={{ color: '#888', fontSize: '0.875rem' }}>
          PNG, JPG, GIF up to 10MB
        </p>
      </div>
    </Upload>
  ),
};

export const WithFileList: Story = {
  render: () => (
    <Upload
      showFileList
      multiple
      defaultFileList={[
        { uid: '1', name: 'document.pdf', status: 'done', size: 1024000 },
        { uid: '2', name: 'image.png', status: 'done', size: 512000 },
      ]}
      onUpload={(files) => console.log('Uploaded:', files)}
    />
  ),
};

export const Disabled: Story = {
  render: () => (
    <Upload
      disabled
      onUpload={(files) => console.log('Uploaded:', files)}
    />
  ),
};
