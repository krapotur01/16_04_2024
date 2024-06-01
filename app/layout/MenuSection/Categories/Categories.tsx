import styles from "./Categories.module.css";
import cn from "classnames";
import MenuIcon from "@/public/menu.svg";
import Link from "next/link";

const firstLevelMenu = [
  { route: "tables", name: "Столы",},
  { route: "chairs", name: "Стулья",},
  { route: "armchairs", name: "Кресла",},
  { route: "cabinets", name: "Шкафы",},
];

export async function Categories() {


        const menu = firstLevelMenu.map((menu) => (
          <li key={menu.route} className={styles.list_item}>
            <Link href={`/${menu.route}`}>
                <span>{menu.name}</span>
            </Link>
          </li>
        ))


  return (
    <div className={styles.menu}>
      <MenuIcon />
      <p className={styles.paragraph}>ALL COLLECTIONS</p>
      <ul
        className={cn(styles.list, {
          [styles.list_hidden]: !Object.values(menu[2]),
        })}
      >
        {menu}
      </ul>
    </div>
  );
}
