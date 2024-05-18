import React from "react";
import Image from "next/image";
import styles from "./Offers.module.css";
import { OffersProps } from "./Offers.props"; // типизируем входящий объект

export const Offers = (offers: OffersProps) => {
  // приводим объект в массив и итерируемся по нему
  const item = Object.values(offers).map((i) => {
    return (
      <div
        key={i.name}
        className="flex flex-col items-center w-[98px] rounded-xl bg-white"
      >
        <Image
          className="mt-1"
          src={i.pic}
          alt={i.name}
          width={i.w}
          height={i.h}
        />
        <span className={styles.span}>{i.price}</span>
        <h4 className="mt-2 mb-[6px] text-xs text-black font-medium">
          {i.name}
        </h4>
      </div>
    );
  });

  return <div className="flex flex-col gap-5">{item}</div>;
};
