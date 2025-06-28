import { headerWrapper, logo, headerContent } from "./header.css";
import { SearchBar } from '../searchBar';
import { FilterButton } from '../filterButton';
import Image from 'next/image';

interface HeaderProps {
  onSearch: (query: string) => void;
  filters: {
    new: boolean;
    country: string;
    favourited: boolean;
  };
  onFilterChange: (filterType: string, value: boolean | string) => void;
  countries: string[];
}

export default function Header({ onSearch, filters, onFilterChange, countries }: HeaderProps) {
    return (
      <div className={headerWrapper}>
        <div className={logo}>
			<Image src='/img/logo.svg' alt="logo" width={59} height={24} />
		</div>
		<div className={headerContent}>
			<SearchBar onSearch={onSearch} />
			<FilterButton 
				filters={filters} 
				onFilterChange={onFilterChange} 
				countries={countries} 
			/>
		</div>
      </div>
    );
}