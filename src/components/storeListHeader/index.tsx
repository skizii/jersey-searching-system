import * as styles from './storeListHeader.css';
import { SortSelect } from '../sortSelect';

type Props = {
  count: number;
  sortBy: string;
  onSortChange: (sortBy: string) => void;
};

const getCountText = (count: number) => {
  if (count === 1) {
    return 'store';
  }
  return 'stores';
};

export const StoreListHeader: React.FC<Props> = ({ count, sortBy, onSortChange }) => (
  <div className={styles.storeListHeaderWrapper}>
	<span className={styles.totalCount}>{count} {getCountText(count)}</span>
  <SortSelect sortBy={sortBy} onSortChange={onSortChange} />
  </div>
);