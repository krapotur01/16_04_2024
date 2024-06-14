import styles from "./Logo_section.module.css";
import Logo from "@/public/Logo.svg";
import {SearchInput} from "./Search/SearchInput";
import {Cart_block} from "./Cart_block/Cart_block";
import Link from "next/link";

export const Logo_section = () => {
    return (
        <section className={styles.logo_section}>
            <Link href={`/`}>
                <Logo  className='lg:flex ss:hidden'/>
            </Link>
            <SearchInput />
            <Cart_block className='lg:flex ss:hidden pt-3.5'/>
        </section>
    );
};
