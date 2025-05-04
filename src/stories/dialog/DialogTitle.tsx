import * as styles from "./Dialog.css";

type DialogTitleProps = {
  title: string;
};

export function DialogTitle({ title }: DialogTitleProps) {
  return <h1 className={styles.title}>{title}</h1>;
}
