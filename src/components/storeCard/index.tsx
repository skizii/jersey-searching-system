'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Store } from '../../types/store';
import * as styles from './storeCard.css';
import { SocialLinks } from '../socialLinks';
import { FavouriteButton } from '../favouriteButton';
import { StoreRating } from '../storeRating';

type Props = {
  store: Store;
};

export const StoreCard: React.FC<Props> = ({ store }) => {
  const [isHovered, setIsHovered] = useState(false);
  const phone = store.additionalInfo.contacts.tel.value;
  const email = store.additionalInfo.contacts.email.value;
  const website = store.website;

  // Handle both single address and array of addresses
  const addresses = Array.isArray(store.additionalInfo.address) 
    ? store.additionalInfo.address 
    : [store.additionalInfo.address];

  const showFavouriteButton = isHovered || (typeof window !== 'undefined' && localStorage.getItem(`favourite-${store.id}`) === 'true');

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
          <div className={styles.storeBadge}></div>
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
          <a className={styles.storeContact} href={`tel:${phone}`}>{phone}</a>
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
            <div className={styles.storeBadge}></div>
            <FavouriteButton storeId={store.id} isVisible={showFavouriteButton} />
          </div>
          <Image
            src={store.defaultImage}
            alt={store.name}
            width={248}
            height={248}
            style={{
              objectFit: 'contain',
              objectPosition: 'center',
              minHeight: '248px',
            }}
          />
          <a className={styles.storeLink} href={store.website}>
            {store.website}
          </a>
          <h2 className={styles.storeName}>{store.name}</h2>
          <p>
            {addresses[0].city},{' '}
            {addresses[0].country}
          </p>
          <SocialLinks socialMedia={store.additionalInfo.socialMedia} />
        </div>
      )}
    </div>
  );
};