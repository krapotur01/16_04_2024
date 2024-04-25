import {StatusProps} from './Status.props'
import styles from "./Status.module.css";
import cn from "classnames";

export const Status = ({
  className, position, status,
  children,
}: StatusProps): JSX.Element => {
  return (
    <span
      className={cn(styles.status, className, {
        [styles.status_new]: status == "New",
        [styles.status_sale]: status == "Sale",
        [styles.status_red]: status != "Sale" && status != "New",
        [styles.status_left]: position == "left",
        [styles.status_right]: position == "right",
	})}
    >
      {children}
    </span>
  );
};
