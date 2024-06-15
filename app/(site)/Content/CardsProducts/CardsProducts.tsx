"use client";

import React, {useEffect, useState} from "react";
import {Heading} from "@/app/components";
import {Cards} from "./Cards/Cards";
import {FurnitureProps} from "./Cards/Cards.props";
import {HeaderProps} from "./CardsProducts.props";
import {HeadersProducts} from "@/app/(site)/Content/CardsProducts/HeadersProducts/HeadersProducts";
import {getHeaders, getProducts} from "@/app/(site)/Content/CardsProducts/CardsProducts.helper";

export const CardsProducts = ({header}: HeaderProps) => {
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
        <section className="flex flex-col items-center mt-28">
            <Heading tag="h2">{header}</Heading>
            <HeadersProducts headers={getHeaders(header)} getCurrentHeader={getCurrentHeader}/>
            <Cards products={products}/>
        </section>
    );
};
