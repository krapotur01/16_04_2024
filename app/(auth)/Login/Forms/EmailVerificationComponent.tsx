import React, {useState} from 'react';
import {Button, Input} from "@nextui-org/react";
import {Paragraph} from "@/app/components";
import {useForm} from "react-hook-form";
import {mailResetPasswordVerification, mailSignUpVerification} from "@/app/actions/auth";
import {SignupFormFields, SignupFormSchema} from "@/app/lib/definitions";
import {zodResolver} from "@hookform/resolvers/zod";

interface IRandomNumberProps {
    verify: "reset" | "signup";
    getValuesForEmail: (value: string) => string;
    setIsVerified: (value: boolean) => void;
    isVerified: boolean;
}

const EmailVerificationComponent = ({verify, getValuesForEmail, setIsVerified, isVerified}: IRandomNumberProps) => {
    const [number, setNumber] = useState<string>("");
    const [count, setCount] = useState<number>(0);
    const [sending, setSending] = useState<boolean>(false);
    const [isDisabled, setIsDisabled] = useState<boolean>(false);

    const {
        register,
        getValues ,
        setError,
        formState: {
            errors,
        }
    } = useForm<SignupFormFields>({resolver: zodResolver(SignupFormSchema), mode: "onTouched"});

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
            const timeoutId = setTimeout(() => {
                setSending(true);
                setCount(0);
                setIsDisabled(false);
            }, 60000);
            return () => clearTimeout(timeoutId);
        }
    }

    const onSendVerifyCode = async (random: string) => {
        const email = getValuesForEmail("email")
        if (verify === "reset") {
            const message = await mailResetPasswordVerification(email, random);
            if (message.error) {
                setError("email", {
                    message: message?.error,
                })
            }
        }
        if (verify === "signup") {
            const message = await mailSignUpVerification(email, random);
            if (message.error) {
                setError("email", {
                    message: message?.error,
                })
            }
        }

        const timeoutId = setTimeout(() => setIsDisabled(false), 1000);
        return () => clearTimeout(timeoutId);
    }

    const checkingCode = () => {
        const code = getValues("verifyCode");
        if (code === number) {
            setIsVerified(true);
        }
    }

    return (
        <div className="flex flex-col gap-2">
            <Input {...register("verifyCode")}
                   id="verifyCode"
                   name="verifyCode"
                   size="sm"
                   type="number" variant="underlined"
                   disabled={!sending || isVerified}
                   autoComplete="off"
                   onBlur={checkingCode}
            />
            {sending && getValues("verifyCode")?.length > 1 && !isVerified &&
                <Paragraph size="s" className="text-[var(--red)] p-0">- Код не верный</Paragraph>}
            {!sending && errors.verifyCode && <Paragraph size="s"
                                                         className="text-[var(--red)]">- {errors.verifyCode.message}</Paragraph>}

            {!isVerified
                ? <div className="flex flex-row gap-2 items-center">
                    <Button
                        className="w-max"
                        color="primary"
                        type="button"
                        isDisabled={isDisabled}
                        onClick={randomNumber}
                    >Отправить</Button>
                    {!isDisabled &&
                        <Paragraph size="s" className="text-[var(--grey-light)] pt-2">нажмите, чтобы отправить
                            код</Paragraph>}
                </div>
                : <Paragraph size="s" className="text-[var(--grey-light)] pt-2">Код верный</Paragraph>
            }
        </div>
    );
};

export default EmailVerificationComponent;