import type {Metadata} from "next";
import {notFound} from "next/navigation";
import {Products} from "@/app/(site)/Content";
import React from "react";
import {getCategory} from "../product.helper";
import Link from "next/link";

export const metadata: Metadata = {
    title: 'КАТЕГОРИЯ',
    description: "Качественная мебель на любой вкус",
};

export default function PageProducts({params}: { params: { category: string } }) {
    if (!params) {
        notFound();
    }

    return (
        <div className="w-full grow flex flex-col items-center mt-5">
            <ul className="flex gap-x-2 mb-5 self-start">
                <li>
                    <Link href="/">главная</Link>
                    {' >'}
                </li>
                <li>
                    <Link href={"/products"}>категории</Link>
                    {' >'}
                </li>
                <li>{getCategory(params.category).toLowerCase()}</li>
            </ul>
            <Products header={getCategory(params.category)} category={params.category}/>
        </div>
    );
}
