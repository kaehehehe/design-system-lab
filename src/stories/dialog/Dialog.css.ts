import { style } from "@vanilla-extract/css";
import { Typographies } from "../../constants/typography";
import { Colors } from "../../constants/colors";
import { recipe } from "@vanilla-extract/recipes";

export const overlay = style({
  zIndex: 1000,
  position: "fixed",
  top: 0,
  left: 0,
  width: "100vw",
  height: "100vh",
  backgroundColor: "rgba(0, 0, 0, 0.5)",
});

const dialogBaseStyle = style({
  zIndex: 1001,
  position: "fixed",
  top: "50%",
  left: "50%",
  borderRadius: 10,
  transform: "translate(-50%, -50%)",
  backgroundColor: Colors.basic.white,
  boxShadow: `
    rgba(50, 50, 93, 0.25) 0px 30px 60px -12px,
    rgba(0, 0, 0, 0.3) 0px 18px 36px -18px
  `,
});

export const dialogRecipe = recipe({
  base: dialogBaseStyle,
  variants: {
    size: {
      XS: {
        width: 526,
      },
      S: {
        width: 773,
      },
      M: {
        width: 834,
      },
      L: {
        width: 1038,
      },
    },
  },

  defaultVariants: {
    size: "M",
  },
});

export const title = style({
  ...Typographies.title.SB,
});

export const closeButton = style({
  cursor: "pointer",
});

export const header = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "16px 24px",
  borderBottom: `1px solid ${Colors.light[200]}`,
});

export const body = style({
  display: "flex",
  padding: "16px 24px",
});

export const footer = style({
  display: "flex",
  justifyContent: "space-between",
  gap: 16,
  width: "100%",
  padding: "16px 24px",
  borderTop: `1px solid ${Colors.light[200]}`,
});
