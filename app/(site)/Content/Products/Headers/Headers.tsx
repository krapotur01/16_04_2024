import React, {BaseSyntheticEvent, useEffect, useState} from "react";
import {Heading} from "@/app/components";
import cn from "classnames";
import styles from "./Headers.module.css";
import {HeadersProps} from "./Headers.props"

export const Headers = ({getCurrentHeader}: HeadersProps) => {
    const [eventValue, setEventValue] = useState<string>('Все товары');

    const headers = ['Все товары', 'Лучшие продажи', 'Новые поступления'];

    useEffect(() => {
        getCurrentHeader(eventValue)
    }, [getCurrentHeader, eventValue]);

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