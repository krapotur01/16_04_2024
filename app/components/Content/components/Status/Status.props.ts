import React, { ReactNode, DetailedHTMLProps, HTMLAttributes } from "react";

export interface StatusProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement> {
  children: ReactNode;
  status?: string;
  position?: "left" | "right";
}
