import * as styles from './cardsTable.css';
import { StoreCard } from '../storeCard';
import { Store } from '@/types/store';

interface CardsTableProps {
	stores: Store[];
}

export const CardsTable: React.FC<CardsTableProps> = ({ stores }) => {
	return (
		<div className={styles.cardsTable}>
		{stores.map((store) => (
			<StoreCard key={store.id} store={store} />
		))}
		</div>
	);
};