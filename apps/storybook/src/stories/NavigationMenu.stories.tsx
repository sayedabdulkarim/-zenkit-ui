import type { Meta, StoryObj } from '@storybook/react';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
} from '@zenkit-ui/core';

const meta: Meta<typeof NavigationMenu> = {
  title: 'Navigation/NavigationMenu',
  component: NavigationMenu,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <NavigationMenu>
      <NavigationMenuItem>
        <NavigationMenuTrigger>Getting Started</NavigationMenuTrigger>
        <NavigationMenuContent>
          <div style={{ padding: '1rem', width: '400px' }}>
            <h3 style={{ marginBottom: '0.5rem' }}>Getting Started</h3>
            <p style={{ color: '#666', marginBottom: '1rem' }}>
              Learn how to install and configure ZenKit UI in your project.
            </p>
            <NavigationMenuLink href="#">Installation Guide</NavigationMenuLink>
            <NavigationMenuLink href="#">Quick Start</NavigationMenuLink>
            <NavigationMenuLink href="#">Examples</NavigationMenuLink>
          </div>
        </NavigationMenuContent>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <NavigationMenuTrigger>Components</NavigationMenuTrigger>
        <NavigationMenuContent>
          <div style={{ padding: '1rem', width: '500px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem' }}>
            <NavigationMenuLink href="#">Button</NavigationMenuLink>
            <NavigationMenuLink href="#">Input</NavigationMenuLink>
            <NavigationMenuLink href="#">Select</NavigationMenuLink>
            <NavigationMenuLink href="#">Modal</NavigationMenuLink>
            <NavigationMenuLink href="#">Table</NavigationMenuLink>
            <NavigationMenuLink href="#">Card</NavigationMenuLink>
          </div>
        </NavigationMenuContent>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <NavigationMenuLink href="#">Documentation</NavigationMenuLink>
      </NavigationMenuItem>
    </NavigationMenu>
  ),
};

export const WithDescriptions: Story = {
  render: () => (
    <NavigationMenu>
      <NavigationMenuItem>
        <NavigationMenuTrigger>Products</NavigationMenuTrigger>
        <NavigationMenuContent>
          <div style={{ padding: '1rem', width: '450px' }}>
            <div style={{ marginBottom: '1rem' }}>
              <NavigationMenuLink href="#">
                <strong>Analytics</strong>
                <p style={{ color: '#666', fontSize: '0.875rem', margin: '0.25rem 0 0' }}>
                  Track and analyze your data in real-time
                </p>
              </NavigationMenuLink>
            </div>
            <div style={{ marginBottom: '1rem' }}>
              <NavigationMenuLink href="#">
                <strong>Automation</strong>
                <p style={{ color: '#666', fontSize: '0.875rem', margin: '0.25rem 0 0' }}>
                  Automate repetitive tasks and workflows
                </p>
              </NavigationMenuLink>
            </div>
            <div>
              <NavigationMenuLink href="#">
                <strong>Integration</strong>
                <p style={{ color: '#666', fontSize: '0.875rem', margin: '0.25rem 0 0' }}>
                  Connect with your favorite tools
                </p>
              </NavigationMenuLink>
            </div>
          </div>
        </NavigationMenuContent>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <NavigationMenuLink href="#">Pricing</NavigationMenuLink>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <NavigationMenuLink href="#">About</NavigationMenuLink>
      </NavigationMenuItem>
    </NavigationMenu>
  ),
};

export const Simple: Story = {
  render: () => (
    <NavigationMenu>
      <NavigationMenuItem>
        <NavigationMenuLink href="#">Home</NavigationMenuLink>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <NavigationMenuLink href="#">About</NavigationMenuLink>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <NavigationMenuLink href="#">Services</NavigationMenuLink>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <NavigationMenuLink href="#">Contact</NavigationMenuLink>
      </NavigationMenuItem>
    </NavigationMenu>
  ),
};
