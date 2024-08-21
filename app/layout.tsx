import React from "react";
import type {Metadata} from "next";
import {Header, Logo_section, MenuSection, Footer} from "./layout/index";
import {Inter} from "next/font/google";
import "./globals.css";
import styles from "./layout/layout.module.css";
import {SpeedInsights} from '@vercel/speed-insights/next';
import cn from "classnames";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
    description: "Качественная мебель на любой вкус",
};

export default function RootLayout(
    {children}: Readonly<{ children: React.ReactNode; }>) {
    return (
        <html lang="ru">
        <head>
            <link
                rel="apple-touch-icon"
                sizes="180x180"
                href="/favicon/apple-touch-icon.png"
            />
            <link
                rel="icon"
                type="image/png"
                sizes="32x32"
                href="/favicon/favicon-32x32.png"
            />
            <link
                rel="icon"
                type="image/png"
                sizes="16x16"
                href="/favicon/favicon-16x16.png"
            />
            <title>Мебель</title>
        </head>
        <body className={cn(inter.className, styles.layout)}>
            <Header/>
            <Logo_section/>
            <MenuSection/>
            {children}
            <Footer/>
        <SpeedInsights/>
        </body>
        </html>
    );
}
