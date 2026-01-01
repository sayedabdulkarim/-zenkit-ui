import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { PinInput } from '@zenkit-ui/core';

const meta: Meta<typeof PinInput> = {
  title: 'Data Entry/PinInput',
  component: PinInput,
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
      <PinInput
        value={value}
        onChange={setValue}
        length={4}
      />
    );
  },
};

export const SixDigits: Story = {
  render: () => {
    const [value, setValue] = useState('');
    return (
      <PinInput
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
      <PinInput
        value={value}
        onChange={setValue}
        length={4}
        mask
      />
    );
  },
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <PinInput length={4} size="sm" />
      <PinInput length={4} size="md" />
      <PinInput length={4} size="lg" />
    </div>
  ),
};

export const OnComplete: Story = {
  render: () => {
    const [value, setValue] = useState('');
    const [completed, setCompleted] = useState(false);
    return (
      <div>
        <PinInput
          value={value}
          onChange={setValue}
          length={4}
          onComplete={(val) => {
            setCompleted(true);
            console.log('Completed:', val);
          }}
        />
        {completed && <p style={{ marginTop: '1rem', color: 'green' }}>PIN completed!</p>}
      </div>
    );
  },
};

export const Disabled: Story = {
  args: {
    length: 4,
    disabled: true,
    value: '1234',
  },
};

export const Error: Story = {
  args: {
    length: 4,
    error: true,
    value: '1234',
  },
};
