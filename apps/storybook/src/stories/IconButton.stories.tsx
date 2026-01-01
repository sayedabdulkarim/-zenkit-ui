import type { Meta, StoryObj } from '@storybook/react';
import { IconButton } from '@zenkit-ui/core';

const meta: Meta<typeof IconButton> = {
  title: 'Components/IconButton',
  component: IconButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

const SearchIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" fill="none" strokeWidth="2">
    <circle cx="11" cy="11" r="8" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
  </svg>
);

export const Default: Story = {
  args: {
    icon: <SearchIcon />,
    'aria-label': 'Search',
  },
};

export const Variants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem' }}>
      <IconButton icon={<SearchIcon />} variant="solid" aria-label="Search" />
      <IconButton icon={<SearchIcon />} variant="outline" aria-label="Search" />
      <IconButton icon={<SearchIcon />} variant="ghost" aria-label="Search" />
      <IconButton icon={<SearchIcon />} variant="soft" aria-label="Search" />
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
      <IconButton icon={<SearchIcon />} size="sm" aria-label="Search" />
      <IconButton icon={<SearchIcon />} size="md" aria-label="Search" />
      <IconButton icon={<SearchIcon />} size="lg" aria-label="Search" />
    </div>
  ),
};

export const Colors: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem' }}>
      <IconButton icon={<SearchIcon />} colorScheme="primary" aria-label="Search" />
      <IconButton icon={<SearchIcon />} colorScheme="secondary" aria-label="Search" />
      <IconButton icon={<SearchIcon />} colorScheme="success" aria-label="Search" />
      <IconButton icon={<SearchIcon />} colorScheme="danger" aria-label="Search" />
    </div>
  ),
};

export const Rounded: Story = {
  args: {
    icon: <SearchIcon />,
    rounded: true,
    'aria-label': 'Search',
  },
};

export const Loading: Story = {
  args: {
    icon: <SearchIcon />,
    loading: true,
    'aria-label': 'Search',
  },
};

export const Disabled: Story = {
  args: {
    icon: <SearchIcon />,
    disabled: true,
    'aria-label': 'Search',
  },
};
