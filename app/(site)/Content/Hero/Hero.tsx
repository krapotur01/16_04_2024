import React from "react";
import Image from "next/image";
import styles from "./Hero.module.css";
import line from "@/public/hero_header_line.png";
import {Button, Heading} from "@/app/components";
import {Offers} from "./Offers/Offers";
import {offer} from "../api/offerData"; // передаем внешние данные в компонент
import {Pagination} from "./Pagination/Pagination";

export const Hero = () => {
    return (
        <div className={styles.hero}>
            <div className={styles.furnitureSVG}/>
            <div className={styles.content}>
                <div className="w-80 relative">
                    <p className={styles.p}>TOP COLLECTIONS 2024</p>
                    <Heading tag="h1" className={styles.header}>
                        We Serve Your Dream Furniture
                    </Heading>
                    <Image
                        className={styles.line}
                        src={line}
                        alt="hero_header_line"
                        width={177}
                        height={11}
                    />
                    <p className={styles.paragraphOffer}>
                        Get 50% off all products
                    </p>
                    <Button
                        appearance="primary"
                        className="px-5 py-3 rounded-lg text-base"
                    >
                        SHOP NOW
                    </Button>
                </div>
                <Offers offer={offer} className='relative'/>
            </div>
            <Pagination/>
        </div>
    );
};
