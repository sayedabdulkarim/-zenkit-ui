import type { Meta, StoryObj } from '@storybook/react';
import { AppBar, Button, Input } from '@zenkit-ui/core';

const meta: Meta<typeof AppBar> = {
  title: 'Components/AppBar',
  component: AppBar,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    position: { control: 'select', options: ['static', 'fixed', 'sticky'] },
    variant: { control: 'select', options: ['default', 'transparent', 'blur'] },
    color: { control: 'select', options: ['default', 'primary', 'dark'] },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <AppBar>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', padding: '0 1rem' }}>
        <h2>MyApp</h2>
        <nav style={{ display: 'flex', gap: '1rem' }}>
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </nav>
        <Button size="sm">Sign In</Button>
      </div>
    </AppBar>
  ),
};

export const Colors: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <AppBar color="default">
        <div style={{ padding: '0 1rem' }}>Default Color AppBar</div>
      </AppBar>
      <AppBar color="primary">
        <div style={{ padding: '0 1rem', color: 'white' }}>Primary Color AppBar</div>
      </AppBar>
      <AppBar color="dark">
        <div style={{ padding: '0 1rem', color: 'white' }}>Dark Color AppBar</div>
      </AppBar>
    </div>
  ),
};

export const WithSearch: Story = {
  render: () => (
    <AppBar>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', padding: '0 1rem' }}>
        <h2>Logo</h2>
        <Input placeholder="Search..." style={{ width: '300px' }} />
        <div style={{ display: 'flex', gap: '0.5rem' }}>
          <Button variant="outline" size="sm">Log In</Button>
          <Button size="sm">Sign Up</Button>
        </div>
      </div>
    </AppBar>
  ),
};

export const Transparent: Story = {
  render: () => (
    <div style={{ height: '200px', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}>
      <AppBar variant="transparent">
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', padding: '0 1rem', color: 'white' }}>
          <h2>Transparent</h2>
          <nav style={{ display: 'flex', gap: '1rem' }}>
            <a href="#" style={{ color: 'white' }}>Home</a>
            <a href="#" style={{ color: 'white' }}>About</a>
          </nav>
        </div>
      </AppBar>
    </div>
  ),
};

export const Blur: Story = {
  render: () => (
    <div style={{ position: 'relative', height: '200px', background: 'url(https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=800) center/cover' }}>
      <AppBar variant="blur">
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', padding: '0 1rem' }}>
          <h2>Blur Effect</h2>
          <Button size="sm">Action</Button>
        </div>
      </AppBar>
    </div>
  ),
};
