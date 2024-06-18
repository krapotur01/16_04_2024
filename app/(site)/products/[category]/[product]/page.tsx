'use client';

import {notFound, useSearchParams} from "next/navigation";
import {ProductPage} from "@/app/components/ProductPage/ProductPage";


export default function PageProducts({params}: {params: { product: string }}){
  if (!params) {
    notFound();
  }

  const searchParams = useSearchParams();
  const id = Number(searchParams.get("search"));

  return (
    <div className="w-full grow flex flex-col items-center mt-5">
      <ProductPage id={id} />
    </div>
  );
}
