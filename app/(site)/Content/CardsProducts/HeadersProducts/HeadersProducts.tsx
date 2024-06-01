import React, {BaseSyntheticEvent, useEffect, useState} from "react";
import {Heading} from "@/app/components";
import cn from "classnames";
import styles from "@/app/(site)/Content/CardsProducts/Headers.module.css";
import {HeadersProps} from "./HeadersProducts.props"

export const HeadersProducts = ({headers, getProducts}: HeadersProps) => {
    const [eventValue, setEventValue] = useState<string>(headers[0]);

    useEffect(() => {
        getProducts(eventValue)
    }, [getProducts, eventValue]);

    const onClick = (event: BaseSyntheticEvent) => {
        const value: string = event.target.textContent;
        value && setEventValue(value);
    };


    return (
        <div className={styles.container}>
            {headers.map((value) => (
                <Heading key={value}
                         tag="h3"
                         className={cn(styles.header, {
                             [styles.primary]: value == eventValue,
                             [styles.ghost]: value != eventValue,
                         })}
                         onClick={(event) => onClick(event)}
                >{value}</Heading>))}
        </div>
    )
}