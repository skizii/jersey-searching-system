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
  const allStores = getStores();

  // Filter stores based on search query
  const filteredStores = useMemo(() => {
    if (!searchQuery.trim()) {
      return allStores;
    }

    const query = searchQuery.toLowerCase().trim();
    
    return allStores.filter((store: Store) => {
      // Search by store name
      const nameMatch = store.name.toLowerCase().includes(query);
      
      // Search by address (handle both single address and array of addresses)
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
  }, [allStores, searchQuery]);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  return (
    <Container>
      <Header onSearch={handleSearch} />
      <StoreListHeader count={filteredStores.length} />
      <CardsTable stores={filteredStores} />
    </Container>
  );
}