import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Stepper, StepperStep, Button } from '@zenkit-ui/core';

const meta: Meta<typeof Stepper> = {
  title: 'Components/Stepper',
  component: Stepper,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    orientation: { control: 'select', options: ['horizontal', 'vertical'] },
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
    color: { control: 'select', options: ['primary', 'secondary', 'success'] },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const StepperExample = () => {
  const [active, setActive] = useState(1);
  return (
    <div style={{ width: '500px' }}>
      <Stepper activeStep={active} onStepChange={setActive}>
        <StepperStep label="Account" description="Create your account" />
        <StepperStep label="Verify" description="Verify email address" />
        <StepperStep label="Complete" description="Get started!" />
      </Stepper>
      <div style={{ marginTop: '2rem', display: 'flex', gap: '0.5rem', justifyContent: 'center' }}>
        <Button onClick={() => setActive(Math.max(0, active - 1))} disabled={active === 0}>
          Back
        </Button>
        <Button onClick={() => setActive(Math.min(2, active + 1))} disabled={active === 2}>
          Next
        </Button>
      </div>
    </div>
  );
};

export const Default: Story = {
  render: () => <StepperExample />,
};

export const Vertical: Story = {
  render: () => {
    const [active, setActive] = useState(1);
    return (
      <div style={{ width: '300px' }}>
        <Stepper activeStep={active} onStepChange={setActive} orientation="vertical">
          <StepperStep label="Step 1" description="First step description" />
          <StepperStep label="Step 2" description="Second step description" />
          <StepperStep label="Step 3" description="Third step description" />
          <StepperStep label="Step 4" description="Final step" />
        </Stepper>
      </div>
    );
  },
};

export const Colors: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <Stepper activeStep={1} color="primary">
        <StepperStep label="One" />
        <StepperStep label="Two" />
        <StepperStep label="Three" />
      </Stepper>
      <Stepper activeStep={1} color="secondary">
        <StepperStep label="One" />
        <StepperStep label="Two" />
        <StepperStep label="Three" />
      </Stepper>
      <Stepper activeStep={1} color="success">
        <StepperStep label="One" />
        <StepperStep label="Two" />
        <StepperStep label="Three" />
      </Stepper>
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <Stepper activeStep={1} size="sm">
        <StepperStep label="Small" />
        <StepperStep label="Steps" />
        <StepperStep label="Here" />
      </Stepper>
      <Stepper activeStep={1} size="md">
        <StepperStep label="Medium" />
        <StepperStep label="Steps" />
        <StepperStep label="Here" />
      </Stepper>
      <Stepper activeStep={1} size="lg">
        <StepperStep label="Large" />
        <StepperStep label="Steps" />
        <StepperStep label="Here" />
      </Stepper>
    </div>
  ),
};

export const WithIcons: Story = {
  render: () => {
    const [active, setActive] = useState(1);
    return (
      <div style={{ width: '500px' }}>
        <Stepper activeStep={active} onStepChange={setActive}>
          <StepperStep label="Cart" icon="🛒" />
          <StepperStep label="Shipping" icon="📦" />
          <StepperStep label="Payment" icon="💳" />
          <StepperStep label="Complete" icon="✅" />
        </Stepper>
      </div>
    );
  },
};

export const WithError: Story = {
  render: () => (
    <div style={{ width: '500px' }}>
      <Stepper activeStep={1}>
        <StepperStep label="Details" />
        <StepperStep label="Verification" error />
        <StepperStep label="Complete" />
      </Stepper>
    </div>
  ),
};

export const Loading: Story = {
  render: () => (
    <div style={{ width: '500px' }}>
      <Stepper activeStep={1}>
        <StepperStep label="Submitted" />
        <StepperStep label="Processing" loading />
        <StepperStep label="Complete" />
      </Stepper>
    </div>
  ),
};
