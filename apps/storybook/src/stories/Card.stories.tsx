import type { Meta, StoryObj } from '@storybook/react';
import { Card, CardHeader, CardBody, CardFooter, Button } from '@zenkit-ui/core';

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Card style={{ width: '300px' }}>
      <CardBody>
        <p>This is a basic card with some content.</p>
      </CardBody>
    </Card>
  ),
};

export const WithHeaderAndFooter: Story = {
  render: () => (
    <Card style={{ width: '350px' }}>
      <CardHeader title="Card Title" subtitle="Card subtitle" />
      <CardBody>
        <p>This is the card body content. You can put any content here.</p>
      </CardBody>
      <CardFooter>
        <Button size="sm">Action</Button>
      </CardFooter>
    </Card>
  ),
};

export const WithHeaderExtra: Story = {
  render: () => (
    <Card style={{ width: '350px' }}>
      <CardHeader
        title="Card Title"
        extra={<Button size="sm" variant="ghost">More</Button>}
      />
      <CardBody>
        <p>Card with extra content in header.</p>
      </CardBody>
    </Card>
  ),
};

export const Variants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
      <Card style={{ width: '200px' }}>
        <CardBody>
          <strong>Default</strong>
          <p>Standard card</p>
        </CardBody>
      </Card>
      <Card variant="outlined" style={{ width: '200px' }}>
        <CardBody>
          <strong>Outlined</strong>
          <p>Border only</p>
        </CardBody>
      </Card>
      <Card variant="filled" style={{ width: '200px' }}>
        <CardBody>
          <strong>Filled</strong>
          <p>Subtle background</p>
        </CardBody>
      </Card>
      <Card variant="elevated" style={{ width: '200px' }}>
        <CardBody>
          <strong>Elevated</strong>
          <p>With shadow</p>
        </CardBody>
      </Card>
    </div>
  ),
};

export const Hoverable: Story = {
  render: () => (
    <Card hoverable style={{ width: '300px' }}>
      <CardBody>
        <p>Hover over me to see the effect!</p>
      </CardBody>
    </Card>
  ),
};

export const Clickable: Story = {
  render: () => (
    <Card clickable style={{ width: '300px' }} onClick={() => alert('Card clicked!')}>
      <CardBody>
        <p>Click me! I'm an interactive card.</p>
      </CardBody>
    </Card>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <Card size="sm" style={{ width: '300px' }}>
        <CardHeader title="Small Card" />
        <CardBody>
          <p>Compact padding</p>
        </CardBody>
      </Card>
      <Card size="md" style={{ width: '300px' }}>
        <CardHeader title="Medium Card" />
        <CardBody>
          <p>Default padding</p>
        </CardBody>
      </Card>
      <Card size="lg" style={{ width: '300px' }}>
        <CardHeader title="Large Card" />
        <CardBody>
          <p>Spacious padding</p>
        </CardBody>
      </Card>
    </div>
  ),
};

export const CompleteExample: Story = {
  render: () => (
    <Card style={{ width: '400px' }}>
      <img
        src="https://via.placeholder.com/400x200"
        alt="Placeholder"
        style={{ width: '100%', borderRadius: 'var(--radius-lg) var(--radius-lg) 0 0' }}
      />
      <CardHeader title="Beautiful Sunset" subtitle="Nature Photography" />
      <CardBody>
        <p>
          A stunning view of the sunset over the mountains. This photograph
          captures the beauty of nature in its most peaceful moments.
        </p>
      </CardBody>
      <CardFooter style={{ display: 'flex', gap: '0.5rem' }}>
        <Button>View</Button>
        <Button variant="outline">Share</Button>
      </CardFooter>
    </Card>
  ),
};
