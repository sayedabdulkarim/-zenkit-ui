import { forwardRef, type HTMLAttributes, type ReactNode } from 'react';
import { cn } from '../../utils/cn';

type DescriptionsLayout = 'horizontal' | 'vertical';
type DescriptionsSize = 'sm' | 'md' | 'lg';

export interface DescriptionsProps extends Omit<HTMLAttributes<HTMLDivElement>, 'title'> {
  /** Title */
  title?: ReactNode;
  /** Extra content (top right) */
  extra?: ReactNode;
  /** Layout direction */
  layout?: DescriptionsLayout;
  /** Number of columns */
  column?: number;
  /** Bordered style */
  bordered?: boolean;
  /** Size */
  size?: DescriptionsSize;
  /** Colon after label */
  colon?: boolean;
}

export interface DescriptionsItemProps extends HTMLAttributes<HTMLDivElement> {
  /** Item label */
  label: ReactNode;
  /** Span columns */
  span?: number;
}

const sizeClasses: Record<DescriptionsSize, string> = {
  sm: 'descriptions-sm',
  md: '',
  lg: 'descriptions-lg',
};

export const Descriptions = forwardRef<HTMLDivElement, DescriptionsProps>(
  (
    {
      title,
      extra,
      layout = 'horizontal',
      column = 3,
      bordered = false,
      size = 'md',
      colon = true,
      className,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={cn(
          'descriptions',
          sizeClasses[size],
          layout === 'vertical' && 'descriptions-vertical',
          bordered && 'descriptions-bordered',
          className
        )}
        style={{ '--descriptions-column': column } as React.CSSProperties}
        {...props}
      >
        {(title || extra) && (
          <div className="descriptions-header">
            {title && <div className="descriptions-title">{title}</div>}
            {extra && <div className="descriptions-extra">{extra}</div>}
          </div>
        )}
        <div className="descriptions-view">
          <table className="descriptions-table">
            <tbody>
              {renderRows(children, column, colon, layout)}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
);

Descriptions.displayName = 'Descriptions';

function renderRows(
  children: React.ReactNode,
  column: number,
  colon: boolean,
  layout: DescriptionsLayout
): React.ReactNode[] {
  const childArray = Array.isArray(children) ? children : [children];
  const rows: React.ReactNode[] = [];
  let currentRow: React.ReactNode[] = [];
  let currentSpan = 0;

  childArray.forEach((child: any, index) => {
    if (!child) return;

    const span = child.props?.span || 1;
    currentSpan += span;
    currentRow.push(child);

    if (currentSpan >= column || index === childArray.length - 1) {
      rows.push(
        <tr key={rows.length} className="descriptions-row">
          {currentRow.map((item: any, i) => {
            const itemSpan = item.props?.span || 1;
            if (layout === 'vertical') {
              return (
                <td key={i} colSpan={itemSpan} className="descriptions-item-container">
                  <div className="descriptions-item-label">
                    {item.props.label}{colon && ':'}
                  </div>
                  <div className="descriptions-item-content">
                    {item.props.children}
                  </div>
                </td>
              );
            }
            return (
              <>
                <th key={`label-${i}`} className="descriptions-item-label">
                  {item.props.label}{colon && ':'}
                </th>
                <td key={`content-${i}`} colSpan={itemSpan} className="descriptions-item-content">
                  {item.props.children}
                </td>
              </>
            );
          })}
        </tr>
      );
      currentRow = [];
      currentSpan = 0;
    }
  });

  return rows;
}

export const DescriptionsItem = forwardRef<HTMLDivElement, DescriptionsItemProps>(
  (_props, _ref) => {
    // This component is used for configuration, actual rendering is in parent
    return null;
  }
);

DescriptionsItem.displayName = 'DescriptionsItem';
