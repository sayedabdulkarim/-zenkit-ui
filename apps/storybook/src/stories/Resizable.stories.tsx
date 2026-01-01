import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Resizable } from '@zenkit-ui/core';

const meta: Meta<typeof Resizable> = {
  title: 'Utility/Resizable',
  component: Resizable,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Resizable defaultSize={{ width: 300, height: 200 }}>
      <div
        style={{
          width: '100%',
          height: '100%',
          background: '#f5f5f5',
          border: '1px solid #e0e0e0',
          borderRadius: '8px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        Drag edges to resize
      </div>
    </Resizable>
  ),
};

export const Horizontal: Story = {
  render: () => (
    <Resizable defaultSize={{ width: 300, height: 150 }} enable={{ right: true }}>
      <div
        style={{
          width: '100%',
          height: '100%',
          background: '#e6f7ff',
          border: '1px solid #91d5ff',
          borderRadius: '8px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        Resize horizontally only
      </div>
    </Resizable>
  ),
};

export const Vertical: Story = {
  render: () => (
    <Resizable defaultSize={{ width: 300, height: 150 }} enable={{ bottom: true }}>
      <div
        style={{
          width: '100%',
          height: '100%',
          background: '#f6ffed',
          border: '1px solid #b7eb8f',
          borderRadius: '8px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        Resize vertically only
      </div>
    </Resizable>
  ),
};

export const WithMinMax: Story = {
  render: () => (
    <Resizable
      defaultSize={{ width: 300, height: 200 }}
      minWidth={200}
      maxWidth={500}
      minHeight={100}
      maxHeight={400}
    >
      <div
        style={{
          width: '100%',
          height: '100%',
          background: '#fff7e6',
          border: '1px solid #ffd591',
          borderRadius: '8px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          gap: '0.5rem',
        }}
      >
        <span>Min: 200x100</span>
        <span>Max: 500x400</span>
      </div>
    </Resizable>
  ),
};

export const Controlled: Story = {
  render: () => {
    const [size, setSize] = useState({ width: 300, height: 200 });
    return (
      <div>
        <p style={{ marginBottom: '1rem' }}>
          Current size: {size.width}px × {size.height}px
        </p>
        <Resizable
          size={size}
          onResizeStop={(e, direction, ref, d) => {
            setSize({
              width: size.width + d.width,
              height: size.height + d.height,
            });
          }}
        >
          <div
            style={{
              width: '100%',
              height: '100%',
              background: '#f9f0ff',
              border: '1px solid #d3adf7',
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            Controlled resize
          </div>
        </Resizable>
      </div>
    );
  },
};

export const Grid: Story = {
  render: () => (
    <Resizable defaultSize={{ width: 300, height: 200 }} grid={[50, 50]}>
      <div
        style={{
          width: '100%',
          height: '100%',
          background: '#fff1f0',
          border: '1px solid #ffa39e',
          borderRadius: '8px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        Snaps to 50px grid
      </div>
    </Resizable>
  ),
};

export const AspectRatio: Story = {
  render: () => (
    <Resizable defaultSize={{ width: 300, height: 200 }} lockAspectRatio>
      <div
        style={{
          width: '100%',
          height: '100%',
          background: '#e6fffb',
          border: '1px solid #87e8de',
          borderRadius: '8px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        Maintains aspect ratio
      </div>
    </Resizable>
  ),
};

export const SplitPane: Story = {
  render: () => {
    const [leftWidth, setLeftWidth] = useState(200);
    return (
      <div style={{ display: 'flex', height: '300px', border: '1px solid #e0e0e0', borderRadius: '8px', overflow: 'hidden' }}>
        <Resizable
          size={{ width: leftWidth, height: '100%' }}
          enable={{ right: true }}
          minWidth={100}
          maxWidth={400}
          onResizeStop={(e, direction, ref, d) => {
            setLeftWidth(leftWidth + d.width);
          }}
        >
          <div style={{ width: '100%', height: '100%', background: '#f5f5f5', padding: '1rem' }}>
            Left Panel ({leftWidth}px)
          </div>
        </Resizable>
        <div style={{ flex: 1, padding: '1rem' }}>
          Right Panel (flexible)
        </div>
      </div>
    );
  },
};
