import React from 'react'
import styles from "./Pagination.module.css";

export const Pagination = (): JSX.Element => {
  return (
    <ul className="flex flex-row gap-4 items-center">
      <li className={styles.pagination}></li>
      <li className={styles.pagination}></li>
      <li className={styles.pagination_active}></li>
      <li className={styles.pagination}></li>
    </ul>
  );
}
