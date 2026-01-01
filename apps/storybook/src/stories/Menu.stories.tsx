import type { Meta, StoryObj } from '@storybook/react';
import { Menu, MenuItem, SubMenu, MenuGroup, MenuDivider } from '@zenkit-ui/core';

const meta: Meta<typeof Menu> = {
  title: 'Components/Menu',
  component: Menu,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    mode: { control: 'select', options: ['vertical', 'horizontal', 'inline'] },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Vertical: Story = {
  render: () => (
    <div style={{ width: '250px' }}>
      <Menu defaultActiveKey="home">
        <MenuItem itemKey="home" icon={<span>🏠</span>}>Home</MenuItem>
        <MenuItem itemKey="dashboard" icon={<span>📊</span>}>Dashboard</MenuItem>
        <SubMenu subKey="settings" title="Settings" icon={<span>⚙️</span>}>
          <MenuItem itemKey="profile">Profile</MenuItem>
          <MenuItem itemKey="account">Account</MenuItem>
          <MenuItem itemKey="security">Security</MenuItem>
        </SubMenu>
        <MenuDivider />
        <MenuItem itemKey="logout" icon={<span>🚪</span>}>Logout</MenuItem>
      </Menu>
    </div>
  ),
};

export const Horizontal: Story = {
  render: () => (
    <Menu mode="horizontal" defaultActiveKey="home">
      <MenuItem itemKey="home">Home</MenuItem>
      <MenuItem itemKey="products">Products</MenuItem>
      <MenuItem itemKey="about">About</MenuItem>
      <MenuItem itemKey="contact">Contact</MenuItem>
    </Menu>
  ),
};

export const Inline: Story = {
  render: () => (
    <div style={{ width: '250px' }}>
      <Menu mode="inline" defaultActiveKey="dashboard" defaultOpenKeys={['reports']}>
        <MenuItem itemKey="dashboard" icon={<span>📊</span>}>Dashboard</MenuItem>
        <SubMenu subKey="reports" title="Reports" icon={<span>📈</span>}>
          <MenuItem itemKey="sales">Sales Report</MenuItem>
          <MenuItem itemKey="analytics">Analytics</MenuItem>
          <MenuItem itemKey="traffic">Traffic</MenuItem>
        </SubMenu>
        <SubMenu subKey="users" title="Users" icon={<span>👥</span>}>
          <MenuItem itemKey="list">User List</MenuItem>
          <MenuItem itemKey="roles">Roles</MenuItem>
        </SubMenu>
        <MenuItem itemKey="settings" icon={<span>⚙️</span>}>Settings</MenuItem>
      </Menu>
    </div>
  ),
};

export const WithGroups: Story = {
  render: () => (
    <div style={{ width: '250px' }}>
      <Menu defaultActiveKey="inbox">
        <MenuGroup title="Main">
          <MenuItem itemKey="inbox">Inbox</MenuItem>
          <MenuItem itemKey="starred">Starred</MenuItem>
          <MenuItem itemKey="sent">Sent</MenuItem>
        </MenuGroup>
        <MenuGroup title="Categories">
          <MenuItem itemKey="work">Work</MenuItem>
          <MenuItem itemKey="personal">Personal</MenuItem>
          <MenuItem itemKey="social">Social</MenuItem>
        </MenuGroup>
      </Menu>
    </div>
  ),
};

export const WithDisabled: Story = {
  render: () => (
    <div style={{ width: '250px' }}>
      <Menu defaultActiveKey="home">
        <MenuItem itemKey="home">Home</MenuItem>
        <MenuItem itemKey="active">Active Page</MenuItem>
        <MenuItem itemKey="disabled" disabled>Disabled Item</MenuItem>
        <SubMenu subKey="more" title="More Options" disabled>
          <MenuItem itemKey="option1">Option 1</MenuItem>
        </SubMenu>
      </Menu>
    </div>
  ),
};
