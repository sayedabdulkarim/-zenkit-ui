import type { Meta, StoryObj } from '@storybook/react';
import { SimpleGrid, Card } from '@zenkit-ui/core';

const meta: Meta<typeof SimpleGrid> = {
  title: 'Layout/SimpleGrid',
  component: SimpleGrid,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    cols: {
      control: 'number',
      description: 'Number of columns',
    },
    spacing: {
      control: 'text',
      description: 'Gap between items',
    },
    minChildWidth: {
      control: 'text',
      description: 'Minimum child width for auto-fit',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const GridItem = ({ children }: { children: React.ReactNode }) => (
  <div
    style={{
      background: '#e2e8f0',
      padding: '1rem',
      borderRadius: '8px',
      textAlign: 'center',
      fontWeight: 500,
    }}
  >
    {children}
  </div>
);

export const Default: Story = {
  render: () => (
    <SimpleGrid cols={3}>
      <GridItem>1</GridItem>
      <GridItem>2</GridItem>
      <GridItem>3</GridItem>
      <GridItem>4</GridItem>
      <GridItem>5</GridItem>
      <GridItem>6</GridItem>
    </SimpleGrid>
  ),
};

export const TwoColumns: Story = {
  render: () => (
    <SimpleGrid cols={2} spacing="1.5rem">
      <GridItem>Column 1</GridItem>
      <GridItem>Column 2</GridItem>
      <GridItem>Column 3</GridItem>
      <GridItem>Column 4</GridItem>
    </SimpleGrid>
  ),
};

export const FourColumns: Story = {
  render: () => (
    <SimpleGrid cols={4} spacing="1rem">
      {Array.from({ length: 8 }, (_, i) => (
        <GridItem key={i}>Item {i + 1}</GridItem>
      ))}
    </SimpleGrid>
  ),
};

export const AutoFit: Story = {
  render: () => (
    <SimpleGrid minChildWidth="200px" spacing="1rem">
      {Array.from({ length: 6 }, (_, i) => (
        <Card key={i} style={{ padding: '1rem' }}>
          <h4 style={{ margin: '0 0 0.5rem' }}>Card {i + 1}</h4>
          <p style={{ margin: 0, color: '#666' }}>
            This card will auto-fit based on available space
          </p>
        </Card>
      ))}
    </SimpleGrid>
  ),
};

export const DifferentSpacing: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <div>
        <h4 style={{ marginBottom: '0.5rem' }}>Spacing: 0.5rem</h4>
        <SimpleGrid cols={3} spacing="0.5rem">
          <GridItem>1</GridItem>
          <GridItem>2</GridItem>
          <GridItem>3</GridItem>
        </SimpleGrid>
      </div>
      <div>
        <h4 style={{ marginBottom: '0.5rem' }}>Spacing: 1rem</h4>
        <SimpleGrid cols={3} spacing="1rem">
          <GridItem>1</GridItem>
          <GridItem>2</GridItem>
          <GridItem>3</GridItem>
        </SimpleGrid>
      </div>
      <div>
        <h4 style={{ marginBottom: '0.5rem' }}>Spacing: 2rem</h4>
        <SimpleGrid cols={3} spacing="2rem">
          <GridItem>1</GridItem>
          <GridItem>2</GridItem>
          <GridItem>3</GridItem>
        </SimpleGrid>
      </div>
    </div>
  ),
};

export const AsymmetricSpacing: Story = {
  render: () => (
    <SimpleGrid cols={3} spacingX="2rem" spacingY="0.5rem">
      {Array.from({ length: 9 }, (_, i) => (
        <GridItem key={i}>Item {i + 1}</GridItem>
      ))}
    </SimpleGrid>
  ),
};

export const ProductGrid: Story = {
  render: () => (
    <SimpleGrid minChildWidth="250px" spacing="1.5rem">
      {Array.from({ length: 6 }, (_, i) => (
        <Card key={i} style={{ overflow: 'hidden' }}>
          <div style={{ background: '#f1f5f9', height: '150px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ fontSize: '3rem' }}>📦</span>
          </div>
          <div style={{ padding: '1rem' }}>
            <h4 style={{ margin: '0 0 0.5rem' }}>Product {i + 1}</h4>
            <p style={{ margin: '0 0 0.5rem', color: '#666', fontSize: '0.875rem' }}>
              Product description goes here
            </p>
            <p style={{ margin: 0, fontWeight: 600, color: '#2563eb' }}>$99.99</p>
          </div>
        </Card>
      ))}
    </SimpleGrid>
  ),
};
