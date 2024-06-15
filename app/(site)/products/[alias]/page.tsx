import { Heading } from "@/app/components";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {CardsProducts} from "@/app/(site)/Content";

export const metadata: Metadata = {
  title: "Страница",
};

export default function PageProducts({params}: {params: { alias: string };}){
  if (!params) {
    notFound();
  }

  return (
    <div className="w-full grow flex flex-col items-center">
      <Heading tag="h1">Страница {params.alias}</Heading>
      <CardsProducts header={""}/>
    </div>
  );
}
