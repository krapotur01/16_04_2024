"use client";

import React, {useEffect, useState} from "react";
import {Heading} from "@/app/components";
import {Cards} from "./Cards/Cards";
import {FurnitureProps} from "./Cards/Cards.props";
import {HeaderProps} from "./CardsProducts.props";
import {HeadersProducts} from "@/app/(site)/Content/CardsProducts/HeadersProducts/HeadersProducts";
import {getHeaders, getProducts} from "@/app/(site)/Content/CardsProducts/CardsProducts.helper";
import cn from "classnames";

export const CardsProducts = ({header, className}: HeaderProps) => {
    const [products, setProducts] = useState<FurnitureProps[]>([])
    const [currentHeader, setCurrentHeader] = useState<string>('')

    useEffect(() => {
        getHeaders(header);
        setProducts(getProducts(header, currentHeader));
    }, [header, currentHeader])

    const getCurrentHeader = (currentHeader:  string) => {
        setCurrentHeader(currentHeader);
    }

    return (
        <div className={cn("flex flex-col items-center mt-28", className)}>
            <Heading tag="h2">{header}</Heading>
            {currentHeader && <HeadersProducts headers={getHeaders(header)} getCurrentHeader={getCurrentHeader}/>}
            <Cards products={products}/>
        </div>
    );
};
