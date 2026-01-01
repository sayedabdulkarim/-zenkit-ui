import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { BottomNavigation, BottomNavigationItem } from '@zenkit-ui/core';

const meta: Meta<typeof BottomNavigation> = {
  title: 'Navigation/BottomNavigation',
  component: BottomNavigation,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    const [active, setActive] = useState('home');
    return (
      <div style={{ height: '400px', position: 'relative' }}>
        <div style={{ padding: '1rem' }}>
          <p>Active: {active}</p>
        </div>
        <BottomNavigation activeKey={active} onChange={setActive}>
          <BottomNavigationItem itemKey="home" icon="🏠" label="Home" />
          <BottomNavigationItem itemKey="search" icon="🔍" label="Search" />
          <BottomNavigationItem itemKey="favorites" icon="❤️" label="Favorites" />
          <BottomNavigationItem itemKey="profile" icon="👤" label="Profile" />
        </BottomNavigation>
      </div>
    );
  },
};

export const WithBadges: Story = {
  render: () => {
    const [active, setActive] = useState('home');
    return (
      <div style={{ height: '400px', position: 'relative' }}>
        <BottomNavigation activeKey={active} onChange={setActive}>
          <BottomNavigationItem itemKey="home" icon="🏠" label="Home" />
          <BottomNavigationItem itemKey="messages" icon="💬" label="Messages" badge={3} />
          <BottomNavigationItem itemKey="notifications" icon="🔔" label="Alerts" badge={12} />
          <BottomNavigationItem itemKey="profile" icon="👤" label="Profile" />
        </BottomNavigation>
      </div>
    );
  },
};

export const WithoutLabels: Story = {
  render: () => {
    const [active, setActive] = useState('home');
    return (
      <div style={{ height: '400px', position: 'relative' }}>
        <BottomNavigation activeKey={active} onChange={setActive} showLabels={false}>
          <BottomNavigationItem itemKey="home" icon="🏠" label="Home" />
          <BottomNavigationItem itemKey="search" icon="🔍" label="Search" />
          <BottomNavigationItem itemKey="add" icon="➕" label="Add" />
          <BottomNavigationItem itemKey="favorites" icon="❤️" label="Favorites" />
          <BottomNavigationItem itemKey="profile" icon="👤" label="Profile" />
        </BottomNavigation>
      </div>
    );
  },
};

export const FiveItems: Story = {
  render: () => {
    const [active, setActive] = useState('home');
    return (
      <div style={{ height: '400px', position: 'relative' }}>
        <BottomNavigation activeKey={active} onChange={setActive}>
          <BottomNavigationItem itemKey="home" icon="🏠" label="Home" />
          <BottomNavigationItem itemKey="explore" icon="🧭" label="Explore" />
          <BottomNavigationItem itemKey="add" icon="➕" label="Create" />
          <BottomNavigationItem itemKey="inbox" icon="📥" label="Inbox" />
          <BottomNavigationItem itemKey="profile" icon="👤" label="Profile" />
        </BottomNavigation>
      </div>
    );
  },
};
