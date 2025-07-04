'use client';

import React, { useState, useEffect } from 'react';
import { favouriteButton } from './favouriteButton.css';
import Image from 'next/image';

interface FavouriteButtonProps {
  storeId: string;
  isVisible: boolean;
  onChange?: (isFav: boolean) => void;
}

export const FavouriteButton: React.FC<FavouriteButtonProps> = ({ storeId, isVisible, onChange }) => {
  const [isFavourite, setIsFavourite] = useState(false); // Always start with false to prevent hydration mismatch
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    // Only check localStorage after mounting
    try {
      const fav = localStorage.getItem(`favourite-${storeId}`);
      setIsFavourite(fav === 'true');
    } catch {
      setIsFavourite(false);
    }
  }, [storeId]);

  const toggleFavourite = (e: React.MouseEvent) => {
    e.stopPropagation();
    const newFav = !isFavourite;
    setIsFavourite(newFav);
    try {
      localStorage.setItem(`favourite-${storeId}`, newFav.toString());
    } catch {
      // Handle localStorage errors silently
    }
    if (onChange) onChange(newFav);
  };

  if (!isVisible) return null;

  // Don't render the button until mounted to prevent hydration mismatch
  if (!isMounted) {
    return (
      <button
        aria-label="Add to favourites"
        className={favouriteButton}
        style={{ visibility: 'hidden' }}
      >
        <Image src="/icons/favourite-outline.svg" alt="Favourite" width={24} height={24} className={favouriteButton} />
      </button>
    );
  }

  return (
    <button
      onClick={toggleFavourite}
      aria-label={isFavourite ? 'Remove from favourites' : 'Add to favourites'}
      className={favouriteButton}
    >
      {isFavourite ? (
        <Image src="/icons/favourite-fill.svg" alt="Favourite" width={24} height={24} className={favouriteButton} />
      ) : (
        <Image src="/icons/favourite-outline.svg" alt="Favourite" width={24} height={24} className={favouriteButton} />
      )}
    </button>
  );
}; 