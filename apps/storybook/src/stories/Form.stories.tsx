import type { Meta, StoryObj } from '@storybook/react';
import { Form, FormItem, Input, Select, Textarea, Checkbox, Button } from '@zenkit-ui/core';

const meta: Meta<typeof Form> = {
  title: 'Components/Form',
  component: Form,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    layout: {
      control: 'select',
      options: ['vertical', 'horizontal', 'inline'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Form style={{ maxWidth: '400px' }}>
      <FormItem label="Username" required htmlFor="username">
        <Input id="username" placeholder="Enter username" fullWidth />
      </FormItem>
      <FormItem label="Email" required htmlFor="email">
        <Input id="email" type="email" placeholder="Enter email" fullWidth />
      </FormItem>
      <FormItem label="Password" required htmlFor="password">
        <Input id="password" type="password" placeholder="Enter password" fullWidth />
      </FormItem>
      <FormItem>
        <Button type="submit">Submit</Button>
      </FormItem>
    </Form>
  ),
};

export const VerticalLayout: Story = {
  render: () => (
    <Form layout="vertical" style={{ maxWidth: '400px' }}>
      <FormItem label="Name" required>
        <Input placeholder="Your name" fullWidth />
      </FormItem>
      <FormItem label="Email" required>
        <Input type="email" placeholder="your@email.com" fullWidth />
      </FormItem>
      <FormItem label="Message">
        <Textarea placeholder="Your message" rows={4} fullWidth />
      </FormItem>
      <FormItem>
        <Button type="submit">Send Message</Button>
      </FormItem>
    </Form>
  ),
};

export const WithHelperText: Story = {
  render: () => (
    <Form style={{ maxWidth: '400px' }}>
      <FormItem
        label="Username"
        helperText="Username must be 3-20 characters"
        required
      >
        <Input placeholder="Enter username" fullWidth />
      </FormItem>
      <FormItem
        label="Password"
        helperText="Use at least 8 characters with numbers and symbols"
        required
      >
        <Input type="password" placeholder="Enter password" fullWidth />
      </FormItem>
    </Form>
  ),
};

export const WithErrors: Story = {
  render: () => (
    <Form style={{ maxWidth: '400px' }}>
      <FormItem
        label="Email"
        error="Please enter a valid email address"
        required
      >
        <Input type="email" defaultValue="invalid-email" error fullWidth />
      </FormItem>
      <FormItem
        label="Password"
        error="Password must be at least 8 characters"
        required
      >
        <Input type="password" defaultValue="123" error fullWidth />
      </FormItem>
    </Form>
  ),
};

export const OptionalFields: Story = {
  render: () => (
    <Form requiredMark="optional" style={{ maxWidth: '400px' }}>
      <FormItem label="Full Name" required>
        <Input placeholder="John Doe" fullWidth />
      </FormItem>
      <FormItem label="Nickname">
        <Input placeholder="Optional nickname" fullWidth />
      </FormItem>
      <FormItem label="Bio">
        <Textarea placeholder="Tell us about yourself" rows={3} fullWidth />
      </FormItem>
    </Form>
  ),
};

export const InlineLayout: Story = {
  render: () => (
    <Form layout="inline">
      <FormItem label="Name">
        <Input placeholder="Name" />
      </FormItem>
      <FormItem label="Email">
        <Input type="email" placeholder="Email" />
      </FormItem>
      <FormItem>
        <Button type="submit">Search</Button>
      </FormItem>
    </Form>
  ),
};

export const CompleteForm: Story = {
  render: () => (
    <Form style={{ maxWidth: '500px' }}>
      <FormItem label="Full Name" required>
        <Input placeholder="John Doe" fullWidth />
      </FormItem>
      <FormItem label="Email" required helperText="We'll never share your email">
        <Input type="email" placeholder="john@example.com" fullWidth />
      </FormItem>
      <FormItem label="Country" required>
        <Select
          fullWidth
          placeholder="Select country"
          options={[
            { value: 'us', label: 'United States' },
            { value: 'uk', label: 'United Kingdom' },
            { value: 'ca', label: 'Canada' },
            { value: 'au', label: 'Australia' },
          ]}
        />
      </FormItem>
      <FormItem label="Message">
        <Textarea placeholder="Your message..." rows={4} fullWidth />
      </FormItem>
      <FormItem>
        <Checkbox label="I agree to the terms and conditions" />
      </FormItem>
      <FormItem>
        <div style={{ display: 'flex', gap: '0.5rem' }}>
          <Button type="submit">Submit</Button>
          <Button variant="outline" type="reset">Reset</Button>
        </div>
      </FormItem>
    </Form>
  ),
};

export const DisabledForm: Story = {
  render: () => (
    <Form disabled style={{ maxWidth: '400px' }}>
      <FormItem label="Name">
        <Input defaultValue="John Doe" fullWidth />
      </FormItem>
      <FormItem label="Email">
        <Input defaultValue="john@example.com" fullWidth />
      </FormItem>
      <FormItem>
        <Button type="submit">Submit</Button>
      </FormItem>
    </Form>
  ),
};
