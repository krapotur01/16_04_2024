'use client'

import React, {useState} from "react";
import {Products} from "./Products/Products";
import {ProductsProps} from "./Cards.props";
import ReactPaginate from "react-paginate";

export const Cards = ({products}: ProductsProps) => {
    const [itemOffset, setItemOffset] = useState(0);

    const itemsPerPage = 8;
    const pageCount = Math.ceil(products.length / itemsPerPage);
    const endOffset = itemOffset + itemsPerPage;
    const currentItems = products.slice((pageCount <= 1 ? 0 : itemOffset), endOffset);

    const handlePageClick = (event: { selected: number; }) => {
        const newOffset = (event.selected * itemsPerPage) % products.length;
        setItemOffset(newOffset);
    };

    return (
        <div className="flex gap-x-[30px] gap-y-[45px] justify-center flex-col mt-[70px] relative">
            <Products products={currentItems}/>
            <ReactPaginate
                breakLabel="..."
                nextLabel="next >"
                onPageChange={handlePageClick}
                pageRangeDisplayed={5}
                pageCount={pageCount}
                previousLabel="< previous"
                renderOnZeroPageCount={null}
            />
        </div>
    );
};
