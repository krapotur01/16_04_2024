import React, {useEffect, useState} from "react";
import {FurnitureProps, ProductsProps} from "./Products.props";
import styles from "./Products.module.css";
import {getProducts} from "@/app/(site)/Content/CardsProducts/Cards/Products/getProducts.helper";
import {SortedProducts} from "@/app/(site)/Content/CardsProducts/Cards/Products/SortedProducts/SortedProducts";

export const Products = ({products, category}: ProductsProps) => {
    const [productsByCategory, setProductsByCategory] = useState<FurnitureProps[]>([]);

    useEffect(() => {
        if(category) {
            setProductsByCategory(getProducts({products, category}));
        } else {
            setProductsByCategory(products);
        }
    }, [products, category])



    return (
        <div className={styles.cards}>
            <SortedProducts products={productsByCategory} />
        </div>
    );
};
