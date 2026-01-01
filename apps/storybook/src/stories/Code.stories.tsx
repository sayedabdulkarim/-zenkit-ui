import type { Meta, StoryObj } from '@storybook/react';
import { Code, CodeBlock } from '@zenkit-ui/core';

const meta: Meta<typeof Code> = {
  title: 'Components/Code',
  component: Code,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Inline: Story = {
  render: () => (
    <p>
      Run <Code>npm install @zenkit-ui/core</Code> to install the package.
    </p>
  ),
};

export const Colors: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
      <Code color="default">default</Code>
      <Code color="primary">primary</Code>
      <Code color="secondary">secondary</Code>
      <Code color="success">success</Code>
      <Code color="warning">warning</Code>
      <Code color="danger">danger</Code>
    </div>
  ),
};

export const Block: Story = {
  render: () => (
    <CodeBlock language="typescript">
{`import { Button } from '@zenkit-ui/core';

function App() {
  return <Button>Click me</Button>;
}`}
    </CodeBlock>
  ),
};

export const BlockWithLineNumbers: Story = {
  render: () => (
    <CodeBlock language="javascript" showLineNumbers>
{`function greet(name) {
  console.log('Hello, ' + name);
}

greet('World');`}
    </CodeBlock>
  ),
};

export const Copyable: Story = {
  render: () => (
    <CodeBlock language="bash" copyable>
      npm install @zenkit-ui/core
    </CodeBlock>
  ),
};
