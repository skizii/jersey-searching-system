'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Store } from '../../types/store';
import * as styles from './storeCard.css';
import { SocialLinks } from '../socialLinks';
import { FavouriteButton } from '../favouriteButton';
import { StoreRating } from '../storeRating';
import { PhoneNumber } from '../phoneNumber';

import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

type Props = {
  store?: Store;
  loading?: boolean;
};

export const StoreCard: React.FC<Props> = ({ store, loading = false }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const phone = store?.additionalInfo.contacts.tel.value;
  const email = store?.additionalInfo.contacts.email.value;
  const website = store?.website;

  // Handle both single address and array of addresses
  const addresses = Array.isArray(store?.additionalInfo.address) 
    ? store.additionalInfo.address 
    : [store?.additionalInfo.address];

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const showFavouriteButton = isHovered || (isMounted && (() => {
    try {
      return localStorage.getItem(`favourite-${store?.id}`) === 'true';
    } catch {
      return false;
    }
  })());

  // Check if store was created within the last 2 weeks
  const isNewStore = () => {
    if (!store?.createDate) return false;
    const createDate = new Date(store.createDate);
    const today = new Date();
    const twoWeeksAgo = new Date(today.getTime() - (14 * 24 * 60 * 60 * 1000)); // 14 days ago
    return createDate >= twoWeeksAgo;
  };

  // Skeleton placeholder
  if (loading) {
    return (
      <div className={styles.storeCardWrapper} style={{display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative', minHeight: 320 }}>
        <Skeleton height={248} width={248} style={{ borderRadius: 16, marginBottom: 12 }} />
        <Skeleton width={87} height={22} style={{ borderRadius: 16, marginBottom: 8 }} />
        <Skeleton width={248} height={30} style={{ borderRadius: 16, marginBottom: 8 }} />
        <Skeleton width={176} height={22} style={{ borderRadius: 16, marginBottom: 8 }} />
        <Skeleton width={234} height={27} style={{ borderRadius: 16 }} />
      </div>
    );
  }

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
          <FavouriteButton storeId={store?.id ?? ''} isVisible={showFavouriteButton} />
        </div>
        <StoreRating rating={+(store?.rating ?? 0)} />
      </div>

      <div className={styles.storeInfo}>
        <h2 className={styles.storeName}>{store?.name ?? <Skeleton width={100} />}</h2>
        <div className={styles.storeAssortment}>
          <Image src="/icons/assortment.svg" alt="Assortment" width={20} height={20} />
          <p>{store?.assortment ?? <Skeleton width={60} />}</p>
        </div>
      </div>

      <div className={styles.storeContacts}>
        {addresses.map((address, index) => (
          address ? (
            <div key={index} className={styles.contactBlock}>
              <Image src="/icons/location.svg" alt="Location" width={20} height={20} className={styles.contactIcon} />
              <a className={styles.storeContact} target="_blank" href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address.address ?? '')}`}>{address.address ?? <Skeleton width={80} />}</a>
            </div>
          ) : null
        ))}
        <div className={styles.contactBlock}>
          <Image src="/icons/phone.svg" alt="Phone" width={20} height={20} className={styles.contactIcon} />
          <PhoneNumber phone={phone ?? ''} className={styles.storeContact} />
        </div>
        <div className={styles.contactBlock}>
          <Image src="/icons/mail.svg" alt="Email" width={20} height={20} className={styles.contactIcon} />
          <a className={styles.storeContact} href={`mailto:${email ?? ''}`}>{email ?? <Skeleton width={80} />}</a>
        </div>
        <div className={styles.contactBlock}>
          <Image src="/icons/link.svg" alt="Website" width={20} height={20} className={styles.contactIcon} />
          <a className={styles.storeContact} target="_blank" href={website ?? '#'}>{website ?? <Skeleton width={80} />}</a>
        </div>
      </div>
      <SocialLinks socialMedia={store?.additionalInfo.socialMedia ?? []} />
    </div>
      ) : (
        <div className={styles.storeCard}>
          <div className={styles.labelsWrapper}>
            {isNewStore() && <div className={styles.storeBadge}></div>}
            <FavouriteButton storeId={store?.id ?? ''} isVisible={showFavouriteButton} />
          </div>
          <div className={styles.imageContainer}>
            {store?.defaultImage ? (
              <Image
                src={store.defaultImage}
                alt={store.name ?? ''}
                fill
                style={{
                  objectFit: 'contain',
                  objectPosition: 'center',
                }}
                sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, 248px"
              />
            ) : (
              <Skeleton height={120} />
            )}
          </div>
          {store?.website ? (
            <a
              className={styles.storeLink}
              href={store.website}
              tabIndex={-1}
              style={{ pointerEvents: 'none', opacity: 0.5 }}
              aria-disabled="true"
            >
              {store.website}
            </a>
          ) : (
            <span className={styles.storeLink} style={{ opacity: 0.5 }}>
              <Skeleton width={80} />
            </span>
          )}
          <div className={styles.storeInfoWrapper}>
            <h2 className={styles.storeName}>{store?.name ?? <Skeleton width={100} />}</h2>
            <p>
              {addresses[0]?.city ?? <Skeleton width={40} />},{' '}
              {addresses[0]?.country ?? <Skeleton width={40} />}
            </p>
          </div>
          <SocialLinks socialMedia={store?.additionalInfo.socialMedia ?? []} clickable={false} />
        </div>
      )}
    </div>
  );
};