'use client';

import { forwardRef, type HTMLAttributes, type ReactNode } from 'react';
import { cn } from '../../utils/cn';

export interface BlockquoteProps extends HTMLAttributes<HTMLQuoteElement> {
  /** Quote citation/source */
  cite?: string;
  /** Author name */
  author?: ReactNode;
  /** Author title/role */
  authorTitle?: ReactNode;
  /** Author avatar */
  avatar?: ReactNode;
  /** Color variant */
  color?: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'error';
  /** Border position */
  borderPosition?: 'left' | 'top' | 'none';
  /** Icon to show */
  icon?: ReactNode;
  /** Size variant */
  size?: 'sm' | 'md' | 'lg';
  /** With background */
  withBackground?: boolean;
}

export const Blockquote = forwardRef<HTMLQuoteElement, BlockquoteProps>(
  (
    {
      className,
      cite,
      author,
      authorTitle,
      avatar,
      color = 'default',
      borderPosition = 'left',
      icon,
      size = 'md',
      withBackground = false,
      children,
      ...props
    },
    ref
  ) => {
    const defaultIcon = (
      <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor" opacity="0.3">
        <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
      </svg>
    );

    return (
      <figure className={cn('blockquote-figure', className)}>
        <blockquote
          ref={ref}
          cite={cite}
          className={cn(
            'blockquote',
            `blockquote-${color}`,
            `blockquote-${size}`,
            `blockquote-border-${borderPosition}`,
            withBackground && 'blockquote-with-bg'
          )}
          {...props}
        >
          {icon !== null && (
            <span className="blockquote-icon">
              {icon || defaultIcon}
            </span>
          )}
          <div className="blockquote-content">
            {children}
          </div>
        </blockquote>

        {(author || authorTitle) && (
          <figcaption className="blockquote-caption">
            {avatar && <span className="blockquote-avatar">{avatar}</span>}
            <div className="blockquote-author-info">
              {author && <cite className="blockquote-author">{author}</cite>}
              {authorTitle && <span className="blockquote-author-title">{authorTitle}</span>}
            </div>
          </figcaption>
        )}
      </figure>
    );
  }
);

Blockquote.displayName = 'Blockquote';
