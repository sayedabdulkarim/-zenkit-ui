import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { JsonInput } from '@zenkit-ui/core';

const meta: Meta<typeof JsonInput> = {
  title: 'Components/JsonInput',
  component: JsonInput,
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

const defaultJson = JSON.stringify({ name: 'John', age: 30, active: true }, null, 2);

export const Default: Story = {
  render: () => {
    const [value, setValue] = useState(defaultJson);
    return (
      <div style={{ width: '400px' }}>
        <JsonInput value={value} onChange={setValue} />
      </div>
    );
  },
};

export const WithLabel: Story = {
  render: () => {
    const [value, setValue] = useState(defaultJson);
    return (
      <div style={{ width: '400px' }}>
        <JsonInput
          label="Configuration"
          description="Enter valid JSON"
          value={value}
          onChange={setValue}
        />
      </div>
    );
  },
};

export const WithValidation: Story = {
  render: () => {
    const [value, setValue] = useState('{ invalid json }');
    return (
      <div style={{ width: '400px' }}>
        <JsonInput
          label="JSON Data"
          value={value}
          onChange={setValue}
          validateOnChange
        />
      </div>
    );
  },
};

export const Formatize: Story = {
  render: () => {
    const [value, setValue] = useState('{"name":"John","age":30}');
    return (
      <div style={{ width: '400px' }}>
        <JsonInput
          label="Click Format to prettify"
          value={value}
          onChange={setValue}
          formatOnBlur
        />
      </div>
    );
  },
};

export const ReadOnly: Story = {
  args: {
    label: 'Read Only',
    value: JSON.stringify({ readonly: true, data: [1, 2, 3] }, null, 2),
    readOnly: true,
  },
  decorators: [(Story) => <div style={{ width: '400px' }}><Story /></div>],
};

export const Disabled: Story = {
  args: {
    label: 'Disabled',
    value: defaultJson,
    disabled: true,
  },
  decorators: [(Story) => <div style={{ width: '400px' }}><Story /></div>],
};

export const CustomHeight: Story = {
  args: {
    label: 'Tall Editor',
    value: JSON.stringify({
      users: [
        { id: 1, name: 'Alice' },
        { id: 2, name: 'Bob' },
        { id: 3, name: 'Charlie' },
      ],
      settings: {
        theme: 'dark',
        notifications: true,
      },
    }, null, 2),
    minRows: 10,
  },
  decorators: [(Story) => <div style={{ width: '400px' }}><Story /></div>],
};

export const WithError: Story = {
  args: {
    label: 'Invalid JSON',
    value: '{ invalid }',
    error: 'Invalid JSON format',
  },
  decorators: [(Story) => <div style={{ width: '400px' }}><Story /></div>],
};
