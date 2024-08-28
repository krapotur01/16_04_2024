'use client';

import React from "react";
import {logout} from "@/app/actions/auth";
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, User} from "@nextui-org/react";


interface IProps {
    isAuth?: boolean,
    userEmail?: string,
    userName?: string,
}

export default function Avatar({isAuth, userEmail, userName}: IProps) {
    if (!isAuth) return null;

    return (
        <Dropdown placement="bottom-start">
            <DropdownTrigger>
                <User
                    as="button"
                    avatarProps={{
                        isBordered: true,
                        src: "/usersAvatars/avatar2.png",
                    }}
                    className="transition-transform"
                    description={userEmail}
                    name={userName}
                />
            </DropdownTrigger>
            <DropdownMenu aria-label="User Actions" variant="flat">
                <DropdownItem key="profile" className="h-14 gap-2">
                    <p className="">Вы вошли как:</p>
                    <p className="font-bold">{userEmail}</p>
                </DropdownItem>
                <DropdownItem key="settings">Мой профиль</DropdownItem>
                <DropdownItem key="logout" color="danger" onClick={()=>logout()}>
                    Выйти
                </DropdownItem>
            </DropdownMenu>
        </Dropdown>
    );
}
