import React from "react";
import { Heading } from "../..";
import { Cards } from "./Cards/Cards";
import { Headers } from "./Headers/Headers";

export const Trends = (): JSX.Element => {
  return (
    <section className="flex flex-col items-center mt-28 w-full">
      <Heading tag="h2">TRENDING</Heading>
      <Headers />
      <Cards />
    </section>
  );
};
