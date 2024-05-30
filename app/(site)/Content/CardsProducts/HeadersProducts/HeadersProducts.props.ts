import {FurnitureProps} from "@/app/(site)/Content/CardsProducts/Cards/Cards.props";

export interface HeadersProps {
    headers: string[];
    getProducts: (header: string) => FurnitureProps[];
}