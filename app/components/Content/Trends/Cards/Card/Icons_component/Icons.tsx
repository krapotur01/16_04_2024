import React, { DetailedHTMLProps, HTMLAttributes } from "react";
import styles from "./Icons.module.css";
import cn from "classnames";
import Favorites from "./favorites.svg";
import AddToCart from "./add_to_cart.svg";
import Compare from "./compare.svg";
import View from "./view.svg";

interface Icon
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
}

export const Icons = ({className, ...props}: Icon): JSX.Element => {
  return (
    <div {...props} className={cn(styles.list, className)}>
      <span className={styles.icon}>
        <Favorites />
      </span>
      <span className={styles.icon}>
        <AddToCart />
      </span>
      <span className={styles.icon}>
        <Compare />
      </span>
      <span className={styles.icon}>
        <View />
      </span>
    </div>
  );
};
