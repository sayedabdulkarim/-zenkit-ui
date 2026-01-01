import type { Meta, StoryObj } from '@storybook/react';
import { Collapse, CollapsePanel } from '@zenkit-ui/core';

const meta: Meta<typeof Collapse> = {
  title: 'Components/Collapse',
  component: Collapse,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Collapse defaultActiveKey="1">
      <CollapsePanel panelKey="1" header="Panel 1">
        <p>Content for panel 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </CollapsePanel>
      <CollapsePanel panelKey="2" header="Panel 2">
        <p>Content for panel 2. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </CollapsePanel>
      <CollapsePanel panelKey="3" header="Panel 3">
        <p>Content for panel 3. Ut enim ad minim veniam, quis nostrud exercitation.</p>
      </CollapsePanel>
    </Collapse>
  ),
};

export const Accordion: Story = {
  render: () => (
    <Collapse accordion defaultActiveKey="1">
      <CollapsePanel panelKey="1" header="Section 1">
        <p>Only one panel can be open at a time in accordion mode.</p>
      </CollapsePanel>
      <CollapsePanel panelKey="2" header="Section 2">
        <p>Opening this will close the other panels.</p>
      </CollapsePanel>
      <CollapsePanel panelKey="3" header="Section 3">
        <p>Click on headers to toggle panels.</p>
      </CollapsePanel>
    </Collapse>
  ),
};

export const WithDisabled: Story = {
  render: () => (
    <Collapse defaultActiveKey="1">
      <CollapsePanel panelKey="1" header="Active Panel">
        <p>This panel is active and functional.</p>
      </CollapsePanel>
      <CollapsePanel panelKey="2" header="Disabled Panel" disabled>
        <p>This content won't be visible.</p>
      </CollapsePanel>
      <CollapsePanel panelKey="3" header="Another Panel">
        <p>This panel is also functional.</p>
      </CollapsePanel>
    </Collapse>
  ),
};

export const WithExtra: Story = {
  render: () => (
    <Collapse defaultActiveKey="1">
      <CollapsePanel
        panelKey="1"
        header="Settings"
        extra={<span onClick={(e) => e.stopPropagation()}>⚙️</span>}
      >
        <p>Configure your settings here.</p>
      </CollapsePanel>
      <CollapsePanel
        panelKey="2"
        header="Notifications"
        extra={<span onClick={(e) => e.stopPropagation()}>🔔</span>}
      >
        <p>Manage your notifications.</p>
      </CollapsePanel>
    </Collapse>
  ),
};

export const Borderless: Story = {
  render: () => (
    <Collapse bordered={false} defaultActiveKey="1">
      <CollapsePanel panelKey="1" header="Borderless Panel 1">
        <p>A cleaner look without borders.</p>
      </CollapsePanel>
      <CollapsePanel panelKey="2" header="Borderless Panel 2">
        <p>Suitable for minimal designs.</p>
      </CollapsePanel>
    </Collapse>
  ),
};
