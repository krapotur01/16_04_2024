export interface FurnitureProps {
  status: string;
  pic: string;
  product: string;
  name: string;
  price_discount: string;
  price: string;
  rating: number;
}

export interface GetProducts {
  headerNames: {
    firstHeader: string;
    secondHeader: string;
    thirdHeader: string;
    fourthHeader?: string;
    fifthHeader?: string;
  };
  getProducts: (product: string) => any;
}

// export interface FurnituresProps {
//   [index: number]: FurnitureProps;
// }
