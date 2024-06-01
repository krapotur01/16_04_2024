import {DetailedHTMLProps, HTMLAttributes, ReactNode} from "react";

export interface PriceProps extends DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement> {
    children: ReactNode;
    price?: "discount" | "ghost";
}
