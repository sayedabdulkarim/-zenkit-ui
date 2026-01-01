import type { Meta, StoryObj } from '@storybook/react';
import { Masonry, MasonryItem } from '@zenkit-ui/core';

const meta: Meta<typeof Masonry> = {
  title: 'Layout/Masonry',
  component: Masonry,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

const items = [
  { height: 200, color: '#ff6b6b' },
  { height: 150, color: '#4ecdc4' },
  { height: 250, color: '#45b7d1' },
  { height: 180, color: '#96ceb4' },
  { height: 220, color: '#ffeaa7' },
  { height: 160, color: '#dfe6e9' },
  { height: 280, color: '#a29bfe' },
  { height: 140, color: '#fd79a8' },
  { height: 200, color: '#81ecec' },
  { height: 170, color: '#fab1a0' },
];

export const Default: Story = {
  render: () => (
    <Masonry columns={3} gap={16}>
      {items.map((item, i) => (
        <MasonryItem key={i}>
          <div
            style={{
              height: item.height,
              background: item.color,
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#333',
              fontWeight: 'bold',
            }}
          >
            Item {i + 1}
          </div>
        </MasonryItem>
      ))}
    </Masonry>
  ),
};

export const TwoColumns: Story = {
  render: () => (
    <Masonry columns={2} gap={20}>
      {items.slice(0, 6).map((item, i) => (
        <MasonryItem key={i}>
          <div
            style={{
              height: item.height,
              background: item.color,
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            Item {i + 1}
          </div>
        </MasonryItem>
      ))}
    </Masonry>
  ),
};

export const FourColumns: Story = {
  render: () => (
    <Masonry columns={4} gap={12}>
      {items.map((item, i) => (
        <MasonryItem key={i}>
          <div
            style={{
              height: item.height,
              background: item.color,
              borderRadius: '4px',
            }}
          />
        </MasonryItem>
      ))}
    </Masonry>
  ),
};

export const ImageGallery: Story = {
  render: () => (
    <Masonry columns={3} gap={16}>
      {[
        'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300',
        'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=300',
        'https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=300',
        'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=300',
        'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=300',
        'https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=300',
      ].map((src, i) => (
        <MasonryItem key={i}>
          <img
            src={src}
            alt={`Gallery item ${i + 1}`}
            style={{ width: '100%', borderRadius: '8px', display: 'block' }}
          />
        </MasonryItem>
      ))}
    </Masonry>
  ),
};
