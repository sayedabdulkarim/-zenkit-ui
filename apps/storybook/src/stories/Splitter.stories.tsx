import type { Meta, StoryObj } from '@storybook/react';
import { Splitter, SplitterPanel } from '@zenkit-ui/core';

const meta: Meta<typeof Splitter> = {
  title: 'Layout/Splitter',
  component: Splitter,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Horizontal: Story = {
  render: () => (
    <div style={{ height: '400px' }}>
      <Splitter orientation="horizontal">
        <SplitterPanel defaultSize={30} minSize={20}>
          <div style={{ padding: '1rem', background: '#f5f5f5', height: '100%' }}>
            Left Panel
          </div>
        </SplitterPanel>
        <SplitterPanel minSize={20}>
          <div style={{ padding: '1rem', height: '100%' }}>
            Right Panel
          </div>
        </SplitterPanel>
      </Splitter>
    </div>
  ),
};

export const Vertical: Story = {
  render: () => (
    <div style={{ height: '400px' }}>
      <Splitter orientation="vertical">
        <SplitterPanel defaultSize={40}>
          <div style={{ padding: '1rem', background: '#f5f5f5', height: '100%' }}>
            Top Panel
          </div>
        </SplitterPanel>
        <SplitterPanel>
          <div style={{ padding: '1rem', height: '100%' }}>
            Bottom Panel
          </div>
        </SplitterPanel>
      </Splitter>
    </div>
  ),
};

export const ThreePanels: Story = {
  render: () => (
    <div style={{ height: '400px' }}>
      <Splitter orientation="horizontal">
        <SplitterPanel defaultSize={25} minSize={15}>
          <div style={{ padding: '1rem', background: '#e3e3e3', height: '100%' }}>
            Sidebar
          </div>
        </SplitterPanel>
        <SplitterPanel minSize={30}>
          <div style={{ padding: '1rem', height: '100%' }}>
            Main Content
          </div>
        </SplitterPanel>
        <SplitterPanel defaultSize={25} minSize={15}>
          <div style={{ padding: '1rem', background: '#e3e3e3', height: '100%' }}>
            Properties
          </div>
        </SplitterPanel>
      </Splitter>
    </div>
  ),
};

export const Nested: Story = {
  render: () => (
    <div style={{ height: '500px' }}>
      <Splitter orientation="horizontal">
        <SplitterPanel defaultSize={30} minSize={20}>
          <div style={{ padding: '1rem', background: '#e3e3e3', height: '100%' }}>
            Sidebar
          </div>
        </SplitterPanel>
        <SplitterPanel>
          <Splitter orientation="vertical">
            <SplitterPanel defaultSize={60}>
              <div style={{ padding: '1rem', height: '100%' }}>
                Editor
              </div>
            </SplitterPanel>
            <SplitterPanel>
              <div style={{ padding: '1rem', background: '#f5f5f5', height: '100%' }}>
                Terminal
              </div>
            </SplitterPanel>
          </Splitter>
        </SplitterPanel>
      </Splitter>
    </div>
  ),
};
