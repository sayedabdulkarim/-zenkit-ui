import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Steps, Step, Button } from '@zenkit-ui/core';

const meta: Meta<typeof Steps> = {
  title: 'Components/Steps',
  component: Steps,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    direction: { control: 'select', options: ['horizontal', 'vertical'] },
    size: { control: 'select', options: ['sm', 'md'] },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Steps current={1}>
      <Step title="Login" description="Log into your account" />
      <Step title="Verification" description="Verify your identity" />
      <Step title="Payment" description="Complete payment" />
      <Step title="Done" description="Order confirmed" />
    </Steps>
  ),
};

export const Controlled: Story = {
  render: () => {
    const [current, setCurrent] = useState(0);
    return (
      <div>
        <Steps current={current}>
          <Step title="Step 1" />
          <Step title="Step 2" />
          <Step title="Step 3" />
        </Steps>
        <div style={{ marginTop: '1rem', display: 'flex', gap: '0.5rem' }}>
          <Button onClick={() => setCurrent(Math.max(0, current - 1))} disabled={current === 0}>
            Previous
          </Button>
          <Button onClick={() => setCurrent(Math.min(2, current + 1))} disabled={current === 2}>
            Next
          </Button>
        </div>
      </div>
    );
  },
};

export const Vertical: Story = {
  render: () => (
    <Steps current={1} direction="vertical">
      <Step title="Create Account" description="Sign up for a new account" />
      <Step title="Configure Settings" description="Set up your preferences" />
      <Step title="Invite Team" description="Add team members" />
      <Step title="Start Working" description="Begin using the platform" />
    </Steps>
  ),
};

export const WithError: Story = {
  render: () => (
    <Steps current={1}>
      <Step title="Login" status="finish" />
      <Step title="Verification" status="error" description="Failed to verify" />
      <Step title="Payment" />
      <Step title="Done" />
    </Steps>
  ),
};

export const Clickable: Story = {
  render: () => {
    const [current, setCurrent] = useState(1);
    return (
      <Steps current={current} clickable onChange={setCurrent}>
        <Step title="Cart" />
        <Step title="Shipping" />
        <Step title="Payment" />
        <Step title="Confirm" />
      </Steps>
    );
  },
};

export const WithIcons: Story = {
  render: () => (
    <Steps current={1}>
      <Step title="Login" icon={<span>👤</span>} />
      <Step title="Verify" icon={<span>✉️</span>} />
      <Step title="Pay" icon={<span>💳</span>} />
      <Step title="Done" icon={<span>✓</span>} />
    </Steps>
  ),
};
