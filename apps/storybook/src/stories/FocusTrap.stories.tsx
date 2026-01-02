import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { FocusTrap, Button, Input, Paper } from '@zenkit-ui/core';

const meta: Meta<typeof FocusTrap> = {
  title: 'Components/FocusTrap',
  component: FocusTrap,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

const FocusTrapExample = () => {
  const [active, setActive] = useState(false);

  return (
    <div>
      <Button onClick={() => setActive(true)}>Activate Focus Trap</Button>
      {active && (
        <Paper p="lg" shadow="lg" style={{ marginTop: '1rem' }}>
          <FocusTrap active>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <h3>Focus is trapped here</h3>
              <Input placeholder="First input" />
              <Input placeholder="Second input" />
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                <Button variant="outline" onClick={() => setActive(false)}>
                  Cancel
                </Button>
                <Button onClick={() => setActive(false)}>
                  Submit
                </Button>
              </div>
            </div>
          </FocusTrap>
        </Paper>
      )}
    </div>
  );
};

export const Default: Story = {
  render: () => <FocusTrapExample />,
};

const ModalExample = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)}>Open Modal</Button>
      {open && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0,0,0,0.5)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1000,
          }}
          onClick={(e) => e.target === e.currentTarget && setOpen(false)}
        >
          <FocusTrap active>
            <Paper p="lg" shadow="xl" style={{ minWidth: '300px' }}>
              <h2>Modal with Focus Trap</h2>
              <p>Tab key will cycle through these elements only.</p>
              <Input placeholder="Enter something..." style={{ marginBottom: '1rem' }} />
              <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'flex-end' }}>
                <Button variant="outline" onClick={() => setOpen(false)}>
                  Close
                </Button>
                <Button onClick={() => setOpen(false)}>
                  Save
                </Button>
              </div>
            </Paper>
          </FocusTrap>
        </div>
      )}
    </>
  );
};

export const InModal: Story = {
  render: () => <ModalExample />,
};

export const InitialFocus: Story = {
  render: () => {
    const [active, setActive] = useState(false);
    return (
      <div>
        <Button onClick={() => setActive(true)}>Open with Initial Focus</Button>
        {active && (
          <Paper p="lg" shadow="lg" style={{ marginTop: '1rem' }}>
            <FocusTrap active initialFocus>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <Input placeholder="This gets initial focus" data-autofocus />
                <Input placeholder="Second input" />
                <Button onClick={() => setActive(false)}>Close</Button>
              </div>
            </FocusTrap>
          </Paper>
        )}
      </div>
    );
  },
};
