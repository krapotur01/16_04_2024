import { ReactNode } from "react";

export interface PriceProps {
  children: ReactNode;
  price?: "discount" | "ghost";
}
