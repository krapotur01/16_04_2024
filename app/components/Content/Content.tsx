import React from "react";
import styles from "./Content.module.css";
import { OurProducts } from "./OurProducts/OurProducts";
import { TrendsProducts } from "./TrendsProducts/TrendsProducts";
import { Feature } from "./Feature/Feature";
import { Offer } from "./Offer/Offer";

export const Content = (): JSX.Element => {
  return (
    <section className={styles.section}>
      <Feature />
      <Offer />
      <TrendsProducts header="TRENDING" />
      <OurProducts header="OUR PRODUCTS" />
    </section>
  );
};
