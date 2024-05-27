import React from "react";

export enum SortEnum {
    Rating,
    Price,
}

export interface SortProps extends React.HTMLAttributes<HTMLDivElement> {
    sort: SortEnum;
    setSort: (sort: SortEnum) => void;
}