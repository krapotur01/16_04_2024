import React from "react";
import { Heading } from "@/app/components";
import { Cards } from "./Cards/Cards";

export const SpecialOffer = () => {
  return (
    <div className="flex flex-col w-full items-center mt-24">
      <Heading tag="h2">SPECIAL OFFER</Heading>
      <Cards />
    </div>
  );
};
