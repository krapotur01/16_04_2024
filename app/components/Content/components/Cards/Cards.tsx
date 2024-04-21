import Image from "next/image";
import { Heading, Rating } from "@/app/components";
import styles from "./Cards.module.css";
import cn from "classnames";
import { Icons } from "./Icons_component/Icons";
import { FurnituresProps } from "./Cards.props";

export const Cards = (props: FurnituresProps) => {
  const card = Object.values(props).map((chair) => {
    return (
      <div className={styles.card} key={chair.name}>
        <span
          className={cn(styles.status, {
            [styles.status_new]: chair.status == "New",
            [styles.status_sale]: chair.status == "Sale",
            [styles.status_red]:
              chair.status != "Sale" && chair.status != "New",
          })}
        >
          {chair.status}
        </span>
        <Icons className={styles.icons} />
        <Image src={chair.pic} alt={chair.name} width={269} height={288} />
        <span className="mt-4 text-gray-400 block">{chair.product}</span>
        <Heading tag="h5" className="mt-2">
          {chair.name}
        </Heading>

        <div className="flex flex-row justify-between mt-2">
          <div className="flex gap-2">
            <span className={cn(styles.price_discount, styles.price)}>
              {chair.price_discount}
            </span>
            <span className={cn(styles.price_ghost, styles.price)}>
              {chair.price}
            </span>
          </div>
          <Rating rating={chair.rating} isEditable />
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
