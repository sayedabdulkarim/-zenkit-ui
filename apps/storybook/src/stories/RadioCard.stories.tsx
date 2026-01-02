import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { RadioCard, RadioCardGroup } from '@zenkit-ui/core';

const meta: Meta<typeof RadioCard> = {
  title: 'Data Entry/RadioCard',
  component: RadioCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'The size of the card',
    },
    variant: {
      control: 'select',
      options: ['outline', 'filled', 'subtle'],
      description: 'The visual style of the card',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the card is disabled',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    const [value, setValue] = useState('option1');
    return (
      <RadioCardGroup value={value} onChange={setValue} style={{ display: 'flex', gap: '1rem' }}>
        <RadioCard value="option1" title="Option 1" description="This is the first option" />
        <RadioCard value="option2" title="Option 2" description="This is the second option" />
        <RadioCard value="option3" title="Option 3" description="This is the third option" />
      </RadioCardGroup>
    );
  },
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <div>
        <h4 style={{ marginBottom: '0.5rem' }}>Small</h4>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <RadioCard size="sm" value="sm1" title="Small" description="Small card" />
          <RadioCard size="sm" value="sm2" title="Small" description="Small card" />
        </div>
      </div>
      <div>
        <h4 style={{ marginBottom: '0.5rem' }}>Medium</h4>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <RadioCard size="md" value="md1" title="Medium" description="Medium card" />
          <RadioCard size="md" value="md2" title="Medium" description="Medium card" />
        </div>
      </div>
      <div>
        <h4 style={{ marginBottom: '0.5rem' }}>Large</h4>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <RadioCard size="lg" value="lg1" title="Large" description="Large card" />
          <RadioCard size="lg" value="lg2" title="Large" description="Large card" />
        </div>
      </div>
    </div>
  ),
};

export const Variants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <div>
        <h4 style={{ marginBottom: '0.5rem' }}>Outline</h4>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <RadioCard variant="outline" value="o1" title="Outline" description="Outline variant" defaultChecked />
          <RadioCard variant="outline" value="o2" title="Outline" description="Outline variant" />
        </div>
      </div>
      <div>
        <h4 style={{ marginBottom: '0.5rem' }}>Filled</h4>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <RadioCard variant="filled" value="f1" title="Filled" description="Filled variant" defaultChecked />
          <RadioCard variant="filled" value="f2" title="Filled" description="Filled variant" />
        </div>
      </div>
      <div>
        <h4 style={{ marginBottom: '0.5rem' }}>Subtle</h4>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <RadioCard variant="subtle" value="s1" title="Subtle" description="Subtle variant" defaultChecked />
          <RadioCard variant="subtle" value="s2" title="Subtle" description="Subtle variant" />
        </div>
      </div>
    </div>
  ),
};

export const WithIcons: Story = {
  render: () => {
    const [value, setValue] = useState('starter');
    return (
      <RadioCardGroup value={value} onChange={setValue} style={{ display: 'flex', gap: '1rem' }}>
        <RadioCard
          value="starter"
          title="Starter"
          description="For personal projects"
          icon={<span style={{ fontSize: '24px' }}>🚀</span>}
        />
        <RadioCard
          value="pro"
          title="Pro"
          description="For growing teams"
          icon={<span style={{ fontSize: '24px' }}>⚡</span>}
        />
        <RadioCard
          value="enterprise"
          title="Enterprise"
          description="For large organizations"
          icon={<span style={{ fontSize: '24px' }}>🏢</span>}
        />
      </RadioCardGroup>
    );
  },
};

export const Disabled: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem' }}>
      <RadioCard value="enabled" title="Enabled" description="This card is enabled" />
      <RadioCard value="disabled" title="Disabled" description="This card is disabled" disabled />
    </div>
  ),
};

export const GridLayout: Story = {
  render: () => {
    const [value, setValue] = useState('card1');
    return (
      <RadioCardGroup
        value={value}
        onChange={setValue}
        style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem', maxWidth: '500px' }}
      >
        <RadioCard value="card1" title="Card 1" description="First option" />
        <RadioCard value="card2" title="Card 2" description="Second option" />
        <RadioCard value="card3" title="Card 3" description="Third option" />
        <RadioCard value="card4" title="Card 4" description="Fourth option" />
      </RadioCardGroup>
    );
  },
};
