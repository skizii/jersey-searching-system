import { filterButton } from "./filterButton.css";
import Image from 'next/image';

export const FilterButton = () => {
	return (
		<button className={filterButton}>
		  <Image src="/icons/filter-icon.svg" alt="filter" width={32} height={32} />
		</button>
	);
}