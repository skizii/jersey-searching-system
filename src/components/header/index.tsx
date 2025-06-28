import { headerWrapper, logo } from "./header.css";
import { SearchBar } from '../searchBar';
import { FilterButton } from '../filterButton';
import Image from 'next/image';

interface HeaderProps {
  onSearch: (query: string) => void;
}

export default function Header({ onSearch }: HeaderProps) {
    return (
      <div className={headerWrapper}>
        <div className={logo}>
			<Image src='/img/logo.svg' alt="logo" width={59} height={24} />
		</div>
    	<SearchBar onSearch={onSearch} />
      <FilterButton />
      </div>
    );
}