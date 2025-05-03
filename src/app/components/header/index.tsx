import { headerWrapper, logo, filter } from "./header.css";
import { SearchBar } from '../searchBar';
import Image from 'next/image';
import logoSrc from '../../img/logo.svg';

export default function Header() {
    return (
      <div className={headerWrapper}>
        <div className={logo}>
			<Image src={logoSrc} alt="logo" width={59} height={24} />
		</div>
    	<SearchBar />
        <button className={filter}>Filter</button>
      </div>
    );
}