'use client';

import React, { useState, useRef, useEffect } from 'react';
import { filterButton } from "./filterButton.css";
import Image from 'next/image';
import { FilterDropdown } from '../filterDropdown';

interface FilterButtonProps {
	filters: {
		new: boolean;
		country: string;
		favourited: boolean;
	};
	onFilterChange: (filterType: string, value: boolean | string) => void;
	countries: string[];
}

export const FilterButton: React.FC<FilterButtonProps> = ({ 
	filters, 
	onFilterChange, 
	countries 
}) => {
	const [isOpen, setIsOpen] = useState(false);
	const dropdownRef = useRef<HTMLDivElement>(null);

	// Close dropdown when clicking outside
	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
				setIsOpen(false);
			}
		};

		document.addEventListener('mousedown', handleClickOutside);
		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, []);

	const toggleDropdown = () => {
		setIsOpen(!isOpen);
	};

	return (
		<div ref={dropdownRef} style={{ position: 'relative' }}>
			<button className={filterButton} onClick={toggleDropdown}>
				<Image src="/icons/filter-icon.svg" alt="filter" width={32} height={32} />
			</button>
			<FilterDropdown
				isOpen={isOpen}
				filters={filters}
				onFilterChange={onFilterChange}
				countries={countries}
			/>
		</div>
	);
};