import React from "react";
import Image from "next/image";
import { Heading } from "../..";

export const Feature = () => {
  const features = [
    {
      src: "/feature/free_delivery.svg",
      header: "Free Shipping",
      span: "Orders over $100",
    },
    {
      src: "/feature/present.svg",
      header: "Smart Gift Card",
      span: "Buy $1000 to get card",
    },
    {
      src: "/feature/wallet.svg",
      header: "Quick Payment",
      span: "100% secure payment",
    },
    {
      src: "/feature/support.svg",
      header: "24/7 Support",
      span: "Quick support",
    },
  ];

  const feature = features.map((i) => {
    return (
      <div key={i.header} className="flex flex-row items-center gap-4">
        <Image src={i.src} alt="i.header" width={58} height={58} />
        <div className="flex flex-col gap-[2px]">
          <Heading tag="h5" className="bold">
            {i.header}
          </Heading>
          <span className="text-gray-500">{i.span}</span>
        </div>
      </div>
    );
  });

  return <div className="flex flex-row w-full justify-between">{feature}</div>;
};
