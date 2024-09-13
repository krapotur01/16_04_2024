import React from 'react';
import CreateCategory from "./forms/createCategory";
import UpdateCategory from "./forms/updateCategory";
import DeleteCategory from "./forms/deleteCategory";

const Categories = () => {
    return (
        <div className="flex flex-row flex-wrap gap-4">
            <CreateCategory />
            <UpdateCategory />
            <DeleteCategory />
        </div>
    );
};

export default Categories;