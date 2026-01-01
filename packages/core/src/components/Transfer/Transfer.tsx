'use client';

import { forwardRef, useState, type HTMLAttributes, type ReactNode } from 'react';
import { cn } from '../../utils/cn';

export interface TransferItem {
  key: string;
  title: ReactNode;
  description?: string;
  disabled?: boolean;
}

export interface TransferProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> {
  /** Data source */
  dataSource: TransferItem[];
  /** Target keys */
  targetKeys?: string[];
  /** On change callback */
  onChange?: (targetKeys: string[], direction: 'left' | 'right', moveKeys: string[]) => void;
  /** Titles for both lists */
  titles?: [ReactNode, ReactNode];
  /** Show search */
  showSearch?: boolean;
  /** Disabled state */
  disabled?: boolean;
  /** One way mode */
  oneWay?: boolean;
}

export const Transfer = forwardRef<HTMLDivElement, TransferProps>(
  (
    {
      dataSource,
      targetKeys = [],
      onChange,
      titles = ['Source', 'Target'],
      showSearch = false,
      disabled = false,
      oneWay = false,
      className,
      ...props
    },
    ref
  ) => {
    const [selectedKeys, setSelectedKeys] = useState<Set<string>>(new Set());
    const [leftSearch, setLeftSearch] = useState('');
    const [rightSearch, setRightSearch] = useState('');

    const leftItems = dataSource.filter((item) => !targetKeys.includes(item.key));
    const rightItems = dataSource.filter((item) => targetKeys.includes(item.key));

    const filterItems = (items: TransferItem[], search: string) => {
      if (!search) return items;
      return items.filter((item) =>
        item.title?.toString().toLowerCase().includes(search.toLowerCase())
      );
    };

    const toggleSelect = (key: string) => {
      const newSelected = new Set(selectedKeys);
      if (newSelected.has(key)) {
        newSelected.delete(key);
      } else {
        newSelected.add(key);
      }
      setSelectedKeys(newSelected);
    };

    const moveRight = () => {
      const moveKeys = leftItems
        .filter((item) => selectedKeys.has(item.key) && !item.disabled)
        .map((item) => item.key);

      if (moveKeys.length > 0) {
        onChange?.([...targetKeys, ...moveKeys], 'right', moveKeys);
        setSelectedKeys(new Set());
      }
    };

    const moveLeft = () => {
      const moveKeys = rightItems
        .filter((item) => selectedKeys.has(item.key) && !item.disabled)
        .map((item) => item.key);

      if (moveKeys.length > 0) {
        onChange?.(targetKeys.filter((k) => !moveKeys.includes(k)), 'left', moveKeys);
        setSelectedKeys(new Set());
      }
    };

    const renderList = (
      items: TransferItem[],
      title: ReactNode,
      search: string,
      setSearch: (v: string) => void,
      _side: 'left' | 'right'
    ) => {
      const filtered = filterItems(items, search);
      const selectedCount = items.filter((item) => selectedKeys.has(item.key)).length;

      return (
        <div className="transfer-list">
          <div className="transfer-list-header">
            <span className="transfer-list-title">
              {selectedCount > 0 && `${selectedCount}/`}{items.length} {title}
            </span>
          </div>
          {showSearch && (
            <div className="transfer-list-search">
              <input
                type="text"
                placeholder="Search..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="transfer-search-input"
              />
            </div>
          )}
          <div className="transfer-list-content">
            {filtered.map((item) => (
              <div
                key={item.key}
                className={cn(
                  'transfer-item',
                  selectedKeys.has(item.key) && 'transfer-item-selected',
                  item.disabled && 'transfer-item-disabled'
                )}
                onClick={() => !item.disabled && !disabled && toggleSelect(item.key)}
              >
                <span className={cn('transfer-item-checkbox', selectedKeys.has(item.key) && 'transfer-item-checkbox-checked')} />
                <div className="transfer-item-content">
                  <span className="transfer-item-title">{item.title}</span>
                  {item.description && (
                    <span className="transfer-item-description">{item.description}</span>
                  )}
                </div>
              </div>
            ))}
            {filtered.length === 0 && (
              <div className="transfer-list-empty">No data</div>
            )}
          </div>
        </div>
      );
    };

    const hasLeftSelected = leftItems.some((item) => selectedKeys.has(item.key) && !item.disabled);
    const hasRightSelected = rightItems.some((item) => selectedKeys.has(item.key) && !item.disabled);

    return (
      <div
        ref={ref}
        className={cn('transfer', disabled && 'transfer-disabled', className)}
        {...props}
      >
        {renderList(leftItems, titles[0], leftSearch, setLeftSearch, 'left')}

        <div className="transfer-operations">
          <button
            type="button"
            className="transfer-operation"
            onClick={moveRight}
            disabled={disabled || !hasLeftSelected}
          >
            <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
          {!oneWay && (
            <button
              type="button"
              className="transfer-operation"
              onClick={moveLeft}
              disabled={disabled || !hasRightSelected}
            >
              <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none">
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>
          )}
        </div>

        {renderList(rightItems, titles[1], rightSearch, setRightSearch, 'right')}
      </div>
    );
  }
);

Transfer.displayName = 'Transfer';
