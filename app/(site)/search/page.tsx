'use client'

import React, {useEffect, useState} from "react";
import Image from "next/image";
import styles from "@/app/(site)/Content/CardsProducts/Cards/Products/Products.module.css";
import {FurnitureProps} from "@/app/(site)/Content/CardsProducts/Cards/Cards.props";
import {Heading, Rating} from "@/app/components";
import {Price, Status} from "@/app/(site)/Content/components";
import {Icons} from "@/app/(site)/Content/CardsProducts/Cards/Products/Icons_component/Icons";
import {getTrendProducts} from "@/app/(site)/Content/api/trendsData";
import {useSearchParams} from "next/navigation";
import {Products} from "../Content/CardsProducts/Cards/Products/Products";

export default function Search() {
    const products = getTrendProducts('All products');
    const [state, setState] = useState<FurnitureProps[]>([]);
    const searchParams = useSearchParams();
    const searchQuery = searchParams.get("search");
    const query = !searchQuery ? '' : searchQuery;

    useEffect(() => {
        search(products);
    }, [query]);

    const search_parameters = Object.values(Object.keys(Object.assign({}, ...products)));

    function search(data: FurnitureProps[]) {
        let dataSearching = Object.values(data).filter((data) =>
            search_parameters.some((value) =>
                Object.values(data).toString().toLowerCase().includes(query)
            )
        );
        setState(dataSearching);
    }

    const notFound = () => {
        return <p>поиск не дал результатов</p>
    }

    return (
        <div className="flex flex-col flex-grow mt-5 justify-start items-center">
            <div className="flex flex-row items-center gap-x-3">
                <h1>Результаты поиска по запросу: </h1>
                <p>{query}</p>
            </div>
            <div className="flex flex-wrap w-full gap-x-5 gap-y-6 mt-20 justify-center items-center">
                {!state.length ? notFound() : <Products products={state}/>}
            </div>

        </div>
    );
}
