import React from 'react'
import {Testimonial} from "./Testimonial/Testimonial";
import {Heading} from '../..'

export const Testimonials = () => {
  return (
    <div className='flex flex-col w-full items-center mt-28'>
      <Heading tag="h2">What Our Customer Says</Heading>
	  <Testimonial />
    </div>
  );
}