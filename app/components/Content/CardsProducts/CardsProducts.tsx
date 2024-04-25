"use client";

import React, { useState } from "react";
import styles from "./Headers.module.css";
import cn from "classnames";
import { Heading } from "../..";
import { Cards } from "../components";
import { Header } from "./CardsProducts.props";
import {
  headersTrendProducts,
  getTrendProducts,
} from "../../../api/trendsData";
import {
  headersOurProducts,
  getOurProducts,
} from "../../../api/ourProductsData";

export const CardsProducts = ({ header }: Header): JSX.Element => {
  const [eventValue, setEventValue] = useState<string | null>(
    header == "TRENDING" ? headersTrendProducts[0] : headersOurProducts[0]
  );

  let headers: string[] = [];
  let getProducts: any;

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
        className={cn(styles.primary, {
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
      <div className="flex flex-row items-center gap-20 mt-11">
        {headerComponent}
      </div>
      <Cards getProducts={getProducts} headerName={eventValue} />
    </section>
  );
};
