import React from "react";
import styles from "./Headers.module.css";
import cn from "classnames";
import { Heading } from "../..";
import { Cards } from "../components/Cards/Cards";
import { headers, getProducts } from "../../../api/trendsData";

interface Header {
  header: string;
}

export const TrendsProducts = ({ header }: Header): JSX.Element => {
  const headerNames = {
    firstHeader: "ALL_PRODUCTS",
    secondHeader: "NEW_ARRIVALS",
    thirdHeader: "BEST_SELLERS",
  };

  const headersName = headers.map((i) => {
    return (
      <Heading
        key={i.value}
        tag="h3"
        className={cn({
          [styles.primary]: i.style == "primary",
          [styles.ghost]: i.style == "ghost",
        })}
      >
        {i.value}
      </Heading>
    );
  });

  return (
    <section className="flex flex-col items-center mt-28 w-full">
      <Heading tag="h2">{header}</Heading>
      <div className="flex flex-row items-center gap-20 mt-11">
        {headersName}
      </div>
      <Cards getProducts={getProducts} headerNames={headerNames} />
    </section>
  );
};
