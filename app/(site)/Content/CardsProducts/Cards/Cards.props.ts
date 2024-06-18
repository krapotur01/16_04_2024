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
}

export interface CardsProps {
  products: FurnitureProps[];
}