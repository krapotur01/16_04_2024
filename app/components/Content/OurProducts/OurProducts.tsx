import React from "react";
import { Heading } from "../..";
import { Cards } from "../components/Cards/Cards";
import { Headers } from "../components/Headers/Headers";
import { ourProducts, headers } from "../../../api/ourProductsData";

export const OurProducts = (): JSX.Element => {
  return (
    <section className="flex flex-col items-center mt-28 w-full">
      <Heading tag="h2">OUR PRODUCTS</Heading>
      <Headers {...headers} />
      <Cards {...ourProducts} />
    </section>
  );
};
