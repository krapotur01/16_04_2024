export interface FurnitureProps {
  status: string;
  pic: string;
  product: string;
  name: string;
  price_discount: string;
  price: string;
  rating: number;
}

export interface ICategories {
  category: 'стулья' | 'кресла' | 'диваны' | 'столы' | 'пуфы' | 'шкафы';
}

export interface ProductsProps {
  products: FurnitureProps[];
  category?: ICategories;
}
