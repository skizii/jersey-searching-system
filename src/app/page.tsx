'use client';

import React, { useState, useMemo, useEffect } from 'react';
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
  const [sortBy, setSortBy] = useState('newest');
  const [isMounted, setIsMounted] = useState(false);
  const [loading, setLoading] = useState(true);
  
  const allStores = getStores();

  useEffect(() => {
    setIsMounted(true);
    // Simulate loading for 1.5s
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

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

  // Filter and sort stores based on search query, filters, and sort
  const filteredAndSortedStores = useMemo(() => {
    // Check if store is new (created within last 2 weeks) - only after mounting to prevent hydration mismatch
    const isNewStore = (store: Store) => {
      if (!isMounted) return false;
      const createDate = new Date(store.createDate);
      const today = new Date();
      const twoWeeksAgo = new Date(today.getTime() - (14 * 24 * 60 * 60 * 1000));
      return createDate >= twoWeeksAgo;
    };

    // Check if store is favourited - only after mounting to prevent hydration mismatch
    const isFavourited = (store: Store) => {
      if (!isMounted) return false;
      try {
        return localStorage.getItem(`favourite-${store.id}`) === 'true';
      } catch {
        return false;
      }
    };

    // Sort stores based on sortBy value
    const sortStores = (stores: Store[]) => {
      const sortedStores = [...stores];
      
      // Don't sort by date until mounted to prevent hydration mismatch
      if (!isMounted) {
        return sortedStores;
      }
      
      switch (sortBy) {
        case 'newest':
          return sortedStores.sort((a, b) => new Date(b.createDate).getTime() - new Date(a.createDate).getTime());
        case 'oldest':
          return sortedStores.sort((a, b) => new Date(a.createDate).getTime() - new Date(b.createDate).getTime());
        case 'atoz':
          return sortedStores.sort((a, b) => a.name.localeCompare(b.name));
        case 'ztoa':
          return sortedStores.sort((a, b) => b.name.localeCompare(a.name));
        case 'rating':
          return sortedStores.sort((a, b) => b.rating - a.rating);
        default:
          return sortedStores;
      }
    };

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

    // Apply favourited filter - only after mounting
    if (filters.favourited && isMounted) {
      filtered = filtered.filter(isFavourited);
    }

    // Apply sorting
    return sortStores(filtered);
  }, [allStores, searchQuery, filters, sortBy, isMounted]);

  const handleSearch = (query: string) => {
    setLoading(true);
    setSearchQuery(query);
    setTimeout(() => setLoading(false), 500);
  };

  const handleFilterChange = (filterType: string, value: boolean | string) => {
    setLoading(true);
    setFilters(prev => ({
      ...prev,
      [filterType]: value,
    }));
    setTimeout(() => setLoading(false), 500);
  };

  const handleSortChange = (newSortBy: string) => {
    setLoading(true);
    setSortBy(newSortBy);
    setTimeout(() => setLoading(false), 500);
  };

  return (
    <Container>
      <Header 
        onSearch={handleSearch} 
        filters={filters}
        onFilterChange={handleFilterChange}
        countries={countries}
      />
      <StoreListHeader 
        count={filteredAndSortedStores.length} 
        sortBy={sortBy}
        onSortChange={handleSortChange}
      />
      <CardsTable stores={filteredAndSortedStores} loading={loading} />
    </Container>
  );
}