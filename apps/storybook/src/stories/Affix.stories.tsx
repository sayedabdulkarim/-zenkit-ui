import type { Meta, StoryObj } from '@storybook/react';
import { Affix, Button } from '@zenkit-ui/core';

const meta: Meta<typeof Affix> = {
  title: 'Utility/Affix',
  component: Affix,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div style={{ height: '200vh', padding: '1rem' }}>
      <p>Scroll down to see the affixed button stick to the top</p>
      <div style={{ marginTop: '200px' }}>
        <Affix offsetTop={20}>
          <Button colorScheme="primary">Affixed to Top</Button>
        </Affix>
      </div>
      <div style={{ height: '1000px', marginTop: '20px', background: '#f5f5f5', padding: '1rem' }}>
        <p>Scroll content...</p>
      </div>
    </div>
  ),
};

export const OffsetTop: Story = {
  render: () => (
    <div style={{ height: '200vh', padding: '1rem' }}>
      <p>Scroll down - button affixes 100px from top</p>
      <div style={{ marginTop: '300px' }}>
        <Affix offsetTop={100}>
          <Button>100px from Top</Button>
        </Affix>
      </div>
      <div style={{ height: '1000px', marginTop: '20px' }}>
        <p>More content below...</p>
      </div>
    </div>
  ),
};

export const OffsetBottom: Story = {
  render: () => (
    <div style={{ height: '200vh', padding: '1rem' }}>
      <p>Scroll to the bottom to see the affixed button</p>
      <div style={{ height: '800px' }}>
        <p>Scroll content...</p>
      </div>
      <Affix offsetBottom={20}>
        <Button colorScheme="primary">Affixed to Bottom</Button>
      </Affix>
      <div style={{ height: '500px', marginTop: '20px' }}>
        <p>More content below...</p>
      </div>
    </div>
  ),
};

export const WithCallback: Story = {
  render: () => (
    <div style={{ height: '200vh', padding: '1rem' }}>
      <p>Scroll down - check console for affix state changes</p>
      <div style={{ marginTop: '200px' }}>
        <Affix offsetTop={20} onChange={(affixed) => console.log('Affixed:', affixed)}>
          <Button>Watch Console</Button>
        </Affix>
      </div>
      <div style={{ height: '1000px', marginTop: '20px' }}>
        <p>Scroll content...</p>
      </div>
    </div>
  ),
};

export const InContainer: Story = {
  render: () => (
    <div style={{ padding: '1rem' }}>
      <p>The button affixes within its scrollable container</p>
      <div
        style={{
          height: '300px',
          overflow: 'auto',
          border: '1px solid #e0e0e0',
          borderRadius: '8px',
          position: 'relative',
        }}
      >
        <div style={{ height: '100px', padding: '1rem' }}>
          <p>Scroll within this container...</p>
        </div>
        <Affix offsetTop={10}>
          <Button colorScheme="primary">Affixed in Container</Button>
        </Affix>
        <div style={{ height: '600px', padding: '1rem' }}>
          <p>More scrollable content...</p>
        </div>
      </div>
    </div>
  ),
};

export const Multiple: Story = {
  render: () => (
    <div style={{ height: '200vh', padding: '1rem' }}>
      <p>Multiple affixed elements at different positions</p>
      <div style={{ marginTop: '100px' }}>
        <Affix offsetTop={20}>
          <Button>First (20px)</Button>
        </Affix>
      </div>
      <div style={{ marginTop: '200px' }}>
        <Affix offsetTop={70}>
          <Button colorScheme="secondary">Second (70px)</Button>
        </Affix>
      </div>
      <div style={{ marginTop: '200px' }}>
        <Affix offsetTop={120}>
          <Button variant="outline">Third (120px)</Button>
        </Affix>
      </div>
      <div style={{ height: '1000px', marginTop: '20px' }}>
        <p>Scroll content...</p>
      </div>
    </div>
  ),
};
