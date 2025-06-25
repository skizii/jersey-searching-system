import * as styles from './sortSelect.css';

export const SortSelect = () => {
  return (
    <div className={styles.wrapper}>
      <span className={styles.label}>Sort by:</span>
      <div className={styles.selectWrapper}>
        <select className={styles.select}>
          <option value="newest">Newest</option>
          <option value="atoz">A to Z</option>
          <option value="ztoa">Z to A</option>
        </select>
        <div className={styles.icon} />
      </div>
    </div>
  );
};