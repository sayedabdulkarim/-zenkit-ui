import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { SplitButton } from '@zenkit-ui/core';

const meta: Meta<typeof SplitButton> = {
  title: 'Components/SplitButton',
  component: SplitButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'outline', 'ghost', 'danger'],
      description: 'The visual style',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'The size of the button',
    },
    loading: {
      control: 'boolean',
      description: 'Loading state',
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled state',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const saveOptions = [
  { label: 'Save', value: 'save' },
  { label: 'Save as Draft', value: 'draft' },
  { label: 'Save and Publish', value: 'publish' },
  { label: 'Save as Template', value: 'template' },
];

export const Default: Story = {
  render: () => {
    const [selected, setSelected] = useState('save');
    return (
      <SplitButton
        options={saveOptions}
        selectedValue={selected}
        onSelect={setSelected}
        onClick={() => alert(`Action: ${selected}`)}
      >
        Save
      </SplitButton>
    );
  },
};

export const Variants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
      <SplitButton variant="primary" options={saveOptions} onClick={() => {}}>
        Primary
      </SplitButton>
      <SplitButton variant="secondary" options={saveOptions} onClick={() => {}}>
        Secondary
      </SplitButton>
      <SplitButton variant="outline" options={saveOptions} onClick={() => {}}>
        Outline
      </SplitButton>
      <SplitButton variant="ghost" options={saveOptions} onClick={() => {}}>
        Ghost
      </SplitButton>
      <SplitButton variant="danger" options={saveOptions} onClick={() => {}}>
        Danger
      </SplitButton>
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
      <SplitButton size="sm" options={saveOptions} onClick={() => {}}>
        Small
      </SplitButton>
      <SplitButton size="md" options={saveOptions} onClick={() => {}}>
        Medium
      </SplitButton>
      <SplitButton size="lg" options={saveOptions} onClick={() => {}}>
        Large
      </SplitButton>
    </div>
  ),
};

export const WithIcons: Story = {
  render: () => {
    const options = [
      { label: 'Download as PDF', value: 'pdf', icon: <span>📄</span> },
      { label: 'Download as Word', value: 'word', icon: <span>📝</span> },
      { label: 'Download as Excel', value: 'excel', icon: <span>📊</span> },
      { label: 'Download as CSV', value: 'csv', icon: <span>📋</span> },
    ];

    return (
      <SplitButton options={options} onClick={() => alert('Download clicked')}>
        Download
      </SplitButton>
    );
  },
};

export const WithDisabledOptions: Story = {
  render: () => {
    const options = [
      { label: 'Option 1', value: 'opt1' },
      { label: 'Option 2 (Premium)', value: 'opt2', disabled: true },
      { label: 'Option 3', value: 'opt3' },
      { label: 'Option 4 (Coming Soon)', value: 'opt4', disabled: true },
    ];

    return (
      <SplitButton options={options} onClick={() => {}}>
        Select Action
      </SplitButton>
    );
  },
};

export const Loading: Story = {
  render: () => (
    <SplitButton loading options={saveOptions} onClick={() => {}}>
      Saving...
    </SplitButton>
  ),
};

export const Disabled: Story = {
  render: () => (
    <SplitButton disabled options={saveOptions} onClick={() => {}}>
      Disabled
    </SplitButton>
  ),
};

export const Placements: Story = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '2rem', padding: '2rem' }}>
      <div>
        <p style={{ marginBottom: '0.5rem', fontSize: '0.875rem', color: '#64748b' }}>bottom-end (default)</p>
        <SplitButton placement="bottom-end" options={saveOptions} onClick={() => {}}>
          Bottom End
        </SplitButton>
      </div>
      <div>
        <p style={{ marginBottom: '0.5rem', fontSize: '0.875rem', color: '#64748b' }}>bottom-start</p>
        <SplitButton placement="bottom-start" options={saveOptions} onClick={() => {}}>
          Bottom Start
        </SplitButton>
      </div>
      <div>
        <p style={{ marginBottom: '0.5rem', fontSize: '0.875rem', color: '#64748b' }}>top-end</p>
        <SplitButton placement="top-end" options={saveOptions} onClick={() => {}}>
          Top End
        </SplitButton>
      </div>
      <div>
        <p style={{ marginBottom: '0.5rem', fontSize: '0.875rem', color: '#64748b' }}>top-start</p>
        <SplitButton placement="top-start" options={saveOptions} onClick={() => {}}>
          Top Start
        </SplitButton>
      </div>
    </div>
  ),
};

export const RealWorldExample: Story = {
  render: () => {
    const [action, setAction] = useState('merge');

    const mergeOptions = [
      { label: 'Merge commit', value: 'merge' },
      { label: 'Squash and merge', value: 'squash' },
      { label: 'Rebase and merge', value: 'rebase' },
    ];

    const getButtonText = () => {
      const option = mergeOptions.find(o => o.value === action);
      return option?.label || 'Merge';
    };

    return (
      <div style={{ padding: '1rem', background: '#f6f8fa', borderRadius: '8px' }}>
        <p style={{ marginBottom: '1rem', color: '#24292f' }}>
          Pull request #123: Feature/new-component
        </p>
        <SplitButton
          variant="primary"
          options={mergeOptions}
          selectedValue={action}
          onSelect={setAction}
          onClick={() => alert(`${getButtonText()} clicked!`)}
        >
          {getButtonText()}
        </SplitButton>
      </div>
    );
  },
};
