import type { Meta, StoryObj } from '@storybook/react';
import { Image } from '@zenkit-ui/core';

const meta: Meta<typeof Image> = {
  title: 'Components/Image',
  component: Image,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    fit: { control: 'select', options: ['contain', 'cover', 'fill', 'none', 'scale-down'] },
    rounded: { control: 'select', options: [false, true, 'sm', 'md', 'lg', 'full'] },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    src: 'https://picsum.photos/300/200',
    alt: 'Random image',
    width: 300,
    height: 200,
  },
};

export const Rounded: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem' }}>
      <Image src="https://picsum.photos/100/100?1" width={100} height={100} rounded="sm" />
      <Image src="https://picsum.photos/100/100?2" width={100} height={100} rounded="md" />
      <Image src="https://picsum.photos/100/100?3" width={100} height={100} rounded="lg" />
      <Image src="https://picsum.photos/100/100?4" width={100} height={100} rounded="full" />
    </div>
  ),
};

export const ObjectFit: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem' }}>
      <div>
        <p>Cover</p>
        <Image
          src="https://picsum.photos/400/300"
          width={150}
          height={150}
          fit="cover"
          style={{ border: '1px solid #ccc' }}
        />
      </div>
      <div>
        <p>Contain</p>
        <Image
          src="https://picsum.photos/400/300"
          width={150}
          height={150}
          fit="contain"
          style={{ border: '1px solid #ccc' }}
        />
      </div>
      <div>
        <p>Fill</p>
        <Image
          src="https://picsum.photos/400/300"
          width={150}
          height={150}
          fit="fill"
          style={{ border: '1px solid #ccc' }}
        />
      </div>
    </div>
  ),
};

export const WithPreview: Story = {
  render: () => (
    <div>
      <p style={{ marginBottom: '0.5rem' }}>Click to preview</p>
      <Image
        src="https://picsum.photos/600/400"
        width={300}
        height={200}
        preview
        alt="Click to preview"
      />
    </div>
  ),
};

export const WithFallback: Story = {
  render: () => (
    <Image
      src="https://invalid-url.example/image.jpg"
      width={200}
      height={200}
      fallback={
        <div
          style={{
            width: 200,
            height: 200,
            background: '#f5f5f5',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#999',
          }}
        >
          Image not found
        </div>
      }
    />
  ),
};

export const WithPlaceholder: Story = {
  render: () => (
    <Image
      src="https://picsum.photos/300/200?delay=2000"
      width={300}
      height={200}
      placeholder={
        <div
          style={{
            width: 300,
            height: 200,
            background: 'linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%)',
            backgroundSize: '200% 100%',
            animation: 'shimmer 1.5s infinite',
          }}
        />
      }
    />
  ),
};
