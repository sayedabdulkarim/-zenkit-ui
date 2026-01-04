'use client';

import { forwardRef, useState, type HTMLAttributes, type ReactNode } from 'react';
import { cn } from '../../utils/cn';

export interface DataGridColumn<T> {
  key: string;
  title: ReactNode;
  dataIndex?: keyof T;
  width?: number | string;
  minWidth?: number;
  sortable?: boolean;
  filterable?: boolean;
  resizable?: boolean;
  fixed?: 'left' | 'right';
  render?: (value: any, record: T, index: number) => ReactNode;
}

export interface DataGridProps<T> extends Omit<HTMLAttributes<HTMLDivElement>, 'children'> {
  /** Columns configuration */
  columns: DataGridColumn<T>[];
  /** Data source */
  dataSource: T[];
  /** Row key */
  rowKey: keyof T | ((record: T) => string);
  /** Loading state */
  loading?: boolean;
  /** Bordered */
  bordered?: boolean;
  /** Striped rows */
  striped?: boolean;
  /** Hover effect */
  hover?: boolean;
  /** Fixed header */
  stickyHeader?: boolean;
  /** Height */
  height?: number | string;
  /** Empty text */
  emptyText?: ReactNode;
  /** Row selection */
  rowSelection?: {
    selectedRowKeys: string[];
    onChange: (selectedRowKeys: string[]) => void;
  };
  /** On row click */
  onRowClick?: (record: T, index: number) => void;
}

export const DataGrid = forwardRef<HTMLDivElement, DataGridProps<any>>(
  (
    {
      columns,
      dataSource,
      rowKey,
      loading = false,
      bordered = true,
      striped = false,
      hover = true,
      stickyHeader = false,
      height,
      emptyText = 'No data',
      rowSelection,
      onRowClick,
      className,
      ...props
    },
    ref
  ) => {
    const [sortConfig, setSortConfig] = useState<{ key: string; direction: 'asc' | 'desc' } | null>(null);

    const getRowKey = (record: any, index: number): string => {
      if (typeof rowKey === 'function') {
        return rowKey(record);
      }
      return String(record[rowKey] ?? index);
    };

    const sortedData = [...dataSource].sort((a, b) => {
      if (!sortConfig) return 0;
      const col = columns.find((c) => c.key === sortConfig.key);
      if (!col?.dataIndex) return 0;

      const aVal = a[col.dataIndex];
      const bVal = b[col.dataIndex];

      if (aVal < bVal) return sortConfig.direction === 'asc' ? -1 : 1;
      if (aVal > bVal) return sortConfig.direction === 'asc' ? 1 : -1;
      return 0;
    });

    const handleSort = (key: string) => {
      setSortConfig((prev) => {
        if (prev?.key === key) {
          if (prev.direction === 'asc') return { key, direction: 'desc' };
          return null;
        }
        return { key, direction: 'asc' };
      });
    };

    const handleSelectAll = () => {
      if (!rowSelection) return;
      const allKeys = dataSource.map((record, i) => getRowKey(record, i));
      const allSelected = allKeys.every((k) => rowSelection.selectedRowKeys.includes(k));
      rowSelection.onChange(allSelected ? [] : allKeys);
    };

    const handleSelectRow = (key: string) => {
      if (!rowSelection) return;
      const isSelected = rowSelection.selectedRowKeys.includes(key);
      rowSelection.onChange(
        isSelected
          ? rowSelection.selectedRowKeys.filter((k) => k !== key)
          : [...rowSelection.selectedRowKeys, key]
      );
    };

    return (
      <div
        ref={ref}
        className={cn(
          'datagrid',
          bordered && 'datagrid-bordered',
          striped && 'datagrid-striped',
          hover && 'datagrid-hover',
          stickyHeader && 'datagrid-sticky',
          className
        )}
        style={{ height }}
        {...props}
      >
        {loading && (
          <div className="datagrid-loading">
            <span className="datagrid-spinner" />
          </div>
        )}
        <div className="datagrid-container">
          <table className="datagrid-table">
            <thead className="datagrid-header">
              <tr>
                {rowSelection && (
                  <th className="datagrid-header-cell datagrid-selection">
                    <input
                      type="checkbox"
                      checked={dataSource.length > 0 && dataSource.every((r, i) => rowSelection.selectedRowKeys.includes(getRowKey(r, i)))}
                      onChange={handleSelectAll}
                    />
                  </th>
                )}
                {columns.map((col) => (
                  <th
                    key={col.key}
                    className={cn('datagrid-header-cell', col.sortable && 'datagrid-header-cell-sortable')}
                    style={{ width: col.width, minWidth: col.minWidth }}
                    onClick={() => col.sortable && handleSort(col.key)}
                  >
                    <div className="datagrid-header-content">
                      {col.title}
                      {col.sortable && (
                        <span className="datagrid-sort-icon">
                          {sortConfig?.key === col.key ? (sortConfig.direction === 'asc' ? '↑' : '↓') : '↕'}
                        </span>
                      )}
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="datagrid-body">
              {sortedData.length === 0 ? (
                <tr>
                  <td colSpan={columns.length + (rowSelection ? 1 : 0)} className="datagrid-empty">
                    {emptyText}
                  </td>
                </tr>
              ) : (
                sortedData.map((record, index) => {
                  const key = getRowKey(record, index);
                  const isSelected = rowSelection?.selectedRowKeys.includes(key);

                  return (
                    <tr
                      key={key}
                      className={cn('datagrid-row', isSelected && 'datagrid-row-selected')}
                      onClick={() => onRowClick?.(record, index)}
                    >
                      {rowSelection && (
                        <td className="datagrid-cell datagrid-selection">
                          <input
                            type="checkbox"
                            checked={isSelected}
                            onChange={() => handleSelectRow(key)}
                            onClick={(e) => e.stopPropagation()}
                          />
                        </td>
                      )}
                      {columns.map((col) => (
                        <td key={col.key} className="datagrid-cell">
                          {col.render
                            ? col.render(col.dataIndex ? record[col.dataIndex] : undefined, record, index)
                            : col.dataIndex
                            ? record[col.dataIndex]
                            : null}
                        </td>
                      ))}
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
);

DataGrid.displayName = 'DataGrid';
