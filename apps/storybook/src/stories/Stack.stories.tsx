import type { Meta, StoryObj } from '@storybook/react';
import { Stack, VStack, HStack } from '@zenkit-ui/core';

const meta: Meta<typeof Stack> = {
  title: 'Layout/Stack',
  component: Stack,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

const Box = ({ children }: { children: React.ReactNode }) => (
  <div style={{ padding: '1rem', background: '#e3e3e3', borderRadius: '4px' }}>
    {children}
  </div>
);

export const Horizontal: Story = {
  render: () => (
    <Stack direction="horizontal" gap="md">
      <Box>Item 1</Box>
      <Box>Item 2</Box>
      <Box>Item 3</Box>
    </Stack>
  ),
};

export const Vertical: Story = {
  render: () => (
    <Stack direction="vertical" gap="md">
      <Box>Item 1</Box>
      <Box>Item 2</Box>
      <Box>Item 3</Box>
    </Stack>
  ),
};

export const VStackComponent: Story = {
  render: () => (
    <VStack gap="md">
      <Box>VStack Item 1</Box>
      <Box>VStack Item 2</Box>
      <Box>VStack Item 3</Box>
    </VStack>
  ),
};

export const HStackComponent: Story = {
  render: () => (
    <HStack gap="md">
      <Box>HStack Item 1</Box>
      <Box>HStack Item 2</Box>
      <Box>HStack Item 3</Box>
    </HStack>
  ),
};

export const Gaps: Story = {
  render: () => (
    <VStack gap="lg">
      <HStack gap="xs"><Box>xs</Box><Box>gap</Box></HStack>
      <HStack gap="sm"><Box>sm</Box><Box>gap</Box></HStack>
      <HStack gap="md"><Box>md</Box><Box>gap</Box></HStack>
      <HStack gap="lg"><Box>lg</Box><Box>gap</Box></HStack>
      <HStack gap="xl"><Box>xl</Box><Box>gap</Box></HStack>
    </VStack>
  ),
};

export const WithAlignment: Story = {
  render: () => (
    <HStack gap="md" align="center" justify="space-between" style={{ width: '100%' }}>
      <Box>Start</Box>
      <Box>Middle</Box>
      <Box>End</Box>
    </HStack>
  ),
};

export const Wrap: Story = {
  render: () => (
    <HStack gap="md" wrap style={{ maxWidth: '300px' }}>
      {Array.from({ length: 10 }).map((_, i) => (
        <Box key={i}>Item {i + 1}</Box>
      ))}
    </HStack>
  ),
};
