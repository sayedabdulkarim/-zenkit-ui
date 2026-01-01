import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { InputOTP } from '@zenkit-ui/core';

const meta: Meta<typeof InputOTP> = {
  title: 'Data Entry/InputOTP',
  component: InputOTP,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    const [value, setValue] = useState('');
    return (
      <InputOTP
        value={value}
        onChange={setValue}
        length={6}
      />
    );
  },
};

export const FourDigits: Story = {
  render: () => {
    const [value, setValue] = useState('');
    return (
      <InputOTP
        value={value}
        onChange={setValue}
        length={4}
      />
    );
  },
};

export const WithValue: Story = {
  render: () => {
    const [value, setValue] = useState('123456');
    return (
      <InputOTP
        value={value}
        onChange={setValue}
        length={6}
      />
    );
  },
};

export const Masked: Story = {
  render: () => {
    const [value, setValue] = useState('');
    return (
      <InputOTP
        value={value}
        onChange={setValue}
        length={6}
        mask
      />
    );
  },
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <InputOTP length={4} size="sm" />
      <InputOTP length={4} size="md" />
      <InputOTP length={4} size="lg" />
    </div>
  ),
};

export const Disabled: Story = {
  args: {
    length: 6,
    disabled: true,
    value: '123456',
  },
};

export const WithSeparator: Story = {
  render: () => {
    const [value, setValue] = useState('');
    return (
      <InputOTP
        value={value}
        onChange={setValue}
        length={6}
        separator={<span style={{ margin: '0 0.5rem' }}>-</span>}
        separatorAfter={3}
      />
    );
  },
};
