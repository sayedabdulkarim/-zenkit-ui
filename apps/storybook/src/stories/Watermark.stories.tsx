import type { Meta, StoryObj } from '@storybook/react';
import { Watermark } from '@zenkit-ui/core';

const meta: Meta<typeof Watermark> = {
  title: 'Feedback/Watermark',
  component: Watermark,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Watermark content="ZenKit UI">
      <div style={{ height: '300px', background: '#f5f5f5', padding: '1rem' }}>
        <h3>Document Content</h3>
        <p>This content is protected with a watermark.</p>
        <p>The watermark appears as a subtle overlay across the entire content area.</p>
      </div>
    </Watermark>
  ),
};

export const MultiLine: Story = {
  render: () => (
    <Watermark content={['ZenKit UI', 'Confidential']}>
      <div style={{ height: '300px', background: '#f5f5f5', padding: '1rem' }}>
        <h3>Multi-line Watermark</h3>
        <p>This watermark has multiple lines of text.</p>
      </div>
    </Watermark>
  ),
};

export const CustomStyle: Story = {
  render: () => (
    <Watermark
      content="DRAFT"
      font={{ color: 'rgba(255, 0, 0, 0.15)', fontSize: 24 }}
      rotate={-30}
    >
      <div style={{ height: '300px', background: '#f5f5f5', padding: '1rem' }}>
        <h3>Custom Styled Watermark</h3>
        <p>This watermark uses custom font color and rotation.</p>
      </div>
    </Watermark>
  ),
};

export const DensePattern: Story = {
  render: () => (
    <Watermark content="ZenKit" gap={[50, 50]}>
      <div style={{ height: '300px', background: '#f5f5f5', padding: '1rem' }}>
        <h3>Dense Watermark Pattern</h3>
        <p>This watermark has a denser pattern with smaller gaps.</p>
      </div>
    </Watermark>
  ),
};

export const SparsePattern: Story = {
  render: () => (
    <Watermark content="ZenKit" gap={[200, 200]}>
      <div style={{ height: '300px', background: '#f5f5f5', padding: '1rem' }}>
        <h3>Sparse Watermark Pattern</h3>
        <p>This watermark has a sparser pattern with larger gaps.</p>
      </div>
    </Watermark>
  ),
};

export const WithImage: Story = {
  render: () => (
    <Watermark image="https://via.placeholder.com/100x50?text=Logo" width={100} height={50}>
      <div style={{ height: '300px', background: '#f5f5f5', padding: '1rem' }}>
        <h3>Image Watermark</h3>
        <p>This watermark uses an image instead of text.</p>
      </div>
    </Watermark>
  ),
};

export const FullPage: Story = {
  render: () => (
    <Watermark content="Confidential" inherit={false}>
      <div style={{ minHeight: '400px', background: '#fff', padding: '1rem' }}>
        <h3>Full Page Watermark</h3>
        <p>This watermark covers the entire page regardless of content size.</p>
        <div style={{ marginTop: '2rem' }}>
          <h4>Section 1</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div style={{ marginTop: '2rem' }}>
          <h4>Section 2</h4>
          <p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
      </div>
    </Watermark>
  ),
};
