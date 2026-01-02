import type { Meta, StoryObj } from '@storybook/react';
import { Highlight } from '@zenkit-ui/core';

const meta: Meta<typeof Highlight> = {
  title: 'Components/Highlight',
  component: Highlight,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    color: { control: 'select', options: ['yellow', 'blue', 'green', 'red', 'purple'] },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    highlight: 'important',
    children: 'This is an important message that you should read carefully.',
  },
};

export const MultipleHighlights: Story = {
  args: {
    highlight: ['React', 'Vue', 'Angular'],
    children: 'We support React, Vue, and Angular frameworks for building modern web applications.',
  },
};

export const Colors: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <Highlight highlight="yellow" color="yellow">
        This text has yellow highlighting.
      </Highlight>
      <Highlight highlight="blue" color="blue">
        This text has blue highlighting.
      </Highlight>
      <Highlight highlight="green" color="green">
        This text has green highlighting.
      </Highlight>
      <Highlight highlight="red" color="red">
        This text has red highlighting.
      </Highlight>
      <Highlight highlight="purple" color="purple">
        This text has purple highlighting.
      </Highlight>
    </div>
  ),
};

export const CaseInsensitive: Story = {
  args: {
    highlight: 'REACT',
    children: 'React is a JavaScript library. REACT makes UI development easier. react is popular.',
    caseSensitive: false,
  },
};

export const CaseSensitive: Story = {
  args: {
    highlight: 'React',
    children: 'React is a JavaScript library. REACT makes UI development easier. react is popular.',
    caseSensitive: true,
  },
};

export const SearchResults: Story = {
  render: () => (
    <div style={{ maxWidth: '400px' }}>
      <Highlight highlight="component">
        A component is a reusable piece of UI. React components can be functional or class-based.
        Each component manages its own state and renders based on props.
      </Highlight>
    </div>
  ),
};

export const InParagraph: Story = {
  render: () => (
    <p style={{ maxWidth: '500px', lineHeight: 1.6 }}>
      <Highlight highlight={['ZenKit UI', 'components', 'React']}>
        ZenKit UI is a comprehensive library of React components designed to help you
        build beautiful and accessible user interfaces. Our components are fully
        customizable and follow best practices for modern React development.
      </Highlight>
    </p>
  ),
};
