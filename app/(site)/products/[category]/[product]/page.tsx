'use client';

import {notFound, usePathname, useSearchParams} from "next/navigation";
import {ProductPage} from "@/app/components/ProductPage/ProductPage";
import React from "react";
import {getCategory} from "@/app/(site)/products/product.helper";
import Link from "next/link";


export default function PageProducts({params}: {params: { product: string }}){
  if (!params) {
    notFound();
  }

  const searchParams = useSearchParams();
  const id = searchParams.get('id');
  const category = searchParams.get('category');
  const name = searchParams.get('name');

  return (
      <div className="w-full grow flex flex-col items-center mt-5">
        <ul className="flex flex-wrap gap-x-2 mb-5 self-start">
          <li>
              <Link href="/">главная</Link>
              {' >'}
          </li>
          <li>
              <Link href={"/products"}>категории</Link>
              {' >'}
          </li>
          <li>
              <Link href={`/products/${category}`} >
                  {category && getCategory(category).toLowerCase()}
              </Link>
              {' >'}
          </li>
          <li>{name}</li>
        </ul>

        <ProductPage id={Number(id)}/>
      </div>
  );
}
