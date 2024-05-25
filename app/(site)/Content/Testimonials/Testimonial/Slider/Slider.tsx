import SliderProps from './Slider.props';
import styles from "./Slider.module.css";
import Arrow from "../icon_arrow.svg";
import Image from "next/image";
import {Heading, Paragraph} from "@/app/components";
import React from "react";

export const Slider = ({data, index, turnLeft, turnRight}: SliderProps) => {

    const element = Object.values(data).find((_e, i) => i === index);

    if (element) {
        return (
            <div className={styles.slider}>
                <button className={styles.arrow_span} onClick={turnLeft}>
                    <Arrow className="rotate-180"/>
                </button>
                <div
                    className="flex flex-col relative items-center justify-center w-[51rem] h-[312px] bg-[var(--beige)] rounded-xl">
                    <Image
                        src={element.src}
                        alt="фото клиента"
                        width={88}
                        height={88}
                        className="absolute top-[-46px]"
                    />
                    <Paragraph size="m" className="w-[36rem] text-center">{element.comment}</Paragraph>
                    <Heading tag="h3" className="mt-8 text-[var(--grey)]">{element.name}</Heading>
                    <span className="mt-2 text-base text-[var(--grey)]">{element.profession}</span>
                </div>
                <button className={styles.arrow_span} onClick={turnRight}>
                    <Arrow className="hover:fill-[var(--primary)]"/>
                </button>
            </div>
        )
    }

};