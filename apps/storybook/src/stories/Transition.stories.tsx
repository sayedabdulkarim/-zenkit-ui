import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Transition, Button } from '@zenkit-ui/core';

const meta: Meta<typeof Transition> = {
  title: 'Utility/Transition',
  component: Transition,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    const [show, setShow] = useState(true);
    return (
      <div>
        <Button onClick={() => setShow(!show)} style={{ marginBottom: '1rem' }}>
          Toggle
        </Button>
        <Transition in={show} timeout={300}>
          <div
            style={{
              padding: '2rem',
              background: '#1890ff',
              color: 'white',
              borderRadius: '8px',
            }}
          >
            Fade Transition
          </div>
        </Transition>
      </div>
    );
  },
};

export const FadeTransition: Story = {
  render: () => {
    const [show, setShow] = useState(true);
    return (
      <div>
        <Button onClick={() => setShow(!show)} style={{ marginBottom: '1rem' }}>
          Toggle Fade
        </Button>
        <Transition in={show} type="fade" timeout={300}>
          <div
            style={{
              padding: '2rem',
              background: '#52c41a',
              color: 'white',
              borderRadius: '8px',
            }}
          >
            Fade In/Out
          </div>
        </Transition>
      </div>
    );
  },
};

export const SlideTransition: Story = {
  render: () => {
    const [show, setShow] = useState(true);
    return (
      <div>
        <Button onClick={() => setShow(!show)} style={{ marginBottom: '1rem' }}>
          Toggle Slide
        </Button>
        <Transition in={show} type="slide" timeout={300}>
          <div
            style={{
              padding: '2rem',
              background: '#722ed1',
              color: 'white',
              borderRadius: '8px',
            }}
          >
            Slide In/Out
          </div>
        </Transition>
      </div>
    );
  },
};

export const ScaleTransition: Story = {
  render: () => {
    const [show, setShow] = useState(true);
    return (
      <div>
        <Button onClick={() => setShow(!show)} style={{ marginBottom: '1rem' }}>
          Toggle Scale
        </Button>
        <Transition in={show} type="scale" timeout={300}>
          <div
            style={{
              padding: '2rem',
              background: '#eb2f96',
              color: 'white',
              borderRadius: '8px',
            }}
          >
            Scale In/Out
          </div>
        </Transition>
      </div>
    );
  },
};

export const CollapseTransition: Story = {
  render: () => {
    const [show, setShow] = useState(true);
    return (
      <div>
        <Button onClick={() => setShow(!show)} style={{ marginBottom: '1rem' }}>
          Toggle Collapse
        </Button>
        <Transition in={show} type="collapse" timeout={300}>
          <div
            style={{
              padding: '2rem',
              background: '#fa8c16',
              color: 'white',
              borderRadius: '8px',
            }}
          >
            Collapse In/Out
          </div>
        </Transition>
      </div>
    );
  },
};

export const CustomDuration: Story = {
  render: () => {
    const [show, setShow] = useState(true);
    return (
      <div>
        <Button onClick={() => setShow(!show)} style={{ marginBottom: '1rem' }}>
          Toggle (Slow)
        </Button>
        <Transition in={show} timeout={1000}>
          <div
            style={{
              padding: '2rem',
              background: '#13c2c2',
              color: 'white',
              borderRadius: '8px',
            }}
          >
            1 Second Transition
          </div>
        </Transition>
      </div>
    );
  },
};

export const UnmountOnExit: Story = {
  render: () => {
    const [show, setShow] = useState(true);
    return (
      <div>
        <Button onClick={() => setShow(!show)} style={{ marginBottom: '1rem' }}>
          Toggle (Unmount on Exit)
        </Button>
        <Transition in={show} timeout={300} unmountOnExit>
          <div
            style={{
              padding: '2rem',
              background: '#f5222d',
              color: 'white',
              borderRadius: '8px',
            }}
          >
            Unmounted when hidden
          </div>
        </Transition>
      </div>
    );
  },
};

export const AllTransitions: Story = {
  render: () => {
    const [show, setShow] = useState(true);
    return (
      <div>
        <Button onClick={() => setShow(!show)} style={{ marginBottom: '1rem' }}>
          Toggle All
        </Button>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem' }}>
          <Transition in={show} type="fade" timeout={300}>
            <div style={{ padding: '1rem', background: '#1890ff', color: 'white', borderRadius: '4px' }}>
              Fade
            </div>
          </Transition>
          <Transition in={show} type="slide" timeout={300}>
            <div style={{ padding: '1rem', background: '#52c41a', color: 'white', borderRadius: '4px' }}>
              Slide
            </div>
          </Transition>
          <Transition in={show} type="scale" timeout={300}>
            <div style={{ padding: '1rem', background: '#722ed1', color: 'white', borderRadius: '4px' }}>
              Scale
            </div>
          </Transition>
          <Transition in={show} type="collapse" timeout={300}>
            <div style={{ padding: '1rem', background: '#eb2f96', color: 'white', borderRadius: '4px' }}>
              Collapse
            </div>
          </Transition>
        </div>
      </div>
    );
  },
};
