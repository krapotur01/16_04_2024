import React from "react";
import SortIcon from './sort.svg'
import styles from './Sort.module.css'
import {SortEnum, SortProps} from './Sort.props';
import cn from 'classnames';

export const Sort = ({sort, setSort, className, ...props}: SortProps) => {
    return <div className={cn(styles.sort, className)} {...props} >
        <span
            onClick={() => setSort(SortEnum.Rating)}
            className={cn(styles.sorted, {
                [styles.active]: sort === SortEnum.Rating,
            })}
        ><SortIcon className={styles.sortIcon} /> По рейтингу</span>

        <span
            onClick={() => setSort(SortEnum.Price)}
            className={cn(styles.sorted, {
                [styles.active]: sort === SortEnum.Price,
            })}
        ><SortIcon className={styles.sortIcon} /> По цене</span>
    </div>;
}