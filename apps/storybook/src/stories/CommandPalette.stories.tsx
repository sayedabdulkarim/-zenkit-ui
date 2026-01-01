import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { CommandPalette, Button } from '@zenkit-ui/core';

const meta: Meta<typeof CommandPalette> = {
  title: 'Navigation/CommandPalette',
  component: CommandPalette,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

const commands = [
  { id: '1', title: 'Go to Home', category: 'Navigation', shortcut: 'G H' },
  { id: '2', title: 'Go to Settings', category: 'Navigation', shortcut: 'G S' },
  { id: '3', title: 'Go to Profile', category: 'Navigation', shortcut: 'G P' },
  { id: '4', title: 'Create New File', category: 'Actions', shortcut: 'Cmd+N' },
  { id: '5', title: 'Save', category: 'Actions', shortcut: 'Cmd+S' },
  { id: '6', title: 'Delete', category: 'Actions', shortcut: 'Del' },
  { id: '7', title: 'Toggle Dark Mode', category: 'Preferences' },
  { id: '8', title: 'Change Language', category: 'Preferences' },
];

export const Default: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <Button onClick={() => setOpen(true)}>
          Open Command Palette (Cmd+K)
        </Button>
        <CommandPalette
          open={open}
          onOpenChange={setOpen}
          commands={commands}
          onSelect={(command) => {
            console.log('Selected:', command);
            setOpen(false);
          }}
        />
      </>
    );
  },
};

export const WithPlaceholder: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <Button onClick={() => setOpen(true)}>Open</Button>
        <CommandPalette
          open={open}
          onOpenChange={setOpen}
          commands={commands}
          placeholder="Type a command or search..."
          onSelect={(command) => setOpen(false)}
        />
      </>
    );
  },
};

export const Grouped: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <Button onClick={() => setOpen(true)}>Open Grouped</Button>
        <CommandPalette
          open={open}
          onOpenChange={setOpen}
          commands={commands}
          grouped
          onSelect={(command) => setOpen(false)}
        />
      </>
    );
  },
};

export const WithIcons: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    const commandsWithIcons = [
      { id: '1', title: 'Home', icon: '🏠', category: 'Navigation' },
      { id: '2', title: 'Settings', icon: '⚙️', category: 'Navigation' },
      { id: '3', title: 'Profile', icon: '👤', category: 'Navigation' },
      { id: '4', title: 'New File', icon: '📄', category: 'Actions' },
      { id: '5', title: 'Search', icon: '🔍', category: 'Actions' },
    ];
    return (
      <>
        <Button onClick={() => setOpen(true)}>Open with Icons</Button>
        <CommandPalette
          open={open}
          onOpenChange={setOpen}
          commands={commandsWithIcons}
          onSelect={(command) => setOpen(false)}
        />
      </>
    );
  },
};
