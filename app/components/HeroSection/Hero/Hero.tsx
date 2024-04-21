import React from "react";
import Image from "next/image";
import styles from "./Hero.module.css";
import line from "../../../../public/hero_header_line.png";
import Furniture from "../../../../public/Furniture.svg";
import { Button, Heading } from "../..";
import { Offers } from "./Offers/Offers";
import { offer } from "../../../api/offerData"; // передаем внешние данные в компонент
import { Pagination } from "./Pagination/Pagination";

export const Hero = () => {
  return (
    <div className={styles.content}>
      <div className="flex flex-wrap items-center">
        <div className="ml-12 w-80 relative">
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
          <p className="text-herop font-medium text-gray-500 mt-7 mb-9">
            Get 50% off all products
          </p>
          <Button
            appearance="primary"
            className="px-5 py-3 rounded-lg text-base"
          >
            SHOP NOW
          </Button>
        </div>
        <Furniture />
        <Offers {...offer} />
      </div>
      <Pagination />
    </div>
  );
};
