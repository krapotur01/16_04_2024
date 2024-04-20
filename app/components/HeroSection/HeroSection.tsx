import styles from "./HeroSection.module.css";
import Image from "next/image";
import { Categories } from "./Categories/Categories";
import { Hero } from './Hero/Hero';

export const HeroSection = (): JSX.Element => {
  return (
    <section className={styles.section}>
      <div className={styles.nav_block}>
        <div className={styles.menu}>
          <Image src="./menu.svg" alt="menu" width={20} height={20} />
          <p className={styles.paragraph}>ALL COLLECTIONS</p>
        </div>

        <nav className={styles.nav}>
          <p className={styles.item}>HOME</p>
          <p className={styles.item}>SHOP</p>
          <p className={styles.item}>BLOG</p>
          <p className={styles.item}>ABOUT</p>
          <p className={styles.item}>CONTACT US</p>
        </nav>
      </div>

      <div className={styles.content_block}>
        <Categories />
        <Hero />
      </div>
    </section>
  );
};
