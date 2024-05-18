import styles from "./MenuSection.module.css";
import { Categories } from "./Categories/Categories";
import Link from 'next/link';

export const MenuSection = (): JSX.Element => {
  return (
    <section className={styles.section}>
      <div className={styles.nav_block}>
        <Categories />

        <nav className={styles.nav}>
          <p className={styles.item}>HOME</p>
          <p className={styles.item}>SHOP</p>
          <p className={styles.item}>BLOG</p>
          <p className={styles.item}>
            <Link href={`/about`}>ABOUT</Link>
          </p>
          <p className={styles.item}>
            {" "}
            <Link href={`/contacts`}>CONTACT US</Link>
          </p>
        </nav>
      </div>
    </section>
  );
};
