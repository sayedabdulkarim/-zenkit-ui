import type { Meta, StoryObj } from '@storybook/react';
import { VirtualList } from '@zenkit-ui/core';
import type { CSSProperties } from 'react';

const meta: Meta<typeof VirtualList> = {
  title: 'Data Display/VirtualList',
  component: VirtualList,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

// Generate sample data
const generateItems = (count: number) =>
  Array.from({ length: count }, (_, i) => ({
    id: i + 1,
    name: `Item ${i + 1}`,
    description: `This is the description for item ${i + 1}`,
  }));

export const Default: Story = {
  render: () => {
    const items = generateItems(1000);
    return (
      <VirtualList
        data={items}
        height={400}
        width={400}
        itemHeight={50}
        renderItem={(item, index, style) => (
          <div
            style={{
              ...style,
              display: 'flex',
              alignItems: 'center',
              padding: '0 16px',
              borderBottom: '1px solid #e2e8f0',
              background: index % 2 === 0 ? '#fff' : '#f8fafc',
            }}
          >
            <span style={{ fontWeight: 500 }}>{item.name}</span>
          </div>
        )}
        getKey={(item) => item.id}
      />
    );
  },
};

export const VariableHeight: Story = {
  render: () => {
    const items = generateItems(500);
    return (
      <VirtualList
        data={items}
        height={400}
        width={400}
        itemHeight={(index) => (index % 3 === 0 ? 80 : 50)}
        renderItem={(item, index, style) => (
          <div
            style={{
              ...style,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              padding: '8px 16px',
              borderBottom: '1px solid #e2e8f0',
              background: index % 2 === 0 ? '#fff' : '#f8fafc',
            }}
          >
            <span style={{ fontWeight: 500 }}>{item.name}</span>
            {index % 3 === 0 && (
              <span style={{ fontSize: '0.875rem', color: '#64748b' }}>
                {item.description}
              </span>
            )}
          </div>
        )}
        getKey={(item) => item.id}
      />
    );
  },
};

export const WithGap: Story = {
  render: () => {
    const items = generateItems(100);
    return (
      <VirtualList
        data={items}
        height={400}
        width={400}
        itemHeight={60}
        gap={8}
        renderItem={(item, index, style) => (
          <div
            style={{
              ...style,
              display: 'flex',
              alignItems: 'center',
              padding: '0 16px',
              background: '#fff',
              borderRadius: '8px',
              boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
            }}
          >
            <div
              style={{
                width: 40,
                height: 40,
                borderRadius: '50%',
                background: '#e2e8f0',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginRight: 12,
              }}
            >
              {item.id}
            </div>
            <span style={{ fontWeight: 500 }}>{item.name}</span>
          </div>
        )}
        getKey={(item) => item.id}
        style={{ padding: '8px', background: '#f1f5f9' }}
      />
    );
  },
};

export const LoadingState: Story = {
  render: () => (
    <VirtualList
      data={[]}
      height={400}
      width={400}
      itemHeight={50}
      loading
      loadingComponent={
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
          <span>Loading items...</span>
        </div>
      }
      renderItem={() => null}
    />
  ),
};

export const EmptyState: Story = {
  render: () => (
    <VirtualList
      data={[]}
      height={400}
      width={400}
      itemHeight={50}
      emptyComponent={
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
          <span style={{ fontSize: '3rem' }}>📭</span>
          <span style={{ marginTop: '1rem', color: '#64748b' }}>No items to display</span>
        </div>
      }
      renderItem={() => null}
    />
  ),
};

export const LargeDataset: Story = {
  render: () => {
    const items = generateItems(10000);
    return (
      <div>
        <p style={{ marginBottom: '1rem', color: '#64748b' }}>
          Rendering 10,000 items with virtualization
        </p>
        <VirtualList
          data={items}
          height={400}
          width={500}
          itemHeight={40}
          renderItem={(item, index, style) => (
            <div
              style={{
                ...style,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '0 16px',
                borderBottom: '1px solid #e2e8f0',
                background: index % 2 === 0 ? '#fff' : '#f8fafc',
              }}
            >
              <span>{item.name}</span>
              <span style={{ color: '#64748b', fontSize: '0.875rem' }}>
                Row {index + 1} of 10,000
              </span>
            </div>
          )}
          getKey={(item) => item.id}
        />
      </div>
    );
  },
};

export const CustomOverscan: Story = {
  render: () => {
    const items = generateItems(500);
    return (
      <VirtualList
        data={items}
        height={400}
        width={400}
        itemHeight={50}
        overscan={10}
        renderItem={(item, index, style) => (
          <div
            style={{
              ...style,
              display: 'flex',
              alignItems: 'center',
              padding: '0 16px',
              borderBottom: '1px solid #e2e8f0',
            }}
          >
            {item.name}
          </div>
        )}
        getKey={(item) => item.id}
      />
    );
  },
};
