'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Store } from '../../types/store';
import * as styles from './storeCard.css';
import { SocialLinks } from '../socialLinks';

type Props = {
  store: Store;
};

export const StoreCard: React.FC<Props> = ({ store }) => {
  const [isHovered, setIsHovered] = useState(false);
  const address = store.additionalInfo.address.address;
  const phone = store.additionalInfo.contacts.tel.value;
  const email = store.additionalInfo.contacts.email.value;

  if (!store) {
    return <div>Store data not loaded</div>;
  }

  return (
    <div
      className={styles.storeCardWrapper}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isHovered ? (
        <div className={styles.hoverCard}>
          <div className={styles.labelsWrapper}>
            <div className={styles.storeBadge}></div>
          </div>
          <h2 className={styles.storeHeader}>{store.name}</h2>
          <p>{store.assortment}</p>
          <a href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`}>{address}</a>
          <a href={`tel:${phone}`}>{phone}</a>
          <a href={`mailto:${email}`}>{email}</a>
        </div>
      ) : (
        <div className={styles.storeCard}>
          <div className={styles.labelsWrapper}>
            <div className={styles.storeBadge}></div>
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
          <h2 className={styles.storeHeader}>{store.name}</h2>
          <p>
            {store.additionalInfo.address.city},{' '}
            {store.additionalInfo.address.country}
          </p>
          <SocialLinks socialMedia={store.additionalInfo.socialMedia} />
        </div>
      )}
    </div>
  );
};

// console.log(str.slice(0, 2) + " counry");
// console.log(str.slice(2, 5) + " operator");
// console.log(str.slice(5, 8) + " 3");
// console.log(str.slice(8, 10) + " 21");
// console.log(str.slice(10, 12) + " 22");

// function formatTel(tel: string) {
// 	const countryCode = tel.slice(0, 2);
// 	const operatorCode = tel.slice(3, 6);
// 	let formattedTel = `+${countryCode} ${operatorCode}`
// }
