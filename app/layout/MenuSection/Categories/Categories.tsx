'use client';

import {DetailedHTMLProps, HTMLAttributes, useEffect, useState} from 'react';
import styles from "./Categories.module.css";
import MenuIcon from "@/public/menu.svg";
import cn from "classnames";
import Link from "next/link";
import {usePathname} from "next/navigation";

const categoriesMenu = [
    {route: "/", name: "ВСЕ КАТЕГОРИИ",},
    {route: "/chairs", name: "СТУЛЬЯ",},
    {route: "/armchairs", name: "КРЕСЛА",},
    {route: "/sofas", name: "ДИВАНЫ",},
    {route: "/tables", name: "СТОЛЫ",},
    {route: "/poufs", name: "ПУФЫ",},
    {route: "/wardrobes", name: "ШКАФЫ",},
];

interface CategoriesProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>{}

export function Categories ({className}:CategoriesProps) {
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
        <Link key={menu.route}
              href={`/products/${menu.route}`}
              className='border-b border-b-[var(--grey-light)] hover:border-0 hover:bg-[var(--primary)] hover:text-[var(--white)] last:border-0'
        >
            <li className={styles.list_item}>
                <span >{menu.name}</span>
            </li>
        </Link>
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
            className={cn(styles.menu, className)}
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
