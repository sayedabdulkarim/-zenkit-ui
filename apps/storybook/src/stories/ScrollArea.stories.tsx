import type { Meta, StoryObj } from '@storybook/react';
import { ScrollArea } from '@zenkit-ui/core';

const meta: Meta<typeof ScrollArea> = {
  title: 'Data Display/ScrollArea',
  component: ScrollArea,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

const longContent = Array.from({ length: 50 })
  .map((_, i) => `Item ${i + 1}: Lorem ipsum dolor sit amet, consectetur adipiscing elit.`)
  .join('\n\n');

export const Default: Story = {
  render: () => (
    <ScrollArea style={{ height: '300px', width: '400px', border: '1px solid #e0e0e0', borderRadius: '8px' }}>
      <div style={{ padding: '1rem' }}>
        {longContent.split('\n\n').map((text, i) => (
          <p key={i} style={{ margin: '0 0 1rem' }}>{text}</p>
        ))}
      </div>
    </ScrollArea>
  ),
};

export const Horizontal: Story = {
  render: () => (
    <ScrollArea style={{ height: '100px', width: '400px', border: '1px solid #e0e0e0', borderRadius: '8px' }}>
      <div style={{ display: 'flex', gap: '1rem', padding: '1rem', width: 'max-content' }}>
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            style={{
              width: '100px',
              height: '60px',
              background: '#f0f0f0',
              borderRadius: '4px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            Item {i + 1}
          </div>
        ))}
      </div>
    </ScrollArea>
  ),
};

export const Both: Story = {
  render: () => (
    <ScrollArea style={{ height: '300px', width: '400px', border: '1px solid #e0e0e0', borderRadius: '8px' }}>
      <div style={{ width: '800px', padding: '1rem' }}>
        {longContent.split('\n\n').map((text, i) => (
          <p key={i} style={{ margin: '0 0 1rem', whiteSpace: 'nowrap' }}>
            {text} - Extended content that makes this line very long to demonstrate horizontal scrolling.
          </p>
        ))}
      </div>
    </ScrollArea>
  ),
};

export const Thin: Story = {
  render: () => (
    <ScrollArea scrollbarSize="thin" style={{ height: '300px', width: '400px', border: '1px solid #e0e0e0', borderRadius: '8px' }}>
      <div style={{ padding: '1rem' }}>
        {longContent.split('\n\n').map((text, i) => (
          <p key={i} style={{ margin: '0 0 1rem' }}>{text}</p>
        ))}
      </div>
    </ScrollArea>
  ),
};

export const Hidden: Story = {
  render: () => (
    <ScrollArea scrollHideDelay={0} style={{ height: '300px', width: '400px', border: '1px solid #e0e0e0', borderRadius: '8px' }}>
      <div style={{ padding: '1rem' }}>
        {longContent.split('\n\n').map((text, i) => (
          <p key={i} style={{ margin: '0 0 1rem' }}>{text}</p>
        ))}
      </div>
    </ScrollArea>
  ),
};
