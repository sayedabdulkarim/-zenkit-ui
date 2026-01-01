'use client';

import { forwardRef, useState, type HTMLAttributes, type ReactNode } from 'react';
import { cn } from '../../utils/cn';

export interface TreeNode {
  key: string;
  title: ReactNode;
  children?: TreeNode[];
  disabled?: boolean;
  isLeaf?: boolean;
  icon?: ReactNode;
}

export interface TreeProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onSelect'> {
  /** Tree data */
  treeData: TreeNode[];
  /** Expanded keys */
  expandedKeys?: string[];
  /** Default expanded keys */
  defaultExpandedKeys?: string[];
  /** Selected keys */
  selectedKeys?: string[];
  /** Default selected keys */
  defaultSelectedKeys?: string[];
  /** Checked keys (for checkable tree) */
  checkedKeys?: string[];
  /** Checkable tree */
  checkable?: boolean;
  /** Multiple selection */
  multiple?: boolean;
  /** Show lines */
  showLine?: boolean;
  /** Show icon */
  showIcon?: boolean;
  /** On expand */
  onExpand?: (expandedKeys: string[], node: TreeNode, expanded: boolean) => void;
  /** On select */
  onSelect?: (selectedKeys: string[], node: TreeNode, selected: boolean) => void;
  /** On check */
  onCheck?: (checkedKeys: string[], node: TreeNode, checked: boolean) => void;
}

export const Tree = forwardRef<HTMLDivElement, TreeProps>(
  (
    {
      treeData,
      expandedKeys: controlledExpandedKeys,
      defaultExpandedKeys = [],
      selectedKeys: controlledSelectedKeys,
      defaultSelectedKeys = [],
      checkedKeys: controlledCheckedKeys,
      checkable = false,
      multiple = false,
      showLine = false,
      showIcon = false,
      onExpand,
      onSelect,
      onCheck,
      className,
      ...props
    },
    ref
  ) => {
    const [expandedKeys, setExpandedKeys] = useState<Set<string>>(new Set(defaultExpandedKeys));
    const [selectedKeys, setSelectedKeys] = useState<Set<string>>(new Set(defaultSelectedKeys));
    const [checkedKeys, setCheckedKeys] = useState<Set<string>>(new Set(controlledCheckedKeys || []));

    const currentExpanded = controlledExpandedKeys ? new Set(controlledExpandedKeys) : expandedKeys;
    const currentSelected = controlledSelectedKeys ? new Set(controlledSelectedKeys) : selectedKeys;
    const currentChecked = controlledCheckedKeys ? new Set(controlledCheckedKeys) : checkedKeys;

    const handleExpand = (node: TreeNode) => {
      const isExpanded = currentExpanded.has(node.key);
      const newExpanded = new Set(currentExpanded);

      if (isExpanded) {
        newExpanded.delete(node.key);
      } else {
        newExpanded.add(node.key);
      }

      setExpandedKeys(newExpanded);
      onExpand?.(Array.from(newExpanded), node, !isExpanded);
    };

    const handleSelect = (node: TreeNode) => {
      if (node.disabled) return;

      const isSelected = currentSelected.has(node.key);
      let newSelected: Set<string>;

      if (multiple) {
        newSelected = new Set(currentSelected);
        if (isSelected) {
          newSelected.delete(node.key);
        } else {
          newSelected.add(node.key);
        }
      } else {
        newSelected = isSelected ? new Set() : new Set([node.key]);
      }

      setSelectedKeys(newSelected);
      onSelect?.(Array.from(newSelected), node, !isSelected);
    };

    const handleCheck = (node: TreeNode) => {
      if (node.disabled) return;

      const isChecked = currentChecked.has(node.key);
      const newChecked = new Set(currentChecked);

      if (isChecked) {
        newChecked.delete(node.key);
      } else {
        newChecked.add(node.key);
      }

      setCheckedKeys(newChecked);
      onCheck?.(Array.from(newChecked), node, !isChecked);
    };

    const renderNode = (node: TreeNode, level: number = 0): ReactNode => {
      const isExpanded = currentExpanded.has(node.key);
      const isSelected = currentSelected.has(node.key);
      const isChecked = currentChecked.has(node.key);
      const hasChildren = node.children && node.children.length > 0;

      return (
        <div key={node.key} className="tree-node-wrapper">
          <div
            className={cn(
              'tree-node',
              isSelected && 'tree-node-selected',
              node.disabled && 'tree-node-disabled'
            )}
            style={{ paddingLeft: level * 24 }}
          >
            <span
              className={cn('tree-switcher', hasChildren && 'tree-switcher-expand')}
              onClick={() => hasChildren && handleExpand(node)}
            >
              {hasChildren && (
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
              )}
            </span>

            {checkable && (
              <span
                className={cn('tree-checkbox', isChecked && 'tree-checkbox-checked')}
                onClick={() => handleCheck(node)}
              />
            )}

            {showIcon && node.icon && <span className="tree-icon">{node.icon}</span>}

            <span className="tree-title" onClick={() => handleSelect(node)}>
              {node.title}
            </span>
          </div>

          {hasChildren && isExpanded && (
            <div className="tree-children">
              {node.children!.map((child) => renderNode(child, level + 1))}
            </div>
          )}
        </div>
      );
    };

    return (
      <div
        ref={ref}
        className={cn('tree', showLine && 'tree-show-line', className)}
        role="tree"
        {...props}
      >
        {treeData.map((node) => renderNode(node))}
      </div>
    );
  }
);

Tree.displayName = 'Tree';
