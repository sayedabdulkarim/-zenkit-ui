import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { TableOfContents } from '@zenkit-ui/core';

const meta: Meta<typeof TableOfContents> = {
  title: 'Components/TableOfContents',
  component: TableOfContents,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

const defaultLinks = [
  { id: 'intro', label: 'Introduction', href: '#intro' },
  { id: 'getting-started', label: 'Getting Started', href: '#getting-started' },
  {
    id: 'installation',
    label: 'Installation',
    href: '#installation',
    children: [
      { id: 'npm', label: 'Using npm', href: '#npm' },
      { id: 'yarn', label: 'Using yarn', href: '#yarn' },
    ],
  },
  { id: 'usage', label: 'Usage', href: '#usage' },
  { id: 'api', label: 'API Reference', href: '#api' },
];

export const Default: Story = {
  args: {
    links: defaultLinks,
  },
  decorators: [(Story) => <div style={{ width: '250px' }}><Story /></div>],
};

export const WithActiveLink: Story = {
  render: () => {
    const [active, setActive] = useState('installation');
    return (
      <div style={{ width: '250px' }}>
        <TableOfContents
          links={defaultLinks}
          active={active}
          onLinkClick={(id) => setActive(id)}
        />
      </div>
    );
  },
};

export const Nested: Story = {
  args: {
    links: [
      {
        id: 'section-1',
        label: 'Section 1',
        href: '#section-1',
        children: [
          {
            id: 'subsection-1-1',
            label: 'Subsection 1.1',
            href: '#subsection-1-1',
            children: [
              { id: 'item-1-1-1', label: 'Item 1.1.1', href: '#item-1-1-1' },
              { id: 'item-1-1-2', label: 'Item 1.1.2', href: '#item-1-1-2' },
            ],
          },
          { id: 'subsection-1-2', label: 'Subsection 1.2', href: '#subsection-1-2' },
        ],
      },
      {
        id: 'section-2',
        label: 'Section 2',
        href: '#section-2',
        children: [
          { id: 'subsection-2-1', label: 'Subsection 2.1', href: '#subsection-2-1' },
        ],
      },
    ],
  },
  decorators: [(Story) => <div style={{ width: '250px' }}><Story /></div>],
};

export const WithTitle: Story = {
  args: {
    title: 'Table of Contents',
    links: defaultLinks,
  },
  decorators: [(Story) => <div style={{ width: '250px' }}><Story /></div>],
};

export const Sticky: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '2rem' }}>
      <div style={{ position: 'sticky', top: '1rem', alignSelf: 'flex-start', width: '200px' }}>
        <TableOfContents
          title="Contents"
          links={defaultLinks}
          active="getting-started"
        />
      </div>
      <div style={{ flex: 1 }}>
        <section id="intro" style={{ marginBottom: '2rem' }}>
          <h2>Introduction</h2>
          <p>Lorem ipsum dolor sit amet...</p>
        </section>
        <section id="getting-started" style={{ marginBottom: '2rem' }}>
          <h2>Getting Started</h2>
          <p>To get started with our library...</p>
        </section>
        <section id="installation" style={{ marginBottom: '2rem' }}>
          <h2>Installation</h2>
          <p>You can install using npm or yarn...</p>
        </section>
      </div>
    </div>
  ),
};

export const WithOffset: Story = {
  args: {
    links: defaultLinks,
    offset: 80,
  },
  decorators: [(Story) => <div style={{ width: '250px' }}><Story /></div>],
};
