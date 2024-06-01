import { Bottom } from "./Bottom/Bottom";
import { Top } from "./Top/Top";
import styles from "./Footer.module.css";

export const Footer = (): JSX.Element => {
  return (
    <footer className={styles.footer}>
      <Top />
      <div className="w-full border"></div>
      <Bottom />
    </footer>
  );
};
