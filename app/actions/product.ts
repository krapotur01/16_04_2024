import prisma from "@/app/lib/db";

export async function createProduct(formData: FormData) {
    const slug = formData.get("slug") as string;

    const product = await prisma.products.findUnique({
        where: {
            slug: slug as string,
        }
    })

    if(product?.slug) {
        return {
            message: "такой продукт уже существует",
        }
    }

    const newProduct = await prisma.products.create({
        data: {
            title: formData.get('title') as string,
            categoryId: Number(formData.get('categoryId')) as number,
            status: formData.get('status') as string,
            images: formData.get('images') as string,
            price_discount: formData.get('price_discount') as string,
            price: formData.get('price') as string,
            rating: Number(formData.get('rating')) as number,
            description: formData.get('description') as string,
            slug: slug as string
        },
    })

    return newProduct;
}

export async function getProduct(id: number) {
    const product = await prisma.products.findUnique({
        where: {
            id: id as number,
        }
    })

    if(product?.id) return {message: "Такого продукта не существует!"}

    return product;
}

export async function updateProduct(formData: FormData) {
    const slug = formData.get("slug") as string;

    const product = await prisma.products.findUnique({
        where: {
            slug: slug as string,
        }
    })

    const updateProduct = await prisma.products.update({
        where: {
            slug: slug as string,
        },
        data: {
            title: formData.get('title') as string,
            categoryId: Number(formData.get('categoryId')) as number,
            status: formData.get('status') as string,
            images: formData.get('images') as string,
            price_discount: formData.get('price_discount') as string,
            price: formData.get('price') as string,
            rating: Number(formData.get('rating')) as number,
            description: formData.get('description') as string,
        }
    })
}

export async function deleteProduct(id: number) {
    const product = await prisma.products.findUnique({
        where: {
            id: id as number,
        }
    })

    if(product?.id) return {message: "Такого продукта не существует!"}

    return prisma.products.delete({
        where: {
            id: id as number,
        }
    });
}