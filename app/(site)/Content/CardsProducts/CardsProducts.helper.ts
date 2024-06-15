import {getTrendProducts, headersTrendProducts} from "@/app/(site)/Content/api/trendsData";
import {getOurProducts, headersOurProducts} from "@/app/(site)/Content/api/ourProductsData";
import {FurnitureProps} from "@/app/(site)/Content/CardsProducts/Cards/Cards.props";

export const getHeaders = (header: string) => {
    let headers: string[] = [];
    switch (header) {
        case "TRENDING":
            headers = headersTrendProducts;
            break;
        case "OUR PRODUCTS":
            headers = headersOurProducts;
            break;
        default:
            return headers;
    }
    return headers;
}

export const getProducts = (header:  string, currentHeader:  string): FurnitureProps[] => {
    let allProducts: FurnitureProps[] = [];
    switch (header) {
        case "TRENDING":
            return getTrendProducts(currentHeader);
        case "OUR PRODUCTS":
            return getOurProducts(currentHeader);
        default:
            allProducts = getTrendProducts(currentHeader).concat(getOurProducts(currentHeader));
            return allProducts;
    }
}