import type { Meta, StoryObj } from '@storybook/react';
import { Anchor } from '@zenkit-ui/core';

const meta: Meta<typeof Anchor> = {
  title: 'Navigation/Anchor',
  component: Anchor,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '2rem' }}>
      <Anchor
        items={[
          { key: '1', href: '#section-1', title: 'Section 1' },
          { key: '2', href: '#section-2', title: 'Section 2' },
          { key: '3', href: '#section-3', title: 'Section 3' },
          { key: '4', href: '#section-4', title: 'Section 4' },
        ]}
      />
      <div style={{ flex: 1 }}>
        <div id="section-1" style={{ height: '300px', padding: '1rem', background: '#f5f5f5' }}>
          <h2>Section 1</h2>
          <p>Content for section 1</p>
        </div>
        <div id="section-2" style={{ height: '300px', padding: '1rem' }}>
          <h2>Section 2</h2>
          <p>Content for section 2</p>
        </div>
        <div id="section-3" style={{ height: '300px', padding: '1rem', background: '#f5f5f5' }}>
          <h2>Section 3</h2>
          <p>Content for section 3</p>
        </div>
        <div id="section-4" style={{ height: '300px', padding: '1rem' }}>
          <h2>Section 4</h2>
          <p>Content for section 4</p>
        </div>
      </div>
    </div>
  ),
};

export const Nested: Story = {
  render: () => (
    <Anchor
      items={[
        { key: '1', href: '#intro', title: 'Introduction' },
        {
          key: '2',
          href: '#getting-started',
          title: 'Getting Started',
          children: [
            { key: '2-1', href: '#installation', title: 'Installation' },
            { key: '2-2', href: '#configuration', title: 'Configuration' },
          ],
        },
        {
          key: '3',
          href: '#api',
          title: 'API Reference',
          children: [
            { key: '3-1', href: '#props', title: 'Props' },
            { key: '3-2', href: '#methods', title: 'Methods' },
          ],
        },
      ]}
    />
  ),
};

export const WithInk: Story = {
  render: () => (
    <Anchor
      showInk
      items={[
        { key: '1', href: '#part-1', title: 'Part 1' },
        { key: '2', href: '#part-2', title: 'Part 2' },
        { key: '3', href: '#part-3', title: 'Part 3' },
      ]}
    />
  ),
};
