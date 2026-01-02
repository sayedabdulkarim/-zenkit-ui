import type { Meta, StoryObj } from '@storybook/react';
import { Blockquote } from '@zenkit-ui/core';

const meta: Meta<typeof Blockquote> = {
  title: 'Typography/Blockquote',
  component: Blockquote,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'bordered', 'filled', 'minimal'],
      description: 'The visual style of the blockquote',
    },
    colorScheme: {
      control: 'select',
      options: ['gray', 'primary', 'success', 'warning', 'danger'],
      description: 'The color scheme',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'The size of the blockquote',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'The only way to do great work is to love what you do.',
    cite: 'Steve Jobs',
  },
};

export const Variants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', maxWidth: '500px' }}>
      <Blockquote variant="default" cite="Default">
        This is the default variant with a left border accent.
      </Blockquote>
      <Blockquote variant="bordered" cite="Bordered">
        This is the bordered variant with a full border around.
      </Blockquote>
      <Blockquote variant="filled" cite="Filled">
        This is the filled variant with a background color.
      </Blockquote>
      <Blockquote variant="minimal" cite="Minimal">
        This is the minimal variant with just styling.
      </Blockquote>
    </div>
  ),
};

export const ColorSchemes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', maxWidth: '500px' }}>
      <Blockquote colorScheme="gray" cite="Gray">
        A gray colored blockquote for neutral content.
      </Blockquote>
      <Blockquote colorScheme="primary" cite="Primary">
        A primary colored blockquote for important content.
      </Blockquote>
      <Blockquote colorScheme="success" cite="Success">
        A success colored blockquote for positive content.
      </Blockquote>
      <Blockquote colorScheme="warning" cite="Warning">
        A warning colored blockquote for cautionary content.
      </Blockquote>
      <Blockquote colorScheme="danger" cite="Danger">
        A danger colored blockquote for critical content.
      </Blockquote>
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', maxWidth: '500px' }}>
      <Blockquote size="sm" cite="Small">
        This is a small blockquote with compact text.
      </Blockquote>
      <Blockquote size="md" cite="Medium">
        This is a medium blockquote with standard text sizing.
      </Blockquote>
      <Blockquote size="lg" cite="Large">
        This is a large blockquote with prominent text.
      </Blockquote>
    </div>
  ),
};

export const WithIcon: Story = {
  args: {
    children: 'Innovation distinguishes between a leader and a follower.',
    cite: 'Steve Jobs',
    showIcon: true,
  },
};

export const LongQuote: Story = {
  args: {
    children: `The future belongs to those who believe in the beauty of their dreams.
    It is not the strongest of the species that survives, nor the most intelligent that survives.
    It is the one that is most adaptable to change.`,
    cite: 'Charles Darwin',
    variant: 'filled',
    colorScheme: 'primary',
  },
};

export const WithoutCitation: Story = {
  args: {
    children: 'Sometimes the simplest quotes need no attribution.',
    variant: 'bordered',
  },
};

export const FilledWithColors: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', maxWidth: '500px' }}>
      <Blockquote variant="filled" colorScheme="primary" cite="Info">
        Use primary for informational highlights.
      </Blockquote>
      <Blockquote variant="filled" colorScheme="success" cite="Tip">
        Pro tip: Use success for helpful suggestions.
      </Blockquote>
      <Blockquote variant="filled" colorScheme="warning" cite="Warning">
        Be careful with this approach.
      </Blockquote>
      <Blockquote variant="filled" colorScheme="danger" cite="Important">
        Critical information that requires attention.
      </Blockquote>
    </div>
  ),
};
