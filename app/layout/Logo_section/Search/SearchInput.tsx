'use client';

import React, {useState} from "react";
import styles from "./SearchInput.module.css";
import Link from "next/link";
import ZoomIcon from "@/app/layout/Logo_section/Search/ZoomIcon";

export const SearchInput = () => {
    const [query, setQuery] = useState("");
    const [select, setSelect] = useState("");

    const onClick = () => {
        setQuery('');
        setSelect('');
    }

    return (
        <div className={styles.container}>
            <input
                id="search"
                className={styles.search}
                type="search"
                value={query}
                placeholder="Введите запрос"
                name="search-form"
                onChange={(event) => setQuery(event.target.value)}
            />
            <select name="Категории" value={select} className={styles.select}
                    onChange={(event) => setSelect(event.target.value)}>
                <option value="Все категории" className={styles.option}>Все категории</option>
                <option value="Стул" className={styles.option}>Стулья</option>
                <option value="Стол" className={styles.option}>Столы</option>
                <option value="Кресло" className={styles.option}>Кресла</option>
                <option value="Диван" className={styles.option}>Диваны</option>
            </select>

            <Link href={{
                pathname: '/search',
                query: {
                    search: query.toLowerCase(),
                    select: select.toLowerCase(),
                },
            }} className='h-[100%]'>
                <button className={styles.button} onClick={onClick}>
                    <ZoomIcon/>
                </button>
            </Link>
        </div>
    );
}
