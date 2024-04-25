"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { Heading, Rating } from "../../..";
import { Status, Price } from "..";
import styles from "./Cards.module.css";
import { Icons } from "./Icons_component/Icons";
import { GetProducts, FurnitureProps } from "./Cards.props";

export const Cards = ({ getProducts, headerName }: GetProducts) => {
  useEffect(() => {}, [headerName]);

  const getProductsItem: FurnitureProps = getProducts(headerName);

  const card = Object.values(getProductsItem).map((i) => {
    return (
      <div className={styles.card} key={i.name}>
        <Status status={i.status} position='left'>
          {i.status}
        </Status>
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
            <Price price='discount'>{i.price_discount}</Price>
            <Price price='ghost'>{i.price}</Price>
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
