import type { Meta, StoryObj } from '@storybook/react';
import { HoverCard } from '@zenkit-ui/core';

const meta: Meta<typeof HoverCard> = {
  title: 'Data Display/HoverCard',
  component: HoverCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <HoverCard
      content={
        <div style={{ padding: '1rem', maxWidth: '300px' }}>
          <h4 style={{ margin: '0 0 0.5rem' }}>User Profile</h4>
          <p style={{ margin: 0, color: '#666' }}>
            This is additional information that appears when you hover over the trigger element.
          </p>
        </div>
      }
    >
      <span style={{ textDecoration: 'underline', cursor: 'pointer' }}>Hover over me</span>
    </HoverCard>
  ),
};

export const UserCard: Story = {
  render: () => (
    <HoverCard
      content={
        <div style={{ padding: '1rem', width: '280px' }}>
          <div style={{ display: 'flex', gap: '1rem', marginBottom: '0.75rem' }}>
            <div
              style={{
                width: '48px',
                height: '48px',
                borderRadius: '50%',
                background: '#1890ff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontWeight: 'bold',
              }}
            >
              JD
            </div>
            <div>
              <h4 style={{ margin: 0 }}>John Doe</h4>
              <p style={{ margin: 0, color: '#666', fontSize: '14px' }}>@johndoe</p>
            </div>
          </div>
          <p style={{ margin: '0 0 0.75rem', fontSize: '14px' }}>
            Software Engineer at Acme Inc. Building cool stuff with React and TypeScript.
          </p>
          <div style={{ display: 'flex', gap: '1rem', fontSize: '14px', color: '#666' }}>
            <span><strong>142</strong> Following</span>
            <span><strong>1.2k</strong> Followers</span>
          </div>
        </div>
      }
    >
      <a href="#" style={{ color: '#1890ff' }}>@johndoe</a>
    </HoverCard>
  ),
};

export const Positions: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '2rem', padding: '4rem' }}>
      <HoverCard content={<div style={{ padding: '0.5rem' }}>Top content</div>} side="top">
        <button>Top</button>
      </HoverCard>
      <HoverCard content={<div style={{ padding: '0.5rem' }}>Bottom content</div>} side="bottom">
        <button>Bottom</button>
      </HoverCard>
      <HoverCard content={<div style={{ padding: '0.5rem' }}>Left content</div>} side="left">
        <button>Left</button>
      </HoverCard>
      <HoverCard content={<div style={{ padding: '0.5rem' }}>Right content</div>} side="right">
        <button>Right</button>
      </HoverCard>
    </div>
  ),
};

export const WithDelay: Story = {
  render: () => (
    <HoverCard
      openDelay={500}
      closeDelay={200}
      content={
        <div style={{ padding: '1rem' }}>
          <p style={{ margin: 0 }}>This card has a 500ms open delay and 200ms close delay.</p>
        </div>
      }
    >
      <span style={{ textDecoration: 'underline', cursor: 'pointer' }}>Hover with delay</span>
    </HoverCard>
  ),
};
