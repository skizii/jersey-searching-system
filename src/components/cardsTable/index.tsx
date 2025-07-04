import * as styles from './cardsTable.css';
import { StoreCard } from '../storeCard';
import { Store } from '@/types/store';

interface CardsTableProps {
	stores?: Store[];
	loading?: boolean;
}

export const CardsTable: React.FC<CardsTableProps> = ({ stores = [], loading = false }) => {
	if (loading) {
		return (
			<div className={styles.cardsTable}>
				{Array.from({ length: 3 }).map((_, i) => (
					<StoreCard key={i} loading />
				))}
			</div>
		);
	}
	return (
		<div className={styles.cardsTable}>
			{stores.length === 0 ? (
				<div style={{ width: '100%', textAlign: 'center', padding: '32px 0', color: '#888', fontSize: 18 }}>
					No stores found for your current filters😔
					<br/>
					<br />
					Try adjusting your filters or search terms
				</div>
			) : (
				stores.map((store) => (
					<StoreCard key={store.id} store={store} />
				))
			)}
		</div>
	);
};