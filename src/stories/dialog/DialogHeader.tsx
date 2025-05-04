import { ReactElement } from "react";
import * as styles from "./Dialog.css";
import clsx from "clsx";

type DialogHeaderProps = {
  children: ReactElement | ReactElement[];
  customStyle?: string;
};

export function DialogHeader({ customStyle, children }: DialogHeaderProps) {
  return (
    <header className={clsx(styles.header, customStyle)}>{children}</header>
  );
}
