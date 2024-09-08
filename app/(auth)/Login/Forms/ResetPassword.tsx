"use client";

import React, {useState} from "react";
import {
    ModalHeader,
    ModalBody,
    ModalFooter,
    Button,
    Input,
} from "@nextui-org/react";
import {MailIcon} from '../icons/MailIcon';
import {EyeSlashFilledIcon} from "@/app/(auth)/Login/icons/EyeSlashFilledIcon";
import {EyeFilledIcon} from "@/app/(auth)/Login/icons/EyeFilledIcon";
import {resetPassword} from "@/app/actions/auth";
import {Paragraph} from "@/app/components";
import {useForm} from "react-hook-form";
import {ResetPasswordFormFields, ResetPasswordFormSchema} from "@/app/lib/definitions";
import {PressEvent} from "@react-types/shared";
import {CurrentForm} from "@/app/(auth)/Login/Forms/form";
import {zodResolver} from "@hookform/resolvers/zod";
import EmailVerificationComponent from "@/app/(auth)/Login/Forms/EmailVerificationComponent";

interface Props {
    onClose?: (e: PressEvent) => void,
    setCurrentForm?: (currentForm: CurrentForm) => void,
}

export default function ResetPassword({onClose, setCurrentForm}: Props) {
    const [success, setSuccess] = useState<boolean>(false);
    const [isVerified, setIsVerified] = useState<boolean>(false);
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => setIsVisible(!isVisible);

    const {
        register,
        setError,
        getValues,
        formState: {
            errors,
            isSubmitting,
        }
    } = useForm<ResetPasswordFormFields>({resolver: zodResolver(ResetPasswordFormSchema), mode: "onTouched"});

    const onSubmit = async (data: FormData) => {
        const message = await resetPassword(data)
        if (message.error) {
            setError("root", {
                message: message?.error,
            })
        } else if (message.success) {
            setSuccess(true);
        }
    }

    return (
        <>
            {!success ? <form action={onSubmit}>
                <ModalHeader className="">Востановление пароля</ModalHeader>
                <ModalBody>
                    <Input {...register("email")}
                           id="email"
                           name="email"
                           autoFocus label="Email"
                           placeholder="Введите ваш email"
                           type="email" variant="bordered"
                           autoComplete="off"
                           endContent={<MailIcon
                               className="text-2xl text-default-400 pointer-events-none flex-shrink-0"/>}/>
                    {errors.email &&
                        <Paragraph size="s" className="text-[var(--red)]">- {errors.email.message}</Paragraph>}

                    <EmailVerificationComponent verify={"reset"} getValuesForEmail={getValues} setIsVerified={setIsVerified} isVerified={isVerified}/>

                    <Input {...register("password")}
                           id="password"
                           name="password"
                           label="Пароль"
                           placeholder="Введите ваш пароль"
                           type={isVisible ? "text" : "password"}
                           disabled={!isVerified}
                           variant="bordered"
                           autoComplete="off"
                           endContent={
                               <button className="focus:outline-none" type="button" onClick={toggleVisibility}
                                       aria-label="toggle password visibility">
                                   {isVisible ? (
                                       <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none"/>
                                   ) : (
                                       <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none"/>
                                   )}
                               </button>
                           }/>
                    {errors.password &&
                        <Paragraph size="s" className="text-[var(--red)]">- {errors.password.message}</Paragraph>}

                    <Input {...register("confirmPassword")}
                           id="confirmPassword"
                           name="confirmPassword"
                           label="Подтвердите пароль"
                           placeholder="Введите пароль еще раз"
                           type={isVisible ? "text" : "password"}
                           disabled={!isVerified}
                           variant="bordered"
                           autoComplete="off"
                           endContent={
                               <button className="focus:outline-none" type="button" onClick={toggleVisibility}
                                       aria-label="toggle confirmPassword visibility">
                                   {isVisible ? (
                                       <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none"/>
                                   ) : (
                                       <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none"/>
                                   )}
                               </button>
                           }/>
                    {errors.confirmPassword && <Paragraph size="s"
                                                          className="text-[var(--red)]">- {errors.confirmPassword.message}</Paragraph>}

                    <div className="flex py-2 px-1 justify-between">
                        <span
                            className="cursor-pointer text-[var(--blue)] hover:opacity-80"
                            onClick={setCurrentForm ? () => setCurrentForm(CurrentForm.singIn) : undefined}
                        >войти</span>
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
                        className="bg-[var(--primary)] text-[var(--white)]"
                        disabled={isSubmitting}
                        type="submit"
                        onPress={success ? onClose : undefined}
                    >
                        {isSubmitting ? "Вход..." : "Обновить пароль"}
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
