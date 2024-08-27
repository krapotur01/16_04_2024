"use server";

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
// export async function resetPassword(formData: FormData) {
//     await prisma.user.update( {
//         where: { password: formData.get("email") as string },
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