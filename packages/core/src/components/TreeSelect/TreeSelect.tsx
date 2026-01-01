'use client';

import { forwardRef, useState, useRef, useEffect, type HTMLAttributes, type ReactNode } from 'react';
import { cn } from '../../utils/cn';

export interface TreeSelectNode {
  key: string;
  title: ReactNode;
  value: string;
  children?: TreeSelectNode[];
  disabled?: boolean;
  selectable?: boolean;
}

export interface TreeSelectProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> {
  /** Tree data */
  treeData: TreeSelectNode[];
  /** Selected value(s) */
  value?: string | string[];
  /** On change callback */
  onChange?: (value: string | string[]) => void;
  /** Multiple selection */
  multiple?: boolean;
  /** Placeholder */
  placeholder?: string;
  /** Size */
  size?: 'sm' | 'md' | 'lg';
  /** Error state */
  error?: boolean;
  /** Disabled state */
  disabled?: boolean;
  /** Show checkbox */
  showCheckbox?: boolean;
  /** Default expanded keys */
  defaultExpandedKeys?: string[];
}

export const TreeSelect = forwardRef<HTMLDivElement, TreeSelectProps>(
  (
    {
      treeData,
      value,
      onChange,
      multiple = false,
      placeholder = 'Select...',
      size = 'md',
      error = false,
      disabled = false,
      showCheckbox = false,
      defaultExpandedKeys = [],
      className,
      ...props
    },
    ref
  ) => {
    const [open, setOpen] = useState(false);
    const [expandedKeys, setExpandedKeys] = useState<Set<string>>(new Set(defaultExpandedKeys));
    const containerRef = useRef<HTMLDivElement>(null);

    const selectedValues = Array.isArray(value) ? value : value ? [value] : [];

    useEffect(() => {
      const handleClickOutside = (e: MouseEvent) => {
        if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
          setOpen(false);
        }
      };

      if (open) document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [open]);

    const findNode = (nodes: TreeSelectNode[], val: string): TreeSelectNode | undefined => {
      for (const node of nodes) {
        if (node.value === val) return node;
        if (node.children) {
          const found = findNode(node.children, val);
          if (found) return found;
        }
      }
      return undefined;
    };

    const getDisplayValue = () => {
      if (selectedValues.length === 0) return '';
      const titles = selectedValues.map((v) => findNode(treeData, v)?.title).filter(Boolean);
      return titles.join(', ');
    };

    const handleSelect = (node: TreeSelectNode) => {
      if (node.disabled || node.selectable === false) return;

      if (multiple) {
        const newValues = selectedValues.includes(node.value)
          ? selectedValues.filter((v) => v !== node.value)
          : [...selectedValues, node.value];
        onChange?.(newValues);
      } else {
        onChange?.(node.value);
        setOpen(false);
      }
    };

    const toggleExpand = (key: string, e: React.MouseEvent) => {
      e.stopPropagation();
      const newExpanded = new Set(expandedKeys);
      if (newExpanded.has(key)) {
        newExpanded.delete(key);
      } else {
        newExpanded.add(key);
      }
      setExpandedKeys(newExpanded);
    };

    const renderNodes = (nodes: TreeSelectNode[], level = 0): ReactNode => {
      return nodes.map((node) => {
        const isExpanded = expandedKeys.has(node.key);
        const isSelected = selectedValues.includes(node.value);
        const hasChildren = node.children && node.children.length > 0;

        return (
          <div key={node.key}>
            <div
              className={cn(
                'tree-select-node',
                isSelected && 'tree-select-node-selected',
                node.disabled && 'tree-select-node-disabled'
              )}
              style={{ paddingLeft: level * 20 + 8 }}
              onClick={() => handleSelect(node)}
            >
              {hasChildren && (
                <button
                  type="button"
                  className="tree-select-expand"
                  onClick={(e) => toggleExpand(node.key, e)}
                >
                  <svg
                    viewBox="0 0 24 24"
                    width="12"
                    height="12"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                    style={{ transform: isExpanded ? 'rotate(90deg)' : undefined }}
                  >
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </button>
              )}
              {!hasChildren && <span className="tree-select-expand-placeholder" />}
              {showCheckbox && (
                <span className={cn('tree-select-checkbox', isSelected && 'tree-select-checkbox-checked')} />
              )}
              <span className="tree-select-title">{node.title}</span>
            </div>
            {hasChildren && isExpanded && renderNodes(node.children!, level + 1)}
          </div>
        );
      });
    };

    return (
      <div ref={containerRef} className={cn('tree-select', `tree-select-${size}`, className)} {...props}>
        <div
          ref={ref}
          className={cn(
            'tree-select-selector',
            error && 'tree-select-error',
            disabled && 'tree-select-disabled',
            open && 'tree-select-open'
          )}
          onClick={() => !disabled && setOpen(!open)}
        >
          <span className={cn('tree-select-value', !getDisplayValue() && 'tree-select-placeholder')}>
            {getDisplayValue() || placeholder}
          </span>
          <svg className="tree-select-arrow" viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none">
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </div>

        {open && (
          <div className="tree-select-dropdown">
            {renderNodes(treeData)}
          </div>
        )}
      </div>
    );
  }
);

TreeSelect.displayName = 'TreeSelect';
