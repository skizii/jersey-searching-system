import Image from 'next/image';
import { Store } from '../../types/store';
import * as styles from './storeCard.css';
import { SocialLinks } from '../socialLinks';

type Props = {
  store: Store;
};

export const StoreCard: React.FC<Props> = ({ store }) => {
	if (!store) {
		return <div>Store data not loaded</div>;
	}
  return (
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
			minHeight: '248px'
		}}
		/>
		<a className={styles.storeLink} href={store.website}>{store.website}</a>
		<h2 className={styles.storeHeader}>{store.name}</h2>
		<p>{store.additionalInfo.address.city}, {store.additionalInfo.address.country}</p>
		<SocialLinks socialMedia={store.additionalInfo.socialMedia} />
    </div>
  );
};