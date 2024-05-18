import styles from "./MenuSection.module.css";
import { Categories } from "./Categories/Categories";
import Link from 'next/link';

export const MenuSection = (): JSX.Element => {
  return (
    <section className={styles.section}>
      <div className={styles.nav_block}>
        <Categories />

        <nav className={styles.nav}>
          <p className={styles.item}>
            <Link href={`/`}>HOME</Link>
          </p>
          <p className={styles.item}>
            <Link href={`/shop`}>SHOP</Link>
          </p>
          <p className={styles.item}>
            <Link href={`/blog`}>BLOG</Link>
          </p>
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
