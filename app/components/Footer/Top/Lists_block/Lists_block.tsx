import styles from "./Lists_block.module.css";
import cn from "classnames";

export const Lists_block = (): JSX.Element => {
  return (
    <div className={styles.lists}>
      <ul className={styles.list}>
        <li className={cn(styles.item, styles.item_bold)}>Help</li>
        <li className={styles.item}>Privacy Policy</li>
        <li className={styles.item}>Shipping & Delivery</li>
        <li className={styles.item}>Refund Policy</li>
        <li className={styles.item}>Track Your Order</li>
      </ul>

      <ul className={styles.list}>
        <li className={cn(styles.item, styles.item_bold)}>Store</li>
        <li className={styles.item}>Furniture</li>
        <li className={styles.item}>Table</li>
        <li className={styles.item}>Sofa</li>
        <li className={styles.item}>Other</li>
      </ul>

      <ul className={styles.list}>
        <li className={cn(styles.item, styles.item_bold)}>Supports</li>
        <li className={styles.item}>Feedback</li>
        <li className={styles.item}>Contact us</li>
        <li className={styles.item}>Download app</li>
        <li className={styles.item}>Terms conditions</li>
      </ul>
    </div>
  );
};
