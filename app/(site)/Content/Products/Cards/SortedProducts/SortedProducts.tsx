import React, {useEffect, useReducer} from "react";
import Image from "next/image";
import {ProductsProps} from "../../Products.props";
import {sortReducer} from "./sort.reducer";
import styles from "./SortedProducts.module.css";
import {Icons} from "./Icons_component/Icons";
import {Heading, Rating} from "@/app/components";
import {Price, Sort, Status} from "../../../components";
import {SortEnum} from "../../../components/Sort/Sort.props";
import cn from "classnames";
import Link from "next/link";

export const SortedProducts = ({products}: ProductsProps) => {
    const [{products: sortedProducts, sort}, dispatchSort] = useReducer(sortReducer, {
        sort: SortEnum.Rating,
        products,
    });

    useEffect(() => {
        dispatchSort({type: SortEnum.Rating, products})
    }, [products]);

    const setSort = (sort: SortEnum) => {
        dispatchSort({type: sort, products})
    }

    const sortedProduct = sortedProducts.map((item, index) => {
        return (
            <div className={styles.card} key={index}>
                <Status status={item.status} position="left">
                    {item.status}
                </Status>
                <Icons className={styles.icons}/>
                <Link href={{
                    pathname: `/products/${item.category}/${item.name}`,
                    query: {search: item.id}
                }}
                >
                    <Image
                        src={item.pic}
                        alt={item.name}
                        width="0"
                        height="0"
                        sizes="100vw"
                        className={styles.image}
                    />
                </Link>
                <span className="mt-4 text-gray-400 block">{item.product}</span>
                <Heading tag="h5" className={cn(styles.title, 'ss:text-center lg:text-start')}>
                    {item.name}
                </Heading>

                <div className="flex ss:flex-col lg:flex-row items-center justify-between mt-2">
                    <div className="flex gap-2">
                        <Price price="discount" className={styles.price}>{item.price_discount}</Price>
                        <Price price="ghost" className={styles.price}>{item.price}</Price>
                    </div>
                    <Rating rating={item.rating} isEditable/>
                </div>
            </div>
        )
    })

    return (
        <div className={styles.cards}>
            <Sort sort={sort} setSort={setSort}/>
            {sortedProduct}
        </div>
    )
};
