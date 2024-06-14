import {FurnitureProps} from "@/app/(site)/Content/CardsProducts/Cards/ProductsCards.props";

export interface HeadersProps {
    headers: string[];
    getProducts: (header: string) => FurnitureProps[];
}