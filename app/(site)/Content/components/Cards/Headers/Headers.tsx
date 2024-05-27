import React, {MouseEventHandler} from "react";
import {Heading} from "@/app/components";
import styles from "@/app/(site)/Content/CardsProducts/Headers.module.css";
import cn from "classnames";
import {useState} from "react";

interface HeadersProps {
    header: string[];
}

export const Headers = ({header}: HeadersProps) => {
    const [eventValue, setEventValue] = useState<string>(header[0]);

    const onClick: MouseEventHandler<HTMLHeadingElement> = (e) => {
        const value = (e.target as HTMLElement).textContent;
        value && setEventValue(value);
    };

    return (
        <div className="flex flex-wrap items-center gap-x-20 gap-y-6 mt-11 justify-center">
            {header.map((value) => {
                return (
                    <Heading
                        key={value}
                        tag="h3"
                        className={cn(styles.header, {
                            [styles.primary]: value == eventValue,
                            [styles.ghost]: value != eventValue,
                        })}
                        onClick={(e) => onClick(e)}
                    >
                        {value}
                    </Heading>
                );
            })}
        </div>
    )
}