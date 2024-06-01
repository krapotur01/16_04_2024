import styles from "./Logo_section.module.css";
import Logo from "@/public/Logo.svg";
import { Search } from "./Search/Search";
import { Cart_block } from "./Cart_block/Cart_block";
import Link from "next/link";

export const Logo_section = () => {
  return (
    <section className={styles.logo_section}>
      <Link href={`/`}>
        <Logo />
      </Link>
      <Search />
      <Cart_block />
    </section>
  );
};
