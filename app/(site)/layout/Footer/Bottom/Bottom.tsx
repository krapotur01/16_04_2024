import React from "react";
import { Paragraph } from "@/app/components";
import styles from "./Bottom.module.css";

export const Bottom = () => {
  return (
    <div className={styles.bottom}>
      <Paragraph size="s" color="grey">
        © 2021 Funking - All rights reserved.
      </Paragraph>

      <ul className={styles.list}>
        <li className={styles.list_item}>Privacy</li>
        <li className={styles.list_item}>Security</li>
        <li className={styles.list_item}>Terms</li>
      </ul>
    </div>
  );
};
