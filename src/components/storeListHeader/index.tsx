import * as styles from './storeListHeader.css';
import { SortSelect } from '../sortSelect';

type Props = {
  count: number;
};

const getCountText = (count: number) => {
  if (count === 1) {
    return 'store';
  }
  return 'stores';
};

export const StoreListHeader: React.FC<Props> = ({ count }) => (
  <div className={styles.storeListHeaderWrapper}>
	<span className={styles.totalCount}>{count} {getCountText(count)}</span>
  <SortSelect />
  </div>
);