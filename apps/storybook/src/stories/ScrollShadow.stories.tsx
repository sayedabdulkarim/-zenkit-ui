import type { Meta, StoryObj } from '@storybook/react';
import { ScrollShadow } from '@zenkit-ui/core';

const meta: Meta<typeof ScrollShadow> = {
  title: 'Components/ScrollShadow',
  component: ScrollShadow,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    orientation: { control: 'select', options: ['vertical', 'horizontal', 'both'] },
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Vertical: Story = {
  render: () => (
    <ScrollShadow style={{ height: '200px', width: '300px' }}>
      {Array.from({ length: 20 }).map((_, i) => (
        <p key={i}>Item {i + 1}: Lorem ipsum dolor sit amet</p>
      ))}
    </ScrollShadow>
  ),
};

export const Horizontal: Story = {
  render: () => (
    <ScrollShadow orientation="horizontal" style={{ width: '400px' }}>
      <div style={{ display: 'flex', gap: '1rem', padding: '1rem' }}>
        {Array.from({ length: 15 }).map((_, i) => (
          <div
            key={i}
            style={{
              minWidth: '100px',
              height: '80px',
              background: '#f0f0f0',
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            Card {i + 1}
          </div>
        ))}
      </div>
    </ScrollShadow>
  ),
};

export const Both: Story = {
  render: () => (
    <ScrollShadow orientation="both" style={{ height: '200px', width: '300px' }}>
      <div style={{ width: '600px' }}>
        {Array.from({ length: 20 }).map((_, i) => (
          <p key={i} style={{ whiteSpace: 'nowrap' }}>
            Item {i + 1}: This is a very long line of text that extends beyond the container width
          </p>
        ))}
      </div>
    </ScrollShadow>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '2rem' }}>
      <div>
        <p>Small Shadow</p>
        <ScrollShadow size="sm" style={{ height: '150px', width: '200px' }}>
          {Array.from({ length: 15 }).map((_, i) => (
            <p key={i}>Item {i + 1}</p>
          ))}
        </ScrollShadow>
      </div>
      <div>
        <p>Medium Shadow</p>
        <ScrollShadow size="md" style={{ height: '150px', width: '200px' }}>
          {Array.from({ length: 15 }).map((_, i) => (
            <p key={i}>Item {i + 1}</p>
          ))}
        </ScrollShadow>
      </div>
      <div>
        <p>Large Shadow</p>
        <ScrollShadow size="lg" style={{ height: '150px', width: '200px' }}>
          {Array.from({ length: 15 }).map((_, i) => (
            <p key={i}>Item {i + 1}</p>
          ))}
        </ScrollShadow>
      </div>
    </div>
  ),
};

export const CardList: Story = {
  render: () => (
    <ScrollShadow orientation="horizontal" style={{ width: '100%', maxWidth: '600px' }}>
      <div style={{ display: 'flex', gap: '1rem', padding: '1rem' }}>
        {['React', 'Vue', 'Angular', 'Svelte', 'Solid', 'Preact', 'Qwik', 'Astro'].map((name) => (
          <div
            key={name}
            style={{
              minWidth: '120px',
              padding: '1rem',
              background: '#f8f9fa',
              borderRadius: '8px',
              textAlign: 'center',
              border: '1px solid #e9ecef',
            }}
          >
            <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>⚛️</div>
            <div>{name}</div>
          </div>
        ))}
      </div>
    </ScrollShadow>
  ),
};

export const HideScrollbar: Story = {
  render: () => (
    <ScrollShadow hideScrollbar style={{ height: '200px', width: '300px' }}>
      {Array.from({ length: 20 }).map((_, i) => (
        <p key={i}>Item {i + 1}: Content with hidden scrollbar</p>
      ))}
    </ScrollShadow>
  ),
};
