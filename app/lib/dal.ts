import 'server-only';
import React from "react";
import {cookies} from "next/headers";
import {redirect} from "next/navigation";
import {decrypt} from "@/app/lib/session";
import prisma from "@/app/lib/db";
import {Role} from "@prisma/client";

export const verifySession = React.cache(async () => {
    const cookie = cookies().get('session')?.value;
    const session = await decrypt(cookie);

    if (!session?.userId) {
        // redirect('/login');
        return null
    }

    return {isAuth: true, userId: session?.userId}
})

export const getUsers = React.cache(async () => {
    const session = await verifySession();
    if (!session) return null

    try {
        const data = await prisma.user.findMany();

        const user = data[0];
        const filteredUser = filteredUserDTO(user);

        return filteredUser;
    } catch (error) {
        console.log('Не удалось получить данные о пользователе.')
        return null
    }
})

export interface UserDTO {
    email: string,
    name: string,
    hashPassword: string,
    role?: Role
}

function filteredUserDTO(user: UserDTO) {
    return {
        name: user.name,
        email: user.email,
    }
}