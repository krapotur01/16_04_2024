'use client';

import React, {useState} from "react";
import styles from "./SearchInput.module.css";
import Image from "next/image";
import Link from "next/link";

export const SearchInput = () => {
    const [query, setQuery] = useState("");

    const onClick = () => {
        setQuery('');
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
            <select name="Категории" className={styles.select}>
                <option value="Все категории" className={styles.option}>Категории</option>
                <option value="Категория 1" className={styles.option}>Категория 1</option>
                <option value="Категория 2" className={styles.option}>Категория 2</option>
                <option value="Категория 3" className={styles.option}>Категория 3</option>
                <option value="Категория 4" className={styles.option}>Категория 4</option>
            </select>

            <Link href={{
                pathname: '/search',
                query: {
                    search: query.toLowerCase(),
                },
            }} className='h-[100%]'>
                <button className={styles.button} onClick={onClick}>
                    <Image src="zoom.svg" alt="лупа" width={16} height={16}/>
                </button>
            </Link>
        </div>
    );
}
