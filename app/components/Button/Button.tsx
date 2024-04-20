import React, { useState } from "react";
import { ButtonProps } from "./Button.props";
import Arrow from "./arrow.svg";
import cn from "classnames";
import styles from "./Button.module.css";

export const Button = ({
  children,
  arrow = "none",
  appearance,
  className,
  ...props
}: ButtonProps): JSX.Element => {
  return (
    <button
      {...props}
      className={cn(styles.button, className, {
        [styles.primary]: appearance == "primary",
      })}
    >
      {children}
      {arrow !== "none" && (
        <span
          className={cn(styles.arrow, {
            [styles.right]: arrow == "right",
            [styles.down]: arrow == "down",
          })}
        >
          <Arrow />
        </span>
      )}
    </button>
  );
};
