import React from "react";
import styles from "./Headers.module.css";
import cn from "classnames";
import { HeaderProps } from "./Headers.props";
import { Heading } from "../../..";

export const Headers = (props: HeaderProps) => {
	const header = Object.values(props).map((i) => {
		return (
      <Heading
        key={i.value}
        tag="h3"
        className={cn({
          [styles.primary]: i.style == "primary",
          [styles.ghost]: i.style == "ghost",
        })}
      >
        {i.value}
      </Heading>
    );
	})
  return (
    <div className="flex flex-row items-center gap-20 mt-11">{header}</div>
  );
};
