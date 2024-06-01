import {PriceProps} from "./Price.props";
import styles from "./Price.module.css";
import cn from "classnames";

export const Price = ({ children, price, className }: PriceProps) => {
  return (
    <span
      className={cn(styles.price, className, {
        [styles.price_discount]: price == 'discount',
        [styles.price_ghost]: price == 'ghost',
      })}
    >
      {children}
    </span>
  );
};