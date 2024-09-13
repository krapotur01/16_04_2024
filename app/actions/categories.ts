'use server';

import prisma from "@/app/lib/db";

export async function createCategory(formData: FormData) {
    const name = formData.get("name") as string;

    try {
        const category = await prisma.category.findUnique({
            where: {
                name: name as string,
            }
        })

        if(category) return {error: "Такая категория уже существует"}

        await prisma.category.create({
            data: {
                name: formData.get('name') as string,
            },
        })
        return {success: "Категория создана успешно"};
    } catch (e) {
        throw new Error("Ошибка при создании категории");
    }
}

export async function getCategory(name: string) {
    const category = await prisma.category.findUnique({
        where: {
            name: name as string,
        }
    })

    if(!category) return {message: "Такой категории не существует!"}

    return {success: "Категория получена успешно"};
}

export async function updateCategory(formData: FormData) {
    const name = formData.get("previousName") as string;

    try {
        const category = await prisma.category.findUnique({
            where: {
                name: name as string,
            }
        })

        if (!category) return {error: "Такой категории не существует!"}
        await prisma.category.update({
            where: {
                name: name as string,
            },
            data: {
                name: formData.get("newName") as string,
            }
        })

        return {success: "Категория изменена успешно"};
    } catch (e) {
        throw new Error("Ошибка при обновлении категории")
    }
}

export async function deleteCategory(name: string) {
    try {
        const category = await prisma.category.findUnique({
            where: {
                name: name as string,
            }
        })

        if(!category) return {error: "Такой категории не существует!"}

        await prisma.category.delete({
            where: {
                name: name as string,
            }
        })

        return {success: "Категория удалена успешно"};
    } catch (e) {
        throw new Error("Ошибка при удалении категории")
    }
}