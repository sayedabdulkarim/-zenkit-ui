import type { Meta, StoryObj } from '@storybook/react';
import { VisuallyHidden, Button } from '@zenkit-ui/core';

const meta: Meta<typeof VisuallyHidden> = {
  title: 'Components/VisuallyHidden',
  component: VisuallyHidden,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div>
      <p>There is hidden text after this paragraph (only visible to screen readers):</p>
      <VisuallyHidden>
        This text is only visible to screen readers and other assistive technologies.
      </VisuallyHidden>
      <p>And before this paragraph.</p>
    </div>
  ),
};

export const IconButton: Story = {
  render: () => (
    <Button aria-label="Close">
      <span aria-hidden="true">×</span>
      <VisuallyHidden>Close dialog</VisuallyHidden>
    </Button>
  ),
};

export const IconOnlyButton: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem' }}>
      <Button>
        <span aria-hidden="true">🏠</span>
        <VisuallyHidden>Home</VisuallyHidden>
      </Button>
      <Button>
        <span aria-hidden="true">⚙️</span>
        <VisuallyHidden>Settings</VisuallyHidden>
      </Button>
      <Button>
        <span aria-hidden="true">👤</span>
        <VisuallyHidden>Profile</VisuallyHidden>
      </Button>
    </div>
  ),
};

export const FormLabel: Story = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
      <label htmlFor="search">
        <VisuallyHidden>Search</VisuallyHidden>
        <span aria-hidden="true">🔍</span>
      </label>
      <input id="search" type="search" placeholder="Search..." style={{ padding: '0.5rem' }} />
    </div>
  ),
};

export const SkipLink: Story = {
  render: () => (
    <div>
      <a href="#main-content" style={{ position: 'absolute' }}>
        <VisuallyHidden focusable>Skip to main content</VisuallyHidden>
      </a>
      <nav style={{ padding: '1rem', background: '#f0f0f0' }}>
        <a href="#">Home</a> | <a href="#">About</a> | <a href="#">Contact</a>
      </nav>
      <main id="main-content" style={{ padding: '1rem' }}>
        <h1>Main Content</h1>
        <p>Focus the page and press Tab to see the skip link.</p>
      </main>
    </div>
  ),
};
