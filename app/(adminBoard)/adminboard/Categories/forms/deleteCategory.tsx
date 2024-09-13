"use client";

import React from 'react';
import {useForm} from "react-hook-form";
import {Button, Input} from "@nextui-org/react";
import {deleteCategory} from "@/app/actions/categories";
import {Heading} from "@/app/components";

const DeleteCategory = () => {

    const {
        register,
        reset,
        formState: {
        }
    } = useForm({mode: "onTouched"});

    const onSubmit = async (formData: FormData) => {
        const category = await deleteCategory(formData.get("name") as string);
        reset();
        if(category.error) return console.log(category?.error);
        if(category.success) return console.log(category?.success);
    }

    return (
        <div className="flex flex-col gap-4 w-80">
            <Heading tag="h4">Delete category</Heading>
            <form action={onSubmit} className="flex flex-col gap-4 w-80">
                <Input {...register('name')}
                       id="name"
                       name="name"
                       autoFocus label="Категория"
                       placeholder="Введите предыдущее название категории"
                       type="text" variant="bordered"
                       autoComplete="off"
                />
                <Button type="submit" className="w-max">Отправить</Button>
            </form>
        </div>
    );
};

export default DeleteCategory;