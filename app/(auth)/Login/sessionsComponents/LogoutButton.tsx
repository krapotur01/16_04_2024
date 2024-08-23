"use client";

import React from 'react';
import {logout} from "@/app/actions/auth";
import {Button} from "@nextui-org/react";

interface IProps {
    isAuth?: boolean
}

const LogoutButton = ({isAuth}:IProps) => {
    if(!isAuth) return null;

    return (
        <Button className="bg-red-400 text-[var(--white)] h-8" color="primary" variant="shadow" onClick={()=>logout()}>Выйти</Button>
    );
};

export default LogoutButton;