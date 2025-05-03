import Image from 'next/image';

import searchIcon from '@/app/icons/search-icon.svg';
import * as styles from './searchBar.css';

export const SearchBar = () => (
  <label className={styles.inputWrapper}>
    <Image src={searchIcon} alt='search icon' width={24} height={24} className={styles.icon}/>
    <input
      type="text"
      placeholder="Search for store"
      className={styles.input}
    />
  </label>
);
