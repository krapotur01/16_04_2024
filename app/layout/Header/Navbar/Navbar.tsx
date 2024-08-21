'use client'

import React, {useState} from "react";
import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarMenuToggle,
    NavbarMenu,
    NavbarMenuItem,
    Link
} from '@nextui-org/react';
import Logo from "@/public/Logo_header.svg";
import {Cart_block} from "@/app/layout/Logo_section/Cart_block/Cart_block";
import {usePathname} from "next/navigation";

export default function HeaderNavbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const pathName = usePathname();

    const categoriesMenu = [
        {route: "/", name: "ВСЕ КАТЕГОРИИ",},
        {route: "/chairs", name: "СТУЛЬЯ",},
        {route: "/armchairs", name: "КРЕСЛА",},
        {route: "/sofas", name: "ДИВАНЫ",},
        {route: "/tables", name: "СТОЛЫ",},
        {route: "/poufs", name: "ПУФЫ",},
        {route: "/wardrobes", name: "ШКАФЫ",},
    ];

    return (
        <Navbar onMenuOpenChange={setIsMenuOpen} className="lg:hidden bg-[var(--primary)] h-[40px]">
            <NavbarContent>
                <NavbarMenuToggle
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    className="lg:hidden"
                />
                {/*<NavbarBrand className="lg:hidden">*/}
                {/*    <Logo className='fill-white stroke-white]'/>*/}
                {/*</NavbarBrand>*/}
                {/*<Cart_block className='lg:hidden justify-center items-center'/>*/}
            </NavbarContent>

            <NavbarMenu>
                {categoriesMenu.map((item, index) => (
                    <NavbarMenuItem key={`${item}-${index}`}>
                        <Link
                            color={
                                `/products${item.route}` === pathName || pathName + '/' === `/products${item.route}` ? "primary" : "foreground"
                            }
                            className="w-full"
                            href={`/products/${item.route}`}
                            size="lg"
                        >
                            {item.name}
                        </Link>
                    </NavbarMenuItem>
                ))}
            </NavbarMenu>
        </Navbar>
    );
}
