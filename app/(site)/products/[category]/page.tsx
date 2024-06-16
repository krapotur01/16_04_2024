import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {CardsProducts} from "@/app/(site)/Content";

export const metadata: Metadata = {
  title: "Страница",
};

export default function PageProducts({params}: {params: { category: string };}){
  if (!params) {
    notFound();
  }

  return (
    <div className="w-full grow flex flex-col items-center mt-5">
      <CardsProducts header={"ВСЕ ТОВАРЫ"} className='mt-0' />
    </div>
  );
}
