import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Tree } from '@zenkit-ui/core';

const meta: Meta<typeof Tree> = {
  title: 'Data Display/Tree',
  component: Tree,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

const treeData = [
  {
    key: 'src',
    title: 'src',
    children: [
      {
        key: 'components',
        title: 'components',
        children: [
          { key: 'Button.tsx', title: 'Button.tsx' },
          { key: 'Input.tsx', title: 'Input.tsx' },
          { key: 'Modal.tsx', title: 'Modal.tsx' },
        ],
      },
      {
        key: 'hooks',
        title: 'hooks',
        children: [
          { key: 'useToggle.ts', title: 'useToggle.ts' },
          { key: 'useDebounce.ts', title: 'useDebounce.ts' },
        ],
      },
      { key: 'index.ts', title: 'index.ts' },
    ],
  },
  {
    key: 'package.json',
    title: 'package.json',
  },
  {
    key: 'tsconfig.json',
    title: 'tsconfig.json',
  },
];

export const Default: Story = {
  args: {
    treeData,
    defaultExpandAll: true,
  },
};

export const Checkable: Story = {
  render: () => {
    const [checkedKeys, setCheckedKeys] = useState<string[]>([]);
    return (
      <Tree
        treeData={treeData}
        checkable
        checkedKeys={checkedKeys}
        onCheck={setCheckedKeys}
        defaultExpandAll
      />
    );
  },
};

export const Selectable: Story = {
  render: () => {
    const [selectedKeys, setSelectedKeys] = useState<string[]>([]);
    return (
      <Tree
        treeData={treeData}
        selectedKeys={selectedKeys}
        onSelect={setSelectedKeys}
        defaultExpandAll
      />
    );
  },
};

export const WithIcons: Story = {
  args: {
    treeData,
    showIcon: true,
    defaultExpandAll: true,
  },
};

export const Draggable: Story = {
  args: {
    treeData,
    draggable: true,
    defaultExpandAll: true,
  },
};

export const ShowLines: Story = {
  args: {
    treeData,
    showLine: true,
    defaultExpandAll: true,
  },
};
