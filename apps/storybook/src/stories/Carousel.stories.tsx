import type { Meta, StoryObj } from '@storybook/react';
import { Carousel, CarouselItem } from '@zenkit-ui/core';

const meta: Meta<typeof Carousel> = {
  title: 'Data Display/Carousel',
  component: Carousel,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

const slides = [
  { bg: '#4a90d9', text: 'Slide 1' },
  { bg: '#50c878', text: 'Slide 2' },
  { bg: '#ff6b6b', text: 'Slide 3' },
  { bg: '#ffd93d', text: 'Slide 4' },
];

export const Default: Story = {
  render: () => (
    <Carousel>
      {slides.map((slide, i) => (
        <CarouselItem key={i}>
          <div style={{
            height: '300px',
            background: slide.bg,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            fontSize: '2rem',
            fontWeight: 'bold',
          }}>
            {slide.text}
          </div>
        </CarouselItem>
      ))}
    </Carousel>
  ),
};

export const Autoplay: Story = {
  render: () => (
    <Carousel autoplay interval={3000}>
      {slides.map((slide, i) => (
        <CarouselItem key={i}>
          <div style={{
            height: '300px',
            background: slide.bg,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            fontSize: '2rem',
          }}>
            {slide.text}
          </div>
        </CarouselItem>
      ))}
    </Carousel>
  ),
};

export const WithArrows: Story = {
  render: () => (
    <Carousel arrows>
      {slides.map((slide, i) => (
        <CarouselItem key={i}>
          <div style={{
            height: '300px',
            background: slide.bg,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            fontSize: '2rem',
          }}>
            {slide.text}
          </div>
        </CarouselItem>
      ))}
    </Carousel>
  ),
};

export const WithDots: Story = {
  render: () => (
    <Carousel dots dotsPosition="bottom">
      {slides.map((slide, i) => (
        <CarouselItem key={i}>
          <div style={{
            height: '300px',
            background: slide.bg,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            fontSize: '2rem',
          }}>
            {slide.text}
          </div>
        </CarouselItem>
      ))}
    </Carousel>
  ),
};

export const ImageCarousel: Story = {
  render: () => (
    <Carousel arrows dots>
      {[
        'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800',
        'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800',
        'https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=800',
      ].map((src, i) => (
        <CarouselItem key={i}>
          <img
            src={src}
            alt={`Slide ${i + 1}`}
            style={{ width: '100%', height: '400px', objectFit: 'cover' }}
          />
        </CarouselItem>
      ))}
    </Carousel>
  ),
};
