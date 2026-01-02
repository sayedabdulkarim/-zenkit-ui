import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { NavLink, Badge } from '@zenkit-ui/core';

const meta: Meta<typeof NavLink> = {
  title: 'Components/NavLink',
  component: NavLink,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'select', options: ['subtle', 'light', 'filled'] },
    color: { control: 'select', options: ['primary', 'secondary', 'success', 'warning', 'error'] },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Dashboard',
    href: '#',
  },
};

export const WithIcon: Story = {
  args: {
    label: 'Settings',
    icon: '⚙️',
    href: '#',
  },
};

export const WithDescription: Story = {
  args: {
    label: 'Messages',
    description: '3 unread messages',
    icon: '💬',
    href: '#',
  },
};

export const Active: Story = {
  render: () => {
    const [active, setActive] = useState('dashboard');
    const links = [
      { id: 'dashboard', label: 'Dashboard', icon: '🏠' },
      { id: 'users', label: 'Users', icon: '👥' },
      { id: 'settings', label: 'Settings', icon: '⚙️' },
      { id: 'analytics', label: 'Analytics', icon: '📊' },
    ];
    return (
      <div style={{ width: '250px' }}>
        {links.map((link) => (
          <NavLink
            key={link.id}
            label={link.label}
            icon={link.icon}
            active={active === link.id}
            onClick={() => setActive(link.id)}
          />
        ))}
      </div>
    );
  },
};

export const Nested: Story = {
  render: () => {
    const [opened, setOpened] = useState(true);
    return (
      <div style={{ width: '250px' }}>
        <NavLink
          label="Products"
          icon="📦"
          opened={opened}
          onClick={() => setOpened(!opened)}
        >
          <NavLink label="All Products" />
          <NavLink label="Categories" />
          <NavLink label="Inventory" />
        </NavLink>
        <NavLink label="Orders" icon="📋" />
        <NavLink label="Customers" icon="👤" />
      </div>
    );
  },
};

export const Variants: Story = {
  render: () => (
    <div style={{ width: '250px', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <NavLink label="Subtle (default)" icon="📌" variant="subtle" active />
      <NavLink label="Light" icon="📌" variant="light" active />
      <NavLink label="Filled" icon="📌" variant="filled" active />
    </div>
  ),
};

export const WithRightSection: Story = {
  render: () => (
    <div style={{ width: '250px' }}>
      <NavLink label="Inbox" icon="📥" rightSection={<Badge color="primary">5</Badge>} />
      <NavLink label="Drafts" icon="📝" rightSection={<Badge color="secondary">2</Badge>} />
      <NavLink label="Sent" icon="📤" />
      <NavLink label="Trash" icon="🗑️" rightSection="⚠️" />
    </div>
  ),
};

export const Colors: Story = {
  render: () => (
    <div style={{ width: '250px' }}>
      <NavLink label="Primary" color="primary" active />
      <NavLink label="Secondary" color="secondary" active />
      <NavLink label="Success" color="success" active />
      <NavLink label="Warning" color="warning" active />
      <NavLink label="Error" color="error" active />
    </div>
  ),
};

export const Disabled: Story = {
  render: () => (
    <div style={{ width: '250px' }}>
      <NavLink label="Available" icon="✅" />
      <NavLink label="Disabled" icon="🚫" disabled />
      <NavLink label="Also Available" icon="✅" />
    </div>
  ),
};
