import type { Meta, StoryObj } from '@storybook/react';
import { BackTop, Button } from '@zenkit-ui/core';

const meta: Meta<typeof BackTop> = {
  title: 'Components/BackTop',
  component: BackTop,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div style={{ height: '200vh', padding: '20px' }}>
      <h2>Scroll down to see the BackTop button</h2>
      <p>The button appears after scrolling 400px.</p>
      {Array.from({ length: 50 }).map((_, i) => (
        <p key={i}>Content line {i + 1}</p>
      ))}
      <BackTop />
    </div>
  ),
};

export const CustomContent: Story = {
  render: () => (
    <div style={{ height: '200vh', padding: '20px' }}>
      <h2>Custom BackTop Button</h2>
      <p>Scroll down to see the custom button.</p>
      {Array.from({ length: 50 }).map((_, i) => (
        <p key={i}>Content line {i + 1}</p>
      ))}
      <BackTop>
        <Button size="sm" style={{ borderRadius: '50%', width: '40px', height: '40px', padding: 0 }}>
          ↑
        </Button>
      </BackTop>
    </div>
  ),
};

export const LowVisibility: Story = {
  render: () => (
    <div style={{ height: '200vh', padding: '20px' }}>
      <h2>Low Visibility Threshold</h2>
      <p>The button appears after scrolling just 100px.</p>
      {Array.from({ length: 50 }).map((_, i) => (
        <p key={i}>Content line {i + 1}</p>
      ))}
      <BackTop visibilityHeight={100} />
    </div>
  ),
};

export const SlowScroll: Story = {
  render: () => (
    <div style={{ height: '200vh', padding: '20px' }}>
      <h2>Slow Scroll Animation</h2>
      <p>Takes 1 second to scroll to top.</p>
      {Array.from({ length: 50 }).map((_, i) => (
        <p key={i}>Content line {i + 1}</p>
      ))}
      <BackTop duration={1000} />
    </div>
  ),
};
