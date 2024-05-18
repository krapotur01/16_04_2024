import styles from "./Categories.module.css";
import cn from "classnames";
import { getMenu } from "../../../../../api/menu";
import Menu from "@/public/menu.svg";
import Link from "next/link";
import { TopLevelCategory } from "@/interfaces/page.interface";
import { FirstLevelMenuItem } from "@/interfaces/menu.interface";

const firstLevelMenu: FirstLevelMenuItem[] = [
  { route: "courses", name: "Курсы", id: TopLevelCategory.Courses },
  { route: "services", name: "Сервис", id: TopLevelCategory.Services },
  { route: "books", name: "Книги", id: TopLevelCategory.Books },
  { route: "products", name: "Продукты", id: TopLevelCategory.Products },
];

export async function Categories() {
  const menu = await getMenu(0);

  const buildCategories = () => {
    return (
      <>
        {firstLevelMenu.map((m) => (
          <li key={m.route} className={styles.list_item}>
            <Link href={`/${m.route}`}>
              <div
                className={cn(styles.firstLevel, {
                  [styles.firstLevelActive]: m.id == 0,
                })}
              >
                <span>{m.name}</span>
              </div>
            </Link>
            {/* {m.id == 0 && buildSecondLevel(m)} */}
          </li>
        ))}
      </>
    );
  };

  return (
    <div className={styles.menu}>
      <Menu />
      <p className={styles.paragraph}>ALL COLLECTIONS</p>
      <ul
        className={cn(styles.list, {
          [styles.list_hidden]: !Object.values(menu[2]),
        })}
      >
        {buildCategories()}
      </ul>
    </div>
  );
}
