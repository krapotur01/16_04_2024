import React from 'react'
import Facebook from "@/public/ic-facebook.svg";
import Twitter from "@/public/ic-twitter.svg";
import Instagram from "@/public/ic-instagram.svg";
import Pinterset from "@/public/ic-pinterset.svg";
import styles from "./Icons.module.css";

export const Icons = () => {
  return (
    <ul className={styles.icons}>
      <li className={styles.icon}>
        <Facebook />
      </li>
      <li className={styles.icon}>
        <Twitter />
      </li>
      <li className={styles.icon}>
        <Instagram />
      </li>
      <li className={styles.icon}>
        <Pinterset />
      </li>
    </ul>
  );
}
