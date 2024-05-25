import SliderProps from './Slider.props';
import styles from "./Slider.module.css";
import Arrow from "../icon_arrow.svg";
import Image from "next/image";
import {Heading, Paragraph} from "@/app/components";
import React from "react";
import {motion} from "framer-motion"

export const Slider = ({data, currentIndex, turnLeft, turnRight}: SliderProps) => {
    const element = Object.values(data).map((e, i) => {
        if (i === currentIndex) {
            return <motion.div key={e.id} className={styles.slide}
                               initial={{opacity: 0, background: 'var(--primary-hover)'}}
                               whileInView={{opacity: 1, background: 'var(--beige)'}}
                               viewport={{once: true}}
                               transition={{
                                   ease: 'circIn',
                                   duration: 1.2,
                                   x: { duration: 0 }
                               }}>
                <Image
                    src={e.src}
                    alt="фото клиента"
                    width={88}
                    height={88}
                    className="absolute top-[-46px]"
                />
                <Paragraph size="m" className="w-[36rem] text-inherit text-center">{e.comment}</Paragraph>
                <Heading tag="h3" className="mt-8 text-inherit]">{e.name}</Heading>
                <span className="mt-2 text-base text-[var(--grey)]">{e.profession}</span>
            </motion.div>
        }
    })

    return <div className={styles.slider}>
        <button className={styles.arrow_span} onClick={turnLeft}>
            <Arrow className="rotate-180"/>
        </button>
        {element}
        <button className={styles.arrow_span} onClick={turnRight}>
            <Arrow className="hover:fill-[var(--primary)]"/>
        </button>
    </div>

};