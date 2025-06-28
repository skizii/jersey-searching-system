'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Store } from '../../types/store';
import * as styles from './storeCard.css';
import { SocialLinks } from '../socialLinks';
import { FavouriteButton } from '../favouriteButton';
import { StoreRating } from '../storeRating';
import { PhoneNumber } from '../phoneNumber';

type Props = {
  store: Store;
};

export const StoreCard: React.FC<Props> = ({ store }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const phone = store.additionalInfo.contacts.tel.value;
  const email = store.additionalInfo.contacts.email.value;
  const website = store.website;

  // Handle both single address and array of addresses
  const addresses = Array.isArray(store.additionalInfo.address) 
    ? store.additionalInfo.address 
    : [store.additionalInfo.address];

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const showFavouriteButton = isHovered || (isMounted && localStorage.getItem(`favourite-${store.id}`) === 'true');

  // Check if store was created within the last 2 weeks
  const isNewStore = () => {
    const createDate = new Date(store.createDate);
    const today = new Date();
    const twoWeeksAgo = new Date(today.getTime() - (14 * 24 * 60 * 60 * 1000)); // 14 days ago
    return createDate >= twoWeeksAgo;
  };

  if (!store) {
    return <div>Store data not loaded</div>;
  }

  return (
    <div
      className={styles.storeCardWrapper}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ position: 'relative' }}
    >
      {isHovered ? (
      <div className={styles.hoverCard}>
      <div className={styles.storeHeaderWrapper}>
        <div className={styles.labelsWrapper}>
          {isNewStore() && <div className={styles.storeBadge}></div>}
          <FavouriteButton storeId={store.id} isVisible={showFavouriteButton} />
        </div>
        <StoreRating rating={+store.rating} />
      </div>

      <div className={styles.storeInfo}>
        <h2 className={styles.storeName}>{store.name}</h2>
        <div className={styles.storeAssortment}>
          <Image src="/icons/assortment.svg" alt="Assortment" width={20} height={20} />
          <p>{store.assortment}</p>
        </div>
      </div>

      <div className={styles.storeContacts}>
        {addresses.map((address, index) => (
          <div key={index} className={styles.contactBlock}>
            <Image src="/icons/location.svg" alt="Location" width={20} height={20} className={styles.contactIcon} />
            <a className={styles.storeContact} target="_blank" href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address.address)}`}>{address.address}</a>
          </div>
        ))}
        <div className={styles.contactBlock}>
          <Image src="/icons/phone.svg" alt="Phone" width={20} height={20} className={styles.contactIcon} />
          <PhoneNumber phone={phone} className={styles.storeContact} />
        </div>
        <div className={styles.contactBlock}>
          <Image src="/icons/mail.svg" alt="Email" width={20} height={20} className={styles.contactIcon} />
          <a className={styles.storeContact} href={`mailto:${email}`}>{email}</a>
        </div>
        <div className={styles.contactBlock}>
          <Image src="/icons/link.svg" alt="Website" width={20} height={20} className={styles.contactIcon} />
          <a className={styles.storeContact} target="_blank" href={website}>{website}</a>
        </div>
      </div>
      <SocialLinks socialMedia={store.additionalInfo.socialMedia} />
    </div>
      ) : (
        <div className={styles.storeCard}>
          <div className={styles.labelsWrapper}>
            {isNewStore() && <div className={styles.storeBadge}></div>}
            <FavouriteButton storeId={store.id} isVisible={showFavouriteButton} />
          </div>
          <div className={styles.imageContainer}>
            <Image
              src={store.defaultImage}
              alt={store.name}
              fill
              style={{
                objectFit: 'contain',
                objectPosition: 'center',
              }}
              sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, 248px"
            />
          </div>
          <a className={styles.storeLink} href={store.website}>
            {store.website}
          </a>
          <div className={styles.storeInfoWrapper}>
            <h2 className={styles.storeName}>{store.name}</h2>
            <p>
              {addresses[0].city},{' '}
              {addresses[0].country}
            </p>
          </div>
          <SocialLinks socialMedia={store.additionalInfo.socialMedia} />
        </div>
      )}
    </div>
  );
};