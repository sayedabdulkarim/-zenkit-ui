import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { LoadingOverlay, Button, Paper } from '@zenkit-ui/core';

const meta: Meta<typeof LoadingOverlay> = {
  title: 'Components/LoadingOverlay',
  component: LoadingOverlay,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    loaderSize: { control: 'select', options: ['sm', 'md', 'lg', 'xl'] },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const LoadingExample = () => {
  const [loading, setLoading] = useState(false);

  const handleLoad = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 2000);
  };

  return (
    <div style={{ position: 'relative', width: '300px', height: '200px' }}>
      <Paper p="lg" withBorder style={{ height: '100%' }}>
        <h3>Content Area</h3>
        <p>Click the button to show loading overlay.</p>
        <Button onClick={handleLoad}>Load Data</Button>
      </Paper>
      <LoadingOverlay visible={loading} />
    </div>
  );
};

export const Default: Story = {
  render: () => <LoadingExample />,
};

export const AlwaysVisible: Story = {
  render: () => (
    <div style={{ position: 'relative', width: '300px', height: '200px' }}>
      <Paper p="lg" withBorder style={{ height: '100%' }}>
        <h3>Loading Content</h3>
        <p>This content is being loaded...</p>
      </Paper>
      <LoadingOverlay visible />
    </div>
  ),
};

export const WithMessage: Story = {
  render: () => (
    <div style={{ position: 'relative', width: '300px', height: '200px' }}>
      <Paper p="lg" withBorder style={{ height: '100%' }}>
        <h3>Form Content</h3>
        <p>Submitting form data...</p>
      </Paper>
      <LoadingOverlay visible message="Saving changes..." />
    </div>
  ),
};

export const LoaderSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem' }}>
      {(['sm', 'md', 'lg', 'xl'] as const).map((size) => (
        <div key={size} style={{ position: 'relative', width: '150px', height: '150px' }}>
          <Paper p="md" withBorder style={{ height: '100%' }}>
            <p>{size} loader</p>
          </Paper>
          <LoadingOverlay visible loaderSize={size} />
        </div>
      ))}
    </div>
  ),
};

export const CustomLoader: Story = {
  render: () => (
    <div style={{ position: 'relative', width: '300px', height: '200px' }}>
      <Paper p="lg" withBorder style={{ height: '100%' }}>
        <h3>Custom Loader</h3>
        <p>Using a custom loading component.</p>
      </Paper>
      <LoadingOverlay
        visible
        loader={
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>⏳</div>
            <div>Please wait...</div>
          </div>
        }
      />
    </div>
  ),
};

export const WithBlur: Story = {
  render: () => (
    <div style={{ position: 'relative', width: '300px', height: '200px' }}>
      <Paper p="lg" withBorder style={{ height: '100%' }}>
        <h3>Blurred Content</h3>
        <p>The content behind is blurred.</p>
      </Paper>
      <LoadingOverlay visible blur={3} />
    </div>
  ),
};
