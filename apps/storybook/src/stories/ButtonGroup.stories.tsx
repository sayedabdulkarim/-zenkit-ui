import type { Meta, StoryObj } from '@storybook/react';
import { ButtonGroup, Button } from '@zenkit-ui/core';

const meta: Meta<typeof ButtonGroup> = {
  title: 'Components/ButtonGroup',
  component: ButtonGroup,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <ButtonGroup>
      <Button>One</Button>
      <Button>Two</Button>
      <Button>Three</Button>
    </ButtonGroup>
  ),
};

export const Variants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <ButtonGroup variant="solid">
        <Button>Solid</Button>
        <Button>Solid</Button>
        <Button>Solid</Button>
      </ButtonGroup>
      <ButtonGroup variant="outline">
        <Button>Outline</Button>
        <Button>Outline</Button>
        <Button>Outline</Button>
      </ButtonGroup>
      <ButtonGroup variant="ghost">
        <Button>Ghost</Button>
        <Button>Ghost</Button>
        <Button>Ghost</Button>
      </ButtonGroup>
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <ButtonGroup size="sm">
        <Button>Small</Button>
        <Button>Small</Button>
        <Button>Small</Button>
      </ButtonGroup>
      <ButtonGroup size="md">
        <Button>Medium</Button>
        <Button>Medium</Button>
        <Button>Medium</Button>
      </ButtonGroup>
      <ButtonGroup size="lg">
        <Button>Large</Button>
        <Button>Large</Button>
        <Button>Large</Button>
      </ButtonGroup>
    </div>
  ),
};

export const Vertical: Story = {
  render: () => (
    <ButtonGroup orientation="vertical">
      <Button>Top</Button>
      <Button>Middle</Button>
      <Button>Bottom</Button>
    </ButtonGroup>
  ),
};

export const Attached: Story = {
  render: () => (
    <ButtonGroup attached>
      <Button>Left</Button>
      <Button>Center</Button>
      <Button>Right</Button>
    </ButtonGroup>
  ),
};
