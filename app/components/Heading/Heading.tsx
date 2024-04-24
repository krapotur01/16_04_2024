import React from "react";
import { HeadingProps } from "./Heading.props";
import cn from "classnames";
import styles from "./Heading.module.css";

export const Heading = ({
  tag,
  children,
  className,
  ...props
}: HeadingProps): JSX.Element => {
  switch (tag) {
    case "h1":
      return (
        <h1 {...props} className={cn(styles.heading, styles.h1, className)}>
          {children}
        </h1>
      );
    case "h2":
      return (
        <h2 {...props} className={cn(styles.heading, styles.h2, className)}>
          {children}
        </h2>
      );
    case "h3":
      return (
        <h3 {...props} className={cn(styles.heading, styles.h3, className)}>
          {children}
        </h3>
      );
    case "h4":
      return (
        <h4 {...props} className={cn(styles.heading, styles.h4, className)}>
          {children}
        </h4>
      );
    case "h5":
      return (
        <h5 {...props} className={cn(styles.heading, styles.h5, className)}>
          {children}
        </h5>
      );
    default:
      return <></>;
  }
};
