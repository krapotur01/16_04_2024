'use client'

import React, {MouseEventHandler, useState} from "react";
import {FurnitureProps, GetProducts} from "./Cards.props";
import {Heading} from "@/app/components";
import {Products} from "@/app/(site)/Content/components/Cards/Products/Products";
import cn from "classnames";
import styles from "@/app/(site)/Content/CardsProducts/Headers.module.css";

export const Cards = ({headers, getProducts}: GetProducts) => {
    const [eventValue, setEventValue] = useState<string>(headers[0]);

    const onClick: MouseEventHandler<HTMLHeadingElement> = (e) => {
        const value = (e.target as HTMLElement).textContent;
        value && setEventValue(value);
    };

    const header = headers.map((value) => (
        <div key={value} className="flex flex-wrap items-center gap-x-20 gap-y-6 mt-11 justify-center">
            <Heading tag="h3"
                     className={cn(styles.header, {
                         [styles.primary]: value == eventValue,
                         [styles.ghost]: value != eventValue,
                     })}
                     onClick={(e) => onClick(e)}
            >{value}</Heading>
        </div>
    ))

    const productItem: FurnitureProps[] = getProducts(eventValue);

    return (
        <div className="flex gap-x-[30px] gap-y-[45px] justify-center flex-wrap mt-[70px] relative">
            {header}
            <Products products={productItem}/>
        </div>
    );
};
