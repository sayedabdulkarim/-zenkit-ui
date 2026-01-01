import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import {
  Sheet,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetContent,
  SheetFooter,
  SheetClose,
  Button,
} from '@zenkit-ui/core';

const meta: Meta<typeof Sheet> = {
  title: 'Feedback/Sheet',
  component: Sheet,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Right: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <Button onClick={() => setOpen(true)}>Open Sheet</Button>
        <Sheet open={open} onOpenChange={setOpen} side="right">
          <SheetHeader>
            <SheetClose onClose={() => setOpen(false)} />
            <SheetTitle>Sheet Title</SheetTitle>
            <SheetDescription>
              This is a sheet that slides in from the right side.
            </SheetDescription>
          </SheetHeader>
          <SheetContent>
            <p>Sheet content goes here.</p>
          </SheetContent>
          <SheetFooter>
            <Button variant="outline" onClick={() => setOpen(false)}>Cancel</Button>
            <Button onClick={() => setOpen(false)}>Save</Button>
          </SheetFooter>
        </Sheet>
      </>
    );
  },
};

export const Left: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <Button onClick={() => setOpen(true)}>Open Left Sheet</Button>
        <Sheet open={open} onOpenChange={setOpen} side="left">
          <SheetHeader>
            <SheetClose onClose={() => setOpen(false)} />
            <SheetTitle>Navigation</SheetTitle>
          </SheetHeader>
          <SheetContent>
            <nav>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                <li style={{ padding: '0.5rem 0' }}>Home</li>
                <li style={{ padding: '0.5rem 0' }}>About</li>
                <li style={{ padding: '0.5rem 0' }}>Services</li>
                <li style={{ padding: '0.5rem 0' }}>Contact</li>
              </ul>
            </nav>
          </SheetContent>
        </Sheet>
      </>
    );
  },
};

export const Top: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <Button onClick={() => setOpen(true)}>Open Top Sheet</Button>
        <Sheet open={open} onOpenChange={setOpen} side="top">
          <SheetHeader>
            <SheetClose onClose={() => setOpen(false)} />
            <SheetTitle>Notification</SheetTitle>
            <SheetDescription>
              You have a new message.
            </SheetDescription>
          </SheetHeader>
          <SheetContent>
            <p>This sheet slides in from the top.</p>
          </SheetContent>
        </Sheet>
      </>
    );
  },
};

export const Bottom: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <Button onClick={() => setOpen(true)}>Open Bottom Sheet</Button>
        <Sheet open={open} onOpenChange={setOpen} side="bottom">
          <SheetHeader>
            <SheetClose onClose={() => setOpen(false)} />
            <SheetTitle>Actions</SheetTitle>
          </SheetHeader>
          <SheetContent>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <Button variant="ghost" style={{ justifyContent: 'flex-start' }}>Share</Button>
              <Button variant="ghost" style={{ justifyContent: 'flex-start' }}>Copy Link</Button>
              <Button variant="ghost" style={{ justifyContent: 'flex-start' }}>Edit</Button>
              <Button variant="ghost" colorScheme="danger" style={{ justifyContent: 'flex-start' }}>Delete</Button>
            </div>
          </SheetContent>
        </Sheet>
      </>
    );
  },
};
