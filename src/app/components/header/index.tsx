import { headerWrapper, logo } from "./header.css";
import { SearchBar } from '../searchBar';
import { FilterButton } from '../filterButton';
import Image from 'next/image';
import logoSrc from '../../img/logo.svg';

export default function Header() {
    return (
      <div className={headerWrapper}>
        <div className={logo}>
			<Image src={logoSrc} alt="logo" width={59} height={24} />
		</div>
    	<SearchBar />
      <FilterButton />
      </div>
    );
}