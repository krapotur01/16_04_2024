import styles from "./Search.module.css";
import Image from "next/image";

export const Search = () => {
  return (
    <div className={styles.block}>
      <input
        className={styles.search}
        type="search"
        placeholder="Введите запрос"
      />
      <select name="Категории" className={styles.select}>
        <option value="Все категории" className={styles.option}>Категории</option>
        <option value="Категория 1" className={styles.option}>Категория 1</option>
        <option value="Категория 2" className={styles.option}>Категория 2</option>
        <option value="Категория 3" className={styles.option}>Категория 3</option>
        <option value="Категория 4" className={styles.option}>Категория 4</option>
      </select>
      <button className={styles.button}>
        <Image src="zoom.svg" alt="лупа" width={16} height={16} />
      </button>
    </div>
  );
};
