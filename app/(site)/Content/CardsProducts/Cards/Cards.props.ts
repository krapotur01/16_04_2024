export interface FurnitureProps {
  id?: number;
  status: string;
  pic: string;
  product: string;
  name: string;
  price_discount: string;
  price: string;
  rating: number;
}

export interface CardsProps {
  products: FurnitureProps[];
}