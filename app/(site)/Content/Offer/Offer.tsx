import React from "react";
import styles from "./Offer.module.css";
import cn from "classnames";
import { Heading } from "@/app/components";

export const Offer = () => {
  return (
    <div className={styles.offers}>
      <div className={cn(styles.offer_main, styles.offer)}>
        <Heading tag="h4" className="font-medium flex">
          Modern Furniture Collections
        </Heading>
        <Heading tag="h4" className={styles.primary}>
          Starting from <span className="font-medium">$500</span>
        </Heading>
        <span className={styles.span}>Read more</span>
      </div>
      <div className="flex flex-col gap-4">
        <div className={cn(styles.bookcase, styles.offer)}>
          <Heading tag="h4" className="font-medium flex">
            Geometric Bookcase
          </Heading>
          <Heading tag="h4" className={styles.primary}>
            Up to 20% discount
          </Heading>
          <span className={styles.span}>Read more</span>
        </div>
        <div className={cn(styles.sofa, styles.offer)}>
          <Heading tag="h4" className="font-medium flex">
            Minimal Sofa collections
          </Heading>
          <Heading tag="h4" className={styles.primary}>
            Sale upto 40% discount
          </Heading>
          <span className={styles.span}>Read more</span>
        </div>
      </div>
    </div>
  );
};
