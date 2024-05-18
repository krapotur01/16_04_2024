import { Heading, Paragraph } from "@/app/components";
import Image from "next/image";
import styles from "./Testimonial.module.css";
import сlient from "@/public/Image _client.png";
import Arrow from "./icon_arrow.svg";

export const Testimonial = () => {
  return (
    <div className="flex flex-wrap gap-7 items-center justify-center mt-[90px]">
      <span className={styles.arrow_span}>
        <Arrow className="rotate-180" />
      </span>
      <div className="flex flex-col relative items-center justify-center w-[51rem] h-[312px] bg-[var(--beige)] rounded-xl">
        <Image
          src={сlient}
          alt="фото клиента"
          className="absolute top-[-46px]"
        />
        <Paragraph size="m" className="w-[36rem] text-center">
          I like Furniking.com and as compared to other company it`s polices and
          customers support is very good easy to reach., also many time they
          unable to delivered. The ultricies are pregnant while the quis is
          suspended. Risus commodo viverra maecenas accumsan lacus vel
          facilisist amet.
        </Paragraph>
        <Heading tag="h3" className="mt-8 text-[var(--grey)]">
          Angelina Joly
        </Heading>
        <span className="mt-2 text-base text-[var(--grey)]">Co-founder</span>
      </div>
      <span className={styles.arrow_span}>
        <Arrow className="hover:fill-[var(--primary)]" />
      </span>
    </div>
  );
};
