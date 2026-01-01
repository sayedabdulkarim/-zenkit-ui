import type { Meta, StoryObj } from '@storybook/react';
import { Link } from '@zenkit-ui/core';

const meta: Meta<typeof Link> = {
  title: 'Navigation/Link',
  component: Link,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    href: '#',
    children: 'Default Link',
  },
};

export const Colors: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
      <Link href="#" color="primary">Primary</Link>
      <Link href="#" color="secondary">Secondary</Link>
      <Link href="#" color="success">Success</Link>
      <Link href="#" color="warning">Warning</Link>
      <Link href="#" color="danger">Danger</Link>
    </div>
  ),
};

export const Underlines: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
      <Link href="#" underline="none">No underline</Link>
      <Link href="#" underline="hover">Underline on hover</Link>
      <Link href="#" underline="always">Always underlined</Link>
    </div>
  ),
};

export const External: Story = {
  args: {
    href: 'https://example.com',
    external: true,
    children: 'External Link',
  },
};

export const Disabled: Story = {
  args: {
    href: '#',
    disabled: true,
    children: 'Disabled Link',
  },
};

export const InText: Story = {
  render: () => (
    <p>
      This is a paragraph with an <Link href="#">inline link</Link> inside it.
      You can also have <Link href="#" color="secondary">colored links</Link> in your text.
    </p>
  ),
};
