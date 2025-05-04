import { ReactElement } from "react";
import * as styles from "./Dialog.css";

type DialogBodyProps = {
  children: ReactElement;
};

export function DialogBody({ children }: DialogBodyProps) {
  return <div className={styles.body}>{children}</div>;
}
