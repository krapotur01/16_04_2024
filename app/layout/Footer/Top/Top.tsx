import React from "react";
import Logo from "@/public/Logo.svg";
import { Lists_block } from "./Lists_block/Lists_block";
import styles from "./Top.module.css";
import { Paragraph } from "@/app/components";
import { Icons } from "./IconsComponent/Icons";

export const Top = () => {
  return (
    <div className={styles.top}>
      <div className={styles.logo_column}>
        <Logo />
        <Paragraph className={styles.p} size="l" color="grey">
          Funking is the a popular Ecommerce site. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit, sed do eiusmod tempor
        </Paragraph>
        <Icons />
      </div>
      <Lists_block />
    </div>
  );
};
