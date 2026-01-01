import type { Meta, StoryObj } from '@storybook/react';
import { Timeline, TimelineItem } from '@zenkit-ui/core';

const meta: Meta<typeof Timeline> = {
  title: 'Components/Timeline',
  component: Timeline,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    mode: { control: 'select', options: ['left', 'right', 'alternate'] },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Timeline>
      <TimelineItem>Create a services site 2015-09-01</TimelineItem>
      <TimelineItem>Solve initial network problems 2015-09-01</TimelineItem>
      <TimelineItem>Technical testing 2015-09-01</TimelineItem>
      <TimelineItem>Network problems being solved 2015-09-01</TimelineItem>
    </Timeline>
  ),
};

export const Colors: Story = {
  render: () => (
    <Timeline>
      <TimelineItem color="primary">Primary event</TimelineItem>
      <TimelineItem color="success">Success event</TimelineItem>
      <TimelineItem color="warning">Warning event</TimelineItem>
      <TimelineItem color="danger">Danger event</TimelineItem>
      <TimelineItem color="gray">Gray event</TimelineItem>
    </Timeline>
  ),
};

export const RightMode: Story = {
  render: () => (
    <Timeline mode="right">
      <TimelineItem>Event 1</TimelineItem>
      <TimelineItem>Event 2</TimelineItem>
      <TimelineItem>Event 3</TimelineItem>
    </Timeline>
  ),
};

export const Alternate: Story = {
  render: () => (
    <Timeline mode="alternate">
      <TimelineItem>Create account 2015-09-01</TimelineItem>
      <TimelineItem color="success">Verify email 2015-09-02</TimelineItem>
      <TimelineItem>Complete profile 2015-09-03</TimelineItem>
      <TimelineItem color="success">First purchase 2015-09-04</TimelineItem>
    </Timeline>
  ),
};

export const WithLabels: Story = {
  render: () => (
    <Timeline mode="alternate">
      <TimelineItem label="2015-09-01">Create account</TimelineItem>
      <TimelineItem label="2015-09-02">Verify email</TimelineItem>
      <TimelineItem label="2015-09-03">Complete profile</TimelineItem>
      <TimelineItem label="2015-09-04">First purchase</TimelineItem>
    </Timeline>
  ),
};

export const Pending: Story = {
  render: () => (
    <Timeline pending="Recording...">
      <TimelineItem>Create account 2015-09-01</TimelineItem>
      <TimelineItem>Verify email 2015-09-02</TimelineItem>
      <TimelineItem>Complete profile 2015-09-03</TimelineItem>
    </Timeline>
  ),
};

export const CustomDot: Story = {
  render: () => (
    <Timeline>
      <TimelineItem dot={<span>🚀</span>}>Project launched</TimelineItem>
      <TimelineItem dot={<span>📝</span>}>Documentation written</TimelineItem>
      <TimelineItem dot={<span>✅</span>}>Testing complete</TimelineItem>
      <TimelineItem dot={<span>🎉</span>}>Released to production</TimelineItem>
    </Timeline>
  ),
};

export const Reverse: Story = {
  render: () => (
    <Timeline reverse>
      <TimelineItem>Event 1 (oldest)</TimelineItem>
      <TimelineItem>Event 2</TimelineItem>
      <TimelineItem>Event 3</TimelineItem>
      <TimelineItem>Event 4 (newest)</TimelineItem>
    </Timeline>
  ),
};
