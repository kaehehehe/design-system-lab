import { recipe, RecipeVariants } from "@vanilla-extract/recipes";
import { Colors } from "../../constants/colors";
import { Typographies } from "../../constants/typography";

const captionR = Typographies.caption.R;
const bodyR = Typographies.body.R;

export const buttonRecipe = recipe({
  base: {
    display: "flex",
    alignItems: "center",
    gap: 4,
    transition: "all 300ms ease",
    selectors: {
      "&:disabled": {
        cursor: "not-allowed",
      },
    },
  },

  variants: {
    size: {
      small: {
        ...captionR,
        padding: "6px 10px",
        borderRadius: 6,
      },
      medium: {
        ...bodyR,
        padding: "8px 12px",
        borderRadius: 8,
      },
      large: {
        ...bodyR,
        padding: "12px 20px",
        borderRadius: 8,
      },
    },

    variant: {
      primary: {
        backgroundColor: Colors.primary[100],
        color: Colors.basic.white,
        selectors: {
          "&:hover": {
            backgroundColor: Colors.secondary[100],
          },
          "&:active": {
            backgroundColor: Colors.secondary[50],
          },
          "&:disabled": {
            backgroundColor: Colors.light[200],
            color: Colors.neutral[200],
          },
        },
      },
      secondary: {
        backgroundColor: Colors.basic.white,
        color: Colors.basic.black,
        border: `1px solid ${Colors.light[200]}`,
        selectors: {
          "&:hover": {
            backgroundColor: Colors.light[400],
          },
          "&:active": {
            backgroundColor: Colors.light[300],
          },
          "&:disabled": {
            color: Colors.light[100],
            backgroundColor: Colors.light[400],
            borderColor: Colors.light[100],
          },
        },
      },
      warning: {
        backgroundColor: Colors.red[100],
        color: Colors.basic.white,
        selectors: {
          "&:hover": {
            backgroundColor: Colors.red[200],
          },
          "&:active": {
            backgroundColor: Colors.red[50],
          },
          "&:disabled": {
            backgroundColor: Colors.light[200],
            color: Colors.neutral[200],
          },
        },
      },
      success: {
        backgroundColor: Colors.green[100],
        color: Colors.basic.white,
        selectors: {
          "&:hover": {
            backgroundColor: Colors.green[200],
          },
          "&:active": {
            backgroundColor: Colors.green[50],
          },
          "&:disabled": {
            backgroundColor: Colors.light[200],
            color: Colors.neutral[200],
          },
        },
      },
    },
  },

  defaultVariants: {
    size: "medium",
    variant: "primary",
  },
});
