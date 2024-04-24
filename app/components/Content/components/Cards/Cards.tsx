"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { Heading, Rating } from "@/app/components";
import styles from "./Cards.module.css";
import cn from "classnames";
import { Icons } from "./Icons_component/Icons";
import { GetProducts, FurnitureProps } from "./Cards.props";

export const Cards = ({ getProducts, headerName }: GetProducts) => {
  useEffect(() => {}, [headerName]);

  const getProductsItem: FurnitureProps = getProducts(headerName);

  const card = Object.values(getProductsItem).map((i) => {
    return (
      <div className={styles.card} key={i.name}>
        <span
          className={cn(styles.status, {
            [styles.status_new]: i.status == "New",
            [styles.status_sale]: i.status == "Sale",
            [styles.status_red]: i.status != "Sale" && i.status != "New",
          })}
        >
          {i.status}
        </span>
        <Icons className={styles.icons} />
        <Image
          src={i.pic}
          alt={i.name}
          width={269}
          height={288}
          className="w-[269px] h-[288px]"
        />
        <span className="mt-4 text-gray-400 block">{i.product}</span>
        <Heading tag="h5" className="mt-2">
          {i.name}
        </Heading>

        <div className="flex flex-row justify-between mt-2">
          <div className="flex gap-2">
            <span className={cn(styles.price_discount, styles.price)}>
              {i.price_discount}
            </span>
            <span className={cn(styles.price_ghost, styles.price)}>
              {i.price}
            </span>
          </div>
          <Rating rating={i.rating} isEditable />
        </div>
      </div>
    );
  });

  return (
    <div className="flex gap-x-[30px] gap-y-[45px] justify-center flex-wrap mt-[70px]">
      {card}
    </div>
  );
};
