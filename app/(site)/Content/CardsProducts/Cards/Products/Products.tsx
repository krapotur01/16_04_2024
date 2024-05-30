import React, {useEffect, useReducer} from "react";
import Image from "next/image";
import {ProductsProps} from "./Products.props";
import {sortReducer} from "./sort.reducer";
import styles from "./Products.module.css";
import {Icons} from "./Icons_component/Icons";
import {Heading, Rating} from "@/app/components";
import {Price, Sort, Status} from "../../../components";
import {SortEnum} from "../../../components/Sort/Sort.props";

export const Products = ({products}: ProductsProps) => {
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

    return (
            <div className="flex gap-x-[30px] gap-y-[45px] justify-center flex-wrap relative">
                <Sort sort={sort} setSort={setSort}/>
                {sortedProducts.map((item) => {
                    return (
                        <div className={styles.card} key={item.name}>
                            <Status status={item.status} position="left">
                                {item.status}
                            </Status>
                            <Icons className={styles.icons}/>
                            <Image
                                src={item.pic}
                                alt={item.name}
                                width={269}
                                height={288}
                                className="w-[269px] h-[288px]"
                            />
                            <span className="mt-4 text-gray-400 block">{item.product}</span>
                            <Heading tag="h5" className="mt-2">
                                {item.name}
                            </Heading>

                            <div className="flex flex-row justify-between mt-2">
                                <div className="flex gap-2">
                                    <Price price="discount">{item.price_discount}</Price>
                                    <Price price="ghost">{item.price}</Price>
                                </div>
                                <Rating rating={item.rating} isEditable/>
                            </div>
                        </div>
                    )
                })}
            </div>
    );
};
