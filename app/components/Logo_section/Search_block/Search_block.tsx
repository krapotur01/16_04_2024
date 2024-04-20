import styles from "./Search_block.module.css";
import Image from "next/image";

export const Search_block = (): JSX.Element => {
  return (
    <div className={styles.block}>
      <input
        className={styles.search}
        type="search"
        placeholder="Введите запрос"
      />
      <select name="Все категории" className={styles.select}>
        <option value="Все категории">Все категории</option>
        <option value="Категория 1">Категория 1</option>
        <option value="Категория 2">Категория 2</option>
        <option value="Категория 3">Категория 3</option>
        <option value="Категория 4">Категория 4</option>
      </select>
      <button className={styles.button}>
        <Image src="zoom.svg" alt="лупа" width={16} height={16} />
      </button>
    </div>
  );
};
