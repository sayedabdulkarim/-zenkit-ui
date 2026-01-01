import type { Meta, StoryObj } from '@storybook/react';
import { Menubar, MenubarMenu } from '@zenkit-ui/core';

const meta: Meta<typeof Menubar> = {
  title: 'Navigation/Menubar',
  component: Menubar,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Menubar>
      <MenubarMenu
        trigger="File"
        items={[
          { key: 'new', label: 'New File', shortcut: 'Cmd+N' },
          { key: 'open', label: 'Open...', shortcut: 'Cmd+O' },
          { key: 'save', label: 'Save', shortcut: 'Cmd+S' },
          { key: 'divider1', type: 'separator' },
          { key: 'exit', label: 'Exit' },
        ]}
      />
      <MenubarMenu
        trigger="Edit"
        items={[
          { key: 'undo', label: 'Undo', shortcut: 'Cmd+Z' },
          { key: 'redo', label: 'Redo', shortcut: 'Cmd+Shift+Z' },
          { key: 'divider1', type: 'separator' },
          { key: 'cut', label: 'Cut', shortcut: 'Cmd+X' },
          { key: 'copy', label: 'Copy', shortcut: 'Cmd+C' },
          { key: 'paste', label: 'Paste', shortcut: 'Cmd+V' },
        ]}
      />
      <MenubarMenu
        trigger="View"
        items={[
          { key: 'zoom-in', label: 'Zoom In', shortcut: 'Cmd++' },
          { key: 'zoom-out', label: 'Zoom Out', shortcut: 'Cmd+-' },
          { key: 'divider1', type: 'separator' },
          { key: 'fullscreen', label: 'Fullscreen', shortcut: 'F11' },
        ]}
      />
      <MenubarMenu
        trigger="Help"
        items={[
          { key: 'docs', label: 'Documentation' },
          { key: 'about', label: 'About' },
        ]}
      />
    </Menubar>
  ),
};

export const WithCheckbox: Story = {
  render: () => (
    <Menubar>
      <MenubarMenu
        trigger="View"
        items={[
          { key: 'toolbar', label: 'Show Toolbar', type: 'checkbox', checked: true },
          { key: 'sidebar', label: 'Show Sidebar', type: 'checkbox', checked: true },
          { key: 'statusbar', label: 'Show Status Bar', type: 'checkbox', checked: false },
        ]}
      />
      <MenubarMenu
        trigger="Format"
        items={[
          { key: 'bold', label: 'Bold', shortcut: 'Cmd+B' },
          { key: 'italic', label: 'Italic', shortcut: 'Cmd+I' },
          { key: 'underline', label: 'Underline', shortcut: 'Cmd+U' },
        ]}
      />
    </Menubar>
  ),
};

export const WithSubmenus: Story = {
  render: () => (
    <Menubar>
      <MenubarMenu
        trigger="File"
        items={[
          { key: 'new', label: 'New', children: [
            { key: 'new-file', label: 'New File' },
            { key: 'new-folder', label: 'New Folder' },
            { key: 'new-project', label: 'New Project' },
          ]},
          { key: 'open', label: 'Open Recent', children: [
            { key: 'recent-1', label: 'document.txt' },
            { key: 'recent-2', label: 'project.json' },
            { key: 'recent-3', label: 'styles.css' },
          ]},
          { key: 'divider', type: 'separator' },
          { key: 'exit', label: 'Exit' },
        ]}
      />
    </Menubar>
  ),
};

export const WithIcons: Story = {
  render: () => (
    <Menubar>
      <MenubarMenu
        trigger="File"
        items={[
          { key: 'new', label: 'New', icon: '📄' },
          { key: 'open', label: 'Open', icon: '📂' },
          { key: 'save', label: 'Save', icon: '💾' },
          { key: 'divider', type: 'separator' },
          { key: 'print', label: 'Print', icon: '🖨️' },
        ]}
      />
    </Menubar>
  ),
};
