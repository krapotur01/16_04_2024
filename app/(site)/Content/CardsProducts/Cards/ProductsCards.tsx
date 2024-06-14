'use client'

import React, {useState} from "react";
import {Products} from "./Products/Products";
import ReactPaginate from "react-paginate";
import {ProductsProps} from "./ProductsCards.props";
import Arrow from "./icon_arrow.svg";
import styles from "./ProductsCards.module.css";

export const ProductsCards = ({products}: ProductsProps) => {
    const [itemOffset, setItemOffset] = useState<number>(0);

    const itemsPerPage: number = 8;
    const pageCount = Math.ceil(products.length / itemsPerPage);
    const endOffset = itemOffset + itemsPerPage;
    const currentItems = products.slice((pageCount <= 1 ? 0 : itemOffset), endOffset);

    const handlePageClick = (event: { selected: number; }) => {
        const newOffset = (event.selected * itemsPerPage) % products.length;
        setItemOffset(newOffset);
    };

    return (
        <div className="flex gap-x-[30px] gap-y-[45px] items-end justify-center flex-col mt-[70px] relative">
            <Products products={currentItems}/>
            <ReactPaginate
                breakLabel="..."
                nextLabel={<Arrow className='hover:fill-[var(--primary)]' />}
                onPageChange={handlePageClick}
                pageRangeDisplayed={5}
                pageCount={pageCount}
                previousLabel={<Arrow className='rotate-180 hover:fill-[var(--primary)]' />}
                renderOnZeroPageCount={null}
                containerClassName={styles.container}
                activeClassName={styles.active}
                pageClassName={styles.page}
            />
        </div>
    );
};
