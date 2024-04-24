import React from "react";
import styles from "./Content.module.css";
import { CardsProducts } from "./CardsProducts/CardsProducts";
import { Feature } from "./Feature/Feature";
import { Offer } from "./Offer/Offer";

export const Content = (): JSX.Element => {
  return (
    <section className={styles.section}>
      <Feature />
      <Offer />
      <CardsProducts header="TRENDING" />
      <CardsProducts header="OUR PRODUCTS" />
    </section>
  );
};
