import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { TreeSelect } from '@zenkit-ui/core';

const meta: Meta<typeof TreeSelect> = {
  title: 'Data Entry/TreeSelect',
  component: TreeSelect,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

const treeData = [
  {
    value: 'frontend',
    title: 'Frontend',
    children: [
      { value: 'react', title: 'React' },
      { value: 'vue', title: 'Vue' },
      { value: 'angular', title: 'Angular' },
    ],
  },
  {
    value: 'backend',
    title: 'Backend',
    children: [
      { value: 'node', title: 'Node.js' },
      { value: 'python', title: 'Python' },
      { value: 'go', title: 'Go' },
    ],
  },
  {
    value: 'database',
    title: 'Database',
    children: [
      { value: 'mysql', title: 'MySQL' },
      { value: 'postgres', title: 'PostgreSQL' },
      { value: 'mongodb', title: 'MongoDB' },
    ],
  },
];

export const Default: Story = {
  render: () => {
    const [value, setValue] = useState<string | undefined>();
    return (
      <TreeSelect
        treeData={treeData}
        value={value}
        onChange={setValue}
        placeholder="Select technology"
        style={{ width: '300px' }}
      />
    );
  },
};

export const WithValue: Story = {
  render: () => {
    const [value, setValue] = useState<string | undefined>('react');
    return (
      <TreeSelect
        treeData={treeData}
        value={value}
        onChange={setValue}
        placeholder="Select technology"
        style={{ width: '300px' }}
      />
    );
  },
};

export const Multiple: Story = {
  render: () => {
    const [value, setValue] = useState<string[]>(['react', 'node']);
    return (
      <TreeSelect
        treeData={treeData}
        value={value}
        onChange={setValue}
        multiple
        placeholder="Select technologies"
        style={{ width: '300px' }}
      />
    );
  },
};

export const Searchable: Story = {
  render: () => {
    const [value, setValue] = useState<string | undefined>();
    return (
      <TreeSelect
        treeData={treeData}
        value={value}
        onChange={setValue}
        showSearch
        placeholder="Search and select"
        style={{ width: '300px' }}
      />
    );
  },
};

export const Checkable: Story = {
  render: () => {
    const [value, setValue] = useState<string[]>([]);
    return (
      <TreeSelect
        treeData={treeData}
        value={value}
        onChange={setValue}
        treeCheckable
        placeholder="Check items"
        style={{ width: '300px' }}
      />
    );
  },
};

export const Disabled: Story = {
  args: {
    treeData: treeData,
    disabled: true,
    placeholder: 'Disabled',
    style: { width: '300px' },
  },
};
