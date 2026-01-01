import type { Meta, StoryObj } from '@storybook/react';
import { Result, Button } from '@zenkit-ui/core';

const meta: Meta<typeof Result> = {
  title: 'Components/Result',
  component: Result,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    status: { control: 'select', options: ['success', 'error', 'info', 'warning', '404', '403', '500'] },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Success: Story = {
  args: {
    status: 'success',
    title: 'Successfully Purchased!',
    subtitle: 'Order number: 2017182818828182881',
  },
};

export const Error: Story = {
  args: {
    status: 'error',
    title: 'Submission Failed',
    subtitle: 'Please check and modify the following information before resubmitting.',
  },
};

export const Info: Story = {
  args: {
    status: 'info',
    title: 'Your operation has been executed',
    subtitle: 'The process will take 1-2 business days to complete.',
  },
};

export const Warning: Story = {
  args: {
    status: 'warning',
    title: 'There are some problems with your operation',
    subtitle: 'Please review the warnings and try again.',
  },
};

export const NotFound: Story = {
  render: () => (
    <Result
      status="404"
      title="404"
      subtitle="Sorry, the page you visited does not exist."
      extra={<Button>Back Home</Button>}
    />
  ),
};

export const Forbidden: Story = {
  render: () => (
    <Result
      status="403"
      title="403"
      subtitle="Sorry, you are not authorized to access this page."
      extra={<Button>Back Home</Button>}
    />
  ),
};

export const ServerError: Story = {
  render: () => (
    <Result
      status="500"
      title="500"
      subtitle="Sorry, something went wrong on our server."
      extra={
        <div style={{ display: 'flex', gap: '0.5rem' }}>
          <Button>Back Home</Button>
          <Button variant="outlined">Contact Support</Button>
        </div>
      }
    />
  ),
};

export const WithExtra: Story = {
  render: () => (
    <Result
      status="success"
      title="Payment Successful"
      subtitle="Your payment of $199.00 has been processed."
      extra={
        <div style={{ display: 'flex', gap: '0.5rem' }}>
          <Button>View Order</Button>
          <Button variant="outlined">Continue Shopping</Button>
        </div>
      }
    />
  ),
};

export const CustomIcon: Story = {
  render: () => (
    <Result
      icon={<span style={{ fontSize: '72px' }}>🎉</span>}
      title="Congratulations!"
      subtitle="You have successfully completed the onboarding process."
      extra={<Button>Get Started</Button>}
    />
  ),
};
