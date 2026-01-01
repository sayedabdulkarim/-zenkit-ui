import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Pagination } from '@zenkit-ui/core';

const meta: Meta<typeof Pagination> = {
  title: 'Components/Pagination',
  component: Pagination,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    total: 100,
    current: 1,
  },
};

export const Controlled: Story = {
  render: () => {
    const [current, setCurrent] = useState(1);
    return (
      <div>
        <p>Current page: {current}</p>
        <Pagination total={100} current={current} onChange={setCurrent} />
      </div>
    );
  },
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <Pagination total={100} current={3} size="sm" />
      <Pagination total={100} current={3} size="md" />
      <Pagination total={100} current={3} size="lg" />
    </div>
  ),
};

export const WithTotal: Story = {
  args: {
    total: 256,
    current: 5,
    showTotal: true,
  },
};

export const FewPages: Story = {
  args: {
    total: 30,
    pageSize: 10,
    current: 2,
  },
};

export const ManyPages: Story = {
  args: {
    total: 500,
    current: 25,
  },
};

export const Disabled: Story = {
  args: {
    total: 100,
    current: 5,
    disabled: true,
  },
};
