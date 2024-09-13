import React from 'react';
import {Heading} from "@/app/components";
import Categories from "./categories/Categories";

const AdminBord = () => {
    return (
        <div className="flex flex-col gap-4 w-full items-center mt-12">
            <Heading tag="h2">Панель Администратора</Heading>
            <Categories/>
        </div>
    );
};

export default AdminBord;