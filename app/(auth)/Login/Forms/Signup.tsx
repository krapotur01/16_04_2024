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
import {EyeSlashFilledIcon} from '../icons/EyeSlashFilledIcon';
import {EyeFilledIcon} from '../icons/EyeFilledIcon';
import {signup} from "@/app/actions/auth";
import {Paragraph} from "@/app/components";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {SignupFormSchema, SignupFormFields,} from "@/app/lib/definitions";
import {PressEvent} from "@react-types/shared";
import {CurrentForm} from "@/app/(auth)/Login/Forms/form";
import EmailVerificationComponent from "@/app/(auth)/Login/Forms/EmailVerificationComponent";

interface Props {
    onClose?: (e: PressEvent) => void,
    setCurrentForm?: (currentForm: CurrentForm) => void,
}

export default function Signup({onClose, setCurrentForm}: Props) {
    const [success, setSuccess] = useState<boolean>(false);
    const [isVerified, setIsVerified] = useState<boolean>(false);
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => setIsVisible(!isVisible);

    const {
        register,
        getValues,
        formState: {
            errors,
            isSubmitting,
        }
    } = useForm<SignupFormFields>({resolver: zodResolver(SignupFormSchema), mode: "onTouched"});

    const onSubmit = async (data: FormData) => {
        const message = await signup(data);

       if (message.success) {
            setSuccess(true);
        }
    }

    return (
        <>
            {!success ? <form action={onSubmit}>
                <ModalHeader className="">Регистрация</ModalHeader>
                <ModalBody>
                    <Input {...register("userImage")}
                           id="userImage"
                           name="userImage"
                           type="file"
                           variant="bordered"
                           accept="image/*, jpeg, jpg, png"
                    />
                    {(errors.userImage) && <Paragraph size="s"
                                                 className="text-[var(--red)]">- {errors.userImage?.message?.toString()}</Paragraph>}
                    <Input {...register("name")}
                           id="name"
                           name="name"
                           autoFocus label="Имя"
                           placeholder="Введите имя"
                           type="text"
                           variant="bordered"
                           autoComplete="off"/>
                    {(errors.name) && <Paragraph size="s"
                                                 className="text-[var(--red)]">- {errors.name.message}</Paragraph>}
                    <Input {...register("email")}
                           id="email"
                           name="email"
                           label="Email"
                           placeholder="Введите email"
                           type="email"
                           variant="bordered"
                           autoComplete="off"
                           endContent={<MailIcon
                               className="text-2xl text-default-400 pointer-events-none flex-shrink-0"/>}/>
                    {(errors.email) && <Paragraph size="s"
                                                  className="text-[var(--red)]">- {errors.email.message}</Paragraph>}

                    <EmailVerificationComponent verify={"signup"} getValuesForEmail={getValues} setIsVerified={setIsVerified} isVerified={isVerified}/>

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

                    <div className="flex py-2 px-1 justify-end">
                        <span
                            className="cursor-pointer text-[var(--primary)] hover:opacity-80"
                            onClick={setCurrentForm ? () => setCurrentForm(CurrentForm.singIn) : undefined}
                        >войти</span>
                    </div>

                    {errors.root && <Paragraph
                        aria-live="polite" size="s"
                        className="text-[var(--red)] p-0">{errors.root.message}
                    </Paragraph>}
                </ModalBody>

                <ModalFooter>
                    <Button color="danger" variant="flat" onPress={onClose}>
                        Закрыть
                    </Button>
                    <Button
                        className="bg-[var(--primary)] text-[var(--white)]"
                        disabled={isSubmitting}
                        type="submit"
                    >
                        {isSubmitting ? "Идет отправка..." : "Зарегистрироваться"}
                    </Button>
                </ModalFooter>
            </form> : <div className="flex flex-col justify-center items-center gap-2 m-10">
                <h3 className="text-gray-500 font-bold">Добро пожаловать!</h3>
                <h4 className="text-gray-500 font-bold">регистрация прошла успешно</h4>
                <h4 className="text-gray-500">вы вошли на наш</h4>
                    <Button className="bg-[var(--primary)] text-[var(--white)] ml-2"
                            onPress={onClose}>сайт</Button>

            </div>}
        </>
    )
}
