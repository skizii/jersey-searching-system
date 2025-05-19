import * as styles from './cardsTable.css';
import { StoreCard } from '../storeCard';

export const CardsTable = () => {
	return (
		<div className={styles.cardsTable}>
			<StoreCard/>
			<StoreCard/>
			<StoreCard/>
			<StoreCard/>
			<StoreCard/>
			<StoreCard/>
			<StoreCard/>
			<StoreCard/>
			<StoreCard/>
		</div>
	)
};