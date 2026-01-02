import type { Meta, StoryObj } from '@storybook/react';
import { AppShell, AppShellHeader, AppShellNavbar, AppShellMain, AppShellAside, AppShellFooter, Button } from '@zenkit-ui/core';

const meta: Meta<typeof AppShell> = {
  title: 'Components/AppShell',
  component: AppShell,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <AppShell style={{ height: '400px' }}>
      <AppShellHeader>
        <div style={{ display: 'flex', alignItems: 'center', padding: '0 1rem', height: '100%' }}>
          <h2>Logo</h2>
        </div>
      </AppShellHeader>
      <AppShellNavbar>
        <nav style={{ padding: '1rem' }}>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            <li style={{ padding: '0.5rem 0' }}>Dashboard</li>
            <li style={{ padding: '0.5rem 0' }}>Users</li>
            <li style={{ padding: '0.5rem 0' }}>Settings</li>
          </ul>
        </nav>
      </AppShellNavbar>
      <AppShellMain>
        <div style={{ padding: '1rem' }}>
          <h1>Main Content</h1>
          <p>This is the main content area of the application.</p>
        </div>
      </AppShellMain>
    </AppShell>
  ),
};

export const WithAside: Story = {
  render: () => (
    <AppShell style={{ height: '400px' }}>
      <AppShellHeader>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 1rem', height: '100%' }}>
          <h2>MyApp</h2>
          <Button size="sm">Profile</Button>
        </div>
      </AppShellHeader>
      <AppShellNavbar>
        <nav style={{ padding: '1rem' }}>Navigation</nav>
      </AppShellNavbar>
      <AppShellMain>
        <div style={{ padding: '1rem' }}>
          <h1>Main Content</h1>
          <p>Content with aside panel.</p>
        </div>
      </AppShellMain>
      <AppShellAside>
        <div style={{ padding: '1rem' }}>
          <h3>Aside</h3>
          <p>Additional information</p>
        </div>
      </AppShellAside>
    </AppShell>
  ),
};

export const WithFooter: Story = {
  render: () => (
    <AppShell style={{ height: '400px' }}>
      <AppShellHeader>
        <div style={{ display: 'flex', alignItems: 'center', padding: '0 1rem', height: '100%' }}>
          <h2>App with Footer</h2>
        </div>
      </AppShellHeader>
      <AppShellMain>
        <div style={{ padding: '1rem' }}>
          <h1>Main Content</h1>
          <p>This layout includes a footer.</p>
        </div>
      </AppShellMain>
      <AppShellFooter>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
          <p>© 2024 MyApp. All rights reserved.</p>
        </div>
      </AppShellFooter>
    </AppShell>
  ),
};

export const CollapsedNavbar: Story = {
  render: () => (
    <AppShell style={{ height: '400px' }} navbarCollapsed>
      <AppShellHeader>
        <div style={{ display: 'flex', alignItems: 'center', padding: '0 1rem', height: '100%' }}>
          <h2>Collapsed Nav</h2>
        </div>
      </AppShellHeader>
      <AppShellNavbar collapsed>
        <nav style={{ padding: '0.5rem', textAlign: 'center' }}>
          <div>🏠</div>
          <div>👤</div>
          <div>⚙️</div>
        </nav>
      </AppShellNavbar>
      <AppShellMain>
        <div style={{ padding: '1rem' }}>
          <h1>Collapsed Navigation</h1>
          <p>The navbar is in collapsed state showing only icons.</p>
        </div>
      </AppShellMain>
    </AppShell>
  ),
};
