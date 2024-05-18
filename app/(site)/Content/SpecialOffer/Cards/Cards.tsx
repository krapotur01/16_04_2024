import React from "react";
import { Button, Heading, Paragraph } from "@/app/components";
import { Price, Status } from "../../components";
import styles from "./Cards.module.css";
import cn from "classnames";
import { Time } from "./Time/Time";

export const Cards = () => {
  const cards = [
    {
      pic: "first",
      header: "Living Room Furniture",
      p: `You don't have a chair. Are you ready for growth? Shop with us 40% discount!`,
      price_discount: "$150",
      price: "$250",
      status: "40% off",
      times: [
        { text: "DAYS", num: '10' },
        { text: "HRS", num: '15' },
        { text: "MIN", num: '30' },
        { text: "SECS", num: '22' },
      ],
    },
    {
      pic: "second",
      header: "Modern chair",
      p: `Hot chairs of the modern era are now available in our stock.`,
      price_discount: "$75",
      price: "$150",
      status: "50% off",
      times: [
        { text: "DAYS", num: '15' },
        { text: "HRS", num: '08' },
        { text: "MIN", num: '20' },
        { text: "SECS", num: '12' },
      ],
    },
  ];

  const card = cards.map((i) => {
    return (
      <div
        key={i.header}
        className={cn(styles.card, {
          [styles.card_first]: i.pic == "first",
          [styles.card_second]: i.pic == "second",
        })}
      >
        <Status status="New" position="right">
          {i.status}
        </Status>
        <Heading tag="h4">{i.header}</Heading>
        <Paragraph size="s" className="w-[227px] mt-3">
          {i.p}
        </Paragraph>
        <div className="flex gap-2 mt-5 items-center">
          <Price price="discount">{i.price_discount}</Price>
          <Price price="ghost">{i.price}</Price>
          <Button
            appearance="primary"
            className="w-[91px] h-[26px] ml-2 px-1 py-1 text-ss rounded-sm"
          >
            SHOP NOW
          </Button>
        </div>
        <Time times={i.times} />
      </div>
    );
  });

  return <div className="flex flex-wrap w-full justify-center gap-8 mt-14">{card}</div>;
};
