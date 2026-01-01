import type { Meta, StoryObj } from '@storybook/react';
import { ImageList, ImageListItem } from '@zenkit-ui/core';

const meta: Meta<typeof ImageList> = {
  title: 'Data Display/ImageList',
  component: ImageList,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

const images = [
  { src: 'https://picsum.photos/seed/1/400/300', title: 'Image 1' },
  { src: 'https://picsum.photos/seed/2/400/400', title: 'Image 2' },
  { src: 'https://picsum.photos/seed/3/400/500', title: 'Image 3' },
  { src: 'https://picsum.photos/seed/4/400/350', title: 'Image 4' },
  { src: 'https://picsum.photos/seed/5/400/450', title: 'Image 5' },
  { src: 'https://picsum.photos/seed/6/400/300', title: 'Image 6' },
];

export const Default: Story = {
  render: () => (
    <ImageList cols={3} gap={8}>
      {images.map((img, i) => (
        <ImageListItem key={i}>
          <img src={img.src} alt={img.title} style={{ width: '100%', display: 'block' }} />
        </ImageListItem>
      ))}
    </ImageList>
  ),
};

export const TwoCols: Story = {
  render: () => (
    <ImageList cols={2} gap={16}>
      {images.map((img, i) => (
        <ImageListItem key={i}>
          <img src={img.src} alt={img.title} style={{ width: '100%', display: 'block' }} />
        </ImageListItem>
      ))}
    </ImageList>
  ),
};

export const FourCols: Story = {
  render: () => (
    <ImageList cols={4} gap={4}>
      {images.map((img, i) => (
        <ImageListItem key={i}>
          <img src={img.src} alt={img.title} style={{ width: '100%', display: 'block' }} />
        </ImageListItem>
      ))}
    </ImageList>
  ),
};

export const WithTitles: Story = {
  render: () => (
    <ImageList cols={3} gap={8}>
      {images.map((img, i) => (
        <ImageListItem key={i}>
          <img src={img.src} alt={img.title} style={{ width: '100%', display: 'block' }} />
          <div style={{ padding: '0.5rem', background: 'rgba(0,0,0,0.6)', color: 'white', position: 'absolute', bottom: 0, left: 0, right: 0 }}>
            {img.title}
          </div>
        </ImageListItem>
      ))}
    </ImageList>
  ),
};

export const Masonry: Story = {
  render: () => (
    <ImageList variant="masonry" cols={3} gap={8}>
      {images.map((img, i) => (
        <ImageListItem key={i}>
          <img src={img.src} alt={img.title} style={{ width: '100%', display: 'block' }} />
        </ImageListItem>
      ))}
    </ImageList>
  ),
};

export const Quilted: Story = {
  render: () => (
    <ImageList variant="quilted" cols={4} gap={4} rowHeight={120}>
      {images.map((img, i) => (
        <ImageListItem key={i} cols={i === 0 ? 2 : 1} rows={i === 0 ? 2 : 1}>
          <img src={img.src} alt={img.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </ImageListItem>
      ))}
    </ImageList>
  ),
};
