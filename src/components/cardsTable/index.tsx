import * as styles from './cardsTable.css';
import { StoreCard } from '../storeCard';
import { getStores } from '@/services/storeService';

export const CardsTable = () => {
	const stores = getStores();

	return (
		<div className={styles.cardsTable}>
		{stores.map((store) => (
			<StoreCard key={store.id} store={store} />
		))}
		</div>
	);
};