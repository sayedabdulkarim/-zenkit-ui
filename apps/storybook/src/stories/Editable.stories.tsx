import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Editable } from '@zenkit-ui/core';

const meta: Meta<typeof Editable> = {
  title: 'Data Entry/Editable',
  component: Editable,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    const [value, setValue] = useState('Click to edit');
    return (
      <Editable
        value={value}
        onChange={setValue}
        onSubmit={(val) => console.log('Submitted:', val)}
      />
    );
  },
};

export const WithPlaceholder: Story = {
  render: () => {
    const [value, setValue] = useState('');
    return (
      <Editable
        value={value}
        onChange={setValue}
        placeholder="Click to add text..."
      />
    );
  },
};

export const DoubleClick: Story = {
  render: () => {
    const [value, setValue] = useState('Double-click to edit');
    return (
      <Editable
        value={value}
        onChange={setValue}
        startWithEditView={false}
        activationMode="dblclick"
      />
    );
  },
};

export const WithControls: Story = {
  render: () => {
    const [value, setValue] = useState('Edit me');
    return (
      <Editable
        value={value}
        onChange={setValue}
        showControls
        onSubmit={(val) => console.log('Saved:', val)}
        onCancel={() => console.log('Cancelled')}
      />
    );
  },
};

export const Textarea: Story = {
  render: () => {
    const [value, setValue] = useState('This is a longer text that can be edited. Click to edit this content.');
    return (
      <Editable
        value={value}
        onChange={setValue}
        type="textarea"
        style={{ maxWidth: '400px' }}
      />
    );
  },
};

export const Disabled: Story = {
  args: {
    value: 'This cannot be edited',
    disabled: true,
  },
};

export const Heading: Story = {
  render: () => {
    const [value, setValue] = useState('Page Title');
    return (
      <h1 style={{ margin: 0 }}>
        <Editable
          value={value}
          onChange={setValue}
          style={{ fontSize: 'inherit', fontWeight: 'inherit' }}
        />
      </h1>
    );
  },
};
