import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Backdrop, Button, Paper } from '@zenkit-ui/core';

const meta: Meta<typeof Backdrop> = {
  title: 'Components/Backdrop',
  component: Backdrop,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    blur: { control: 'number' },
    opacity: { control: { type: 'range', min: 0, max: 1, step: 0.1 } },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const BackdropExample = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button onClick={() => setOpen(true)}>Show Backdrop</Button>
      <Backdrop open={open} onClick={() => setOpen(false)} />
    </>
  );
};

export const Default: Story = {
  render: () => <BackdropExample />,
};

const WithContentExample = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button onClick={() => setOpen(true)}>Show with Content</Button>
      <Backdrop open={open} onClick={() => setOpen(false)}>
        <Paper p="lg" shadow="lg" style={{ maxWidth: '400px' }}>
          <h2>Modal Content</h2>
          <p>Click outside to close the backdrop.</p>
          <Button onClick={() => setOpen(false)}>Close</Button>
        </Paper>
      </Backdrop>
    </>
  );
};

export const WithContent: Story = {
  render: () => <WithContentExample />,
};

const BlurExample = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div style={{ padding: '1rem' }}>
        <h3>Background Content</h3>
        <p>This content will be blurred when backdrop is open.</p>
        <Button onClick={() => setOpen(true)}>Show Blur Backdrop</Button>
      </div>
      <Backdrop open={open} onClick={() => setOpen(false)} blur={5}>
        <Paper p="lg" shadow="lg">
          <h2>Blurred Backdrop</h2>
          <Button onClick={() => setOpen(false)}>Close</Button>
        </Paper>
      </Backdrop>
    </>
  );
};

export const WithBlur: Story = {
  render: () => <BlurExample />,
};

const OpacityExample = () => {
  const [opacity, setOpacity] = useState<number | null>(null);
  return (
    <>
      <div style={{ display: 'flex', gap: '0.5rem' }}>
        <Button onClick={() => setOpacity(0.3)}>30% Opacity</Button>
        <Button onClick={() => setOpacity(0.5)}>50% Opacity</Button>
        <Button onClick={() => setOpacity(0.8)}>80% Opacity</Button>
      </div>
      {opacity !== null && (
        <Backdrop open={true} onClick={() => setOpacity(null)} opacity={opacity}>
          <Paper p="lg" shadow="lg">
            <h2>{opacity * 100}% Opacity</h2>
            <Button onClick={() => setOpacity(null)}>Close</Button>
          </Paper>
        </Backdrop>
      )}
    </>
  );
};

export const CustomOpacity: Story = {
  render: () => <OpacityExample />,
};

const ColorExample = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button onClick={() => setOpen(true)}>Show Colored Backdrop</Button>
      <Backdrop open={open} onClick={() => setOpen(false)} color="rgba(0, 100, 200, 0.5)">
        <Paper p="lg" shadow="lg">
          <h2>Colored Backdrop</h2>
          <Button onClick={() => setOpen(false)}>Close</Button>
        </Paper>
      </Backdrop>
    </>
  );
};

export const CustomColor: Story = {
  render: () => <ColorExample />,
};
