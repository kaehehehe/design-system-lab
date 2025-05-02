import { style } from "@vanilla-extract/css";
import { Typographies } from "../../constants/typography";

export const container = style({
  display: "flex",
  gap: 8,
});

export const breadcrumbItem = style({
  display: "flex",
  gap: 8,
});

export const text = style({
  ...Typographies.caption.SB,
});
