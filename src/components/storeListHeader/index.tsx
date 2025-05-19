import * as styles from './storeListHeader.css';
import { SortSelect } from '../sortSelect';

export const StoreListHeader = () => (
  <div className={styles.storeListHeaderWrapper}>
	<span className={styles.totalCount}>{23} stores</span>
  <SortSelect />
  </div>
);