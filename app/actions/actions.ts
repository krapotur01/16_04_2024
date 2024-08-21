"use server";

import prisma from "@/app/lib/db";
import {revalidatePath} from "next/cache";

// export async function createPost(formData: FormData) {
//     await prisma.posts.create({
//         data: {
//             title: formData.get("title") as string,
//             slug: (formData.get("title") as string)
//                 .replace(/\s+/g, "-")
//                 .toLowerCase(),
//             content: formData.get("content") as string,
//         }
//     })
//
//     revalidatePath('contacts');
// }
//
// export async function updatePost(formData: FormData) {
//     await prisma.posts.update( {
//         where: { id: Number(formData.get("id")) as number },
//         data: {
//             content: formData.get("content") as string,
//         }
//     })
//
//     revalidatePath('contacts');
// }
//
// export async function deletePost(formData: FormData) {
//     await prisma.posts.delete( {
//         where: { id: Number(formData.get("id")) as number }
//     })
//
//     revalidatePath('contacts');
// }