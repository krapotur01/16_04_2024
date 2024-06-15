import {ProductsProps} from "@/app/(site)/Content/CardsProducts/Cards/Products/Products.props";

export const getProducts = ({products, category}: ProductsProps) => {
    if (category) {
        switch (category.category) {
            case 'стулья':
                return products;
            case 'кресла':
                return products;
            case 'диваны':
                return products;
            case 'столы':
                return products;
            case 'пуфы':
                return products;
            case 'шкафы':
                return products;
            default:
                return products;
        }
    } else {
        return products;
    }
}