import type { Meta, StoryObj } from '@storybook/react';
import { useState, useRef } from 'react';
import { Tour, Button } from '@zenkit-ui/core';

const meta: Meta<typeof Tour> = {
  title: 'Feedback/Tour',
  component: Tour,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    const ref1 = useRef<HTMLButtonElement>(null);
    const ref2 = useRef<HTMLInputElement>(null);
    const ref3 = useRef<HTMLDivElement>(null);

    const steps = [
      {
        title: 'Welcome',
        description: 'Welcome to ZenKit UI! Let us show you around.',
        target: () => ref1.current,
      },
      {
        title: 'Search',
        description: 'Use this field to search for anything.',
        target: () => ref2.current,
      },
      {
        title: 'Content Area',
        description: 'Your main content will appear here.',
        target: () => ref3.current,
      },
    ];

    return (
      <div style={{ padding: '2rem' }}>
        <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
          <Button ref={ref1} onClick={() => setOpen(true)}>
            Start Tour
          </Button>
          <input ref={ref2} placeholder="Search..." style={{ padding: '0.5rem' }} />
        </div>
        <div
          ref={ref3}
          style={{
            padding: '2rem',
            background: '#f5f5f5',
            borderRadius: '8px',
            minHeight: '200px',
          }}
        >
          Content Area
        </div>
        <Tour open={open} onClose={() => setOpen(false)} steps={steps} />
      </div>
    );
  },
};

export const WithMask: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    const ref1 = useRef<HTMLButtonElement>(null);

    const steps = [
      {
        title: 'Focus on this button',
        description: 'The rest of the page is masked to draw attention here.',
        target: () => ref1.current,
      },
    ];

    return (
      <div style={{ padding: '2rem' }}>
        <Button ref={ref1} onClick={() => setOpen(true)}>
          Start Masked Tour
        </Button>
        <p style={{ marginTop: '1rem' }}>Some other content on the page.</p>
        <Tour open={open} onClose={() => setOpen(false)} steps={steps} mask />
      </div>
    );
  },
};

export const CustomPlacement: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    const ref1 = useRef<HTMLButtonElement>(null);
    const ref2 = useRef<HTMLButtonElement>(null);

    const steps = [
      {
        title: 'Top Placement',
        description: 'This tooltip appears above the element.',
        target: () => ref1.current,
        placement: 'top' as const,
      },
      {
        title: 'Bottom Placement',
        description: 'This tooltip appears below the element.',
        target: () => ref2.current,
        placement: 'bottom' as const,
      },
    ];

    return (
      <div style={{ padding: '4rem', display: 'flex', gap: '2rem' }}>
        <Button ref={ref1} onClick={() => setOpen(true)}>
          Start Tour
        </Button>
        <Button ref={ref2}>Second Step</Button>
        <Tour open={open} onClose={() => setOpen(false)} steps={steps} />
      </div>
    );
  },
};

export const WithIndicators: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    const ref1 = useRef<HTMLDivElement>(null);
    const ref2 = useRef<HTMLDivElement>(null);
    const ref3 = useRef<HTMLDivElement>(null);

    const steps = [
      { title: 'Step 1', description: 'First step of the tour.', target: () => ref1.current },
      { title: 'Step 2', description: 'Second step of the tour.', target: () => ref2.current },
      { title: 'Step 3', description: 'Third step of the tour.', target: () => ref3.current },
    ];

    return (
      <div style={{ padding: '2rem' }}>
        <Button onClick={() => setOpen(true)} style={{ marginBottom: '1rem' }}>
          Start Tour with Indicators
        </Button>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <div ref={ref1} style={{ padding: '1rem', background: '#e6f7ff', borderRadius: '4px' }}>
            Box 1
          </div>
          <div ref={ref2} style={{ padding: '1rem', background: '#fff7e6', borderRadius: '4px' }}>
            Box 2
          </div>
          <div ref={ref3} style={{ padding: '1rem', background: '#f6ffed', borderRadius: '4px' }}>
            Box 3
          </div>
        </div>
        <Tour open={open} onClose={() => setOpen(false)} steps={steps} indicatorsRender />
      </div>
    );
  },
};

export const NonModal: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    const ref1 = useRef<HTMLButtonElement>(null);

    const steps = [
      {
        title: 'Non-modal Tour',
        description: 'You can still interact with the page during this tour.',
        target: () => ref1.current,
      },
    ];

    return (
      <div style={{ padding: '2rem' }}>
        <Button ref={ref1} onClick={() => setOpen(true)}>
          Start Non-modal Tour
        </Button>
        <p style={{ marginTop: '1rem' }}>Try clicking this text during the tour.</p>
        <Tour open={open} onClose={() => setOpen(false)} steps={steps} mask={false} />
      </div>
    );
  },
};
