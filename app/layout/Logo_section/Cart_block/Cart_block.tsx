import styles from "./Cart_block.module.css";
import CartIcon from "@/public/cart_icon.svg";
import NotificationIcon from "@/public/notification_icon.svg";
import AvatarIcon from "@/public/avatar_icon.svg";

export const Cart_block = (): JSX.Element => {
  return (
    <div className={styles.block}>
      <div className={styles.icons}>
        <CartIcon />
        <span className={styles.icon_number}>4</span>
      </div>

      <div className={styles.icons}>
        <NotificationIcon />
        <span className={styles.icon_number}>3</span>
      </div>
      <div className={styles.icons}>
        <AvatarIcon />
      </div>
    </div>
  );
};
