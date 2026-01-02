import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { RichTextEditor } from '@zenkit-ui/core';

const meta: Meta<typeof RichTextEditor> = {
  title: 'Data Entry/RichTextEditor',
  component: RichTextEditor,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    placeholder: {
      control: 'text',
      description: 'Placeholder text',
    },
    disabled: {
      control: 'boolean',
      description: 'Disable the editor',
    },
    readOnly: {
      control: 'boolean',
      description: 'Make the editor read-only',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    const [value, setValue] = useState('');
    return (
      <div style={{ width: 600 }}>
        <RichTextEditor
          value={value}
          onChange={setValue}
          placeholder="Start typing..."
        />
      </div>
    );
  },
};

export const WithInitialContent: Story = {
  render: () => {
    const [value, setValue] = useState(
      '<h2>Welcome to the Rich Text Editor</h2><p>This is a <strong>bold</strong> text and this is <em>italic</em>.</p><p>You can also create <u>underlined</u> text.</p><ul><li>List item 1</li><li>List item 2</li><li>List item 3</li></ul>'
    );
    return (
      <div style={{ width: 600 }}>
        <RichTextEditor
          value={value}
          onChange={setValue}
        />
      </div>
    );
  },
};

export const WithAllControls: Story = {
  render: () => {
    const [value, setValue] = useState('');
    return (
      <div style={{ width: 700 }}>
        <RichTextEditor
          value={value}
          onChange={setValue}
          controls={[
            'bold',
            'italic',
            'underline',
            'strikethrough',
            'heading1',
            'heading2',
            'heading3',
            'bulletList',
            'orderedList',
            'link',
            'blockquote',
            'code',
            'clear',
          ]}
          placeholder="Try all the formatting options..."
        />
      </div>
    );
  },
};

export const MinimalControls: Story = {
  render: () => {
    const [value, setValue] = useState('');
    return (
      <div style={{ width: 500 }}>
        <RichTextEditor
          value={value}
          onChange={setValue}
          controls={['bold', 'italic', 'link']}
          placeholder="Simple editor with minimal controls..."
        />
      </div>
    );
  },
};

export const CustomHeight: Story = {
  render: () => {
    const [value, setValue] = useState('');
    return (
      <div style={{ width: 600 }}>
        <RichTextEditor
          value={value}
          onChange={setValue}
          minHeight={300}
          placeholder="This editor has a minimum height of 300px..."
        />
      </div>
    );
  },
};

export const Disabled: Story = {
  render: () => (
    <div style={{ width: 600 }}>
      <RichTextEditor
        value="<p>This editor is <strong>disabled</strong>. You cannot edit this content.</p>"
        onChange={() => {}}
        disabled
      />
    </div>
  ),
};

export const ReadOnly: Story = {
  render: () => (
    <div style={{ width: 600 }}>
      <RichTextEditor
        value="<h3>Read-Only Content</h3><p>This content can be selected and copied, but not edited.</p><ul><li>Point one</li><li>Point two</li><li>Point three</li></ul>"
        onChange={() => {}}
        readOnly
      />
    </div>
  ),
};

export const WithCharacterCount: Story = {
  render: () => {
    const [value, setValue] = useState('');
    const maxLength = 500;

    // Strip HTML tags to count actual characters
    const getTextLength = (html: string) => {
      const tmp = document.createElement('div');
      tmp.innerHTML = html;
      return tmp.textContent?.length || 0;
    };

    const charCount = getTextLength(value);

    return (
      <div style={{ width: 600 }}>
        <RichTextEditor
          value={value}
          onChange={setValue}
          placeholder="Start typing..."
        />
        <div
          style={{
            marginTop: '0.5rem',
            fontSize: '0.875rem',
            color: charCount > maxLength ? '#dc2626' : '#64748b',
            textAlign: 'right',
          }}
        >
          {charCount} / {maxLength} characters
        </div>
      </div>
    );
  },
};

export const BlogPostEditor: Story = {
  render: () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    return (
      <div style={{ width: 700 }}>
        <div style={{ marginBottom: '1rem' }}>
          <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>
            Post Title
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter post title..."
            style={{
              width: '100%',
              padding: '0.75rem',
              fontSize: '1.25rem',
              border: '1px solid #e2e8f0',
              borderRadius: '8px',
            }}
          />
        </div>
        <div>
          <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>
            Content
          </label>
          <RichTextEditor
            value={content}
            onChange={setContent}
            controls={[
              'bold',
              'italic',
              'underline',
              'heading1',
              'heading2',
              'heading3',
              'bulletList',
              'orderedList',
              'blockquote',
              'link',
              'code',
            ]}
            minHeight={400}
            placeholder="Write your blog post content..."
          />
        </div>
      </div>
    );
  },
};

export const CommentEditor: Story = {
  render: () => {
    const [value, setValue] = useState('');

    return (
      <div style={{ width: 500 }}>
        <div style={{ display: 'flex', gap: '0.75rem', marginBottom: '0.5rem' }}>
          <div
            style={{
              width: 40,
              height: 40,
              borderRadius: '50%',
              background: '#e2e8f0',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            👤
          </div>
          <div style={{ flex: 1 }}>
            <RichTextEditor
              value={value}
              onChange={setValue}
              controls={['bold', 'italic', 'link', 'code']}
              placeholder="Write a comment..."
              minHeight={80}
            />
            <div style={{ marginTop: '0.5rem', display: 'flex', justifyContent: 'flex-end' }}>
              <button
                style={{
                  padding: '0.5rem 1rem',
                  background: '#3b82f6',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '6px',
                  cursor: 'pointer',
                }}
              >
                Post Comment
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  },
};
