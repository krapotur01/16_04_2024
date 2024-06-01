import styles from "./MenuSection.module.css";
import { Categories } from "./Categories/Categories";
import Link from 'next/link';

export const MenuSection = () => {
  const menu = [
    {href: "/", label: "Главная" },
    {href: '/about', label: 'О нас'},
    {href: '/contacts', label: 'Контакты'},
    {href: '/shop', label: 'Корзина'},
  ]

  return (
    <section className={styles.section}>
      <div className={styles.nav_block}>
        <Categories />
        {menu.map((item) => (
            <nav key={item.label} className={styles.nav}>
              <p className={styles.item}>
                <Link href={item.href}>{item.label}</Link>
              </p>
            </nav>
        ))}
      </div>
    </section>
  );
};
