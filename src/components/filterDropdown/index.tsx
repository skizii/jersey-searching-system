'use client';

import React from 'react';
import * as styles from './filterDropdown.css';

interface FilterDropdownProps {
  isOpen: boolean;
  filters: {
    new: boolean;
    country: string;
    favourited: boolean;
  };
  onFilterChange: (filterType: string, value: boolean | string) => void;
  countries: string[];
}

export const FilterDropdown: React.FC<FilterDropdownProps> = ({
  isOpen,
  filters,
  onFilterChange,
  countries
}) => {
  if (!isOpen) return null;

  return (
    <div className={styles.filterDropdown}>
      <div className={styles.filterSection}>
        <h3 className={styles.filterTitle}>Filters</h3>
        
        {/* New stores filter */}
        <div className={styles.filterOption}>
          <label className={styles.filterLabel}>
            <input
              type="checkbox"
              checked={filters.new}
              onChange={(e) => onFilterChange('new', e.target.checked)}
              className={styles.visuallyHiddenCheckbox}
            />
            <span
              className={styles.customCheckbox}
              data-checked={filters.new ? 'true' : 'false'}
              aria-hidden="true"
            />
            <span className={styles.filterText}>New stores only</span>
          </label>
        </div>

        {/* Country filter */}
        <div className={styles.filterOption}>
          <label className={styles.filterLabel}>
            <span className={styles.filterText}>Country:</span>
            <select
              value={filters.country}
              onChange={(e) => onFilterChange('country', e.target.value)}
              className={styles.filterSelect}
            >
              <option value="">All countries</option>
              {countries.map((country) => (
                <option key={country} value={country}>
                  {country}
                </option>
              ))}
            </select>
          </label>
        </div>

        {/* Favourited stores filter */}
        <div className={styles.filterOption}>
          <label className={styles.filterLabel}>
            <input
              type="checkbox"
              checked={filters.favourited}
              onChange={(e) => onFilterChange('favourited', e.target.checked)}
              className={styles.visuallyHiddenCheckbox}
            />
            <span
              className={styles.customCheckbox}
              data-checked={filters.favourited ? 'true' : 'false'}
              aria-hidden="true"
            />
            <span className={styles.filterText}>Favourited only</span>
          </label>
        </div>
      </div>
    </div>
  );
}; 