import { FurnitureProps } from "../components/Content/components/Cards/Cards.props";

export const headersTrendProducts: string[] = [
  "Top Products",
  "New Arrivals",
  "Best Sellers",
];

export const topProductsTrend: FurnitureProps[] = [
  {
    status: "New",
    pic: "/chairs_trend/Minimal_LCD.png",
    product: "CHAIR",
    name: "Minimal LCD chair",
    price_discount: "$180",
    price: "$250",
    rating: 5,
  },
  {
    status: "New",
    pic: "/chairs_trend/Minimal_iconic.png",
    product: "CHAIR",
    name: "Minimal iconic chair",
    price_discount: "$120",
    price: "$150",
    rating: 4,
  },
  {
    status: "Sale",
    pic: "/chairs_trend/Dining.png",
    product: "CHAIR",
    name: "Dining chairs",
    price_discount: "$100",
    price: "$120",
    rating: 5,
  },
  {
    status: "Sale",
    pic: "/chairs_trend/Buskbo_armchair.png",
    product: "CHAIR",
    name: "Buskbo armchair ",
    price_discount: "$130",
    price: "$150",
    rating: 4,
  },
  {
    status: "Sale",
    pic: "/chairs_trend/Modern_chair.png",
    product: "CHAIR",
    name: "Modern chair",
    price_discount: "$100",
    price: "$120",
    rating: 0,
  },
  {
    status: "Sale",
    pic: "/chairs_trend/Plastic_dining_chair.png",
    product: "CHAIR",
    name: "Plastic dining chair",
    price_discount: "$130",
    price: "$250",
    rating: 4,
  },
  {
    status: "New",
    pic: "/chairs_trend/Minimal_Wood_chair.png",
    product: "CHAIR",
    name: "Minimal Wood chair",
    price_discount: "$180",
    price: "$250",
    rating: 5,
  },
  {
    status: "New",
    pic: "/chairs_trend/Elegant_wood_chair.png",
    product: "CHAIR",
    name: "Elegant wood chair",
    price_discount: "$180",
    price: "$250",
    rating: 5,
  },
];

export const newArrivalsTrend: FurnitureProps[] = [
  {
    status: "Sale",
    pic: "/our_products/Minimal_LCD_chair.png",
    product: "CHAIR",
    name: "Minimal LCD chair",
    price_discount: "$180",
    price: "$250",
    rating: 5,
  },
  {
    status: "New",
    pic: "/our_products/Modern_Sofa.png",
    product: "SOFA",
    name: "Modern Sofa",
    price_discount: "$120",
    price: "$150",
    rating: 4,
  },
  {
    status: "-30%",
    pic: "/our_products/Microfiber_Sofa.png",
    product: "SOFA",
    name: "Microfiber Sofa",
    price_discount: "$100",
    price: "$150",
    rating: 4,
  },
  {
    status: "Sale",
    pic: "/our_products/Wood_Coffee_Tables.png",
    product: "TABLE",
    name: "Wood Coffee Tables",
    price_discount: "$100",
    price: "$120",
    rating: 5,
  },
  {
    status: "-30%",
    pic: "/our_products/Acacia_Wood_Club_Chairs.png",
    product: "BENCH",
    name: "Acacia Wood Club Chairs",
    price_discount: "$100",
    price: "$150",
    rating: 0,
  },
  {
    status: "Sale",
    pic: "/our_products/Amalia_Cowhide_Bench.png",
    product: "STORAGE",
    name: "Amalia Cowhide Bench",
    price_discount: "$130",
    price: "$150",
    rating: 4,
  },
  {
    status: "New",
    pic: "/our_products/Juno_Hinged_Lid_Storage.png",
    product: "FURNITURE",
    name: "Juno-Hinged Lid Storage",
    price_discount: "$180",
    price: "$250",
    rating: 5,
  },
  {
    status: "New",
    pic: "/our_products/Delicia_3_Piece_Living_Room.png",
    product: "CHAIR",
    name: "Delicia 3 Piece Living Room",
    price_discount: "$120",
    price: "$150",
    rating: 4,
  },
];

export const bestSellersTrend: FurnitureProps[] = [
  {
    status: "New",
    pic: "/chairs_trend/Minimal_LCD.png",
    product: "CHAIR",
    name: "Minimal LCD chair",
    price_discount: "$180",
    price: "$250",
    rating: 5,
  },
  {
    status: "New",
    pic: "/chairs_trend/Minimal_iconic.png",
    product: "CHAIR",
    name: "Minimal iconic chair",
    price_discount: "$120",
    price: "$150",
    rating: 4,
  },
  {
    status: "Sale",
    pic: "/chairs_trend/Dining.png",
    product: "CHAIR",
    name: "Dining chairs",
    price_discount: "$100",
    price: "$120",
    rating: 5,
  },
  {
    status: "Sale",
    pic: "/chairs_trend/Buskbo_armchair.png",
    product: "CHAIR",
    name: "Buskbo armchair ",
    price_discount: "$130",
    price: "$150",
    rating: 4,
  },
  {
    status: "Sale",
    pic: "/chairs_trend/Modern_chair.png",
    product: "CHAIR",
    name: "Modern chair",
    price_discount: "$100",
    price: "$120",
    rating: 0,
  },
  {
    status: "Sale",
    pic: "/chairs_trend/Plastic_dining_chair.png",
    product: "CHAIR",
    name: "Plastic dining chair",
    price_discount: "$130",
    price: "$250",
    rating: 4,
  },
  {
    status: "New",
    pic: "/chairs_trend/Minimal_Wood_chair.png",
    product: "CHAIR",
    name: "Minimal Wood chair",
    price_discount: "$180",
    price: "$250",
    rating: 5,
  },
  {
    status: "New",
    pic: "/chairs_trend/Elegant_wood_chair.png",
    product: "CHAIR",
    name: "Elegant wood chair",
    price_discount: "$180",
    price: "$250",
    rating: 5,
  },
];

export const getTrendProducts = (products: string | null) => {
  switch (products) {
    case "Top Products":
      return topProductsTrend;
    case "New Arrivals":
      return newArrivalsTrend;
    case "Best Sellers":
      return bestSellersTrend;
    default:
      return topProductsTrend;
  }
};
