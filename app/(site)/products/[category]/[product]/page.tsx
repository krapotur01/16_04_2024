import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {Heading} from "@/app/components";

export const metadata: Metadata = {
  title: "Страница",
};

export default function PageProducts({params}: {params: { product: string };}){
  if (!params) {
    notFound();
  }

  return (
    <div className="w-full grow flex flex-col items-center mt-5">
      <Heading tag={'h2'}>СТРАНИЦА ПРОДУКТА</Heading>
    </div>
  );
}
