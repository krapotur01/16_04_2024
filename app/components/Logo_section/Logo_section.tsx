import styles from "./Logo_section.module.css";
import Logo from "./../../../public/Logo.svg";
import { Search_block } from "./Search_block/Search_block";
import { Cart_block } from "./Cart_block/Cart_block";

export const Logo_section = (): JSX.Element => {
  return (
    <section className={styles.block}>
		<Logo />
      <Search_block />
      <Cart_block />
    </section>
  );
};
