import Image from "next/image";
import React from "react";
import styles from "./Offer.module.css";
import cn from "classnames";
import { Heading } from '../..';

export const Offer = () => {
  return (
    <div className="flex flex-row gap-[19px] mt-[70px] w-full min-h-[100px]">
      <div className={cn(styles.offer_main, styles.offer)}>
        <Heading tag="h4" className="font-medium">
          Modern Furniture Collections
        </Heading>
        <Heading tag="h4" className={styles.green}>
          Starting from <span className="font-medium">$500</span>
        </Heading>
        <span className={styles.span}>Read more</span>
      </div>
      <div className="flex flex-col gap-4">
        <div className={cn(styles.col_2, styles.bookcase)}></div>
        <div className={cn(styles.col_2, styles.sofa)}></div>
      </div>
    </div>
  );
};
