import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Transfer } from '@zenkit-ui/core';

const meta: Meta<typeof Transfer> = {
  title: 'Data Entry/Transfer',
  component: Transfer,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

const mockData = Array.from({ length: 10 }).map((_, i) => ({
  key: `item-${i}`,
  title: `Item ${i + 1}`,
  description: `Description for item ${i + 1}`,
}));

export const Default: Story = {
  render: () => {
    const [targetKeys, setTargetKeys] = useState<string[]>([]);
    return (
      <Transfer
        dataSource={mockData}
        targetKeys={targetKeys}
        onChange={setTargetKeys}
        titles={['Source', 'Target']}
      />
    );
  },
};

export const WithSearch: Story = {
  render: () => {
    const [targetKeys, setTargetKeys] = useState<string[]>(['item-1', 'item-3']);
    return (
      <Transfer
        dataSource={mockData}
        targetKeys={targetKeys}
        onChange={setTargetKeys}
        showSearch
        titles={['Available', 'Selected']}
      />
    );
  },
};

export const OneWay: Story = {
  render: () => {
    const [targetKeys, setTargetKeys] = useState<string[]>([]);
    return (
      <Transfer
        dataSource={mockData}
        targetKeys={targetKeys}
        onChange={setTargetKeys}
        oneWay
        titles={['Source', 'Target']}
      />
    );
  },
};

export const WithDisabledItems: Story = {
  render: () => {
    const dataWithDisabled = mockData.map((item, i) => ({
      ...item,
      disabled: i % 3 === 0,
    }));
    const [targetKeys, setTargetKeys] = useState<string[]>([]);
    return (
      <Transfer
        dataSource={dataWithDisabled}
        targetKeys={targetKeys}
        onChange={setTargetKeys}
        titles={['Source', 'Target']}
      />
    );
  },
};

export const Pagination: Story = {
  render: () => {
    const largeData = Array.from({ length: 50 }).map((_, i) => ({
      key: `item-${i}`,
      title: `Item ${i + 1}`,
    }));
    const [targetKeys, setTargetKeys] = useState<string[]>([]);
    return (
      <Transfer
        dataSource={largeData}
        targetKeys={targetKeys}
        onChange={setTargetKeys}
        pagination={{ pageSize: 10 }}
        titles={['All Items', 'Selected']}
      />
    );
  },
};
