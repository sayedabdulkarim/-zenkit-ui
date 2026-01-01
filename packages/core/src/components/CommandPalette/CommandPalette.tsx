'use client';

import { forwardRef, useState, useEffect, useRef, type HTMLAttributes, type ReactNode } from 'react';
import { cn } from '../../utils/cn';

export interface CommandItem {
  id: string;
  label: string;
  description?: string;
  icon?: ReactNode;
  shortcut?: string[];
  group?: string;
  onSelect?: () => void;
  disabled?: boolean;
}

export interface CommandPaletteProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onSelect'> {
  /** Is palette open */
  open?: boolean;
  /** On open change */
  onOpenChange?: (open: boolean) => void;
  /** Command items */
  items: CommandItem[];
  /** Placeholder text */
  placeholder?: string;
  /** Empty state text */
  emptyText?: string;
  /** On item select */
  onSelect?: (item: CommandItem) => void;
  /** Filter function */
  filter?: (item: CommandItem, search: string) => boolean;
}

export const CommandPalette = forwardRef<HTMLDivElement, CommandPaletteProps>(
  (
    {
      open = false,
      onOpenChange,
      items,
      placeholder = 'Type a command or search...',
      emptyText = 'No results found.',
      onSelect,
      filter,
      className,
      ...props
    },
    ref
  ) => {
    const [search, setSearch] = useState('');
    const [selectedIndex, setSelectedIndex] = useState(0);
    const inputRef = useRef<HTMLInputElement>(null);

    const defaultFilter = (item: CommandItem, query: string) => {
      const lowerQuery = query.toLowerCase();
      return (
        item.label.toLowerCase().includes(lowerQuery) ||
        item.description?.toLowerCase().includes(lowerQuery) ||
        item.group?.toLowerCase().includes(lowerQuery)
      );
    };

    const filterFn = filter || defaultFilter;
    const filteredItems = search ? items.filter((item) => filterFn(item, search)) : items;

    // Group items
    const groupedItems = filteredItems.reduce((acc, item) => {
      const group = item.group || 'Commands';
      if (!acc[group]) acc[group] = [];
      acc[group].push(item);
      return acc;
    }, {} as Record<string, CommandItem[]>);

    useEffect(() => {
      if (open) {
        inputRef.current?.focus();
        setSearch('');
        setSelectedIndex(0);
      }
    }, [open]);

    useEffect(() => {
      const handleKeyDown = (e: KeyboardEvent) => {
        if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
          e.preventDefault();
          onOpenChange?.(!open);
        }

        if (!open) return;

        if (e.key === 'Escape') {
          onOpenChange?.(false);
        } else if (e.key === 'ArrowDown') {
          e.preventDefault();
          setSelectedIndex((i) => (i + 1) % filteredItems.length);
        } else if (e.key === 'ArrowUp') {
          e.preventDefault();
          setSelectedIndex((i) => (i - 1 + filteredItems.length) % filteredItems.length);
        } else if (e.key === 'Enter') {
          e.preventDefault();
          const item = filteredItems[selectedIndex];
          if (item && !item.disabled) {
            item.onSelect?.();
            onSelect?.(item);
            onOpenChange?.(false);
          }
        }
      };

      document.addEventListener('keydown', handleKeyDown);
      return () => document.removeEventListener('keydown', handleKeyDown);
    }, [open, onOpenChange, filteredItems, selectedIndex, onSelect]);

    if (!open) return null;

    return (
      <>
        <div className="command-palette-overlay" onClick={() => onOpenChange?.(false)} />
        <div ref={ref} className={cn('command-palette', className)} {...props}>
          <div className="command-palette-header">
            <svg className="command-palette-search-icon" viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none">
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
            <input
              ref={inputRef}
              type="text"
              className="command-palette-input"
              placeholder={placeholder}
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                setSelectedIndex(0);
              }}
            />
            <kbd className="command-palette-shortcut">ESC</kbd>
          </div>
          <div className="command-palette-content">
            {filteredItems.length === 0 ? (
              <div className="command-palette-empty">{emptyText}</div>
            ) : (
              Object.entries(groupedItems).map(([group, groupItems]) => (
                <div key={group} className="command-palette-group">
                  <div className="command-palette-group-label">{group}</div>
                  {groupItems.map((item) => {
                    const itemIndex = filteredItems.indexOf(item);
                    return (
                      <div
                        key={item.id}
                        className={cn(
                          'command-palette-item',
                          itemIndex === selectedIndex && 'command-palette-item-selected',
                          item.disabled && 'command-palette-item-disabled'
                        )}
                        onClick={() => {
                          if (!item.disabled) {
                            item.onSelect?.();
                            onSelect?.(item);
                            onOpenChange?.(false);
                          }
                        }}
                        onMouseEnter={() => setSelectedIndex(itemIndex)}
                      >
                        {item.icon && <span className="command-palette-item-icon">{item.icon}</span>}
                        <div className="command-palette-item-content">
                          <span className="command-palette-item-label">{item.label}</span>
                          {item.description && (
                            <span className="command-palette-item-description">{item.description}</span>
                          )}
                        </div>
                        {item.shortcut && (
                          <div className="command-palette-item-shortcut">
                            {item.shortcut.map((key, i) => (
                              <kbd key={i}>{key}</kbd>
                            ))}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              ))
            )}
          </div>
        </div>
      </>
    );
  }
);

CommandPalette.displayName = 'CommandPalette';
