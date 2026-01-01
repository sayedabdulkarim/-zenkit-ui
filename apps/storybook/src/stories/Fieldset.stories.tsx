import type { Meta, StoryObj } from '@storybook/react';
import { Fieldset, Field, Input, Select, Checkbox } from '@zenkit-ui/core';

const meta: Meta<typeof Fieldset> = {
  title: 'Data Entry/Fieldset',
  component: Fieldset,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Fieldset legend="Personal Information" style={{ width: '400px' }}>
      <Field label="Full Name" required>
        <Input placeholder="Enter your name" />
      </Field>
      <Field label="Email" required>
        <Input type="email" placeholder="Enter your email" />
      </Field>
      <Field label="Phone">
        <Input placeholder="Enter your phone" />
      </Field>
    </Fieldset>
  ),
};

export const WithDescription: Story = {
  render: () => (
    <Fieldset
      legend="Account Settings"
      description="Configure your account preferences"
      style={{ width: '400px' }}
    >
      <Field label="Username" description="This will be your public display name">
        <Input placeholder="username" />
      </Field>
      <Field label="Language">
        <Select>
          <option value="en">English</option>
          <option value="es">Spanish</option>
          <option value="fr">French</option>
        </Select>
      </Field>
    </Fieldset>
  ),
};

export const Disabled: Story = {
  render: () => (
    <Fieldset legend="Disabled Fieldset" disabled style={{ width: '400px' }}>
      <Field label="Name">
        <Input placeholder="Disabled input" />
      </Field>
      <Field label="Email">
        <Input type="email" placeholder="Disabled input" />
      </Field>
    </Fieldset>
  ),
};

export const WithValidation: Story = {
  render: () => (
    <Fieldset legend="Registration" style={{ width: '400px' }}>
      <Field label="Email" required error="Please enter a valid email">
        <Input type="email" placeholder="Enter email" error />
      </Field>
      <Field label="Password" required>
        <Input type="password" placeholder="Enter password" />
      </Field>
      <Field>
        <Checkbox>I agree to the terms and conditions</Checkbox>
      </Field>
    </Fieldset>
  ),
};

export const Multiple: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: '400px' }}>
      <Fieldset legend="Shipping Address">
        <Field label="Street">
          <Input placeholder="Street address" />
        </Field>
        <Field label="City">
          <Input placeholder="City" />
        </Field>
      </Fieldset>
      <Fieldset legend="Billing Address">
        <Field label="Street">
          <Input placeholder="Street address" />
        </Field>
        <Field label="City">
          <Input placeholder="City" />
        </Field>
      </Fieldset>
    </div>
  ),
};
