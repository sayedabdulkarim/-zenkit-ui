import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Sortable, Card } from '@zenkit-ui/core';

const meta: Meta<typeof Sortable> = {
  title: 'Data Display/Sortable',
  component: Sortable,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    direction: {
      control: 'select',
      options: ['vertical', 'horizontal'],
      description: 'The direction of the sortable list',
    },
    disabled: {
      control: 'boolean',
      description: 'Disable sorting',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    const [items, setItems] = useState([
      { id: '1', content: 'Item 1' },
      { id: '2', content: 'Item 2' },
      { id: '3', content: 'Item 3' },
      { id: '4', content: 'Item 4' },
      { id: '5', content: 'Item 5' },
    ]);

    return (
      <Sortable
        items={items}
        onReorder={setItems}
        renderItem={(item) => (
          <div
            style={{
              padding: '1rem',
              background: '#fff',
              border: '1px solid #e2e8f0',
              borderRadius: '8px',
              marginBottom: '0.5rem',
              cursor: 'grab',
            }}
          >
            {item.content}
          </div>
        )}
        getKey={(item) => item.id}
        style={{ width: 300 }}
      />
    );
  },
};

export const WithHandles: Story = {
  render: () => {
    const [items, setItems] = useState([
      { id: '1', title: 'First Task', priority: 'High' },
      { id: '2', title: 'Second Task', priority: 'Medium' },
      { id: '3', title: 'Third Task', priority: 'Low' },
      { id: '4', title: 'Fourth Task', priority: 'High' },
    ]);

    return (
      <Sortable
        items={items}
        onReorder={setItems}
        renderItem={(item, { handleProps }) => (
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              padding: '0.75rem 1rem',
              background: '#fff',
              border: '1px solid #e2e8f0',
              borderRadius: '8px',
              marginBottom: '0.5rem',
            }}
          >
            <span
              {...handleProps}
              style={{
                cursor: 'grab',
                marginRight: '0.75rem',
                color: '#94a3b8',
              }}
            >
              ⋮⋮
            </span>
            <div style={{ flex: 1 }}>
              <div style={{ fontWeight: 500 }}>{item.title}</div>
              <div style={{ fontSize: '0.75rem', color: '#64748b' }}>
                Priority: {item.priority}
              </div>
            </div>
          </div>
        )}
        getKey={(item) => item.id}
        style={{ width: 350 }}
      />
    );
  },
};

export const Horizontal: Story = {
  render: () => {
    const [items, setItems] = useState([
      { id: '1', label: 'Tab 1' },
      { id: '2', label: 'Tab 2' },
      { id: '3', label: 'Tab 3' },
      { id: '4', label: 'Tab 4' },
    ]);

    return (
      <Sortable
        items={items}
        onReorder={setItems}
        direction="horizontal"
        renderItem={(item) => (
          <div
            style={{
              padding: '0.5rem 1rem',
              background: '#f1f5f9',
              border: '1px solid #e2e8f0',
              borderRadius: '4px',
              marginRight: '0.5rem',
              cursor: 'grab',
              whiteSpace: 'nowrap',
            }}
          >
            {item.label}
          </div>
        )}
        getKey={(item) => item.id}
        style={{ display: 'flex' }}
      />
    );
  },
};

export const KanbanCards: Story = {
  render: () => {
    const [items, setItems] = useState([
      { id: '1', title: 'Design homepage', status: 'In Progress', assignee: 'John' },
      { id: '2', title: 'Implement API', status: 'Todo', assignee: 'Jane' },
      { id: '3', title: 'Write tests', status: 'Todo', assignee: 'Bob' },
      { id: '4', title: 'Deploy to staging', status: 'Done', assignee: 'Alice' },
    ]);

    const statusColors: Record<string, string> = {
      'Todo': '#f59e0b',
      'In Progress': '#3b82f6',
      'Done': '#22c55e',
    };

    return (
      <Sortable
        items={items}
        onReorder={setItems}
        renderItem={(item) => (
          <Card style={{ padding: '1rem', marginBottom: '0.75rem', cursor: 'grab' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
              <span style={{ fontWeight: 500 }}>{item.title}</span>
              <span
                style={{
                  fontSize: '0.75rem',
                  padding: '2px 8px',
                  borderRadius: '9999px',
                  background: statusColors[item.status] + '20',
                  color: statusColors[item.status],
                }}
              >
                {item.status}
              </span>
            </div>
            <div style={{ fontSize: '0.875rem', color: '#64748b' }}>
              Assigned to {item.assignee}
            </div>
          </Card>
        )}
        getKey={(item) => item.id}
        style={{ width: 350 }}
      />
    );
  },
};

export const Disabled: Story = {
  render: () => {
    const [items] = useState([
      { id: '1', content: 'Item 1 (cannot drag)' },
      { id: '2', content: 'Item 2 (cannot drag)' },
      { id: '3', content: 'Item 3 (cannot drag)' },
    ]);

    return (
      <Sortable
        items={items}
        onReorder={() => {}}
        disabled
        renderItem={(item) => (
          <div
            style={{
              padding: '1rem',
              background: '#f1f5f9',
              border: '1px solid #e2e8f0',
              borderRadius: '8px',
              marginBottom: '0.5rem',
              opacity: 0.7,
              cursor: 'not-allowed',
            }}
          >
            {item.content}
          </div>
        )}
        getKey={(item) => item.id}
        style={{ width: 300 }}
      />
    );
  },
};

export const WithAnimation: Story = {
  render: () => {
    const [items, setItems] = useState([
      { id: '1', emoji: '🍎', name: 'Apple' },
      { id: '2', emoji: '🍌', name: 'Banana' },
      { id: '3', emoji: '🍇', name: 'Grapes' },
      { id: '4', emoji: '🍊', name: 'Orange' },
      { id: '5', emoji: '🍓', name: 'Strawberry' },
    ]);

    return (
      <Sortable
        items={items}
        onReorder={setItems}
        renderItem={(item, { isDragging }) => (
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              padding: '0.75rem 1rem',
              background: isDragging ? '#e0f2fe' : '#fff',
              border: `2px solid ${isDragging ? '#0ea5e9' : '#e2e8f0'}`,
              borderRadius: '8px',
              marginBottom: '0.5rem',
              cursor: 'grab',
              transition: 'all 0.2s',
              transform: isDragging ? 'scale(1.02)' : 'scale(1)',
              boxShadow: isDragging ? '0 4px 12px rgba(0,0,0,0.15)' : 'none',
            }}
          >
            <span style={{ fontSize: '1.5rem' }}>{item.emoji}</span>
            <span style={{ fontWeight: 500 }}>{item.name}</span>
          </div>
        )}
        getKey={(item) => item.id}
        style={{ width: 300 }}
      />
    );
  },
};

export const OrderedList: Story = {
  render: () => {
    const [items, setItems] = useState([
      { id: '1', step: 'Preheat oven to 350°F' },
      { id: '2', step: 'Mix dry ingredients' },
      { id: '3', step: 'Add wet ingredients' },
      { id: '4', step: 'Pour into baking pan' },
      { id: '5', step: 'Bake for 30 minutes' },
    ]);

    return (
      <div>
        <p style={{ marginBottom: '1rem', color: '#64748b' }}>
          Drag to reorder recipe steps:
        </p>
        <Sortable
          items={items}
          onReorder={setItems}
          renderItem={(item, { index }) => (
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                padding: '0.75rem 1rem',
                background: '#fff',
                border: '1px solid #e2e8f0',
                borderRadius: '8px',
                marginBottom: '0.5rem',
                cursor: 'grab',
              }}
            >
              <span
                style={{
                  width: 24,
                  height: 24,
                  borderRadius: '50%',
                  background: '#3b82f6',
                  color: '#fff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '0.75rem',
                  fontWeight: 600,
                }}
              >
                {index + 1}
              </span>
              <span>{item.step}</span>
            </div>
          )}
          getKey={(item) => item.id}
          style={{ width: 350 }}
        />
      </div>
    );
  },
};
