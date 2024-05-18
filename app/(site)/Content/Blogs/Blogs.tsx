import React from 'react'
import { Heading } from "@/app/components";
import { Cards } from './Cards/Cards';

export const Blogs = () => {
  return (
    <div className="flex flex-col mt-28 items-center w-full">
      <Heading tag="h2">OUR LATEST ARTICLES</Heading>
      <Cards />
    </div>
  );
}
