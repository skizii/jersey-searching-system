'use client';

import React, { useState, useRef, useEffect } from 'react';
import * as styles from './sortSelect.css';

interface SortSelectProps {
  sortBy: string;
  onSortChange: (sortBy: string) => void;
}

const SORT_OPTIONS = [
  { value: 'newest', label: 'Newest' },
  { value: 'atoz', label: 'A to Z' },
  { value: 'ztoa', label: 'Z to A' },
  { value: 'rating', label: 'Rating' },
  { value: 'oldest', label: 'Oldest' },
];

export const SortSelect: React.FC<SortSelectProps> = ({ sortBy, onSortChange }) => {
  const [open, setOpen] = useState(false);
  const [focusedIndex, setFocusedIndex] = useState<number | null>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const listRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    if (open && listRef.current && focusedIndex !== null) {
      const option = listRef.current.children[focusedIndex] as HTMLElement;
      option?.focus();
    }
  }, [open, focusedIndex]);

  const handleButtonClick = () => {
    setOpen((prev) => !prev);
    setFocusedIndex(SORT_OPTIONS.findIndex(opt => opt.value === sortBy));
  };

  const handleOptionClick = (value: string) => {
    onSortChange(value);
    setOpen(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!open) return;
    if (e.key === 'ArrowDown') {
      setFocusedIndex((prev) => prev === null ? 0 : Math.min(prev + 1, SORT_OPTIONS.length - 1));
      e.preventDefault();
    } else if (e.key === 'ArrowUp') {
      setFocusedIndex((prev) => prev === null ? SORT_OPTIONS.length - 1 : Math.max(prev - 1, 0));
      e.preventDefault();
    } else if (e.key === 'Enter' && focusedIndex !== null) {
      handleOptionClick(SORT_OPTIONS[focusedIndex].value);
      e.preventDefault();
    } else if (e.key === 'Escape') {
      setOpen(false);
      e.preventDefault();
    }
  };

  useEffect(() => {
    if (!open) return;
    const handleClickOutside = (event: MouseEvent) => {
      if (
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node) &&
        listRef.current &&
        !listRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [open]);

  return (
    <div className={styles.wrapper}>
      <span className={styles.label}>Sort by:</span>
      <div className={styles.selectWrapper} style={{ position: 'relative' }}>
        <button
          ref={buttonRef}
          className={styles.select}
          aria-haspopup="listbox"
          aria-expanded={open}
          aria-controls="sort-dropdown-list"
          onClick={handleButtonClick}
          onKeyDown={handleKeyDown}
          type="button"
        >
          {SORT_OPTIONS.find(opt => opt.value === sortBy)?.label || 'Sort'}
          <span className={styles.icon} />
        </button>
        {open && (
          <ul
            className={styles.dropdownMenu}
            id="sort-dropdown-list"
            role="listbox"
            ref={listRef}
            tabIndex={-1}
            style={{
              position: 'absolute',
              top: 'calc(100% + 8px)',
              left: 0,
              zIndex: 1000,
              background: '#fff',
              border: '1px solid #e0e0e0',
              borderRadius: '8px',
              boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
              minWidth: '140px',
              padding: '8px 0',
              margin: 0,
              listStyle: 'none',
            }}
            onKeyDown={handleKeyDown}
          >
            {SORT_OPTIONS.map((option, idx) => (
              <li
                key={option.value}
                role="option"
                aria-selected={sortBy === option.value}
                tabIndex={0}
                style={{
                  padding: '10px 20px',
                  cursor: 'pointer',
                  background: sortBy === option.value ? '#f0f0f0' : 'transparent',
                  color: '#333',
                  fontWeight: sortBy === option.value ? 600 : 400,
                  outline: focusedIndex === idx ? '2px solid #007bff' : 'none',
                }}
                onClick={() => handleOptionClick(option.value)}
                onMouseEnter={() => setFocusedIndex(idx)}
                onFocus={() => setFocusedIndex(idx)}
              >
                {option.label}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};