import {
  Children,
  isValidElement,
  PropsWithChildren,
  ReactElement,
} from "react";
import * as styles from "./Breadcrumb.css";

export type BreadcrumbProps = {
  separator: ReactElement;
  children: ReactElement | ReactElement[];
};

export function Breadcrumb({
  children,
  separator,
}: PropsWithChildren<BreadcrumbProps>) {
  const childrenArray = Children.toArray(children).filter(isValidElement);
  const childrenLength = childrenArray.length;

  return (
    <ul className={styles.container}>
      {childrenArray.map((child, i) => (
        <li key={i} className={styles.breadcrumbItem}>
          <span className={styles.text}>{child}</span>
          {i + 1 !== childrenLength ? <span>{separator}</span> : null}
        </li>
      ))}
    </ul>
  );
}
