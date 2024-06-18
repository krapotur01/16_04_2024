import React from "react";
import {Card, CardHeader, Image} from "@nextui-org/react";
import Link from "next/link";
import {Heading} from "@/app/components";
import type {Metadata} from "next";

export const metadata: Metadata = {
    title: 'МЕБЕЛЬ | КАТЕГОРИИ',
    description: "Качественная мебель на любой вкус",
};

export default function Products() {
    const categories = [
        {
            id: 1,
            route: 'products/chairs',
            p: 'На чем посидеть?',
            title: 'Стулья',
            src: "/chairs_trend/Minimal_Wood_chair.png"
        },
        {
            id: 2,
            route: 'products/armchairs',
            p: 'На чем отдохнуть?',
            title: 'Кресла',
            src: "/our_products/Minimal_LCD_chair.png"
        },
        {
            id: 3,
            route: 'products/sofas',
            p: 'На чем полежать?',
            title: 'Диваны',
            src: "/our_products/Modern_Sofa.png"
        },
        {
            id: 4,
            route: 'products/tables',
            p: 'Куда положить пульт от телевизора?',
            title: 'Столы',
            src: "/our_products/Wood_Coffee_Tables.png"
        },
        {
            id: 5,
            route: 'products/poufs',
            p: 'Куда положить ноги?',
            title: 'Пуфы',
            src: "/our_products/Juno_Hinged_Lid_Storage.png"
        },
        {
            id: 6,
            route: '/products/cabinets',
            p: 'Куда повесить пальто?',
            title: 'Шкафы',
            src: "/our_products/cabinet.png"},
    ]

    const category = categories.map(category => (
        <Card key={category.id} className="col-span-12 sm:col-span-4 h-[300px]">
            <CardHeader className="absolute z-[1] top-1 flex-col !items-start">
                <p className="text-tiny text-[var(--grey-light)] uppercase font-bold">{category.p}</p>
                <h4 className="text-[var(--grey)] font-medium text-large">{category.title.toUpperCase()}</h4>
            </CardHeader>
            <Link href={category.route} className="h-full">
                <Image
                    removeWrapper
                    alt="Card background"
                    className="z-0 w-full h-full object-cover hover:scale-110"
                    src={category.src}
                />
            </Link>
        </Card>
    ))

    return (
        <div className="flex flex-col gap-5 mt-5 w-full justify-center items-center">
            <Heading tag={"h2"}>ВСЕ КАТЕГОРИИ</Heading>

            <div className="max-w-[900px] gap-2 grid grid-cols-12 grid-rows-2 px-8">
                {category}
            </div>
        </div>
    );
}
