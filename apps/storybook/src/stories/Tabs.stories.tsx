import type { Meta, StoryObj } from '@storybook/react';
import { Tabs, TabList, Tab, TabPanel } from '@zenkit-ui/core';

const meta: Meta<typeof Tabs> = {
  title: 'Components/Tabs',
  component: Tabs,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Tabs defaultActiveKey="tab1">
      <TabList>
        <Tab tabKey="tab1">Home</Tab>
        <Tab tabKey="tab2">Profile</Tab>
        <Tab tabKey="tab3">Settings</Tab>
      </TabList>
      <TabPanel tabKey="tab1">
        <div style={{ padding: '1rem' }}>Home content goes here</div>
      </TabPanel>
      <TabPanel tabKey="tab2">
        <div style={{ padding: '1rem' }}>Profile content goes here</div>
      </TabPanel>
      <TabPanel tabKey="tab3">
        <div style={{ padding: '1rem' }}>Settings content goes here</div>
      </TabPanel>
    </Tabs>
  ),
};

export const Pills: Story = {
  render: () => (
    <Tabs defaultActiveKey="tab1" variant="pills">
      <TabList>
        <Tab tabKey="tab1">Home</Tab>
        <Tab tabKey="tab2">Profile</Tab>
        <Tab tabKey="tab3">Settings</Tab>
      </TabList>
      <TabPanel tabKey="tab1">
        <div style={{ padding: '1rem' }}>Home content</div>
      </TabPanel>
      <TabPanel tabKey="tab2">
        <div style={{ padding: '1rem' }}>Profile content</div>
      </TabPanel>
      <TabPanel tabKey="tab3">
        <div style={{ padding: '1rem' }}>Settings content</div>
      </TabPanel>
    </Tabs>
  ),
};

export const Underline: Story = {
  render: () => (
    <Tabs defaultActiveKey="tab1" variant="underline">
      <TabList>
        <Tab tabKey="tab1">Home</Tab>
        <Tab tabKey="tab2">Profile</Tab>
        <Tab tabKey="tab3">Settings</Tab>
      </TabList>
      <TabPanel tabKey="tab1">
        <div style={{ padding: '1rem' }}>Home content</div>
      </TabPanel>
      <TabPanel tabKey="tab2">
        <div style={{ padding: '1rem' }}>Profile content</div>
      </TabPanel>
      <TabPanel tabKey="tab3">
        <div style={{ padding: '1rem' }}>Settings content</div>
      </TabPanel>
    </Tabs>
  ),
};

export const WithDisabled: Story = {
  render: () => (
    <Tabs defaultActiveKey="tab1">
      <TabList>
        <Tab tabKey="tab1">Active</Tab>
        <Tab tabKey="tab2" disabled>Disabled</Tab>
        <Tab tabKey="tab3">Another</Tab>
      </TabList>
      <TabPanel tabKey="tab1">
        <div style={{ padding: '1rem' }}>Active tab content</div>
      </TabPanel>
      <TabPanel tabKey="tab3">
        <div style={{ padding: '1rem' }}>Another tab content</div>
      </TabPanel>
    </Tabs>
  ),
};

export const WithIcons: Story = {
  render: () => (
    <Tabs defaultActiveKey="home">
      <TabList>
        <Tab tabKey="home" icon={<span>🏠</span>}>Home</Tab>
        <Tab tabKey="user" icon={<span>👤</span>}>Profile</Tab>
        <Tab tabKey="settings" icon={<span>⚙️</span>}>Settings</Tab>
      </TabList>
      <TabPanel tabKey="home">
        <div style={{ padding: '1rem' }}>Home content</div>
      </TabPanel>
      <TabPanel tabKey="user">
        <div style={{ padding: '1rem' }}>Profile content</div>
      </TabPanel>
      <TabPanel tabKey="settings">
        <div style={{ padding: '1rem' }}>Settings content</div>
      </TabPanel>
    </Tabs>
  ),
};
