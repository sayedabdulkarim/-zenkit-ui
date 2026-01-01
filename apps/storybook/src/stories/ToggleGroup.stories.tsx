import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { ToggleGroup, ToggleGroupItem } from '@zenkit-ui/core';

const meta: Meta<typeof ToggleGroup> = {
  title: 'Data Display/ToggleGroup',
  component: ToggleGroup,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Single: Story = {
  render: () => {
    const [value, setValue] = useState<string>('center');
    return (
      <ToggleGroup type="single" value={value} onValueChange={setValue}>
        <ToggleGroupItem value="left">Left</ToggleGroupItem>
        <ToggleGroupItem value="center">Center</ToggleGroupItem>
        <ToggleGroupItem value="right">Right</ToggleGroupItem>
      </ToggleGroup>
    );
  },
};

export const Multiple: Story = {
  render: () => {
    const [value, setValue] = useState<string[]>(['bold']);
    return (
      <ToggleGroup type="multiple" value={value} onValueChange={setValue}>
        <ToggleGroupItem value="bold"><strong>B</strong></ToggleGroupItem>
        <ToggleGroupItem value="italic"><em>I</em></ToggleGroupItem>
        <ToggleGroupItem value="underline"><u>U</u></ToggleGroupItem>
      </ToggleGroup>
    );
  },
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <ToggleGroup type="single" size="sm" defaultValue="a">
        <ToggleGroupItem value="a">A</ToggleGroupItem>
        <ToggleGroupItem value="b">B</ToggleGroupItem>
        <ToggleGroupItem value="c">C</ToggleGroupItem>
      </ToggleGroup>
      <ToggleGroup type="single" size="md" defaultValue="a">
        <ToggleGroupItem value="a">A</ToggleGroupItem>
        <ToggleGroupItem value="b">B</ToggleGroupItem>
        <ToggleGroupItem value="c">C</ToggleGroupItem>
      </ToggleGroup>
      <ToggleGroup type="single" size="lg" defaultValue="a">
        <ToggleGroupItem value="a">A</ToggleGroupItem>
        <ToggleGroupItem value="b">B</ToggleGroupItem>
        <ToggleGroupItem value="c">C</ToggleGroupItem>
      </ToggleGroup>
    </div>
  ),
};

export const Variants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <ToggleGroup type="single" variant="default" defaultValue="a">
        <ToggleGroupItem value="a">Default</ToggleGroupItem>
        <ToggleGroupItem value="b">Variant</ToggleGroupItem>
      </ToggleGroup>
      <ToggleGroup type="single" variant="outline" defaultValue="a">
        <ToggleGroupItem value="a">Outline</ToggleGroupItem>
        <ToggleGroupItem value="b">Variant</ToggleGroupItem>
      </ToggleGroup>
    </div>
  ),
};

export const Disabled: Story = {
  render: () => (
    <ToggleGroup type="single" disabled defaultValue="a">
      <ToggleGroupItem value="a">A</ToggleGroupItem>
      <ToggleGroupItem value="b">B</ToggleGroupItem>
      <ToggleGroupItem value="c">C</ToggleGroupItem>
    </ToggleGroup>
  ),
};
