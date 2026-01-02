import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { CheckboxCard } from '@zenkit-ui/core';

const meta: Meta<typeof CheckboxCard> = {
  title: 'Components/CheckboxCard',
  component: CheckboxCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
    checkboxPosition: { control: 'select', options: ['top-start', 'top-end', 'hidden'] },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    const [checked, setChecked] = useState(false);
    return (
      <CheckboxCard
        label="Basic Plan"
        description="Perfect for small projects"
        checked={checked}
        onChange={(e) => setChecked(e.target.checked)}
      />
    );
  },
};

export const WithIcon: Story = {
  render: () => {
    const [checked, setChecked] = useState(true);
    return (
      <CheckboxCard
        label="Premium Plan"
        description="All features included"
        icon={<span style={{ fontSize: '2rem' }}>⭐</span>}
        checked={checked}
        onChange={(e) => setChecked(e.target.checked)}
      />
    );
  },
};

export const SelectionGroup: Story = {
  render: () => {
    const [selected, setSelected] = useState<string[]>(['email']);
    const toggleSelection = (value: string) => {
      setSelected((prev) =>
        prev.includes(value)
          ? prev.filter((v) => v !== value)
          : [...prev, value]
      );
    };
    return (
      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
        <CheckboxCard
          label="Email"
          description="Notifications via email"
          icon={<span>📧</span>}
          checked={selected.includes('email')}
          onChange={() => toggleSelection('email')}
        />
        <CheckboxCard
          label="SMS"
          description="Text message alerts"
          icon={<span>📱</span>}
          checked={selected.includes('sms')}
          onChange={() => toggleSelection('sms')}
        />
        <CheckboxCard
          label="Push"
          description="Browser notifications"
          icon={<span>🔔</span>}
          checked={selected.includes('push')}
          onChange={() => toggleSelection('push')}
        />
      </div>
    );
  },
};

export const RadioGroup: Story = {
  render: () => {
    const [selected, setSelected] = useState('monthly');
    return (
      <div style={{ display: 'flex', gap: '1rem' }}>
        <CheckboxCard
          name="billing"
          label="Monthly"
          description="$9/month"
          radio
          checked={selected === 'monthly'}
          onChange={() => setSelected('monthly')}
        />
        <CheckboxCard
          name="billing"
          label="Yearly"
          description="$99/year (save 17%)"
          radio
          checked={selected === 'yearly'}
          onChange={() => setSelected('yearly')}
        />
      </div>
    );
  },
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
      <CheckboxCard size="sm" label="Small" description="Compact size" defaultChecked />
      <CheckboxCard size="md" label="Medium" description="Default size" defaultChecked />
      <CheckboxCard size="lg" label="Large" description="Larger size" defaultChecked />
    </div>
  ),
};

export const CheckboxPositions: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem' }}>
      <CheckboxCard
        label="Top Start"
        checkboxPosition="top-start"
        defaultChecked
      />
      <CheckboxCard
        label="Top End"
        checkboxPosition="top-end"
        defaultChecked
      />
      <CheckboxCard
        label="Hidden"
        checkboxPosition="hidden"
        defaultChecked
      />
    </div>
  ),
};

export const Disabled: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem' }}>
      <CheckboxCard label="Disabled Unchecked" disabled />
      <CheckboxCard label="Disabled Checked" disabled defaultChecked />
    </div>
  ),
};
