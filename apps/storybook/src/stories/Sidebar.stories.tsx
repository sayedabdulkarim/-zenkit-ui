import type { Meta, StoryObj } from '@storybook/react';
import { Sidebar, SidebarHeader, SidebarContent, SidebarFooter, SidebarGroup, SidebarItem } from '@zenkit-ui/core';

const meta: Meta<typeof Sidebar> = {
  title: 'Navigation/Sidebar',
  component: Sidebar,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

const HomeIcon = () => <span>🏠</span>;
const UsersIcon = () => <span>👥</span>;
const SettingsIcon = () => <span>⚙️</span>;
const FileIcon = () => <span>📄</span>;
const ChartIcon = () => <span>📊</span>;

export const Default: Story = {
  render: () => (
    <div style={{ display: 'flex', height: '500px' }}>
      <Sidebar>
        <SidebarHeader>
          <strong>Dashboard</strong>
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup title="Menu">
            <SidebarItem icon={<HomeIcon />} active>Home</SidebarItem>
            <SidebarItem icon={<UsersIcon />}>Users</SidebarItem>
            <SidebarItem icon={<FileIcon />}>Documents</SidebarItem>
            <SidebarItem icon={<ChartIcon />}>Analytics</SidebarItem>
          </SidebarGroup>
          <SidebarGroup title="Settings">
            <SidebarItem icon={<SettingsIcon />}>Settings</SidebarItem>
          </SidebarGroup>
        </SidebarContent>
        <SidebarFooter>
          <SidebarItem>Logout</SidebarItem>
        </SidebarFooter>
      </Sidebar>
      <div style={{ flex: 1, padding: '1rem' }}>
        <h2>Main Content</h2>
        <p>This is the main content area.</p>
      </div>
    </div>
  ),
};

export const Collapsed: Story = {
  render: () => (
    <div style={{ display: 'flex', height: '500px' }}>
      <Sidebar collapsed>
        <SidebarHeader>
          <strong>D</strong>
        </SidebarHeader>
        <SidebarContent>
          <SidebarItem icon={<HomeIcon />} />
          <SidebarItem icon={<UsersIcon />} />
          <SidebarItem icon={<FileIcon />} />
          <SidebarItem icon={<ChartIcon />} />
          <SidebarItem icon={<SettingsIcon />} />
        </SidebarContent>
      </Sidebar>
      <div style={{ flex: 1, padding: '1rem' }}>
        <h2>Main Content</h2>
      </div>
    </div>
  ),
};

export const WithBadges: Story = {
  render: () => (
    <div style={{ display: 'flex', height: '500px' }}>
      <Sidebar>
        <SidebarHeader>
          <strong>App</strong>
        </SidebarHeader>
        <SidebarContent>
          <SidebarItem icon={<HomeIcon />} active>Home</SidebarItem>
          <SidebarItem icon={<UsersIcon />} badge={5}>Users</SidebarItem>
          <SidebarItem icon={<FileIcon />} badge="New">Documents</SidebarItem>
          <SidebarItem icon={<ChartIcon />}>Analytics</SidebarItem>
        </SidebarContent>
      </Sidebar>
      <div style={{ flex: 1, padding: '1rem' }}>Content</div>
    </div>
  ),
};
