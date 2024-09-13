"use client";

import React from 'react';
import {useForm} from "react-hook-form";
import {Button, Input} from "@nextui-org/react";
import {updateCategory} from "@/app/actions/categories";
import {Heading} from "@/app/components";

const UpdateCategory = () => {

    const {
        register,
        reset,
        formState: {
        }
    } = useForm({mode: "onTouched"});

    const onSubmit = async (formData: FormData) => {
        const category = await updateCategory(formData);
        reset();
        if(category.error) return console.log(category?.error);
        if(category.success) return console.log(category?.success);
    }

    return (
        <div className="flex flex-col gap-4 w-80">
            <Heading tag="h4">Update category</Heading>
            <form action={onSubmit} className="flex flex-col gap-4 w-80">
                <Input {...register('previousName')}
                       id="previousName"
                       name="previousName"
                       autoFocus label="Категория"
                       placeholder="Введите предыдущее название категории"
                       type="text" variant="bordered"
                       autoComplete="off"
                />
                <Input {...register('newName')}
                       id="newName"
                       name="newName"
                       autoFocus label="Категория"
                       placeholder="Введите новое название категории"
                       type="name" variant="bordered"
                       autoComplete="off"
                />
                <Button type="submit" className="w-max">Отправить</Button>
            </form>
        </div>
    );
};

export default UpdateCategory;