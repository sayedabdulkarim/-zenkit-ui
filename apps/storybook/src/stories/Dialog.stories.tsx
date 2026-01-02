import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Dialog, DialogHeader, DialogBody, DialogFooter, Button } from '@zenkit-ui/core';

const meta: Meta<typeof Dialog> = {
  title: 'Components/Dialog',
  component: Dialog,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'select', options: ['sm', 'md', 'lg', 'xl', 'full'] },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const DialogExample = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button onClick={() => setOpen(true)}>Open Dialog</Button>
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogHeader>Dialog Title</DialogHeader>
        <DialogBody>
          <p>This is the dialog content. You can put any content here.</p>
        </DialogBody>
        <DialogFooter>
          <Button variant="outline" onClick={() => setOpen(false)}>Cancel</Button>
          <Button onClick={() => setOpen(false)}>Confirm</Button>
        </DialogFooter>
      </Dialog>
    </>
  );
};

export const Default: Story = {
  render: () => <DialogExample />,
};

const SizesExample = () => {
  const [size, setSize] = useState<'sm' | 'md' | 'lg' | 'xl' | null>(null);
  return (
    <>
      <div style={{ display: 'flex', gap: '0.5rem' }}>
        <Button onClick={() => setSize('sm')}>Small</Button>
        <Button onClick={() => setSize('md')}>Medium</Button>
        <Button onClick={() => setSize('lg')}>Large</Button>
        <Button onClick={() => setSize('xl')}>Extra Large</Button>
      </div>
      {size && (
        <Dialog open={true} onClose={() => setSize(null)} size={size}>
          <DialogHeader>{size.toUpperCase()} Dialog</DialogHeader>
          <DialogBody>
            <p>This is a {size} sized dialog.</p>
          </DialogBody>
          <DialogFooter>
            <Button onClick={() => setSize(null)}>Close</Button>
          </DialogFooter>
        </Dialog>
      )}
    </>
  );
};

export const Sizes: Story = {
  render: () => <SizesExample />,
};

const ScrollableExample = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button onClick={() => setOpen(true)}>Open Scrollable Dialog</Button>
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogHeader>Scrollable Content</DialogHeader>
        <DialogBody>
          {Array.from({ length: 20 }).map((_, i) => (
            <p key={i}>This is paragraph {i + 1}. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          ))}
        </DialogBody>
        <DialogFooter>
          <Button onClick={() => setOpen(false)}>Close</Button>
        </DialogFooter>
      </Dialog>
    </>
  );
};

export const Scrollable: Story = {
  render: () => <ScrollableExample />,
};
