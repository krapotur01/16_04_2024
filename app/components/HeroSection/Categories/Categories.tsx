import styles from "./Categories.module.css";
import cn from "classnames";

export const Categories = (): JSX.Element => {
	return  <ul className={styles.list}>
		<li className={cn(styles.list_item, styles.item)}>All</li>
		<li className={cn(styles.list_item, styles.item)}>New Arrivals</li>
		<li className={cn(styles.list_item, styles.item)}>Hot Sale</li>
		<li className={cn(styles.list_item, styles.item)}>Furniture</li>
		<li className={cn(styles.list_item, styles.item)}>Armature</li>
		<li className={cn(styles.list_item, styles.item)}>Table</li>
		<li className={cn(styles.list_item, styles.item)}>Chair</li>
		<li className={cn(styles.list_item, styles.item)}>Sofa</li>
		<li className={cn(styles.list_item, styles.item)}>Mirrors</li>
		<li className={cn(styles.list_item, styles.item)}>Stools</li>
		<li className={cn(styles.list_item, styles.item, styles.list_item_end)}>Benches</li>
	</ul>
}