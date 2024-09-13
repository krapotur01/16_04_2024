import React from 'react';
import {Users} from './Users';
import {getAllUsers} from "@/app/actions/auth";

const Page = async () => {
    const allUsers = await getAllUsers();

    return (
        <Users {...allUsers} />
    );
};

export default Page;