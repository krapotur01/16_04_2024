import {SortEnum} from "@/app/(site)/Content/components/Sort/Sort.props";
import {FurnitureProps} from "./Products.props";

export type SortAction = { type: SortEnum.Rating, products: FurnitureProps[] } | { type: SortEnum.Price, products: FurnitureProps[] };

export interface sortReducerState {
    sort?: SortEnum;
    products: FurnitureProps[];
}

export const sortReducer = (state: sortReducerState, action: SortAction) => {
    if(state.products !== action.products) {
        state.products = action.products;
    }

    switch (action.type) {
        case SortEnum.Rating:
            return {
                sort: SortEnum.Rating,
                products: state.products.sort((a, b) => a.rating > b.rating ? -1 : 1),
            };
        case SortEnum.Price:
            return {
                sort: SortEnum.Price,
                products: state.products.sort((a, b) => a.price > b.price ? -1 : 1),
            };
        default:
            throw new Error('Не верный тип сортировки!');
    }
}