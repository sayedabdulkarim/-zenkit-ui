'use client';

import React, { forwardRef, useState, useEffect, useCallback } from 'react';
import { cn } from '../../utils/cn';

export interface TableOfContentsItem {
  id: string;
  label: string;
  level: number;
  children?: TableOfContentsItem[];
}

export interface TableOfContentsProps extends React.HTMLAttributes<HTMLElement> {
  /** Items to display */
  items?: TableOfContentsItem[];
  /** Active item ID */
  activeId?: string;
  /** Called when item is clicked */
  onItemClick?: (id: string) => void;
  /** Whether to highlight based on scroll position */
  highlightOnScroll?: boolean;
  /** Selector for heading elements to auto-generate items */
  headingSelector?: string;
  /** Offset for scroll spy */
  scrollOffset?: number;
  /** Size variant */
  size?: 'sm' | 'md' | 'lg';
  /** Maximum heading level to include */
  maxLevel?: number;
  /** Whether to show line connector */
  withLine?: boolean;
  /** Label for the TOC */
  label?: React.ReactNode;
}

export const TableOfContents = forwardRef<HTMLElement, TableOfContentsProps>(
  (
    {
      className,
      items: propItems,
      activeId: propActiveId,
      onItemClick,
      highlightOnScroll = true,
      headingSelector = 'h2, h3, h4',
      scrollOffset = 100,
      size = 'md',
      maxLevel = 3,
      withLine = true,
      label = 'Table of Contents',
      ...props
    },
    ref
  ) => {
    const [items, setItems] = useState<TableOfContentsItem[]>(propItems || []);
    const [activeId, setActiveId] = useState<string | undefined>(propActiveId);

    // Auto-generate items from headings
    useEffect(() => {
      if (propItems) {
        setItems(propItems);
        return;
      }

      const headings = document.querySelectorAll(headingSelector);
      const generatedItems: TableOfContentsItem[] = [];

      headings.forEach((heading) => {
        const level = parseInt(heading.tagName.charAt(1), 10);
        if (level <= maxLevel) {
          const id = heading.id || heading.textContent?.toLowerCase().replace(/\s+/g, '-') || '';
          if (!heading.id) {
            heading.id = id;
          }
          generatedItems.push({
            id,
            label: heading.textContent || '',
            level,
          });
        }
      });

      setItems(generatedItems);
    }, [propItems, headingSelector, maxLevel]);

    // Scroll spy
    useEffect(() => {
      if (!highlightOnScroll || propActiveId !== undefined) return;

      const handleScroll = () => {
        const headings = items.map((item) => document.getElementById(item.id)).filter(Boolean);

        for (let i = headings.length - 1; i >= 0; i--) {
          const heading = headings[i];
          if (heading) {
            const rect = heading.getBoundingClientRect();
            if (rect.top <= scrollOffset) {
              setActiveId(items[i].id);
              return;
            }
          }
        }

        if (headings.length > 0) {
          setActiveId(items[0].id);
        }
      };

      window.addEventListener('scroll', handleScroll, { passive: true });
      handleScroll(); // Initial check

      return () => window.removeEventListener('scroll', handleScroll);
    }, [items, highlightOnScroll, propActiveId, scrollOffset]);

    useEffect(() => {
      if (propActiveId !== undefined) {
        setActiveId(propActiveId);
      }
    }, [propActiveId]);

    const handleClick = useCallback(
      (id: string) => {
        const element = document.getElementById(id);
        if (element) {
          const top = element.getBoundingClientRect().top + window.scrollY - scrollOffset;
          window.scrollTo({ top, behavior: 'smooth' });
        }
        setActiveId(id);
        onItemClick?.(id);
      },
      [scrollOffset, onItemClick]
    );

    const renderItems = (itemList: TableOfContentsItem[]) => {
      return (
        <ul className="zk-toc__list">
          {itemList.map((item) => (
            <li
              key={item.id}
              className={cn(
                'zk-toc__item',
                `zk-toc__item--level-${item.level}`,
                activeId === item.id && 'zk-toc__item--active'
              )}
            >
              <button
                type="button"
                className="zk-toc__link"
                onClick={() => handleClick(item.id)}
              >
                {item.label}
              </button>
              {item.children && item.children.length > 0 && renderItems(item.children)}
            </li>
          ))}
        </ul>
      );
    };

    if (items.length === 0) {
      return null;
    }

    return (
      <nav
        ref={ref}
        className={cn(
          'zk-toc',
          `zk-toc--${size}`,
          withLine && 'zk-toc--with-line',
          className
        )}
        aria-label="Table of contents"
        {...props}
      >
        {label && <div className="zk-toc__label">{label}</div>}
        {renderItems(items)}
      </nav>
    );
  }
);

TableOfContents.displayName = 'TableOfContents';
