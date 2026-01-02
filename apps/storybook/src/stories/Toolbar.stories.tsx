import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Toolbar, ToolbarButton, ToolbarSeparator, ToolbarGroup, ToolbarToggleGroup } from '@zenkit-ui/core';

const meta: Meta<typeof Toolbar> = {
  title: 'Navigation/Toolbar',
  component: Toolbar,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    orientation: {
      control: 'select',
      options: ['horizontal', 'vertical'],
      description: 'The orientation of the toolbar',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'The size of the toolbar',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Toolbar aria-label="Formatting options">
      <ToolbarGroup>
        <ToolbarButton tooltip="Bold">B</ToolbarButton>
        <ToolbarButton tooltip="Italic">I</ToolbarButton>
        <ToolbarButton tooltip="Underline">U</ToolbarButton>
      </ToolbarGroup>
      <ToolbarSeparator />
      <ToolbarGroup>
        <ToolbarButton tooltip="Align Left">≡</ToolbarButton>
        <ToolbarButton tooltip="Align Center">≡</ToolbarButton>
        <ToolbarButton tooltip="Align Right">≡</ToolbarButton>
      </ToolbarGroup>
    </Toolbar>
  ),
};

export const WithActiveButton: Story = {
  render: () => {
    const [activeFormat, setActiveFormat] = useState<string | null>('bold');

    return (
      <Toolbar aria-label="Text formatting">
        <ToolbarGroup>
          <ToolbarButton
            isActive={activeFormat === 'bold'}
            onClick={() => setActiveFormat(activeFormat === 'bold' ? null : 'bold')}
            tooltip="Bold"
            style={{ fontWeight: 'bold' }}
          >
            B
          </ToolbarButton>
          <ToolbarButton
            isActive={activeFormat === 'italic'}
            onClick={() => setActiveFormat(activeFormat === 'italic' ? null : 'italic')}
            tooltip="Italic"
            style={{ fontStyle: 'italic' }}
          >
            I
          </ToolbarButton>
          <ToolbarButton
            isActive={activeFormat === 'underline'}
            onClick={() => setActiveFormat(activeFormat === 'underline' ? null : 'underline')}
            tooltip="Underline"
            style={{ textDecoration: 'underline' }}
          >
            U
          </ToolbarButton>
        </ToolbarGroup>
      </Toolbar>
    );
  },
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      <div>
        <p style={{ marginBottom: '0.5rem', fontSize: '0.875rem', color: '#64748b' }}>Small</p>
        <Toolbar size="sm" aria-label="Small toolbar">
          <ToolbarGroup>
            <ToolbarButton>B</ToolbarButton>
            <ToolbarButton>I</ToolbarButton>
            <ToolbarButton>U</ToolbarButton>
          </ToolbarGroup>
          <ToolbarSeparator />
          <ToolbarButton>Link</ToolbarButton>
        </Toolbar>
      </div>
      <div>
        <p style={{ marginBottom: '0.5rem', fontSize: '0.875rem', color: '#64748b' }}>Medium (default)</p>
        <Toolbar size="md" aria-label="Medium toolbar">
          <ToolbarGroup>
            <ToolbarButton>B</ToolbarButton>
            <ToolbarButton>I</ToolbarButton>
            <ToolbarButton>U</ToolbarButton>
          </ToolbarGroup>
          <ToolbarSeparator />
          <ToolbarButton>Link</ToolbarButton>
        </Toolbar>
      </div>
      <div>
        <p style={{ marginBottom: '0.5rem', fontSize: '0.875rem', color: '#64748b' }}>Large</p>
        <Toolbar size="lg" aria-label="Large toolbar">
          <ToolbarGroup>
            <ToolbarButton>B</ToolbarButton>
            <ToolbarButton>I</ToolbarButton>
            <ToolbarButton>U</ToolbarButton>
          </ToolbarGroup>
          <ToolbarSeparator />
          <ToolbarButton>Link</ToolbarButton>
        </Toolbar>
      </div>
    </div>
  ),
};

export const VerticalOrientation: Story = {
  render: () => (
    <Toolbar orientation="vertical" aria-label="Vertical toolbar">
      <ToolbarGroup>
        <ToolbarButton tooltip="Bold">B</ToolbarButton>
        <ToolbarButton tooltip="Italic">I</ToolbarButton>
        <ToolbarButton tooltip="Underline">U</ToolbarButton>
      </ToolbarGroup>
      <ToolbarSeparator />
      <ToolbarGroup>
        <ToolbarButton tooltip="List">📋</ToolbarButton>
        <ToolbarButton tooltip="Image">🖼</ToolbarButton>
        <ToolbarButton tooltip="Link">🔗</ToolbarButton>
      </ToolbarGroup>
    </Toolbar>
  ),
};

export const EditorToolbar: Story = {
  render: () => {
    const [bold, setBold] = useState(false);
    const [italic, setItalic] = useState(false);
    const [underline, setUnderline] = useState(false);

    return (
      <div style={{ border: '1px solid #e2e8f0', borderRadius: '8px', overflow: 'hidden' }}>
        <Toolbar aria-label="Text editor toolbar" style={{ padding: '0.5rem', borderBottom: '1px solid #e2e8f0', background: '#f8fafc' }}>
          <ToolbarGroup spacing="none">
            <ToolbarButton
              isActive={bold}
              onClick={() => setBold(!bold)}
              tooltip="Bold (Ctrl+B)"
              style={{ fontWeight: 'bold' }}
            >
              B
            </ToolbarButton>
            <ToolbarButton
              isActive={italic}
              onClick={() => setItalic(!italic)}
              tooltip="Italic (Ctrl+I)"
              style={{ fontStyle: 'italic' }}
            >
              I
            </ToolbarButton>
            <ToolbarButton
              isActive={underline}
              onClick={() => setUnderline(!underline)}
              tooltip="Underline (Ctrl+U)"
              style={{ textDecoration: 'underline' }}
            >
              U
            </ToolbarButton>
          </ToolbarGroup>
          <ToolbarSeparator />
          <ToolbarGroup spacing="none">
            <ToolbarButton tooltip="Heading 1">H1</ToolbarButton>
            <ToolbarButton tooltip="Heading 2">H2</ToolbarButton>
            <ToolbarButton tooltip="Heading 3">H3</ToolbarButton>
          </ToolbarGroup>
          <ToolbarSeparator />
          <ToolbarGroup spacing="none">
            <ToolbarButton tooltip="Bullet list">•</ToolbarButton>
            <ToolbarButton tooltip="Numbered list">1.</ToolbarButton>
          </ToolbarGroup>
          <ToolbarSeparator />
          <ToolbarGroup spacing="none">
            <ToolbarButton tooltip="Insert link">🔗</ToolbarButton>
            <ToolbarButton tooltip="Insert image">🖼</ToolbarButton>
            <ToolbarButton tooltip="Insert code">{'</>'}</ToolbarButton>
          </ToolbarGroup>
        </Toolbar>
        <div
          contentEditable
          style={{
            padding: '1rem',
            minHeight: '150px',
            outline: 'none',
            fontWeight: bold ? 'bold' : 'normal',
            fontStyle: italic ? 'italic' : 'normal',
            textDecoration: underline ? 'underline' : 'none',
          }}
          suppressContentEditableWarning
        >
          Start typing here...
        </div>
      </div>
    );
  },
};

export const ButtonVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <div>
        <p style={{ marginBottom: '0.5rem', fontSize: '0.875rem', color: '#64748b' }}>Ghost (default)</p>
        <Toolbar>
          <ToolbarGroup>
            <ToolbarButton variant="ghost">Button 1</ToolbarButton>
            <ToolbarButton variant="ghost" isActive>Button 2 (active)</ToolbarButton>
            <ToolbarButton variant="ghost">Button 3</ToolbarButton>
          </ToolbarGroup>
        </Toolbar>
      </div>
      <div>
        <p style={{ marginBottom: '0.5rem', fontSize: '0.875rem', color: '#64748b' }}>Outline</p>
        <Toolbar>
          <ToolbarGroup>
            <ToolbarButton variant="outline">Button 1</ToolbarButton>
            <ToolbarButton variant="outline" isActive>Button 2 (active)</ToolbarButton>
            <ToolbarButton variant="outline">Button 3</ToolbarButton>
          </ToolbarGroup>
        </Toolbar>
      </div>
      <div>
        <p style={{ marginBottom: '0.5rem', fontSize: '0.875rem', color: '#64748b' }}>Default</p>
        <Toolbar>
          <ToolbarGroup>
            <ToolbarButton variant="default">Button 1</ToolbarButton>
            <ToolbarButton variant="default" isActive>Button 2 (active)</ToolbarButton>
            <ToolbarButton variant="default">Button 3</ToolbarButton>
          </ToolbarGroup>
        </Toolbar>
      </div>
    </div>
  ),
};

export const ToggleGroup: Story = {
  render: () => {
    const [alignment, setAlignment] = useState('left');

    return (
      <Toolbar aria-label="Text alignment">
        <ToolbarToggleGroup type="single" value={alignment}>
          <ToolbarButton
            isActive={alignment === 'left'}
            onClick={() => setAlignment('left')}
            tooltip="Align Left"
          >
            ⬅
          </ToolbarButton>
          <ToolbarButton
            isActive={alignment === 'center'}
            onClick={() => setAlignment('center')}
            tooltip="Align Center"
          >
            ↔
          </ToolbarButton>
          <ToolbarButton
            isActive={alignment === 'right'}
            onClick={() => setAlignment('right')}
            tooltip="Align Right"
          >
            ➡
          </ToolbarButton>
        </ToolbarToggleGroup>
      </Toolbar>
    );
  },
};

export const DrawingToolbar: Story = {
  render: () => {
    const [tool, setTool] = useState('select');

    return (
      <Toolbar orientation="vertical" aria-label="Drawing tools" style={{ width: 'fit-content' }}>
        <ToolbarGroup>
          <ToolbarButton
            isActive={tool === 'select'}
            onClick={() => setTool('select')}
            tooltip="Select"
          >
            ↖
          </ToolbarButton>
          <ToolbarButton
            isActive={tool === 'pen'}
            onClick={() => setTool('pen')}
            tooltip="Pen"
          >
            ✏️
          </ToolbarButton>
          <ToolbarButton
            isActive={tool === 'eraser'}
            onClick={() => setTool('eraser')}
            tooltip="Eraser"
          >
            🧹
          </ToolbarButton>
        </ToolbarGroup>
        <ToolbarSeparator />
        <ToolbarGroup>
          <ToolbarButton
            isActive={tool === 'rectangle'}
            onClick={() => setTool('rectangle')}
            tooltip="Rectangle"
          >
            ⬜
          </ToolbarButton>
          <ToolbarButton
            isActive={tool === 'circle'}
            onClick={() => setTool('circle')}
            tooltip="Circle"
          >
            ⭕
          </ToolbarButton>
          <ToolbarButton
            isActive={tool === 'line'}
            onClick={() => setTool('line')}
            tooltip="Line"
          >
            ➖
          </ToolbarButton>
        </ToolbarGroup>
        <ToolbarSeparator />
        <ToolbarGroup>
          <ToolbarButton
            isActive={tool === 'text'}
            onClick={() => setTool('text')}
            tooltip="Text"
          >
            T
          </ToolbarButton>
          <ToolbarButton
            isActive={tool === 'image'}
            onClick={() => setTool('image')}
            tooltip="Image"
          >
            🖼
          </ToolbarButton>
        </ToolbarGroup>
      </Toolbar>
    );
  },
};
