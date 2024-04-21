import React from "react";
import { Heading } from "../..";
import { Cards } from "../components/Cards/Cards";
import { Headers } from "../components/Headers/Headers";
import { chairs, headers } from "../../../api/trendsData";

interface Header {
  header: string;
}

export const CardsProducts = (header: Header): JSX.Element => {
  return (
    <section className="flex flex-col items-center mt-28 w-full">
      <Heading tag="h2">{header.header}</Heading>
      <Headers {...headers} />
      <Cards {...chairs} />
    </section>
  );
};
