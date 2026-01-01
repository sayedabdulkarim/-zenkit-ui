import type { Meta, StoryObj } from '@storybook/react';
import { ContextMenu } from '@zenkit-ui/core';

const meta: Meta<typeof ContextMenu> = {
  title: 'Navigation/ContextMenu',
  component: ContextMenu,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <ContextMenu
      items={[
        { key: 'cut', label: 'Cut', shortcut: 'Cmd+X' },
        { key: 'copy', label: 'Copy', shortcut: 'Cmd+C' },
        { key: 'paste', label: 'Paste', shortcut: 'Cmd+V' },
        { key: 'divider', type: 'divider' },
        { key: 'delete', label: 'Delete', shortcut: 'Del' },
      ]}
      onSelect={(key) => console.log('Selected:', key)}
    >
      <div
        style={{
          padding: '4rem',
          background: '#f5f5f5',
          border: '2px dashed #ccc',
          borderRadius: '8px',
          textAlign: 'center',
        }}
      >
        Right-click here
      </div>
    </ContextMenu>
  ),
};

export const WithSubMenu: Story = {
  render: () => (
    <ContextMenu
      items={[
        { key: 'new', label: 'New', children: [
          { key: 'file', label: 'File' },
          { key: 'folder', label: 'Folder' },
          { key: 'project', label: 'Project' },
        ]},
        { key: 'open', label: 'Open' },
        { key: 'divider1', type: 'divider' },
        { key: 'share', label: 'Share', children: [
          { key: 'email', label: 'Email' },
          { key: 'link', label: 'Copy Link' },
        ]},
        { key: 'divider2', type: 'divider' },
        { key: 'delete', label: 'Delete', danger: true },
      ]}
      onSelect={(key) => console.log('Selected:', key)}
    >
      <div
        style={{
          padding: '4rem',
          background: '#f0f8ff',
          border: '2px dashed #4a90d9',
          borderRadius: '8px',
          textAlign: 'center',
        }}
      >
        Right-click for submenu
      </div>
    </ContextMenu>
  ),
};

export const WithIcons: Story = {
  render: () => (
    <ContextMenu
      items={[
        { key: 'edit', label: 'Edit', icon: '✏️' },
        { key: 'duplicate', label: 'Duplicate', icon: '📋' },
        { key: 'download', label: 'Download', icon: '⬇️' },
        { key: 'divider', type: 'divider' },
        { key: 'delete', label: 'Delete', icon: '🗑️', danger: true },
      ]}
      onSelect={(key) => console.log('Selected:', key)}
    >
      <div
        style={{
          padding: '4rem',
          background: '#fff5f5',
          border: '2px dashed #ff6b6b',
          borderRadius: '8px',
          textAlign: 'center',
        }}
      >
        Right-click for icons
      </div>
    </ContextMenu>
  ),
};

export const DisabledItems: Story = {
  render: () => (
    <ContextMenu
      items={[
        { key: 'cut', label: 'Cut' },
        { key: 'copy', label: 'Copy' },
        { key: 'paste', label: 'Paste', disabled: true },
        { key: 'divider', type: 'divider' },
        { key: 'undo', label: 'Undo', disabled: true },
        { key: 'redo', label: 'Redo', disabled: true },
      ]}
      onSelect={(key) => console.log('Selected:', key)}
    >
      <div
        style={{
          padding: '4rem',
          background: '#f5f5f5',
          border: '2px dashed #ccc',
          borderRadius: '8px',
          textAlign: 'center',
        }}
      >
        Some items disabled
      </div>
    </ContextMenu>
  ),
};
