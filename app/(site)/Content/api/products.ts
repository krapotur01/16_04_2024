import {FurnitureProps} from "../CardsProducts/Cards/Cards.props";

export const allProducts: FurnitureProps[] = [
    {
        id: 1,
        category: 'armchairs',
        status: "Sale",
        pic: "/our_products/Minimal_LCD_chair.png",
        product: "КРЕСЛО",
        name: "Кресло неболших размеров",
        price_discount: "7150р.",
        price: "8350р.",
        rating: 5,
        bestSeller: true,
        newArrivals: false,
    },
    {
        id: 2,
        category: 'sofas',
        status: "New",
        pic: "/our_products/Modern_Sofa.png",
        product: "ДИВАН",
        name: "Современный диван",
        price_discount: "13700р.",
        price: "14500р.",
        rating: 4,
        bestSeller: false,
        newArrivals: true,
    },
    {
        id: 3,
        category: 'sofas',
        status: "-30%",
        pic: "/our_products/Microfiber_Sofa.png",
        product: "ДИВАН",
        name: "Диван из микрофибры",
        price_discount: "15900р.",
        price: "17700р.",
        rating: 4,
        bestSeller: true,
        newArrivals: false,
    },
    {
        id: 4,
        category: 'tables',
        status: "Sale",
        pic: "/our_products/Wood_Coffee_Tables.png",
        product: "СТОЛ",
        name: "Деревянный журнальный столик",
        price_discount: "1570р.",
        price: "1900р.",
        rating: 5,
        bestSeller: true,
        newArrivals: false,
    },
    {
        id: 5,
        category: 'chairs',
        status: "-30%",
        pic: "/our_products/Acacia_Wood_Club_Chairs.png",
        product: "СТУЛ",
        name: "Стулья из дерева акации",
        price_discount: "3890р.",
        price: "4350р.",
        rating: 0,
        bestSeller: true,
        newArrivals: false,
    },
    {
        id: 6,
        category: 'tables',
        status: "Sale",
        pic: "/our_products/Amalia_Cowhide_Bench.png",
        product: "СТОЛ",
        name: "Стол с натуральной кожей Amalia",
        price_discount: "3150р.",
        price: "4200р.",
        rating: 4,
        bestSeller: false,
        newArrivals: true,
    },
    {
        id: 7,
        category: 'poufs',
        status: "New",
        pic: "/our_products/Juno_Hinged_Lid_Storage.png",
        product: "ПУФ",
        name: "Пуф с откидной крышкой Juno",
        price_discount: "2250р.",
        price: "3100р.",
        rating: 5,
        bestSeller: true,
        newArrivals: false,
    },
    {
        id: 8,
        category: 'sofas',
        status: "New",
        pic: "/our_products/Delicia_3_Piece_Living_Room.png",
        product: "СТУЛ",
        name: "Гостиная Delicia из 3 частей",
        price_discount: "37450р.",
        price: "41200р.",
        rating: 4,
        bestSeller: true,
        newArrivals: false,
    },
    {
        id: 9,
        category: 'armchairs',
        status: "New",
        pic: "/chairs_trend/Minimal_LCD.png",
        product: "КРЕСЛО",
        name: "Минималистичное кресло",
        price_discount: "2800р.",
        price: "3500р.",
        rating: 5,
        bestSeller: false,
        newArrivals: true,
    },
    {
        id: 10,
        category: 'chairs',
        status: "New",
        pic: "/chairs_trend/Minimal_iconic.png",
        product: "СТУЛ",
        name: "Минималистичный культовый стул",
        price_discount: "1950р.",
        price: "2500р.",
        rating: 4,
        bestSeller: false,
        newArrivals: true,

    },
    {
        id: 11,
        category: 'armchairs',
        status: "Sale",
        pic: "/chairs_trend/Dining.png",
        product: "КРЕСЛО",
        name: "Обеденное кресло",
        price_discount: "1700р.",
        price: "1900р.",
        rating: 5,
        bestSeller: true,
        newArrivals: false,
    },
    {
        id: 12,
        category: 'armchairs',
        status: "Sale",
        pic: "/chairs_trend/Buskbo_armchair.png",
        product: "КРЕСЛО",
        name: "Кресло Buskbo",
        price_discount: "2200р.",
        price: "2600р.",
        rating: 4,
        bestSeller: true,
        newArrivals: false,
    },
    {
        id: 13,
        category: 'armchairs',
        status: "Sale",
        pic: "/chairs_trend/Modern_chair.png",
        product: "КРЕСЛО",
        name: "Кресло повседневное",
        price_discount: "2100р.",
        price: "2700р.",
        rating: 3,
        bestSeller: true,
        newArrivals: false,
    },
    {
        id: 14,
        category: 'chairs',
        status: "Sale",
        pic: "/chairs_trend/Plastic_dining_chair.png",
        product: "СТУЛ",
        name: "Пластиковый обеденный стул",
        price_discount: "1570р.",
        price: "1800р.",
        rating: 4,
        bestSeller: true,
        newArrivals: false,
    },
    {
        id: 15,
        category: 'chairs',
        status: "New",
        pic: "/chairs_trend/Minimal_Wood_chair.png",
        product: "СТУЛ",
        name: "Минималистичный деревянный стул",
        price_discount: "2000р.",
        price: "2400р.",
        rating: 5,
        bestSeller: false,
        newArrivals: true,
    },
    {
        id: 16,
        category: 'armchairs',
        status: "New",
        pic: "/chairs_trend/Elegant_wood_chair.png",
        product: "КРЕСЛО",
        name: "Элегантное деревянное кресло",
        price_discount: "2300р.",
        price: "2800р.",
        rating: 3,
        bestSeller: false,
        newArrivals: true,
    },
];

const getBestSeller = (products: FurnitureProps[]) => {
    let bestSeller: FurnitureProps[] = products.filter((item) => {
        if (item.bestSeller) {
            return item;
        }
    })
    return bestSeller;
}

const getNewArrivals = (products: FurnitureProps[]) => {
    let newArrivals: FurnitureProps[] = products.filter((item) => {
        if (item.newArrivals) {
            return item;
        }
    })
    return newArrivals;
}

export const getProducts = (header: string, category?: string) => {
    if (category) {
        let productsByCategory: FurnitureProps[] = allProducts.filter((item) => {
            if (item.category === category) {
                return item;
            }
        })
        return productsByCategory;
    } else {
        switch (header) {
            case "Все товары":
                return allProducts;
            case "Лучшие продажи":
                return getBestSeller(allProducts);
            case "Новые поступления":
                return getNewArrivals(allProducts);
            default:
                return allProducts;
        }
    }
};
