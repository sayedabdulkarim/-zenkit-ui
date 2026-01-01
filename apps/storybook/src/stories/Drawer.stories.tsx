import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Drawer, Button } from '@zenkit-ui/core';

const meta: Meta<typeof Drawer> = {
  title: 'Components/Drawer',
  component: Drawer,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    placement: { control: 'select', options: ['left', 'right', 'top', 'bottom'] },
    size: { control: 'select', options: ['sm', 'md', 'lg', 'full'] },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <Button onClick={() => setOpen(true)}>Open Drawer</Button>
        <Drawer open={open} onClose={() => setOpen(false)} title="Drawer Title">
          <p>Drawer content goes here.</p>
          <p>You can put any content inside the drawer.</p>
        </Drawer>
      </>
    );
  },
};

export const Placements: Story = {
  render: () => {
    const [placement, setPlacement] = useState<'left' | 'right' | 'top' | 'bottom'>('right');
    const [open, setOpen] = useState(false);
    return (
      <div style={{ display: 'flex', gap: '0.5rem' }}>
        <Button onClick={() => { setPlacement('left'); setOpen(true); }}>Left</Button>
        <Button onClick={() => { setPlacement('right'); setOpen(true); }}>Right</Button>
        <Button onClick={() => { setPlacement('top'); setOpen(true); }}>Top</Button>
        <Button onClick={() => { setPlacement('bottom'); setOpen(true); }}>Bottom</Button>
        <Drawer
          open={open}
          onClose={() => setOpen(false)}
          placement={placement}
          title={`${placement.charAt(0).toUpperCase() + placement.slice(1)} Drawer`}
        >
          <p>This drawer opens from the {placement}.</p>
        </Drawer>
      </div>
    );
  },
};

export const Sizes: Story = {
  render: () => {
    const [size, setSize] = useState<'sm' | 'md' | 'lg'>('md');
    const [open, setOpen] = useState(false);
    return (
      <div style={{ display: 'flex', gap: '0.5rem' }}>
        <Button onClick={() => { setSize('sm'); setOpen(true); }}>Small</Button>
        <Button onClick={() => { setSize('md'); setOpen(true); }}>Medium</Button>
        <Button onClick={() => { setSize('lg'); setOpen(true); }}>Large</Button>
        <Drawer
          open={open}
          onClose={() => setOpen(false)}
          size={size}
          title={`${size.toUpperCase()} Drawer`}
        >
          <p>This is a {size} drawer.</p>
        </Drawer>
      </div>
    );
  },
};

export const WithFooter: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <Button onClick={() => setOpen(true)}>Open With Footer</Button>
        <Drawer
          open={open}
          onClose={() => setOpen(false)}
          title="Form Drawer"
          footer={
            <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'flex-end' }}>
              <Button variant="outlined" onClick={() => setOpen(false)}>Cancel</Button>
              <Button onClick={() => setOpen(false)}>Submit</Button>
            </div>
          }
        >
          <p>Add your form content here.</p>
        </Drawer>
      </>
    );
  },
};
