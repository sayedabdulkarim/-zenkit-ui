import type { Meta, StoryObj } from '@storybook/react';
import { Descriptions, DescriptionsItem, Button } from '@zenkit-ui/core';

const meta: Meta<typeof Descriptions> = {
  title: 'Components/Descriptions',
  component: Descriptions,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    layout: { control: 'select', options: ['horizontal', 'vertical'] },
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Descriptions title="User Info">
      <DescriptionsItem label="UserName">John Doe</DescriptionsItem>
      <DescriptionsItem label="Telephone">1810000000</DescriptionsItem>
      <DescriptionsItem label="Live">Hangzhou, Zhejiang</DescriptionsItem>
      <DescriptionsItem label="Remark">Empty</DescriptionsItem>
      <DescriptionsItem label="Address">
        No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China
      </DescriptionsItem>
    </Descriptions>
  ),
};

export const Bordered: Story = {
  render: () => (
    <Descriptions title="User Info" bordered>
      <DescriptionsItem label="Product">Cloud Database</DescriptionsItem>
      <DescriptionsItem label="Billing Mode">Prepaid</DescriptionsItem>
      <DescriptionsItem label="Automatic Renewal">YES</DescriptionsItem>
      <DescriptionsItem label="Order time">2018-04-24 18:00:00</DescriptionsItem>
      <DescriptionsItem label="Usage Time" span={2}>
        2018-04-24 18:00:00 - 2019-04-24 18:00:00
      </DescriptionsItem>
      <DescriptionsItem label="Status" span={3}>
        Running
      </DescriptionsItem>
    </Descriptions>
  ),
};

export const Vertical: Story = {
  render: () => (
    <Descriptions title="User Info" layout="vertical">
      <DescriptionsItem label="UserName">John Doe</DescriptionsItem>
      <DescriptionsItem label="Telephone">1810000000</DescriptionsItem>
      <DescriptionsItem label="Live">Hangzhou, Zhejiang</DescriptionsItem>
    </Descriptions>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <Descriptions title="Small" size="sm" bordered>
        <DescriptionsItem label="Name">John</DescriptionsItem>
        <DescriptionsItem label="Age">25</DescriptionsItem>
        <DescriptionsItem label="City">NYC</DescriptionsItem>
      </Descriptions>
      <Descriptions title="Medium" size="md" bordered>
        <DescriptionsItem label="Name">John</DescriptionsItem>
        <DescriptionsItem label="Age">25</DescriptionsItem>
        <DescriptionsItem label="City">NYC</DescriptionsItem>
      </Descriptions>
      <Descriptions title="Large" size="lg" bordered>
        <DescriptionsItem label="Name">John</DescriptionsItem>
        <DescriptionsItem label="Age">25</DescriptionsItem>
        <DescriptionsItem label="City">NYC</DescriptionsItem>
      </Descriptions>
    </div>
  ),
};

export const WithExtra: Story = {
  render: () => (
    <Descriptions
      title="User Info"
      extra={<Button size="sm">Edit</Button>}
      bordered
    >
      <DescriptionsItem label="UserName">John Doe</DescriptionsItem>
      <DescriptionsItem label="Telephone">1810000000</DescriptionsItem>
      <DescriptionsItem label="Live">Hangzhou, Zhejiang</DescriptionsItem>
    </Descriptions>
  ),
};

export const NoColon: Story = {
  render: () => (
    <Descriptions title="User Info" colon={false}>
      <DescriptionsItem label="UserName">John Doe</DescriptionsItem>
      <DescriptionsItem label="Telephone">1810000000</DescriptionsItem>
      <DescriptionsItem label="Live">Hangzhou, Zhejiang</DescriptionsItem>
    </Descriptions>
  ),
};

export const CustomColumns: Story = {
  render: () => (
    <Descriptions title="User Info" column={2} bordered>
      <DescriptionsItem label="UserName">John Doe</DescriptionsItem>
      <DescriptionsItem label="Telephone">1810000000</DescriptionsItem>
      <DescriptionsItem label="Live">Hangzhou</DescriptionsItem>
      <DescriptionsItem label="Address">China</DescriptionsItem>
    </Descriptions>
  ),
};
