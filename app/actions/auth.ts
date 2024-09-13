'use server';

import {LoginFormFields} from '@/app/lib/definitions';
import bcrypt, {compare} from 'bcrypt';
import prisma from "@/app/lib/db";
import {createSession, deleteSession} from "@/app/lib/session";
import {sendEmail} from "@/app/lib/sendEmail";
import {writeFile} from "fs/promises";
import {join} from 'path';

export async function uploadUserImage(image: File) {
    if (!image) {
        throw new Error("No file uploaded");
    }

    const bytes = await image.arrayBuffer();
    const buffer = Buffer.from(bytes);

    const path = join('./public', 'usersAvatars', image.name)
    await writeFile(path, buffer);

    return path.replace('public', '');
}

export async function getUser(email: string) {
    return prisma.user.findUnique({
        where: {
            email: email as string,
        }
    });
}

export async function getAllUsers() {
    return prisma.user.findMany();
}

export async function mailSignUpVerification(email: string, number: string) {
    const userEmail = await getUser(email)

    if (userEmail) {
        return {
            error: `Пользователь с таким email уже существует. Пожалуйста, войдите в систему используя email и пароль или используйте другой email для регистрации.`
        };
    }

    await sendEmail(email, number, "sign-up");
    return {success: `Код отправлен.`};
}

export async function mailResetPasswordVerification(email: string, number: string) {
    const userEmail = await getUser(email)

    if (!userEmail) {
        return {
            error: '- Пользователя с таким email не существует. Пожалуйста, войдите в систему используя другой email или зарегистрируйтесь'
        }
    }

    await sendEmail(email, number, "reset-password");
    return {success: `Код отправлен.`};
}

export async function resetPassword(formData: FormData) {
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    const userEmail = await prisma.user.findUnique({
        where: {
            email: email as string,
        },
    })
    if (!userEmail) return {error: '- Пользователя с таким email не существует. Пожалуйста, войдите в систему используя другой email или зарегистрируйтесь'}

    const hashedPassword = await bcrypt.hash(password, 10);

    const updateUser = await prisma.user.update({
        where: {email: email as string,},
        data: {hashPassword: hashedPassword as string},
    })

    await createSession(updateUser.id);

    return {success: `Пароль обновлен успешно.`}
}

export async function signup(formData: FormData) {
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const userImage = formData.get("userImage") as File;

    const imgUrl = await uploadUserImage(userImage);

    // Хешируем пароль пользователя перед его сохранением
    const hashedPassword = await bcrypt.hash(password as string, 10);

    // Создание пользователя в БД
    const newUser = await prisma.user.create({
        data: {
            name: name as string,
            email: email as string,
            hashPassword: hashedPassword as string,
            userAvatar: imgUrl as string,
        },
    })

    // 4. Create user session
    await createSession(newUser.id);

    return {
        success: `Регистрация прошла успешно.`
    }
}

export async function login(formData: LoginFormFields) {
    const {email, password} = formData;
    const user = await prisma.user.findUnique({
        where: {
            email: email as string,
        }
    });

    if (!user) return {error: '- Такого пользователя не существует!'};

    const isCorrectPassword: boolean = await compare(password, user.hashPassword);
    if (!isCorrectPassword) return {error: '- логин или пароль указаны не верно!'};


    await createSession(user.id);
    return {success: "Вход выполнен успешно"};
}

export async function logout() {
    await deleteSession();
    console.log("logout")
}