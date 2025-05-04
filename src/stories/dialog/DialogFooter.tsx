import clsx from "clsx";
import { ReactElement } from "react";
import * as styles from "./Dialog.css";

type DialogFooterProps = {
  children: ReactElement | ReactElement[];
  customStyle?: string;
};

export function DialogFooter({ customStyle, children }: DialogFooterProps) {
  return (
    <footer className={clsx(styles.footer, customStyle)}>{children}</footer>
  );
}
