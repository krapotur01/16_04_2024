import {z} from "zod";

export const SignupFormSchema = z.object({
    name: z
        .string()
        .min(2, {message: 'Имя должно быть длиной не менее 2 символов.'})
        .trim(),
    email: z
        .string().email({message: 'Пожалуйста, введите правильный email.'}).trim(),
    verifyCode: z
        .string()
        .length(5, {message: 'Проверьте правильно ли Вы указали полученный код'})
        .trim(),
    password: z
        .string()
        .min(8, {message: 'Длина должна быть не менее 8 символов.'})
        .regex(/[a-zA-Z]/, {message: 'Должен содержать хотя бы одну букву.'})
        .regex(/[0-9]/, {message: 'Должен содержать хотя бы одну цифру.'})
        .trim(),
    confirmPassword: z.string(),
}).refine(data => data.password === data.confirmPassword, {
    message: "Пароли должны совподать!",
    path: ["confirmPassword"],
})

export const SignInFormSchema = z.object({
    email: z
        .string().email({message: 'Пожалуйста, введите правильный email.'}).trim(),
    password: z
        .string()
        .trim(),
})

export const ResetPasswordFormSchema = z.object({
    email: z
        .string().email({message: 'Пожалуйста, введите правильный email.'}).trim(),
    verifyCode: z
        .string()
        .length(5, {message: 'Проверьте правильно ли Вы указали полученный код'})
        .trim(),
    password: z
        .string()
        .min(8, {message: 'Длина должна быть не менее 8 символов.'})
        .regex(/[a-zA-Z]/, {message: 'Должен содержать хотя бы одну букву.'})
        .regex(/[0-9]/, {message: 'Должен содержать хотя бы одну цифру.'})
        .trim(),
    confirmPassword: z.string(),
}).refine(data => data.password === data.confirmPassword, {
    message: "Пароли должны совподать!",
    path: ["confirmPassword"],
})


export type FormFields = z.infer<typeof SignupFormSchema>;
export type LoginFormFields = z.infer<typeof SignInFormSchema>;
export type ResetPasswordFormFields = z.infer<typeof ResetPasswordFormSchema>;
