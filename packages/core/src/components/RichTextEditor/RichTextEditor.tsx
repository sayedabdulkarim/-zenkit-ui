'use client';

import { forwardRef, useState, useRef, useCallback, useEffect, type HTMLAttributes } from 'react';
import { cn } from '../../utils/cn';

export interface RichTextEditorProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> {
  /** Editor value (HTML string) */
  value?: string;
  /** Default value */
  defaultValue?: string;
  /** On change callback */
  onChange?: (value: string) => void;
  /** On blur callback */
  onBlur?: () => void;
  /** On focus callback */
  onFocus?: () => void;
  /** Placeholder text */
  placeholder?: string;
  /** Disabled state */
  disabled?: boolean;
  /** Read-only state */
  readOnly?: boolean;
  /** Error state */
  error?: boolean;
  /** Min height */
  minHeight?: number | string;
  /** Max height */
  maxHeight?: number | string;
  /** Toolbar options */
  toolbar?: ToolbarOption[];
  /** Hide toolbar */
  hideToolbar?: boolean;
  /** Sticky toolbar */
  stickyToolbar?: boolean;
  /** Auto focus */
  autoFocus?: boolean;
}

type ToolbarOption =
  | 'bold'
  | 'italic'
  | 'underline'
  | 'strikethrough'
  | 'heading1'
  | 'heading2'
  | 'heading3'
  | 'bulletList'
  | 'orderedList'
  | 'blockquote'
  | 'code'
  | 'link'
  | 'image'
  | 'alignLeft'
  | 'alignCenter'
  | 'alignRight'
  | 'undo'
  | 'redo'
  | 'clear';

const DEFAULT_TOOLBAR: ToolbarOption[] = [
  'bold',
  'italic',
  'underline',
  'strikethrough',
  'heading1',
  'heading2',
  'bulletList',
  'orderedList',
  'blockquote',
  'code',
  'link',
  'alignLeft',
  'alignCenter',
  'alignRight',
  'undo',
  'redo',
  'clear',
];

const TOOLBAR_ICONS: Record<ToolbarOption, { icon: string; title: string; command: string; value?: string }> = {
  bold: { icon: 'B', title: 'Bold', command: 'bold' },
  italic: { icon: 'I', title: 'Italic', command: 'italic' },
  underline: { icon: 'U', title: 'Underline', command: 'underline' },
  strikethrough: { icon: 'S', title: 'Strikethrough', command: 'strikeThrough' },
  heading1: { icon: 'H1', title: 'Heading 1', command: 'formatBlock', value: 'h1' },
  heading2: { icon: 'H2', title: 'Heading 2', command: 'formatBlock', value: 'h2' },
  heading3: { icon: 'H3', title: 'Heading 3', command: 'formatBlock', value: 'h3' },
  bulletList: { icon: '•', title: 'Bullet List', command: 'insertUnorderedList' },
  orderedList: { icon: '1.', title: 'Ordered List', command: 'insertOrderedList' },
  blockquote: { icon: '"', title: 'Blockquote', command: 'formatBlock', value: 'blockquote' },
  code: { icon: '<>', title: 'Code', command: 'formatBlock', value: 'pre' },
  link: { icon: '🔗', title: 'Link', command: 'createLink' },
  image: { icon: '🖼', title: 'Image', command: 'insertImage' },
  alignLeft: { icon: '⬅', title: 'Align Left', command: 'justifyLeft' },
  alignCenter: { icon: '⬛', title: 'Align Center', command: 'justifyCenter' },
  alignRight: { icon: '➡', title: 'Align Right', command: 'justifyRight' },
  undo: { icon: '↩', title: 'Undo', command: 'undo' },
  redo: { icon: '↪', title: 'Redo', command: 'redo' },
  clear: { icon: '✕', title: 'Clear Formatting', command: 'removeFormat' },
};

export const RichTextEditor = forwardRef<HTMLDivElement, RichTextEditorProps>(
  (
    {
      className,
      value,
      defaultValue = '',
      onChange,
      onBlur,
      onFocus,
      placeholder = 'Start typing...',
      disabled = false,
      readOnly = false,
      error = false,
      minHeight = 200,
      maxHeight,
      toolbar = DEFAULT_TOOLBAR,
      hideToolbar = false,
      stickyToolbar = false,
      autoFocus = false,
      ...props
    },
    ref
  ) => {
    const editorRef = useRef<HTMLDivElement>(null);
    const [isFocused, setIsFocused] = useState(false);
    const [isEmpty, setIsEmpty] = useState(true);

    // Initialize editor content
    useEffect(() => {
      if (editorRef.current && (value !== undefined || defaultValue)) {
        const content = value !== undefined ? value : defaultValue;
        if (editorRef.current.innerHTML !== content) {
          editorRef.current.innerHTML = content;
          setIsEmpty(!content || content === '<br>' || content === '<p><br></p>');
        }
      }
    }, [value, defaultValue]);

    // Auto focus
    useEffect(() => {
      if (autoFocus && editorRef.current) {
        editorRef.current.focus();
      }
    }, [autoFocus]);

    const execCommand = useCallback((command: string, value?: string) => {
      if (disabled || readOnly) return;

      if (command === 'createLink') {
        const url = prompt('Enter URL:');
        if (url) {
          document.execCommand(command, false, url);
        }
      } else if (command === 'insertImage') {
        const url = prompt('Enter image URL:');
        if (url) {
          document.execCommand(command, false, url);
        }
      } else if (command === 'formatBlock' && value) {
        document.execCommand(command, false, `<${value}>`);
      } else {
        document.execCommand(command, false, value);
      }

      // Trigger onChange after command
      if (editorRef.current) {
        const content = editorRef.current.innerHTML;
        onChange?.(content);
        setIsEmpty(!content || content === '<br>' || content === '<p><br></p>');
      }
    }, [disabled, readOnly, onChange]);

    const handleInput = useCallback(() => {
      if (editorRef.current) {
        const content = editorRef.current.innerHTML;
        onChange?.(content);
        setIsEmpty(!content || content === '<br>' || content === '<p><br></p>');
      }
    }, [onChange]);

    const handleFocus = useCallback(() => {
      setIsFocused(true);
      onFocus?.();
    }, [onFocus]);

    const handleBlur = useCallback(() => {
      setIsFocused(false);
      onBlur?.();
    }, [onBlur]);

    const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
      // Handle keyboard shortcuts
      if (e.ctrlKey || e.metaKey) {
        switch (e.key.toLowerCase()) {
          case 'b':
            e.preventDefault();
            execCommand('bold');
            break;
          case 'i':
            e.preventDefault();
            execCommand('italic');
            break;
          case 'u':
            e.preventDefault();
            execCommand('underline');
            break;
          case 'z':
            if (e.shiftKey) {
              e.preventDefault();
              execCommand('redo');
            } else {
              e.preventDefault();
              execCommand('undo');
            }
            break;
        }
      }
    }, [execCommand]);

    return (
      <div
        ref={ref}
        className={cn(
          'zk-rich-text-editor',
          isFocused && 'zk-rich-text-editor--focused',
          disabled && 'zk-rich-text-editor--disabled',
          readOnly && 'zk-rich-text-editor--readonly',
          error && 'zk-rich-text-editor--error',
          className
        )}
        {...props}
      >
        {!hideToolbar && (
          <div
            className={cn(
              'zk-rich-text-editor__toolbar',
              stickyToolbar && 'zk-rich-text-editor__toolbar--sticky'
            )}
          >
            {toolbar.map((option) => {
              const config = TOOLBAR_ICONS[option];
              return (
                <button
                  key={option}
                  type="button"
                  className="zk-rich-text-editor__button"
                  title={config.title}
                  onClick={() => execCommand(config.command, config.value)}
                  disabled={disabled || readOnly}
                >
                  {config.icon}
                </button>
              );
            })}
          </div>
        )}

        <div className="zk-rich-text-editor__wrapper" style={{ minHeight, maxHeight }}>
          <div
            ref={editorRef}
            className="zk-rich-text-editor__content"
            contentEditable={!disabled && !readOnly}
            onInput={handleInput}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onKeyDown={handleKeyDown}
            suppressContentEditableWarning
            data-placeholder={placeholder}
            aria-placeholder={placeholder}
            aria-disabled={disabled}
            aria-readonly={readOnly}
            role="textbox"
            aria-multiline="true"
          />
          {isEmpty && !isFocused && (
            <div className="zk-rich-text-editor__placeholder">{placeholder}</div>
          )}
        </div>
      </div>
    );
  }
);

RichTextEditor.displayName = 'RichTextEditor';
