import React from "react";
import styles from "./Header.module.css";
import HeaderNavbar from "./Navbar/Navbar";
import Login from "@/app/(site)/Content/Login/Login";
import {Heading} from "@/app/components";
import {verifySession} from "@/app/lib/dal";

export const Header = async () => {
    const session = await verifySession();

    return (
        <header className={styles.header}>
            <HeaderNavbar/>
            <span className={styles.description}>
                <Heading tag="h5">Добро пожаловать в наш магазин</Heading>
            </span>

            <div className={styles.auth}>
                <Login isAuth={session?.isAuth}/>
            </div>
        </header>
    );
};
