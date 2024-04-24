import { ReactNode, DetailedHTMLProps, HTMLAttributes } from "react";

export interface HeadingProps
  extends DetailedHTMLProps<
      HTMLAttributes<HTMLHeadingElement>,
      HTMLHeadingElement
    > {
  children: ReactNode;
  tag: "h1" | "h2" | "h3" | "h4" | "h5";
}

// MouseEvent<HTMLLabelElement, MouseEvent>;