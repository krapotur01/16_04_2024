'use client'

import React, {useEffect, useState} from "react";
import {FurnitureProps} from "@/app/(site)/Content/CardsProducts/Cards/Cards.props";
import {getProducts} from "@/app/(site)/Content/api/products";
import {useSearchParams} from "next/navigation";
import {Cards} from "@/app/(site)/Content/CardsProducts/Cards/Cards";

export default function Search() {
    const products = getProducts('Все товары');
    const [state, setState] = useState<FurnitureProps[]>([]);
    const searchParams = useSearchParams();
    const searchQuery = searchParams.get("search");
    const selectQuery = searchParams.get("select");
    const query = !searchQuery ? '' : searchQuery;
    const select = !selectQuery ? '' : selectQuery;

    useEffect(() => {
        search(products, query, select);
    }, [query, select]);

    const search_parameters: string[] = Object.values(Object.keys(Object.assign({}, ...products)));

    function search(data: FurnitureProps[], searchQuery: string, typeProduct?: string) {
        if (typeProduct !== '' || typeProduct !== '' && searchQuery !== '') {
            let result = Object.values(data).filter((item) => item.product.toLowerCase() === typeProduct);
            let dataSearching = result.filter((result) =>
                search_parameters.some((value) =>
                    Object.values(result).toString().toLowerCase().includes(searchQuery)
                )
            );
            setState(dataSearching);
            return;
        } else {
            let dataSearching = Object.values(data).filter((data) =>
                search_parameters.some((value) =>
                    Object.values(data).toString().toLowerCase().includes(searchQuery)
                )
            );
            setState(dataSearching);
        }
    }

    const notFound = () => {
        return <p>поиск не дал результатов</p>
    }

    return (
        <div className="flex flex-col flex-grow mt-5 justify-start items-center">
            <div className="flex flex-row items-start gap-x-3">
                <h1>Результаты поиска по запросу: </h1>
                <p>{query}</p>
                <p>{select ? `категории: ${select}`: `категории: все категории`}</p>
            </div>
            <div className="flex flex-wrap w-full gap-x-5 gap-y-6 mt-20 justify-center items-center">
                {!state.length ? notFound() : <Cards products={state}/>}
            </div>

        </div>
    );
}
