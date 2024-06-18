"use client";

import React, {useEffect, useState} from "react";
import {Heading} from "@/app/components";
import {Cards} from "./Cards/Cards";
import {FurnitureProps} from "./Cards/Cards.props";
import {HeaderProps} from "./Products.props";
import {Headers} from "@/app/(site)/Content/CardsProducts/Headers/Headers";
import {getProducts} from "@/app/(site)/Content/api/products";
import cn from "classnames";
import {usePathname} from "next/navigation";

export const Products = ({header, category, className}: HeaderProps) => {
    const [products, setProducts] = useState<FurnitureProps[]>([])
    const [currentHeader, setCurrentHeader] = useState<string>('ВСЕ ТОВАРЫ')

    const pathName = usePathname();

    useEffect(() => {
        setProducts(getProducts(currentHeader, category));
    }, [currentHeader, category])

    const getCurrentHeader = (currentHeader:  string) => {
        setCurrentHeader(currentHeader);
    }

    return (
        <div className={cn("flex flex-col items-center")}>
            <Heading tag="h2">{header}</Heading>
            {pathName === '/' && <Headers getCurrentHeader={getCurrentHeader}/>}
            <Cards products={products}/>
        </div>
    );
};
