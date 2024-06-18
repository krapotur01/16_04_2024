import type {Metadata} from "next";
import {notFound} from "next/navigation";
import {Products} from "@/app/(site)/Content";

export const metadata: Metadata = {
    title: 'КАТЕГОРИЯ',
    description: "Качественная мебель на любой вкус",
};

export default function PageProducts({params}: { params: { category: string } }) {
    if (!params) {
        notFound();
    }

    const headerPage = (category: string) => {
        switch (category) {
            case 'chairs':
                return 'СТУЛЬЯ'
            case 'armchairs':
                return 'КРЕСЛА'
            case 'sofas':
                return 'ДИВАНЫ'
            case 'poufs':
                return 'ПУФЫ'
            case 'tables':
                return 'СТОЛЫ'
            default:
                return 'Такой мебели у нас еще нет :)'
        }
    }

    return (
        <div className="w-full grow flex flex-col items-center mt-8">
            <Products header={headerPage(params.category)} category={params.category} />
        </div>
    );
}
