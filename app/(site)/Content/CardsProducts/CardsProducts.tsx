"use client";

import React, {useState} from "react";
import {Heading} from "@/app/components";
import {Cards} from "./Cards/Cards";
import {FurnitureProps} from "./Cards/Cards.props";
import {HeaderProps} from "./CardsProducts.props";
import {getTrendProducts, headersTrendProducts} from "../api/trendsData";
import {getOurProducts, headersOurProducts} from "../api/ourProductsData";
import {HeadersProducts} from "@/app/(site)/Content/CardsProducts/HeadersProducts/HeadersProducts";

export const CardsProducts = ({header}: HeaderProps) => {
    const [products, setProducts] = useState<FurnitureProps[]>([])

    const getHeaders = (header: string) => {
        let headers: string[] = [];
        switch (header) {
            case "TRENDING":
                headers = headersTrendProducts;
                break;
            case "OUR PRODUCTS":
                headers = headersOurProducts;
                break;
            default:
                return headers;
        }
        return headers;
    }

    const getProducts = (currentHeader: string): FurnitureProps[] => {
        switch (header) {
            case "TRENDING":
                setProducts(getTrendProducts(currentHeader));
                break;
            case "OUR PRODUCTS":
                setProducts(getOurProducts(currentHeader));
                break;
        }
        return products;
    }

    return (
        <section className="flex flex-col items-center mt-28 w-full">
            <Heading tag="h2">{header}</Heading>
            <HeadersProducts headers={getHeaders(header)} getProducts={getProducts}/>
            <Cards products={products}/>
        </section>
    );
};
