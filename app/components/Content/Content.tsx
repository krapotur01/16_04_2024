import React from "react";
import styles from "./Content.module.css";
import { Trends } from "./Trends/Trends";
import { OurProducts } from "./OurProducts/OurProducts";
import { Feature } from './Feature/Feature';
import { Offer } from './Offer/Offer';

export const Content = (): JSX.Element => {
  return (
    <section className={styles.section}>
      <Feature />
	  <Offer />
	  <Trends />
      <OurProducts />
    </section>
  );
};
