import type { Meta, StoryObj } from '@storybook/react';
import { Container } from '@zenkit-ui/core';

const meta: Meta<typeof Container> = {
  title: 'Layout/Container',
  component: Container,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

const Content = () => (
  <div
    style={{
      background: 'var(--primary)',
      color: 'white',
      padding: '2rem',
      borderRadius: 'var(--radius)',
      textAlign: 'center',
    }}
  >
    Container Content
  </div>
);

export const Default: Story = {
  render: () => (
    <Container>
      <Content />
    </Container>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      {(['sm', 'md', 'lg', 'xl', 'xxl', 'fluid'] as const).map((size) => (
        <div key={size}>
          <p style={{ textAlign: 'center', marginBottom: '0.5rem' }}>Size: {size}</p>
          <Container size={size}>
            <Content />
          </Container>
        </div>
      ))}
    </div>
  ),
};

export const Fluid: Story = {
  render: () => (
    <Container size="fluid">
      <Content />
    </Container>
  ),
};

export const NotCentered: Story = {
  render: () => (
    <Container centered={false}>
      <Content />
    </Container>
  ),
};

export const NoPadding: Story = {
  render: () => (
    <Container padding={false}>
      <div
        style={{
          background: 'var(--primary)',
          color: 'white',
          padding: '2rem',
          textAlign: 'center',
        }}
      >
        Container without padding
      </div>
    </Container>
  ),
};
