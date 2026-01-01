import type { Meta, StoryObj } from '@storybook/react';
import { Flex } from '@zenkit-ui/core';

const meta: Meta<typeof Flex> = {
  title: 'Layout/Flex',
  component: Flex,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

const Box = ({ children, size = 'md' }: { children?: React.ReactNode; size?: 'sm' | 'md' | 'lg' }) => {
  const sizes = { sm: '50px', md: '80px', lg: '120px' };
  return (
    <div
      style={{
        width: sizes[size],
        height: sizes[size],
        backgroundColor: 'var(--primary)',
        color: 'white',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 'var(--radius)',
      }}
    >
      {children}
    </div>
  );
};

export const Default: Story = {
  render: () => (
    <Flex gap={3}>
      <Box>1</Box>
      <Box>2</Box>
      <Box>3</Box>
    </Flex>
  ),
};

export const Direction: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <div>
        <p>Row (default):</p>
        <Flex direction="row" gap={2}>
          <Box size="sm">1</Box>
          <Box size="sm">2</Box>
          <Box size="sm">3</Box>
        </Flex>
      </div>
      <div>
        <p>Row Reverse:</p>
        <Flex direction="row-reverse" gap={2}>
          <Box size="sm">1</Box>
          <Box size="sm">2</Box>
          <Box size="sm">3</Box>
        </Flex>
      </div>
      <div>
        <p>Column:</p>
        <Flex direction="column" gap={2}>
          <Box size="sm">1</Box>
          <Box size="sm">2</Box>
          <Box size="sm">3</Box>
        </Flex>
      </div>
    </div>
  ),
};

export const Alignment: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <div>
        <p>Align Start:</p>
        <Flex align="start" gap={2} style={{ height: '150px', background: '#f5f5f5' }}>
          <Box size="sm">1</Box>
          <Box size="lg">2</Box>
          <Box size="sm">3</Box>
        </Flex>
      </div>
      <div>
        <p>Align Center:</p>
        <Flex align="center" gap={2} style={{ height: '150px', background: '#f5f5f5' }}>
          <Box size="sm">1</Box>
          <Box size="lg">2</Box>
          <Box size="sm">3</Box>
        </Flex>
      </div>
      <div>
        <p>Align End:</p>
        <Flex align="end" gap={2} style={{ height: '150px', background: '#f5f5f5' }}>
          <Box size="sm">1</Box>
          <Box size="lg">2</Box>
          <Box size="sm">3</Box>
        </Flex>
      </div>
    </div>
  ),
};

export const Justification: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      {['start', 'center', 'end', 'space-between', 'space-around', 'space-evenly'].map((justify) => (
        <div key={justify}>
          <p style={{ marginBottom: '0.5rem' }}>{justify}:</p>
          <Flex justify={justify as any} gap={2} style={{ background: '#f5f5f5', padding: '1rem' }}>
            <Box size="sm">1</Box>
            <Box size="sm">2</Box>
            <Box size="sm">3</Box>
          </Flex>
        </div>
      ))}
    </div>
  ),
};

export const Gaps: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      {[0, 1, 2, 3, 4, 5].map((gap) => (
        <div key={gap}>
          <p style={{ marginBottom: '0.5rem' }}>Gap {gap}:</p>
          <Flex gap={gap as any}>
            <Box size="sm">1</Box>
            <Box size="sm">2</Box>
            <Box size="sm">3</Box>
          </Flex>
        </div>
      ))}
    </div>
  ),
};

export const Wrap: Story = {
  render: () => (
    <div style={{ maxWidth: '300px' }}>
      <p>With wrap:</p>
      <Flex wrap="wrap" gap={2}>
        {Array.from({ length: 8 }).map((_, i) => (
          <Box key={i} size="sm">{i + 1}</Box>
        ))}
      </Flex>
    </div>
  ),
};

export const Inline: Story = {
  render: () => (
    <p>
      This is some text with an{' '}
      <Flex inline gap={1} align="center">
        <Box size="sm">inline</Box>
        <Box size="sm">flex</Box>
      </Flex>{' '}
      container.
    </p>
  ),
};
