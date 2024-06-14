'use client'

import React, {useEffect} from "react";
import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarMenuToggle,
    NavbarMenu,
    NavbarMenuItem,
    Link
} from '@nextui-org/react';
import NextLink from 'next/link'
import Logo from "@/public/Logo_header.svg";
import {Cart_block} from "@/app/layout/Logo_section/Cart_block/Cart_block";
import cn from "classnames";

export default function HeaderNavbar() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const categoriesMenu = [
        {route: "Стол", name: "Столы",},
        {route: "Стул", name: "Стулья",},
        {route: "Кресло", name: "Кресла",},
        {route: "Шкаф", name: "Шкафы",},
    ];

    return (
        <Navbar onMenuOpenChange={setIsMenuOpen} isMenuOpen={isMenuOpen} className="lg:hidden bg-[var(--primary)] h-[40px]">
            <NavbarContent>
                <NavbarMenuToggle
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    className="lg:hidden"
                />
                <NavbarBrand className="lg:hidden">
                    <Logo className='fill-white stroke-white]'/>
                </NavbarBrand>
                <Cart_block className='lg:hidden justify-center items-center'/>
            </NavbarContent>

            <NavbarMenu className={cn({'hidden': !isMenuOpen})}>
                {categoriesMenu.map((item, index) => (
                    <NavbarMenuItem key={`${item}-${index}`}>
                        <NextLink onClick={() => setIsMenuOpen(false)}
                                  href={{
                                      pathname: '/search',
                                      query: {
                                          search: '',
                                          select: item.route.toLowerCase(),
                                      },
                                  }}
                        >
                            {item.name}
                        </NextLink>
                    </NavbarMenuItem>
                ))}
            </NavbarMenu>
        </Navbar>
    );
}
