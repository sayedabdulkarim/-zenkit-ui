import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Rate } from '@zenkit-ui/core';

const meta: Meta<typeof Rate> = {
  title: 'Components/Rate',
  component: Rate,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    defaultValue: 3,
  },
};

export const Controlled: Story = {
  render: () => {
    const [value, setValue] = useState(2.5);
    return (
      <div>
        <Rate value={value} onChange={setValue} allowHalf />
        <p style={{ marginTop: '0.5rem' }}>Rating: {value}</p>
      </div>
    );
  },
};

export const HalfStars: Story = {
  args: {
    defaultValue: 2.5,
    allowHalf: true,
  },
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <Rate size="sm" defaultValue={3} />
      <Rate size="md" defaultValue={3} />
      <Rate size="lg" defaultValue={3} />
    </div>
  ),
};

export const ReadOnly: Story = {
  args: {
    value: 4,
    readOnly: true,
  },
};

export const Disabled: Story = {
  args: {
    value: 3,
    disabled: true,
  },
};

export const CustomCount: Story = {
  args: {
    count: 10,
    defaultValue: 7,
  },
};

export const CustomCharacter: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <Rate defaultValue={3} character="❤️" />
      <Rate defaultValue={3} character="👍" />
      <Rate defaultValue={3} character="A" />
    </div>
  ),
};

export const WithTooltips: Story = {
  args: {
    defaultValue: 3,
    tooltips: ['Terrible', 'Bad', 'Normal', 'Good', 'Excellent'],
  },
};

export const NoClear: Story = {
  args: {
    defaultValue: 3,
    allowClear: false,
  },
};
