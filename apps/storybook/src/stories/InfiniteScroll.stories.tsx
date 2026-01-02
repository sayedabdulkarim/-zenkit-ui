import type { Meta, StoryObj } from '@storybook/react';
import { useState, useCallback } from 'react';
import { InfiniteScroll, Card } from '@zenkit-ui/core';

const meta: Meta<typeof InfiniteScroll> = {
  title: 'Data Display/InfiniteScroll',
  component: InfiniteScroll,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

// Simulate API delay
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const Default: Story = {
  render: () => {
    const [items, setItems] = useState(Array.from({ length: 20 }, (_, i) => i + 1));
    const [hasMore, setHasMore] = useState(true);
    const [loading, setLoading] = useState(false);

    const loadMore = useCallback(async () => {
      if (loading) return;
      setLoading(true);
      await delay(1000);

      const newItems = Array.from({ length: 10 }, (_, i) => items.length + i + 1);
      setItems((prev) => [...prev, ...newItems]);

      if (items.length >= 50) {
        setHasMore(false);
      }
      setLoading(false);
    }, [items.length, loading]);

    return (
      <div style={{ height: 400, width: 400, overflow: 'auto', border: '1px solid #e2e8f0', borderRadius: '8px' }}>
        <InfiniteScroll
          loadMore={loadMore}
          hasMore={hasMore}
          loading={loading}
          loader={<div style={{ padding: '1rem', textAlign: 'center' }}>Loading more...</div>}
          endMessage={<div style={{ padding: '1rem', textAlign: 'center', color: '#64748b' }}>No more items</div>}
        >
          {items.map((item) => (
            <div
              key={item}
              style={{
                padding: '1rem',
                borderBottom: '1px solid #e2e8f0',
                background: item % 2 === 0 ? '#f8fafc' : '#fff',
              }}
            >
              Item {item}
            </div>
          ))}
        </InfiniteScroll>
      </div>
    );
  },
};

export const WithCards: Story = {
  render: () => {
    const [items, setItems] = useState(
      Array.from({ length: 6 }, (_, i) => ({
        id: i + 1,
        title: `Card ${i + 1}`,
        description: `This is the description for card ${i + 1}`,
      }))
    );
    const [hasMore, setHasMore] = useState(true);
    const [loading, setLoading] = useState(false);

    const loadMore = useCallback(async () => {
      if (loading) return;
      setLoading(true);
      await delay(1500);

      const newItems = Array.from({ length: 6 }, (_, i) => ({
        id: items.length + i + 1,
        title: `Card ${items.length + i + 1}`,
        description: `This is the description for card ${items.length + i + 1}`,
      }));
      setItems((prev) => [...prev, ...newItems]);

      if (items.length >= 30) {
        setHasMore(false);
      }
      setLoading(false);
    }, [items.length, loading]);

    return (
      <div style={{ height: 500, width: 600, overflow: 'auto', border: '1px solid #e2e8f0', borderRadius: '8px', padding: '1rem' }}>
        <InfiniteScroll
          loadMore={loadMore}
          hasMore={hasMore}
          loading={loading}
          loader={
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem' }}>
              {[1, 2].map((i) => (
                <div key={i} style={{ height: 150, background: '#e2e8f0', borderRadius: '8px', animation: 'pulse 1.5s infinite' }} />
              ))}
            </div>
          }
          endMessage={
            <div style={{ padding: '2rem', textAlign: 'center', color: '#64748b' }}>
              You've reached the end!
            </div>
          }
        >
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem' }}>
            {items.map((item) => (
              <Card key={item.id} style={{ padding: '1rem' }}>
                <h4 style={{ margin: '0 0 0.5rem' }}>{item.title}</h4>
                <p style={{ margin: 0, color: '#64748b' }}>{item.description}</p>
              </Card>
            ))}
          </div>
        </InfiniteScroll>
      </div>
    );
  },
};

export const WithThreshold: Story = {
  render: () => {
    const [items, setItems] = useState(Array.from({ length: 15 }, (_, i) => i + 1));
    const [hasMore, setHasMore] = useState(true);
    const [loading, setLoading] = useState(false);

    const loadMore = useCallback(async () => {
      if (loading) return;
      setLoading(true);
      await delay(800);

      const newItems = Array.from({ length: 10 }, (_, i) => items.length + i + 1);
      setItems((prev) => [...prev, ...newItems]);

      if (items.length >= 100) {
        setHasMore(false);
      }
      setLoading(false);
    }, [items.length, loading]);

    return (
      <div>
        <p style={{ marginBottom: '1rem', color: '#64748b' }}>
          Loads when 300px from bottom (higher threshold = earlier load)
        </p>
        <div style={{ height: 400, width: 400, overflow: 'auto', border: '1px solid #e2e8f0', borderRadius: '8px' }}>
          <InfiniteScroll
            loadMore={loadMore}
            hasMore={hasMore}
            loading={loading}
            threshold={300}
            loader={<div style={{ padding: '1rem', textAlign: 'center' }}>Loading...</div>}
          >
            {items.map((item) => (
              <div
                key={item}
                style={{
                  padding: '1rem',
                  borderBottom: '1px solid #e2e8f0',
                }}
              >
                Item {item}
              </div>
            ))}
          </InfiniteScroll>
        </div>
      </div>
    );
  },
};

export const ReverseScroll: Story = {
  render: () => {
    const [messages, setMessages] = useState(
      Array.from({ length: 20 }, (_, i) => ({
        id: 20 - i,
        text: `Message ${20 - i}`,
        time: new Date(Date.now() - i * 60000).toLocaleTimeString(),
      }))
    );
    const [hasMore, setHasMore] = useState(true);
    const [loading, setLoading] = useState(false);

    const loadMore = useCallback(async () => {
      if (loading) return;
      setLoading(true);
      await delay(1000);

      const oldestId = messages[0].id;
      const newMessages = Array.from({ length: 10 }, (_, i) => ({
        id: oldestId - i - 1,
        text: `Message ${oldestId - i - 1}`,
        time: new Date(Date.now() - (messages.length + i) * 60000).toLocaleTimeString(),
      }));
      setMessages((prev) => [...newMessages.reverse(), ...prev]);

      if (messages.length >= 50) {
        setHasMore(false);
      }
      setLoading(false);
    }, [messages, loading]);

    return (
      <div>
        <p style={{ marginBottom: '1rem', color: '#64748b' }}>
          Chat-style: scroll up to load older messages
        </p>
        <div
          style={{
            height: 400,
            width: 400,
            overflow: 'auto',
            border: '1px solid #e2e8f0',
            borderRadius: '8px',
            display: 'flex',
            flexDirection: 'column-reverse',
          }}
        >
          <InfiniteScroll
            loadMore={loadMore}
            hasMore={hasMore}
            loading={loading}
            reverse
            loader={<div style={{ padding: '1rem', textAlign: 'center' }}>Loading older messages...</div>}
          >
            {messages.map((msg) => (
              <div
                key={msg.id}
                style={{
                  padding: '0.75rem 1rem',
                  borderBottom: '1px solid #e2e8f0',
                }}
              >
                <div style={{ fontWeight: 500 }}>{msg.text}</div>
                <div style={{ fontSize: '0.75rem', color: '#64748b' }}>{msg.time}</div>
              </div>
            ))}
          </InfiniteScroll>
        </div>
      </div>
    );
  },
};
