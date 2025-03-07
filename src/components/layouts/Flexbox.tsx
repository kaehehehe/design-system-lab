import { Children, Fragment, ReactNode } from "react";

type Props = {
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
}: Props) {
  const childrenArray = Children.toArray(children);

  return (
    <div
      style={{
        display: "flex",
        flexDirection,
        alignItems,
        justifyContent,
        gap: `${gap}px`,
      }}
    >
      {childrenArray.map((child, index) => (
        <Fragment key={index}>{child}</Fragment>
      ))}
    </div>
  );
}
