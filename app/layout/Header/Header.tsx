import styles from "./Header.module.css";
import Slash from "./slash.svg";
import Arrow from "./arrow.svg";

export const Header = () => {
  return (
    <header className={styles.header}>
      <span className="pl-36 font-normal text-base">
        Welcome to our online shop
      </span>

      <div className="flex gap-5 mr-36">
        <span className="flex flex-row items-center gap-1 font-normal text-base">
          English (USD){" "}
          <Arrow className="pt-0.5" src="./arrow.svg" alt="стрелка" />
        </span>

        <Slash src="./slash.svg" alt="slash" />

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
