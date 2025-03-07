/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Children, isValidElement, PropsWithChildren } from "react";
import { Typographies } from "../../constants/typography";
import { BreadcrumbProps } from "./Breadcrumb.type";

export function Breadcrumb({
  children,
  separator,
}: PropsWithChildren<BreadcrumbProps>) {
  const childrenArray = Children.toArray(children).filter(isValidElement);
  const childrenLength = childrenArray.length;

  return (
    <ul css={BreadcrumbStyle.container}>
      {childrenArray.map((child, i) => (
        <li key={i} css={BreadcrumbStyle.breadcrumbItem}>
          <span css={BreadcrumbStyle.text}>{child}</span>
          {i + 1 !== childrenLength ? <span>{separator}</span> : null}
        </li>
      ))}
    </ul>
  );
}

const BreadcrumbStyle = {
  container: css`
    display: flex;
    gap: 8px;
  `,

  text: css`
    ${Typographies.caption.SB}
  `,

  breadcrumbItem: css`
    display: flex;
    gap: 8px;
  `,
};
