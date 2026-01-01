import type { Meta, StoryObj } from '@storybook/react';
import { AspectRatio } from '@zenkit-ui/core';

const meta: Meta<typeof AspectRatio> = {
  title: 'Layout/AspectRatio',
  component: AspectRatio,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div style={{ maxWidth: '400px' }}>
      <AspectRatio ratio={16 / 9}>
        <img
          src="https://images.unsplash.com/photo-1535025183041-0991a977e25b?w=300"
          alt="Landscape"
          style={{ objectFit: 'cover', width: '100%', height: '100%' }}
        />
      </AspectRatio>
    </div>
  ),
};

export const Square: Story = {
  render: () => (
    <div style={{ maxWidth: '200px' }}>
      <AspectRatio ratio={1}>
        <div style={{
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontSize: '1.5rem'
        }}>
          1:1
        </div>
      </AspectRatio>
    </div>
  ),
};

export const Portrait: Story = {
  render: () => (
    <div style={{ maxWidth: '200px' }}>
      <AspectRatio ratio={3 / 4}>
        <div style={{
          background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontSize: '1.5rem'
        }}>
          3:4
        </div>
      </AspectRatio>
    </div>
  ),
};

export const Video: Story = {
  render: () => (
    <div style={{ maxWidth: '600px' }}>
      <AspectRatio ratio={16 / 9}>
        <iframe
          src="https://www.youtube.com/embed/dQw4w9WgXcQ"
          title="YouTube video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{ width: '100%', height: '100%', border: 'none' }}
        />
      </AspectRatio>
    </div>
  ),
};

export const Ratios: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
      {[1, 4/3, 16/9, 21/9].map((ratio, i) => (
        <div key={i} style={{ width: '150px' }}>
          <AspectRatio ratio={ratio}>
            <div style={{
              background: '#ddd',
              width: '100%',
              height: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              {ratio.toFixed(2)}
            </div>
          </AspectRatio>
        </div>
      ))}
    </div>
  ),
};
