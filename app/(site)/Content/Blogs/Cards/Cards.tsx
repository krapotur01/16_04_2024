import React from "react";
import styles from "./Cards.module.css";
import cn from "classnames";
import TagIcon from "@/public/blogs/tag_icon.svg";

export const Cards = () => {
  const cards = [
    {
      tag: "FURNITURE",
      date: "23 September 2022",
      heading: "Begineer guide buying minimal sofa",
    },
    {
      tag: "TABLE",
      date: "23 September 2022",
      heading: "Buying best minimal computer table",
    },
    {
      tag: "BENCH",
      date: "23 march 2022",
      heading: "How to choose best modern bench",
    },
    {
      tag: "CHAIR",
      date: "23 march 2022",
      heading: "Best Summer Outfit Style in this Country",
    },
  ];

  const card = cards.map((i) => {
    return (
      <div
        key={i.heading}
        className={cn(styles.card, {
          [styles.furniture]: i.tag == "FURNITURE",
          [styles.table]: i.tag == "TABLE",
          [styles.bench]: i.tag == "BENCH",
          [styles.chair]: i.tag == "CHAIR",
        })}
      >
        <div className="flex flex-row gap-2">
          <div className="flex flex-row gap-1 items-center bg-[var(--white)] px-3 w-max rounded">
            <TagIcon />
            <span className="text-[var(--primary)] text-ss">{i.tag}</span>
          </div>
          <span className="text-[var(--white)] text-sm">{i.date}</span>
        </div>
        <h2 className="w-[25rem] text-[var(--white)] text-[39px] leading-[47px] font-bold pt-4">
          {i.heading}
        </h2>
        <span className="block text-[var(--white)] text-sm mt-6">Read more</span>
      </div>
    );
  });

  return (
    <div className="flex gap-6 justify-center flex-wrap mt-14">{card}</div>
  );
};
