"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { Heading, Rating } from "@/app/components";
import { Status, Price } from "..";
import styles from "./Cards.module.css";
import { Icons } from "./Icons_component/Icons";
import { GetProducts, FurnitureProps } from "./Cards.props";

export const Cards = ({ getProducts, headerName }: GetProducts) => {
  useEffect(() => {}, [headerName]);

  const getProductsItem: FurnitureProps = getProducts(headerName);

  const card = Object.values(getProductsItem).map((item) => {
      return (
        <div className={styles.card} key={item.name}>
          <Status status={item.status} position="left">
            {item.status}
          </Status>
          <Icons className={styles.icons} />
          <Image
            src={item.pic}
            alt={item.name}
            width={269}
            height={288}
            className="w-[269px] h-[288px]"
          />
          <span className="mt-4 text-gray-400 block">{item.product}</span>
          <Heading tag="h5" className="mt-2">
            {item.name}
          </Heading>

          <div className="flex flex-row justify-between mt-2">
            <div className="flex gap-2">
              <Price price="discount">{item.price_discount}</Price>
              <Price price="ghost">{item.price}</Price>
            </div>
            <Rating rating={item.rating} isEditable />
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
