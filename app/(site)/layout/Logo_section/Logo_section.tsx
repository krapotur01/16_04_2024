import styles from "./Logo_section.module.css";
import Logo from "@/public/Logo.svg";
import { Search_block } from "./Search_block/Search_block";
import { Cart_block } from "./Cart_block/Cart_block";
import Link from "next/link";

export const Logo_section = (): JSX.Element => {
  return (
    <section className={styles.block}>
      <Link href={`/`}>
        <Logo />
      </Link>
      <Search_block />
      <Cart_block />
    </section>
  );
};
