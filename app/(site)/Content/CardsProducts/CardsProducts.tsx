"use client";

import React, { useState } from "react";
import styles from "./Headers.module.css";
import cn from "classnames";
import { Heading } from "@/app/components";
import { Cards } from "../components";
import { Header } from "./CardsProducts.props";
import { headersTrendProducts, getTrendProducts } from "../api/trendsData";
import { headersOurProducts, getOurProducts } from "../api/ourProductsData";
import {FurnitureProps} from "@/app/(site)/Content/components/Cards/Cards.props";

export const CardsProducts = ({ header }: Header) => {
  const [eventValue, setEventValue] = useState<string | null>(
    header == "TRENDING" ? headersTrendProducts[0] : headersOurProducts[0]
  );

  let headers: string[] = [];
  let getProducts: (products: (string | null)) => (FurnitureProps[]);

  switch (header) {
    case "TRENDING":
      headers = headersTrendProducts;
      getProducts = getTrendProducts;
      break;
    case "OUR PRODUCTS":
      headers = headersOurProducts;
      getProducts = getOurProducts;
      break;
  }

  const headerComponent = headers.map((value) => {
    return (
      <Heading
        key={value}
        tag="h3"
        className={cn(styles.header, {
          [styles.primary]: value == eventValue,
          [styles.ghost]: value != eventValue,
        })}
        onClick={(e) => onClick(e)}
      >
        {value}
      </Heading>
    );
  });

  const onClick: React.MouseEventHandler<HTMLHeadingElement> = (e) => {
    const value = (e.target as HTMLElement).textContent;
    setEventValue(value);
  };

  return (
    <section className="flex flex-col items-center mt-28 w-full">
      <Heading tag="h2">{header}</Heading>
      <div className="flex flex-wrap items-center gap-x-20 gap-y-6 mt-11 justify-center">
        {headerComponent}
      </div>
      <Cards getProducts={getProducts} headerName={eventValue} />
    </section>
  );
};
