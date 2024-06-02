import styles from "./Header.module.css";

export const Header = () => {
  return (
    <header className={styles.header}>
      <span className={styles.description}>
        Welcome to our online shop
      </span>

      <div className={styles.auth}>
        <span className="font-normal text-base">
          <a className={styles.link} href="#">
            Login
          </a>{" "}
          or{" "}
          <a className={styles.link} href="#">
            Sign up
          </a>
        </span>
      </div>
    </header>
  );
};
