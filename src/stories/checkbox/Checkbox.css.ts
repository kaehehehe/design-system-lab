import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

export const container = style({
  display: "flex",
  margin: "0 auto",
});

export const input = style({
  display: "none",
});
export const labelRecipe = recipe({
  base: {
    position: "relative",
    display: "flex",
    alignItems: "center",
    userSelect: "none",
  },

  variants: {
    disabled: {
      true: {
        cursor: "not-allowed",
      },
      false: {
        cursor: "pointer",
      },
    },
  },
});
