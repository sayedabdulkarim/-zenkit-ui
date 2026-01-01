import type { Meta, StoryObj } from '@storybook/react';
import { DataGrid } from '@zenkit-ui/core';

const meta: Meta<typeof DataGrid> = {
  title: 'Data Display/DataGrid',
  component: DataGrid,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

const columns = [
  { key: 'id', title: 'ID', width: 80 },
  { key: 'name', title: 'Name', width: 150 },
  { key: 'email', title: 'Email', width: 200 },
  { key: 'role', title: 'Role', width: 120 },
  { key: 'status', title: 'Status', width: 100 },
];

const data = Array.from({ length: 20 }).map((_, i) => ({
  id: i + 1,
  name: `User ${i + 1}`,
  email: `user${i + 1}@example.com`,
  role: i % 3 === 0 ? 'Admin' : i % 2 === 0 ? 'Editor' : 'Viewer',
  status: i % 4 === 0 ? 'Inactive' : 'Active',
}));

export const Default: Story = {
  args: {
    columns,
    data,
    style: { height: '400px' },
  },
};

export const WithSelection: Story = {
  args: {
    columns,
    data,
    selectable: true,
    style: { height: '400px' },
  },
};

export const Sortable: Story = {
  args: {
    columns: columns.map((col) => ({ ...col, sortable: true })),
    data,
    style: { height: '400px' },
  },
};

export const Striped: Story = {
  args: {
    columns,
    data,
    striped: true,
    style: { height: '400px' },
  },
};

export const WithPagination: Story = {
  args: {
    columns,
    data,
    pagination: { pageSize: 5 },
    style: { height: '300px' },
  },
};

export const Loading: Story = {
  args: {
    columns,
    data: [],
    loading: true,
    style: { height: '400px' },
  },
};

export const Empty: Story = {
  args: {
    columns,
    data: [],
    emptyText: 'No data available',
    style: { height: '400px' },
  },
};
