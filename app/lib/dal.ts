import 'server-only';
import React from "react";
import {cookies} from "next/headers";
import {decrypt} from "@/app/lib/session";
import {Role} from "@prisma/client";
import prisma from "@/app/lib/db";

export const verifySession = React.cache(async () => {
    const cookie = cookies().get('session')?.value;
    const session = await decrypt(cookie);

    if (!session?.userId) return null;

    const user = await prisma.user.findUnique({
        where: {
            id: session?.userId as string,
        },
    });

    if (!user) return null;

    return {isAuth: true, userId: user.id, userEmail: user.email, userName: user.name, userAvatar: user.userAvatar};
})

export interface UserDTO {
    email: string,
    name: string,
    hashPassword: string,
    role?: Role
}
//
// function filteredUserDTO(user: UserDTO) {
//     return {
//         name: user.name,
//         email: user.email,
//     }
// }