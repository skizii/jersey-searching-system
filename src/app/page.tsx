'use client';

import React, { useState, useMemo } from 'react';
import Container from '../components/container/';
import Header from '../components/header';
import { StoreListHeader } from '../components/storeListHeader';
import { CardsTable } from '@/components/cardsTable';
import { getStores } from '@/services/storeService';
import { Store } from '@/types/store';

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState({
    new: false,
    country: '',
    favourited: false,
  });
  
  const allStores = getStores();

  // Get unique countries from stores
  const countries = useMemo(() => {
    const countrySet = new Set<string>();
    allStores.forEach((store: Store) => {
      const addresses = Array.isArray(store.additionalInfo.address) 
        ? store.additionalInfo.address 
        : [store.additionalInfo.address];
      
      addresses.forEach(address => {
        countrySet.add(address.country);
      });
    });
    return Array.from(countrySet).sort();
  }, [allStores]);

  // Check if store is new (created within last 2 weeks)
  const isNewStore = (store: Store) => {
    const createDate = new Date(store.createDate);
    const today = new Date();
    const twoWeeksAgo = new Date(today.getTime() - (14 * 24 * 60 * 60 * 1000));
    return createDate >= twoWeeksAgo;
  };

  // Check if store is favourited
  const isFavourited = (store: Store) => {
    if (typeof window === 'undefined') return false;
    return localStorage.getItem(`favourite-${store.id}`) === 'true';
  };

  // Filter stores based on search query and filters
  const filteredStores = useMemo(() => {
    let filtered = allStores;

    // Apply search filter
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase().trim();
      filtered = filtered.filter((store: Store) => {
        const nameMatch = store.name.toLowerCase().includes(query);
        const addresses = Array.isArray(store.additionalInfo.address) 
          ? store.additionalInfo.address 
          : [store.additionalInfo.address];
        
        const addressMatch = addresses.some(address => 
          address.address.toLowerCase().includes(query) ||
          address.city.toLowerCase().includes(query) ||
          address.country.toLowerCase().includes(query) ||
          address.street.toLowerCase().includes(query)
        );

        return nameMatch || addressMatch;
      });
    }

    // Apply new stores filter
    if (filters.new) {
      filtered = filtered.filter(isNewStore);
    }

    // Apply country filter
    if (filters.country) {
      filtered = filtered.filter((store: Store) => {
        const addresses = Array.isArray(store.additionalInfo.address) 
          ? store.additionalInfo.address 
          : [store.additionalInfo.address];
        
        return addresses.some(address => address.country === filters.country);
      });
    }

    // Apply favourited filter
    if (filters.favourited) {
      filtered = filtered.filter(isFavourited);
    }

    return filtered;
  }, [allStores, searchQuery, filters]);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const handleFilterChange = (filterType: string, value: boolean | string) => {
    setFilters(prev => ({
      ...prev,
      [filterType]: value,
    }));
  };

  return (
    <Container>
      <Header 
        onSearch={handleSearch} 
        filters={filters}
        onFilterChange={handleFilterChange}
        countries={countries}
      />
      <StoreListHeader count={filteredStores.length} />
      <CardsTable stores={filteredStores} />
    </Container>
  );
}