'use client';

import { forwardRef, useState, useEffect, type HTMLAttributes, type ReactNode } from 'react';
import { cn } from '../../utils/cn';

export interface AnchorItem {
  key: string;
  href: string;
  title: ReactNode;
  children?: AnchorItem[];
}

export interface AnchorProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> {
  /** Anchor items */
  items: AnchorItem[];
  /** Offset from top (px) */
  offsetTop?: number;
  /** Target offset (px) */
  targetOffset?: number;
  /** Show ink indicator */
  showInk?: boolean;
  /** Affix mode */
  affix?: boolean;
  /** Current active link */
  activeLink?: string;
  /** On change callback */
  onChange?: (activeLink: string) => void;
  /** On click callback */
  onLinkClick?: (e: React.MouseEvent, link: { title: ReactNode; href: string }) => void;
}

export const Anchor = forwardRef<HTMLDivElement, AnchorProps>(
  (
    {
      items,
      offsetTop = 0,
      targetOffset = 0,
      showInk = true,
      affix = true,
      activeLink: controlledActiveLink,
      onChange,
      onLinkClick,
      className,
      ...props
    },
    ref
  ) => {
    const [activeLink, setActiveLink] = useState<string>(controlledActiveLink || '');

    useEffect(() => {
      if (controlledActiveLink !== undefined) {
        setActiveLink(controlledActiveLink);
      }
    }, [controlledActiveLink]);

    useEffect(() => {
      const handleScroll = () => {
        const scrollTop = window.scrollY + offsetTop + targetOffset;
        let currentActive = '';

        const getAllHrefs = (anchorItems: AnchorItem[]): string[] => {
          return anchorItems.flatMap((item) => [
            item.href,
            ...(item.children ? getAllHrefs(item.children) : []),
          ]);
        };

        const hrefs = getAllHrefs(items);

        for (const href of hrefs) {
          const id = href.replace('#', '');
          const element = document.getElementById(id);
          if (element) {
            const { top } = element.getBoundingClientRect();
            const elementTop = top + window.scrollY;
            if (scrollTop >= elementTop) {
              currentActive = href;
            }
          }
        }

        if (currentActive !== activeLink && controlledActiveLink === undefined) {
          setActiveLink(currentActive);
          onChange?.(currentActive);
        }
      };

      window.addEventListener('scroll', handleScroll, { passive: true });
      handleScroll();

      return () => window.removeEventListener('scroll', handleScroll);
    }, [items, offsetTop, targetOffset, activeLink, controlledActiveLink, onChange]);

    const handleClick = (e: React.MouseEvent, item: AnchorItem) => {
      e.preventDefault();
      onLinkClick?.(e, { title: item.title, href: item.href });

      const id = item.href.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        const top = element.getBoundingClientRect().top + window.scrollY - offsetTop;
        window.scrollTo({ top, behavior: 'smooth' });
      }

      if (controlledActiveLink === undefined) {
        setActiveLink(item.href);
        onChange?.(item.href);
      }
    };

    const renderItems = (anchorItems: AnchorItem[], level = 0) => {
      return anchorItems.map((item) => (
        <div key={item.key} className="anchor-item" style={{ paddingLeft: level * 16 }}>
          <a
            href={item.href}
            className={cn('anchor-link', activeLink === item.href && 'anchor-link-active')}
            onClick={(e) => handleClick(e, item)}
          >
            {item.title}
          </a>
          {item.children && renderItems(item.children, level + 1)}
        </div>
      ));
    };

    return (
      <div
        ref={ref}
        className={cn('anchor', affix && 'anchor-affix', className)}
        style={{ top: affix ? offsetTop : undefined }}
        {...props}
      >
        {showInk && <div className="anchor-ink" />}
        <div className="anchor-content">{renderItems(items)}</div>
      </div>
    );
  }
);

Anchor.displayName = 'Anchor';
