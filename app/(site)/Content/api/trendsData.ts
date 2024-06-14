import { FurnitureProps } from "../CardsProducts/Cards/ProductsCards.props";

export const headersTrendProducts: string[] = [
  "Top Products",
  "New Arrivals",
  "Best Sellers",
];

const topProductsTrend: FurnitureProps[] = [
  {
    id: 1,
    status: "New",
    pic: "/chairs_trend/Minimal_LCD.png",
    product: "КРЕСЛО",
    name: "Минималистичное кресло",
    price_discount: "2800р.",
    price: "3500р.",
    rating: 5,
  },
  {
    id: 2,
    status: "New",
    pic: "/chairs_trend/Minimal_iconic.png",
    product: "СТУЛ",
    name: "Минималистичный культовый стул",
    price_discount: "1950р.",
    price: "2500р.",
    rating: 4,
  },
  {
    id: 3,
    status: "Sale",
    pic: "/chairs_trend/Dining.png",
    product: "СТУЛ",
    name: "Обеденный стул",
    price_discount: "1700р.",
    price: "1900р.",
    rating: 5,
  },
  {
    id: 4,
    status: "Sale",
    pic: "/chairs_trend/Buskbo_armchair.png",
    product: "КРЕСЛО",
    name: "Кресло Buskbo",
    price_discount: "2200р.",
    price: "2600р.",
    rating: 4,
  },
  {
    id: 5,
    status: "Sale",
    pic: "/chairs_trend/Modern_chair.png",
    product: "СТУЛ",
    name: "Стул повседневный",
    price_discount: "2100р.",
    price: "2700р.",
    rating: 0,
  },
  {
    id: 6,
    status: "Sale",
    pic: "/chairs_trend/Plastic_dining_chair.png",
    product: "СТУЛ",
    name: "Пластиковый обеденный стул",
    price_discount: "1570р.",
    price: "1800р.",
    rating: 4,
  },
  {
    id: 7,
    status: "New",
    pic: "/chairs_trend/Minimal_Wood_chair.png",
    product: "СТУЛ",
    name: "Минималистичный деревянный стул",
    price_discount: "2000р.",
    price: "2400р.",
    rating: 5,
  },
  {
    id: 8,
    status: "New",
    pic: "/chairs_trend/Minimal_LCD.png",
    product: "СТУЛ",
    name: "Современный новый стул",
    price_discount: "2300р.",
    price: "2800р.",
    rating: 3,
  },
];

const newArrivalsTrend: FurnitureProps[] = [
  {
    status: "Sale",
    pic: "/our_products/Minimal_LCD_chair.png",
    product: "СТУЛ",
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
    product: "СТУЛ",
    name: "Deli 3 Piece Living Room",
    price_discount: "$120",
    price: "$150",
    rating: 4,
  },
];

const bestSellersTrend: FurnitureProps[] = [
  {
    status: "New",
    pic: "/chairs_trend/Minimal_LCD.png",
    product: "СТУЛ",
    name: "Minimal LCD chair",
    price_discount: "$180",
    price: "$250",
    rating: 5,
  },
  {
    status: "New",
    pic: "/chairs_trend/Minimal_iconic.png",
    product: "СТУЛ",
    name: "Minimal iconic chair",
    price_discount: "$120",
    price: "$150",
    rating: 4,
  },
  {
    status: "Sale",
    pic: "/chairs_trend/Dining.png",
    product: "СТУЛ",
    name: "Dining chairs",
    price_discount: "$100",
    price: "$120",
    rating: 5,
  },
  {
    status: "Sale",
    pic: "/chairs_trend/Buskbo_armchair.png",
    product: "СТУЛ",
    name: "Bush armchair ",
    price_discount: "$130",
    price: "$150",
    rating: 4,
  },
  {
    status: "Sale",
    pic: "/chairs_trend/Modern_chair.png",
    product: "СТУЛ",
    name: "Modern chair",
    price_discount: "$100",
    price: "$120",
    rating: 0,
  },
  {
    status: "Sale",
    pic: "/chairs_trend/Plastic_dining_chair.png",
    product: "СТУЛ",
    name: "Plastic dining chair",
    price_discount: "$130",
    price: "$250",
    rating: 4,
  },
  {
    status: "New",
    pic: "/chairs_trend/Minimal_Wood_chair.png",
    product: "СТУЛ",
    name: "Minimal Wood chair",
    price_discount: "$180",
    price: "$250",
    rating: 5,
  },
  {
    status: "New",
    pic: "/chairs_trend/Elegant_wood_chair.png",
    product: "СТУЛ",
    name: "Elegant wood chair",
    price_discount: "$180",
    price: "$250",
    rating: 5,
  },
];

const allProducts = topProductsTrend.concat(bestSellersTrend, bestSellersTrend);


export const getTrendProducts = (products: string) => {
  if (products === 'All products') {
    return allProducts;
  } else {
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
  }
};
