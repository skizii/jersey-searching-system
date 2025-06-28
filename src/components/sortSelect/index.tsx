'use client';

import React from 'react';
import * as styles from './sortSelect.css';

interface SortSelectProps {
  sortBy: string;
  onSortChange: (sortBy: string) => void;
}

export const SortSelect: React.FC<SortSelectProps> = ({ sortBy, onSortChange }) => {
  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onSortChange(e.target.value);
  };

  return (
    <div className={styles.wrapper}>
      <span className={styles.label}>Sort by:</span>
      <div className={styles.selectWrapper}>
        <select 
          className={styles.select}
          value={sortBy}
          onChange={handleSortChange}
        >
          <option value="newest">Newest</option>
          <option value="atoz">A to Z</option>
          <option value="ztoa">Z to A</option>
          <option value="rating">Rating</option>
          <option value="oldest">Oldest</option>
        </select>
        <div className={styles.icon} />
      </div>
    </div>
  );
};