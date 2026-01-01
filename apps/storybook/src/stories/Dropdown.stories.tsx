import type { Meta, StoryObj } from '@storybook/react';
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  DropdownDivider,
  DropdownHeader,
} from '@zenkit-ui/core';

const meta: Meta<typeof Dropdown> = {
  title: 'Components/Dropdown',
  component: Dropdown,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Dropdown>
      <DropdownTrigger>Open Menu</DropdownTrigger>
      <DropdownMenu>
        <DropdownItem onSelect={() => console.log('Edit')}>Edit</DropdownItem>
        <DropdownItem onSelect={() => console.log('Duplicate')}>Duplicate</DropdownItem>
        <DropdownDivider />
        <DropdownItem onSelect={() => console.log('Delete')} danger>Delete</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  ),
};

export const WithHeader: Story = {
  render: () => (
    <Dropdown>
      <DropdownTrigger>Actions</DropdownTrigger>
      <DropdownMenu>
        <DropdownHeader>User Actions</DropdownHeader>
        <DropdownItem>View Profile</DropdownItem>
        <DropdownItem>Settings</DropdownItem>
        <DropdownDivider />
        <DropdownItem>Sign Out</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  ),
};

export const WithIcons: Story = {
  render: () => (
    <Dropdown>
      <DropdownTrigger>File</DropdownTrigger>
      <DropdownMenu>
        <DropdownItem icon={<span>📄</span>}>New</DropdownItem>
        <DropdownItem icon={<span>📂</span>}>Open</DropdownItem>
        <DropdownItem icon={<span>💾</span>}>Save</DropdownItem>
        <DropdownDivider />
        <DropdownItem icon={<span>🗑️</span>} danger>Delete</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  ),
};

export const WithDisabledItems: Story = {
  render: () => (
    <Dropdown>
      <DropdownTrigger>Options</DropdownTrigger>
      <DropdownMenu>
        <DropdownItem>Available</DropdownItem>
        <DropdownItem disabled>Disabled</DropdownItem>
        <DropdownItem>Another Option</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  ),
};

export const Placements: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '2rem', padding: '2rem' }}>
      <Dropdown placement="bottom-start">
        <DropdownTrigger>Bottom Start</DropdownTrigger>
        <DropdownMenu>
          <DropdownItem>Option 1</DropdownItem>
          <DropdownItem>Option 2</DropdownItem>
        </DropdownMenu>
      </Dropdown>

      <Dropdown placement="bottom-end">
        <DropdownTrigger>Bottom End</DropdownTrigger>
        <DropdownMenu>
          <DropdownItem>Option 1</DropdownItem>
          <DropdownItem>Option 2</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  ),
};
