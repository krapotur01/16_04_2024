'use client';

import {useEffect, useState} from 'react';
import styles from "./Categories.module.css";
import MenuIcon from "@/public/menu.svg";
import cn from "classnames";
import Link from "next/link";
import {usePathname} from "next/navigation";

const categoriesMenu = [
    {route: "Стол", name: "Столы",},
    {route: "Стул", name: "Стулья",},
    {route: "Кресло", name: "Кресла",},
    {route: "Шкаф", name: "Шкафы",},
];

export function Categories() {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(true);

    useEffect(() => {
        if (pathname === '/') {
            setIsOpen(true);
        } else {
            setIsOpen(false)
        }
    }, [pathname]);

    const menu = categoriesMenu.map((menu) => (
        <li key={menu.route} className={styles.list_item}>
            <Link href={{
                      pathname: '/search',
                      query: {
                          search: '',
                          select: menu.route.toLowerCase(),
                      },
                  }}
            >
                <span>{menu.name}</span>
            </Link>
        </li>
    ))

    const onClick = () => {
        if (!isOpen) {
            setIsOpen(true);
        } else if (isOpen) {
            setIsOpen(false);
        }
    }

    return (
        <div
            className={styles.menu}
            onClick={() => onClick()}
        >
            <MenuIcon/>
            <p className={styles.paragraph}>ALL COLLECTIONS</p>
            <ul
                className={cn(styles.list, {
                    [styles.list_visible]: isOpen,
                    [styles.list_hidden]: !isOpen,
                })}
            >
                {menu}
            </ul>
        </div>
    );
}
