import {z} from "zod";

const MAX_FILE_SIZE = 500000
const ACCEPTED_IMAGE_TYPES = [
    'image/jpeg',
    'image/jpg',
    'image/png',
    'image/webp',
]

const imageSchema = z.any().optional()
    .refine(file => file.length == 1 ? ACCEPTED_IMAGE_TYPES.includes(file?.[0]?.type) ? true : false : true, 'Файл не поддерживается. Выберите другое JPEG или PNG изоброжение')
    .refine(file => file.length == 1 ? file[0]?.size <= MAX_FILE_SIZE ? true : false : true, 'Максимальный размер изоброжения 2MB.')

export const SignupFormSchema = z.object({
    userImage: imageSchema,
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
