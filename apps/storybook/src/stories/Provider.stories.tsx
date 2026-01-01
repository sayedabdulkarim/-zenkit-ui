import type { Meta, StoryObj } from '@storybook/react';
import { ZenKitProvider, useTheme, Button, Card, CardBody } from '@zenkit-ui/core';

const meta: Meta<typeof ZenKitProvider> = {
  title: 'Components/Provider',
  component: ZenKitProvider,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

const ThemeDemo = () => {
  const { theme, colorScheme, setTheme, toggleTheme } = useTheme();

  return (
    <Card style={{ width: '400px' }}>
      <CardBody>
        <h3 style={{ marginBottom: '1rem' }}>Theme Settings</h3>
        <p style={{ marginBottom: '0.5rem' }}>
          <strong>Current Theme:</strong> {theme}
        </p>
        <p style={{ marginBottom: '1rem' }}>
          <strong>Resolved Color Scheme:</strong> {colorScheme}
        </p>

        <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1rem' }}>
          <Button
            variant={theme === 'light' ? 'solid' : 'outline'}
            onClick={() => setTheme('light')}
          >
            Light
          </Button>
          <Button
            variant={theme === 'dark' ? 'solid' : 'outline'}
            onClick={() => setTheme('dark')}
          >
            Dark
          </Button>
          <Button
            variant={theme === 'system' ? 'solid' : 'outline'}
            onClick={() => setTheme('system')}
          >
            System
          </Button>
        </div>

        <Button onClick={toggleTheme} fullWidth>
          Toggle Theme ({colorScheme === 'light' ? '🌙' : '☀️'})
        </Button>
      </CardBody>
    </Card>
  );
};

export const Default: Story = {
  render: () => (
    <ZenKitProvider>
      <ThemeDemo />
    </ZenKitProvider>
  ),
};

export const DefaultDark: Story = {
  render: () => (
    <ZenKitProvider defaultTheme="dark">
      <ThemeDemo />
    </ZenKitProvider>
  ),
};

export const DefaultSystem: Story = {
  render: () => (
    <ZenKitProvider defaultTheme="system">
      <ThemeDemo />
    </ZenKitProvider>
  ),
};

export const WithClassAttribute: Story = {
  render: () => (
    <ZenKitProvider attribute="class">
      <ThemeDemo />
    </ZenKitProvider>
  ),
};

export const CustomStorageKey: Story = {
  render: () => (
    <ZenKitProvider storageKey="my-app-theme">
      <ThemeDemo />
    </ZenKitProvider>
  ),
};
