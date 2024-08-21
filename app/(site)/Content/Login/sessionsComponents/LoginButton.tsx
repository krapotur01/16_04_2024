"use client";

import React from 'react';
import {Button} from "@nextui-org/react";

interface IProps {
    onOpen: () => void,
    isAuth?: boolean
}

const LoginButton = ({onOpen, isAuth}: IProps) => {
    if(isAuth) return null;

    return (
        <Button className="bg-[var(--primery)] h-8" onPress={onOpen} color="primary" variant="shadow">Войти</Button>
    );
};

export default LoginButton;