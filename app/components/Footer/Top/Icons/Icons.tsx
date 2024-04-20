import React from 'react'
import Image from "next/image";
import styles from "./Icons.module.css";

export const Icons = () => {
  return (
    <ul className={styles.icons}>
      <li className={styles.icon}>
        <Image
          src="./ic-facebook.svg"
          alt="icon facebook"
          width={8.24}
          height={16.95}
        />
      </li>
      <li className={styles.icon}>
        <Image
          src="./ic-twitter.svg"
          alt="icon twitter"
          width={16.95}
          height={13.77}
        />
      </li>
      <li className={styles.icon}>
        <Image
          src="./ic-instagram.svg"
          alt="icon instagram"
          width={16.1}
          height={16.1}
        />
      </li>
      <li className={styles.icon}>
        <Image
          src="./ic-pinterset.svg"
          alt="icon pinterset"
          width={13.04}
          height={16.95}
        />
      </li>
    </ul>
  );
}
