import Image from "next/image";
import {Heading, Rating} from "@/app/components";
import {getProductById} from "@/app/(site)/Content/api/products";
import {Price} from "@/app/(site)/Content/components";
import styles from "@/app/(site)/Content/Products/Cards/SortedProducts/SortedProducts.module.css";
import React from "react";

export const ProductPage = ({id}: { id: number }) => {

    const product = getProductById(id);

    return (
        <div className="flex items-center justify-center w-full">
            {product && (
                <div className="flex flex-col items-center gap-5">
                    <Heading tag="h2">{product.name}</Heading>

                    <div className="flex items-start gap-8 ss:flex-col ss:items-center lg:flex-row lg:items-start">
                        <div className="flex flex-col items-center">
                            <Image
                                src={product.pic}
                                alt={product.name}
                                width="0"
                                height="0"
                                sizes="100vw"
                                className="w-[269px] h-[288px] rounded-xl"
                            />

                            <div></div>
                        </div>

                        <div className="flex flex-col items-start gap-3 m-3">
                            <div className="flex flex-row flex-nowrap gap-3">
                                <Price price="discount" className={styles.price}>{product.price_discount}</Price>
                                <Price price="ghost" className={styles.price}>{product.price}</Price>
                            </div>
                            <Rating rating={product.rating}/>
                            <div className="max-w-lg">
                                <p>{product.description}</p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}