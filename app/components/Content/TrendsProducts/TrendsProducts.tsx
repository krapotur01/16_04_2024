"use client";

import React, { useState, useEffect } from "react";
import styles from "./Headers.module.css";
import cn from "classnames";
import { Heading } from "../..";
import { Cards } from "../components/Cards/Cards";
import { headers, getProducts } from "../../../api/trendsData";

interface Header {
  header: string;
}

export const TrendsProducts = ({ header }: Header): JSX.Element => {
  const [eventValue, setEventValue] = useState<string | null>(headers[0]);

  const headerNames = {
    firstHeader: "ALL_PRODUCTS",
    secondHeader: "NEW_ARRIVALS",
    thirdHeader: "BEST_SELLERS",
  };

  const headerComponent = headers.map((i) => {
    return (
      <Heading
        key={i}
        tag="h3"
        className={cn(styles.primary, {
          [styles.primary]: i == eventValue,
          [styles.ghost]: i != eventValue,
        })}
        onClick={(e) => onClick(e)}
      >
        {i}
      </Heading>
    );
  });

  const onClick: React.MouseEventHandler<HTMLHeadingElement> = (e) => {
    setEventValue((e.target as HTMLElement).textContent);
  };

  return (
    <section className="flex flex-col items-center mt-28 w-full">
      <Heading tag="h2">{header}</Heading>
      <div className="flex flex-row items-center gap-20 mt-11">
        {headerComponent}
      </div>
      <Cards getProducts={getProducts} headerNames={headerNames} />
    </section>
  );
};
