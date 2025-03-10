/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Children, Fragment, ReactNode } from "react";

type FlexboxProps = {
  children: ReactNode;
  flexDirection?: "column" | "row";
  alignItems?: "flex-start" | "flex-end" | "center" | "baseline" | "stretch";
  justifyContent?:
    | "flex-start"
    | "flex-end"
    | "center"
    | "space-between"
    | "space-around"
    | "space-evenly";
  gap?: number;
};

export function Flexbox({
  children,
  flexDirection = "row",
  alignItems = "flex-start",
  justifyContent = "flex-start",
  gap = 0,
}: FlexboxProps) {
  const childrenArray = Children.toArray(children);

  return (
    <div css={flexStyle({ flexDirection, alignItems, justifyContent, gap })}>
      {childrenArray.map((child, index) => (
        <Fragment key={index}>{child}</Fragment>
      ))}
    </div>
  );
}

const flexStyle = ({
  flexDirection,
  alignItems,
  justifyContent,
  gap,
}: Pick<
  FlexboxProps,
  "flexDirection" | "alignItems" | "justifyContent" | "gap"
>) =>
  css({
    display: "flex",
    flexDirection,
    alignItems,
    justifyContent,
    gap: `${gap}px`,
  });
