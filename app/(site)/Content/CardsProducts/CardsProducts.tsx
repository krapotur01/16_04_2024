'use client'

import React from "react";
import {Heading} from "@/app/components";
import {Cards} from "../components";
import {Header} from "./CardsProducts.props";
import {getTrendProducts, headersTrendProducts} from "../api/trendsData";
import {getOurProducts, headersOurProducts} from "../api/ourProductsData";
import {FurnitureProps} from "@/app/(site)/Content/components/Cards/Cards.props";

export const CardsProducts = ({ header }: Header) => {

  let headers: string[] = [];
  let getProducts: (products: string) => (FurnitureProps[]);

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

  return (
    <section className="flex flex-col items-center mt-28 w-full">
      <Heading tag="h2">{header}</Heading>
      <Cards getProducts={getProducts} headers={headers} />
    </section>
  );
};
