import Image from 'next/image';
import React from 'react';
import * as styles from './searchBar.css';

interface SearchBarProps {
  onSearch: (query: string) => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onSearch(e.target.value);
  };

  return (
    <label className={styles.inputWrapper}>
      <Image src='/icons/search-icon.svg' alt='search icon' width={24} height={24} className={styles.icon}/>
      <input
        type="text"
        placeholder="Search for store"
        className={styles.input}
        onChange={handleInputChange}
      />
    </label>
  );
};
