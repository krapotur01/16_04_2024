import React from "react";
import { ParagraphProps } from "./Paragraph.props";
import cn from "classnames";
import styles from "./Paragraph.module.css";

export const Paragraph = ({
  children,
  size = "m", className, 
  ...props
}: ParagraphProps): JSX.Element => {
  return (
    <p
      {...props}
      className={cn(styles.paragraph, className, {
        [styles.small]: size == "s",
        [styles.medium]: size == "m",
        [styles.large]: size == "l",
        [styles.eXtra_large]: size == "xl",
      })}
    >
      {children}
    </p>
  );
};
