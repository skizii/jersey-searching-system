'use client';

import React, { useState, useEffect } from 'react';
import { favouriteButton } from './favouriteButton.css';
import Image from 'next/image';

interface FavouriteButtonProps {
  storeId: string;
  isVisible: boolean;
  initialFavourite?: boolean;
  onChange?: (isFav: boolean) => void;
}

export const FavouriteButton: React.FC<FavouriteButtonProps> = ({ storeId, isVisible, initialFavourite = false, onChange }) => {
  const [isFavourite, setIsFavourite] = useState(initialFavourite);

  useEffect(() => {
    const fav = localStorage.getItem(`favourite-${storeId}`);
    setIsFavourite(fav === 'true');
  }, [storeId]);

  const toggleFavourite = (e: React.MouseEvent) => {
    e.stopPropagation();
    const newFav = !isFavourite;
    setIsFavourite(newFav);
    localStorage.setItem(`favourite-${storeId}`, newFav.toString());
    if (onChange) onChange(newFav);
  };

  if (!isVisible) return null;

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