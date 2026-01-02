import type { Meta, StoryObj } from '@storybook/react';
import { LazyLoad, Card } from '@zenkit-ui/core';

const meta: Meta<typeof LazyLoad> = {
  title: 'Utilities/LazyLoad',
  component: LazyLoad,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    threshold: {
      control: { type: 'range', min: 0, max: 1, step: 0.1 },
      description: 'Intersection threshold',
    },
    rootMargin: {
      control: 'text',
      description: 'Root margin for intersection',
    },
    once: {
      control: 'boolean',
      description: 'Only trigger once',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Placeholder component that simulates content loading
const HeavyComponent = ({ index }: { index: number }) => (
  <Card style={{ padding: '2rem', textAlign: 'center', background: '#f8fafc' }}>
    <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>
      {['🖼️', '📊', '📈', '🎨', '📦'][index % 5]}
    </div>
    <h3 style={{ margin: '0 0 0.5rem' }}>Component {index + 1}</h3>
    <p style={{ margin: 0, color: '#64748b' }}>
      This content was lazily loaded when it came into view.
    </p>
  </Card>
);

export const Default: Story = {
  render: () => (
    <div style={{ height: 400, overflow: 'auto', border: '1px solid #e2e8f0', borderRadius: '8px', padding: '1rem' }}>
      <p style={{ marginBottom: '1rem', color: '#64748b' }}>
        Scroll down to see lazy loaded content...
      </p>
      <div style={{ height: 300 }} />
      <LazyLoad placeholder={<div style={{ height: 150, background: '#e2e8f0', borderRadius: '8px' }} />}>
        <HeavyComponent index={0} />
      </LazyLoad>
      <div style={{ height: 50 }} />
      <LazyLoad placeholder={<div style={{ height: 150, background: '#e2e8f0', borderRadius: '8px' }} />}>
        <HeavyComponent index={1} />
      </LazyLoad>
      <div style={{ height: 50 }} />
      <LazyLoad placeholder={<div style={{ height: 150, background: '#e2e8f0', borderRadius: '8px' }} />}>
        <HeavyComponent index={2} />
      </LazyLoad>
    </div>
  ),
};

export const ImageGallery: Story = {
  render: () => {
    const images = [
      'https://picsum.photos/400/300?random=1',
      'https://picsum.photos/400/300?random=2',
      'https://picsum.photos/400/300?random=3',
      'https://picsum.photos/400/300?random=4',
      'https://picsum.photos/400/300?random=5',
      'https://picsum.photos/400/300?random=6',
    ];

    return (
      <div style={{ height: 500, overflow: 'auto', border: '1px solid #e2e8f0', borderRadius: '8px', padding: '1rem' }}>
        <h3 style={{ marginTop: 0 }}>Image Gallery with Lazy Loading</h3>
        <p style={{ color: '#64748b' }}>Scroll to load images as they come into view.</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem' }}>
          {images.map((src, i) => (
            <LazyLoad
              key={i}
              placeholder={
                <div
                  style={{
                    height: 150,
                    background: '#e2e8f0',
                    borderRadius: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <span style={{ color: '#94a3b8' }}>Loading...</span>
                </div>
              }
              rootMargin="50px"
            >
              <img
                src={src}
                alt={`Image ${i + 1}`}
                style={{ width: '100%', height: 150, objectFit: 'cover', borderRadius: '8px' }}
              />
            </LazyLoad>
          ))}
        </div>
      </div>
    );
  },
};

export const WithRootMargin: Story = {
  render: () => (
    <div style={{ height: 400, overflow: 'auto', border: '1px solid #e2e8f0', borderRadius: '8px', padding: '1rem' }}>
      <p style={{ color: '#64748b' }}>
        With rootMargin="100px", content loads 100px before it enters the viewport.
      </p>
      <div style={{ height: 400 }} />
      {[0, 1, 2, 3, 4].map((i) => (
        <div key={i} style={{ marginBottom: '1rem' }}>
          <LazyLoad
            rootMargin="100px"
            placeholder={
              <div style={{ height: 100, background: '#e2e8f0', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ color: '#94a3b8' }}>Placeholder {i + 1}</span>
              </div>
            }
          >
            <Card style={{ padding: '1rem', background: '#f0fdf4' }}>
              <h4 style={{ margin: 0 }}>Content Block {i + 1}</h4>
              <p style={{ margin: '0.5rem 0 0', color: '#16a34a' }}>
                Loaded early thanks to 100px root margin!
              </p>
            </Card>
          </LazyLoad>
        </div>
      ))}
    </div>
  ),
};

export const WithThreshold: Story = {
  render: () => (
    <div style={{ height: 400, overflow: 'auto', border: '1px solid #e2e8f0', borderRadius: '8px', padding: '1rem' }}>
      <p style={{ color: '#64748b' }}>
        With threshold=0.5, content loads when 50% visible.
      </p>
      <div style={{ height: 300 }} />
      {[0, 1, 2].map((i) => (
        <div key={i} style={{ marginBottom: '2rem' }}>
          <LazyLoad
            threshold={0.5}
            placeholder={
              <div style={{ height: 200, background: '#e2e8f0', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ color: '#94a3b8' }}>Scroll more to load...</span>
              </div>
            }
          >
            <Card style={{ padding: '2rem', height: 200, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <div style={{ textAlign: 'center' }}>
                <span style={{ fontSize: '2rem' }}>✅</span>
                <h4 style={{ margin: '0.5rem 0 0' }}>Loaded at 50% visibility</h4>
              </div>
            </Card>
          </LazyLoad>
        </div>
      ))}
    </div>
  ),
};

export const OnVisibleCallback: Story = {
  render: () => {
    const handleVisible = (index: number) => {
      console.log(`Component ${index + 1} is now visible!`);
    };

    return (
      <div style={{ height: 400, overflow: 'auto', border: '1px solid #e2e8f0', borderRadius: '8px', padding: '1rem' }}>
        <p style={{ color: '#64748b' }}>
          Check console for visibility callbacks (onVisible prop).
        </p>
        <div style={{ height: 300 }} />
        {[0, 1, 2, 3].map((i) => (
          <div key={i} style={{ marginBottom: '1rem' }}>
            <LazyLoad
              onVisible={() => handleVisible(i)}
              placeholder={
                <div style={{ height: 80, background: '#e2e8f0', borderRadius: '8px' }} />
              }
            >
              <Card style={{ padding: '1rem' }}>
                <strong>Item {i + 1}</strong> - onVisible fired when this appeared
              </Card>
            </LazyLoad>
          </div>
        ))}
      </div>
    );
  },
};

export const AnimatedAppearance: Story = {
  render: () => (
    <div style={{ height: 400, overflow: 'auto', border: '1px solid #e2e8f0', borderRadius: '8px', padding: '1rem' }}>
      <style>
        {`
          @keyframes fadeSlideIn {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          .lazy-animated {
            animation: fadeSlideIn 0.5s ease-out forwards;
          }
        `}
      </style>
      <p style={{ color: '#64748b' }}>
        Content animates in when it becomes visible.
      </p>
      <div style={{ height: 300 }} />
      {[0, 1, 2, 3, 4].map((i) => (
        <div key={i} style={{ marginBottom: '1rem' }}>
          <LazyLoad
            placeholder={
              <div style={{ height: 100, background: '#e2e8f0', borderRadius: '8px' }} />
            }
          >
            <Card className="lazy-animated" style={{ padding: '1.5rem' }}>
              <h4 style={{ margin: 0 }}>Animated Content {i + 1}</h4>
              <p style={{ margin: '0.5rem 0 0', color: '#64748b' }}>
                This card faded and slid in when it became visible.
              </p>
            </Card>
          </LazyLoad>
        </div>
      ))}
    </div>
  ),
};

export const SkeletonPlaceholders: Story = {
  render: () => (
    <div style={{ height: 500, overflow: 'auto', border: '1px solid #e2e8f0', borderRadius: '8px', padding: '1rem' }}>
      <style>
        {`
          @keyframes skeleton-pulse {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.5; }
          }
          .skeleton {
            animation: skeleton-pulse 1.5s ease-in-out infinite;
          }
        `}
      </style>
      <h3 style={{ marginTop: 0 }}>Card Feed with Skeleton Placeholders</h3>
      <div style={{ height: 200 }} />
      {[0, 1, 2, 3].map((i) => (
        <div key={i} style={{ marginBottom: '1rem' }}>
          <LazyLoad
            rootMargin="50px"
            placeholder={
              <Card style={{ padding: '1rem' }}>
                <div style={{ display: 'flex', gap: '1rem' }}>
                  <div className="skeleton" style={{ width: 60, height: 60, borderRadius: '50%', background: '#e2e8f0' }} />
                  <div style={{ flex: 1 }}>
                    <div className="skeleton" style={{ height: 16, width: '60%', background: '#e2e8f0', borderRadius: 4, marginBottom: 8 }} />
                    <div className="skeleton" style={{ height: 12, width: '40%', background: '#e2e8f0', borderRadius: 4 }} />
                  </div>
                </div>
                <div className="skeleton" style={{ height: 12, width: '100%', background: '#e2e8f0', borderRadius: 4, marginTop: 12 }} />
                <div className="skeleton" style={{ height: 12, width: '80%', background: '#e2e8f0', borderRadius: 4, marginTop: 8 }} />
              </Card>
            }
          >
            <Card style={{ padding: '1rem' }}>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <div style={{ width: 60, height: 60, borderRadius: '50%', background: '#3b82f6', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 600 }}>
                  U{i + 1}
                </div>
                <div>
                  <h4 style={{ margin: 0 }}>User {i + 1}</h4>
                  <p style={{ margin: '0.25rem 0 0', color: '#64748b', fontSize: '0.875rem' }}>@user{i + 1}</p>
                </div>
              </div>
              <p style={{ margin: '1rem 0 0' }}>
                This is some content that was lazily loaded to improve initial page performance.
              </p>
            </Card>
          </LazyLoad>
        </div>
      ))}
    </div>
  ),
};
