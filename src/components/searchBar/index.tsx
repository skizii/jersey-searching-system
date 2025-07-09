import Image from 'next/image';
import React, { useRef, useEffect } from 'react';
import * as styles from './searchBar.css';

interface SearchBarProps {
  onSearch: (query: string) => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const inputValueRef = useRef('');
  const debounceTimeout = useRef<NodeJS.Timeout | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    inputValueRef.current = e.target.value;
    if (debounceTimeout.current) {
      clearTimeout(debounceTimeout.current);
    }
    debounceTimeout.current = setTimeout(() => {
      onSearch(inputValueRef.current);
    }, 300);
  };

  useEffect(() => {
    return () => {
      if (debounceTimeout.current) {
        clearTimeout(debounceTimeout.current);
      }
    };
  }, []);

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
