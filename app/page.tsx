'use client';

import {
    Blogs,
    Products,
    Feature,
    Hero,
    Offer,
    SpecialOffer,
    Testimonials,
} from "./(site)/Content";
import styles from './layout/layout.module.css'


export default function Home() {
    return (
        <main className={styles.content}>
            <Hero/>
            <Feature/>
            <Offer/>
            <Products header="НАША МЕБЕЛЬ" />
            <SpecialOffer/>
            <Testimonials/>
            <Blogs/>
        </main>
    );
}
