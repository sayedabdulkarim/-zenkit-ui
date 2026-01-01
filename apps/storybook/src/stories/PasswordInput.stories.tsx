import type { Meta, StoryObj } from '@storybook/react';
import { PasswordInput } from '@zenkit-ui/core';

const meta: Meta<typeof PasswordInput> = {
  title: 'Data Entry/PasswordInput',
  component: PasswordInput,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: 'Enter password',
  },
};

export const WithValue: Story = {
  args: {
    defaultValue: 'mypassword123',
  },
};

export const WithStrengthIndicator: Story = {
  args: {
    placeholder: 'Enter password',
    showStrength: true,
  },
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: '300px' }}>
      <PasswordInput size="sm" placeholder="Small" />
      <PasswordInput size="md" placeholder="Medium" />
      <PasswordInput size="lg" placeholder="Large" />
    </div>
  ),
};

export const Error: Story = {
  args: {
    placeholder: 'Enter password',
    error: true,
  },
};

export const Disabled: Story = {
  args: {
    placeholder: 'Enter password',
    disabled: true,
  },
};

export const VisibleByDefault: Story = {
  args: {
    placeholder: 'Password visible by default',
    defaultVisible: true,
  },
};
