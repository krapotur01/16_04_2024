'use server';

import {FormFields, LoginFormFields} from '@/app/lib/definitions';
import bcrypt, {compare} from 'bcrypt';
import prisma from "@/app/lib/db";
import {createSession, deleteSession} from "@/app/lib/session";
import {sendEmail} from "@/app/lib/sendEmail";

export async function mailVerification(email: string, number: string ) {
    const userEmail = await prisma.user.findUnique({
        where: {
            email: email as string,
        },
    })
    if (userEmail) return {error: `Пользователь с таким email уже существует. Пожалуйста, войдите в систему используя email и пароль или используйте другой email для регистрации.`};

    await sendEmail(email, number);
    return {success: `Код отправлен.`}
}

export async function signup(formData: FormFields) {
    const {name, email, password} = formData;
    // Хешируем пароль пользователя перед его сохранением
    const hashedPassword = await bcrypt.hash(password, 10);

    // Проверка на существует пользователь в базе или нет
    const userEmail = await prisma.user.findUnique({
        where: {
            email: email as string,
        },
    })
    if (userEmail) return {error: '- Пользователь с таким email уже существует!'}

    // Создание пользователя в БД
    const newUser = await prisma.user.create({
        data: {
            name: name as string,
            email: email as string,
            hashPassword: hashedPassword as string,
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