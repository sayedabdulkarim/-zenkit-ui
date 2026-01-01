import type { Meta, StoryObj } from '@storybook/react';
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenu, Button } from '@zenkit-ui/core';

const meta: Meta<typeof Navbar> = {
  title: 'Navigation/Navbar',
  component: Navbar,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Navbar>
      <NavbarBrand>
        <strong>ZenKit</strong>
      </NavbarBrand>
      <NavbarContent>
        <NavbarItem active>Home</NavbarItem>
        <NavbarItem>Features</NavbarItem>
        <NavbarItem>Pricing</NavbarItem>
        <NavbarItem>About</NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Button variant="outline" size="sm">Login</Button>
        </NavbarItem>
        <NavbarItem>
          <Button size="sm">Sign Up</Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  ),
};

export const Sticky: Story = {
  render: () => (
    <div style={{ height: '200vh' }}>
      <Navbar position="sticky">
        <NavbarBrand>
          <strong>ZenKit</strong>
        </NavbarBrand>
        <NavbarContent>
          <NavbarItem active>Home</NavbarItem>
          <NavbarItem>About</NavbarItem>
          <NavbarItem>Contact</NavbarItem>
        </NavbarContent>
      </Navbar>
      <div style={{ padding: '2rem' }}>
        <p>Scroll down to see sticky navbar...</p>
        {Array.from({ length: 20 }).map((_, i) => (
          <p key={i}>Content line {i + 1}</p>
        ))}
      </div>
    </div>
  ),
};

export const Bordered: Story = {
  render: () => (
    <Navbar bordered>
      <NavbarBrand>
        <strong>ZenKit</strong>
      </NavbarBrand>
      <NavbarContent>
        <NavbarItem>Home</NavbarItem>
        <NavbarItem>Products</NavbarItem>
        <NavbarItem>Services</NavbarItem>
      </NavbarContent>
    </Navbar>
  ),
};

export const WithMenu: Story = {
  render: () => (
    <Navbar>
      <NavbarBrand>
        <strong>ZenKit</strong>
      </NavbarBrand>
      <NavbarContent>
        <NavbarItem active>Home</NavbarItem>
        <NavbarMenu
          trigger={<NavbarItem>Products ▼</NavbarItem>}
          items={[
            { key: '1', label: 'Product A' },
            { key: '2', label: 'Product B' },
            { key: '3', label: 'Product C' },
          ]}
        />
        <NavbarItem>Contact</NavbarItem>
      </NavbarContent>
    </Navbar>
  ),
};
