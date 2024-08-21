"use client";

import React, {useState} from "react";
import {
    ModalHeader,
    ModalBody,
    ModalFooter,
    Button,
    Input,
    Link
} from "@nextui-org/react";
import {MailIcon} from '../icons/MailIcon';
import {LockIcon} from '../icons/LockIcon';
import {login} from "@/app/actions/auth";
import {Paragraph} from "@/app/components";
import {useForm, SubmitHandler} from "react-hook-form";
import {LoginFormFields} from "@/app/lib/definitions";
import {PressEvent} from "@react-types/shared";
import Form, {CurrentForm} from "@/app/(site)/Content/Login/Forms/form";

interface Props {
    onClose?: (e: PressEvent) => void,
    setCurrentForm?: (currentForm: CurrentForm) => void,
}

export default function SignIn({onClose, setCurrentForm}: Props) {
    const [success, setSuccess] = useState<boolean>(false);

    const {
        register,
        handleSubmit,
        setError,
        formState: {
            errors,
            isSubmitting,
        }
    } = useForm<LoginFormFields>();

    const onSubmit: SubmitHandler<LoginFormFields> = async (data) => {
        const message = await login(data)
        if (message.error) {
            setError("root", {
                message: message.error,
            })
        } else if (message.success) {
            setSuccess(true);
        }
    }

    return (
        <>
            {!success ? <form onSubmit={handleSubmit(onSubmit)}>
                <ModalHeader className="">Войти</ModalHeader>
                <ModalBody>
                    <Input {...register("email")}
                           id="email"
                           name="email"
                           autoFocus label="Email"
                           placeholder="Введите ваш email"
                           type="email" variant="bordered"
                           autoComplete="off"
                           endContent={<MailIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0"/>}/>

                    <Input {...register("password")}
                           id="password"
                           name="password"
                           label="Password"
                           placeholder="Введите ваш пароль"
                           type="password"
                           variant="bordered"
                           autoComplete="off"
                           endContent={<LockIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0"/>}/>

                    <div className="flex py-2 px-1 justify-between">
                        <Link color="primary" href="#" size="sm">забыли пароль?</Link>
                        <span
                            className="cursor-pointer text-[var(--primary)] hover:opacity-80"
                            onClick={setCurrentForm ? () => setCurrentForm(CurrentForm.singUp) : undefined}
                        >зарегистрироваться</span>
                    </div>

                    {errors.root && <Paragraph
                        aria-live="polite" size="s"
                        className="text-[var(--red)] p-0">{errors.root.message}</Paragraph>
                    }
                </ModalBody>

                <ModalFooter>
                    <Button color="danger" variant="flat" onPress={onClose} className="w-[95px]">
                        Закрыть
                    </Button>
                    <Button
                        className="bg-[var(--primary)] text-[var(--white)] w-[95px]"
                        disabled={isSubmitting}
                        type="submit"
                        onPress={success ? onClose : undefined}
                    >
                        {isSubmitting ? "Вход..." : "Войти"}
                    </Button>
                </ModalFooter>
            </form> : <div className="flex flex-col justify-center items-center gap-2 m-10">
            <h3 className="text-gray-500 font-bold">Добро пожаловать!</h3>
            <h4 className="text-gray-500">вы вошли на наш
                <Button className="bg-[var(--primary)] text-[var(--white)] ml-2"
                        onPress={onClose}>сайт</Button>
            </h4>
        </div>}
        </>

    );
}
