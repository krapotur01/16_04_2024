'use client';

import {
    Blogs,
    CardsProducts,
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
            <CardsProducts header="TRENDING"/>
            <CardsProducts header="OUR PRODUCTS"/>
            <SpecialOffer/>
            <Testimonials/>
            <Blogs/>
        </main>
    );
}
