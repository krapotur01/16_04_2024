import styles from "./MenuSection.module.css";
import {Categories} from "./Categories/Categories";
import Link from 'next/link';
import {Cart_block} from "@/app/layout/Logo_section/Cart_block/Cart_block";

export const MenuSection = () => {
    const menu = [
        {href: "/", label: "Главная"},
        {href: '/about', label: 'О нас'},
        {href: '/contacts', label: 'Контакты'},
        {href: '/shop', label: 'Корзина'},
    ]

    return (
        <section className={styles.section}>
            <div className={styles.nav_block}>
                <Categories/>
                <nav className={styles.nav}>
                    {menu.map((item) => (
                        <p key={item.label} className={styles.item}>
                            <Link href={item.href}>{item.label}</Link>
                        </p>
                    ))}
                </nav>
            </div>
        </section>
    );
};
