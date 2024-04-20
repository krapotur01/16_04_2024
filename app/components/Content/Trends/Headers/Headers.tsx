import React from "react";
import styles from "./Headers.module.css";
import { Heading } from "../../..";

export const Headers = () => {
  return (
    <div className="flex flex-row items-center gap-20 mt-11">
      <Heading tag="h3" className={styles.primary}>Top Products</Heading>
      <Heading tag="h3" className={styles.ghost}>New Arrivals</Heading>
      <Heading tag="h3" className={styles.ghost}>Best Sellers</Heading>
    </div>
  );
};
