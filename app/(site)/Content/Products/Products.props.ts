import {DetailedHTMLProps, HTMLAttributes} from "react";

export interface FurnitureProps {
  id: number;
  category?: string;
  status: string;
  pic: string;
  product: string;
  name: string;
  price_discount: string;
  price: string;
  rating: number;
  bestSeller: boolean;
  newArrivals: boolean;
  description?: string;
}

export interface ProductsProps {
  products: FurnitureProps[];
}

export interface HeaderProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  header: string;
  category?: string;

}
