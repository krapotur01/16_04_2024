"use client";

import React, {useRef, useState} from "react";
import {
    ModalHeader,
    ModalBody,
    ModalFooter,
    Button,
    Input,
} from "@nextui-org/react";
import {MailIcon} from '../icons/MailIcon';
import {mailResetPasswordVerification, resetPassword} from "@/app/actions/auth";
import {Paragraph} from "@/app/components";
import {useForm, SubmitHandler} from "react-hook-form";
import {ResetPasswordFormFields, ResetPasswordFormSchema} from "@/app/lib/definitions";
import {PressEvent} from "@react-types/shared";
import {CurrentForm} from "@/app/(auth)/Login/Forms/form";
import {EyeSlashFilledIcon} from "@/app/(auth)/Login/icons/EyeSlashFilledIcon";
import {EyeFilledIcon} from "@/app/(auth)/Login/icons/EyeFilledIcon";
import {zodResolver} from "@hookform/resolvers/zod";

interface Props {
    onClose?: (e: PressEvent) => void,
    setCurrentForm?: (currentForm: CurrentForm) => void,
}

export default function ResetPassword({onClose, setCurrentForm}: Props) {
    const [success, setSuccess] = useState<boolean>(false);
    const [number, setNumber] = useState<string>("");
    const [verified, setVerified] = useState<boolean>(false);
    const [count, setCount] = useState<number>(0);
    const [sending, setSending] = useState<boolean>(false);
    const [isDisabled, setIsDisabled] = useState<boolean>(false);
    const [isVisible, setIsVisible] = React.useState(false);

    const timeoutId = useRef<NodeJS.Timeout>()
    const toggleVisibility = () => setIsVisible(!isVisible);

    const {
        register,
        handleSubmit,
        setError,
        getValues,
        formState: {
            errors,
            isSubmitting,
        }
    } = useForm<ResetPasswordFormFields>({resolver: zodResolver(ResetPasswordFormSchema), mode: "onTouched"});

    const onSubmit: SubmitHandler<ResetPasswordFormFields> = async (data) => {
        const message = await resetPassword(data)
        if (message.error) {
            setError("root", {
                message: message?.error,
            })
        } else if (message.success) {
            setSuccess(true);
        }
    }

    async function randomNumber() {
        if (count <= 2) {
            setCount(count + 1);
            const random = ("" + Math.random()).substring(2, 7);
            setSending(true);
            setIsDisabled(true);
            setNumber(random);
            await onSendVerifyCode(random);
        } else {
            setIsDisabled(true);
            setSending(false);
            setError("verifyCode", {
                message: "Вы исчерпали количество попыток. Повторите через 1 минуту.",
            })
            timeoutId.current = setTimeout(() => {
                setSending(true);
                setCount(0);
                setIsDisabled(false);
            }, 60000);
            return () => clearTimeout(timeoutId.current);
        }
    }

    const onSendVerifyCode = async (number: string) => {
        const email = getValues("email")

        const message = await mailResetPasswordVerification(email, number);
        if (message.error) {
            setError("email", {
                message: message?.error,
            })
        }
        timeoutId.current = setTimeout(() => setIsDisabled(false), 1000);
        return () => clearTimeout(timeoutId.current);
    }

    const checkingCode = () => {
        const code = getValues("verifyCode");
        if (code === number) setVerified(true);
    }

    return (
        <>
            {!success ? <form onSubmit={handleSubmit(onSubmit)}>
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

                    <div className="flex flex-col gap-2">
                        <Input {...register("verifyCode")}
                               id="verifyCode"
                               name="verifyCode"
                               size="sm"
                               type="number" variant="underlined"
                               disabled={!sending || verified}
                               autoComplete="off"
                               onBlur={checkingCode}
                        />
                        {sending && getValues("verifyCode")?.length > 1 && getValues("verifyCode") !== number &&
                            <Paragraph size="s" className="text-[var(--red)] p-0">- Код не верный</Paragraph>}
                        {!sending && errors.verifyCode && <Paragraph size="s"
                                                                     className="text-[var(--red)]">- {errors.verifyCode.message}</Paragraph>}

                        {!verified
                            ? <div className="flex flex-row gap-2 items-center">
                                <Button
                                    className="w-max"
                                    color="primary"
                                    type="button"
                                    isDisabled={isDisabled}
                                    onClick={randomNumber}>
                                    Отправить
                                </Button>
                                {!isDisabled &&
                                    <Paragraph size="s" className="text-[var(--grey-light)] pt-2">нажмите, чтобы
                                        отправить
                                        код</Paragraph>}
                            </div>
                            : <Paragraph size="s" className="text-[var(--grey-light)] pt-2">Код верный</Paragraph>
                        }
                    </div>

                    <Input {...register("password")}
                           id="password"
                           name="password"
                           label="Пароль"
                           placeholder="Введите ваш пароль"
                           type={isVisible ? "text" : "password"}
                           disabled={getValues("verifyCode") !== number}
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
                           disabled={getValues("verifyCode") !== number}
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
