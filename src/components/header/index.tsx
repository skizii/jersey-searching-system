import { headerWrapper, logo } from "./header.css";
import { SearchBar } from '../searchBar';
import { FilterButton } from '../filterButton';
import Image from 'next/image';

export default function Header() {
    return (
      <div className={headerWrapper}>
        <div className={logo}>
			<Image src='/img/logo.svg' alt="logo" width={59} height={24} />
		</div>
    	<SearchBar />
      <FilterButton />
      </div>
    );
}