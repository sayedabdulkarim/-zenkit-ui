import type { Meta, StoryObj } from '@storybook/react';
import { ConfigProvider, Button, Input, Select } from '@zenkit-ui/core';

const meta: Meta<typeof ConfigProvider> = {
  title: 'Utility/ConfigProvider',
  component: ConfigProvider,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <ConfigProvider>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <Button>Default Button</Button>
        <Input placeholder="Default Input" />
        <Select style={{ width: '200px' }}>
          <option>Option 1</option>
          <option>Option 2</option>
        </Select>
      </div>
    </ConfigProvider>
  ),
};

export const CustomTheme: Story = {
  render: () => (
    <ConfigProvider
      theme={{
        primaryColor: '#722ed1',
        borderRadius: '8px',
      }}
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <Button colorScheme="primary">Themed Button</Button>
        <Input placeholder="Themed Input" />
      </div>
    </ConfigProvider>
  ),
};

export const ComponentSize: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '2rem' }}>
      <ConfigProvider componentSize="sm">
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <h4>Small</h4>
          <Button>Small Button</Button>
          <Input placeholder="Small Input" />
        </div>
      </ConfigProvider>
      <ConfigProvider componentSize="md">
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <h4>Medium</h4>
          <Button>Medium Button</Button>
          <Input placeholder="Medium Input" />
        </div>
      </ConfigProvider>
      <ConfigProvider componentSize="lg">
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <h4>Large</h4>
          <Button>Large Button</Button>
          <Input placeholder="Large Input" />
        </div>
      </ConfigProvider>
    </div>
  ),
};

export const Nested: Story = {
  render: () => (
    <ConfigProvider theme={{ primaryColor: '#1890ff' }}>
      <div style={{ padding: '1rem', border: '1px solid #e0e0e0', borderRadius: '8px' }}>
        <h4>Outer Config (Blue)</h4>
        <Button colorScheme="primary">Blue Button</Button>
        <ConfigProvider theme={{ primaryColor: '#52c41a' }}>
          <div style={{ marginTop: '1rem', padding: '1rem', background: '#f5f5f5', borderRadius: '8px' }}>
            <h4>Inner Config (Green)</h4>
            <Button colorScheme="primary">Green Button</Button>
          </div>
        </ConfigProvider>
      </div>
    </ConfigProvider>
  ),
};

export const RTL: Story = {
  render: () => (
    <ConfigProvider direction="rtl">
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', textAlign: 'right' }}>
        <h4>Right-to-Left Layout</h4>
        <Input placeholder="RTL Input" />
        <Button>RTL Button</Button>
      </div>
    </ConfigProvider>
  ),
};

export const PrefixCls: Story = {
  render: () => (
    <ConfigProvider prefixCls="zenkit">
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <p>Components use &quot;zenkit&quot; prefix for CSS classes</p>
        <Button>Prefixed Button</Button>
        <Input placeholder="Prefixed Input" />
      </div>
    </ConfigProvider>
  ),
};
