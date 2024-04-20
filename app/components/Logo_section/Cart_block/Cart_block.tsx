import styles from "./Cart_block.module.css";
import Image from "next/image";

export const Cart_block = (): JSX.Element => {
  return (
    <div className={styles.block}>
      <div className={styles.icons}>
        <Image src="./cart_icon.svg" alt="cart_icon" width={24} height={24} />
        <span className={styles.icon_number}>4</span>
      </div>

      <div className={styles.icons}>
        <Image src="./notification_icon.svg" alt="notification_icon" width={24} height={24} />
        <span className={styles.icon_number}>3</span>
      </div>
      <div className={styles.icons}>
        <Image src="./avatar_icon.svg" alt="avatar_icon" width={24} height={24} />
      </div>
    </div>
  );
};
