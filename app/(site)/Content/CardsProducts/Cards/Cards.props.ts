export interface FurnitureProps {
  status: string;
  pic: string;
  product: string;
  name: string;
  price_discount: string;
  price: string;
  rating: number;
}

export interface ProductsProps {
  products: FurnitureProps[];
}

export interface GetProducts {
  headers: string[];
  getProducts: (product: string ) => FurnitureProps[];
}