'use client';

import { HeaderWrapper, Logo, SearchBar, Filter } from "./Header.style";

export default function Header() {
	return (
	  <HeaderWrapper>
		<Logo/>
		<SearchBar/>
		<Filter/>
	  </HeaderWrapper>
	);
  }