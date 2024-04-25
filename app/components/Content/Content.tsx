import React from "react";
import styles from "./Content.module.css";
import { CardsProducts, Feature, Offer, SpecialOffer } from ".";

export const Content = (): JSX.Element => {
  return (
    <section className={styles.section}>
      <Feature />
      <Offer />
      <CardsProducts header="TRENDING" />
      <SpecialOffer />
      <CardsProducts header="OUR PRODUCTS" />
    </section>
  );
};
