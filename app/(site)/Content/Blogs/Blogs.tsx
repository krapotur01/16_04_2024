import React from 'react'
import { Heading } from "@/app/components";
import { BlogsCards } from '@/app/(site)/Content/Blogs/BlogsCards/BlogsCards';

export const Blogs = () => {
  return (
    <div className="flex flex-col mt-28 items-center">
      <Heading tag="h2">OUR LATEST ARTICLES</Heading>
      <BlogsCards />
    </div>
  );
}
