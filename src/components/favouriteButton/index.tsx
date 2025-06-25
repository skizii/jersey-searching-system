import React, { useState, useEffect } from 'react';
import { favouriteButton } from './favouriteButton.css'

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
        <svg width="20" height="18" viewBox="0 0 20.1882 17.957" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9.31 16.5L2.81 10.39C0.65 8.36 0.38 5.01 2.2 2.67C4.17 0.13 8.12 0.55 9.51 3.45C9.7 3.86 10.28 3.86 10.48 3.45C11.86 0.55 15.81 0.13 17.78 2.67L18.09 3.06C19.74 5.18 19.5 8.21 17.54 10.05L10.67 16.5L10 16.95L9.99 16.95L9.31 16.5Z" fill="#C30303" fillOpacity="1" fillRule="evenodd"/>
          <path d="M2.81 10.39C0.65 8.36 0.38 5.01 2.2 2.67C4.17 0.13 8.12 0.55 9.51 3.45C9.7 3.86 10.28 3.86 10.48 3.45C11.86 0.55 15.81 0.13 17.78 2.67L18.09 3.06C19.74 5.18 19.5 8.21 17.54 10.05L10.67 16.5L10 16.95L9.99 16.95L9.31 16.5L2.81 10.39Z" stroke="#C30303" strokeOpacity="1" strokeWidth="2"/>
        </svg>
      ) : (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect rx="3.5" width="23" height="23" transform="translate(0.5 0.5)" fill="#D20000" fillOpacity="1"/>
          <g clipPath="url(#clip470_2819)">
            <path d="M11.33 17.39L6.78 13.28C5.22 11.87 5.03 9.48 6.35 7.84C7.8 6.04 10.62 6.35 11.64 8.41C11.79 8.71 12.2 8.71 12.35 8.41C13.37 6.35 16.19 6.04 17.64 7.84L17.79 8.02C19.03 9.56 18.85 11.8 17.38 13.12L12.66 17.39L12 17.82L11.99 17.82L11.33 17.39Z" fill="#FFFFFF" fillOpacity="1" fillRule="evenodd"/>
            <path d="M6.78 13.28C5.22 11.87 5.03 9.48 6.35 7.84C7.8 6.04 10.62 6.35 11.64 8.41C11.79 8.71 12.2 8.71 12.35 8.41C13.37 6.35 16.19 6.04 17.64 7.84L17.79 8.02C19.03 9.56 18.85 11.8 17.38 13.12L12.66 17.39L12 17.82L11.99 17.82L11.33 17.39L6.78 13.28Z" stroke="#FFFFFF" strokeOpacity="1" strokeWidth="2"/>
          </g>
          <defs>
            <clipPath id="clip470_2819">
              <rect rx="3.5" width="23" height="23" transform="translate(0.5 0.5)" fill="white" fillOpacity="0"/>
            </clipPath>
          </defs>
        </svg>
      )}
    </button>
  );
}; 