import { style } from "@vanilla-extract/css";
import { Colors } from "../../constants/colors";
import { Typographies } from "../../constants/typography";

export const input = style({
  display: "none",
});

export const labelBase = style({
  ...Typographies.body.R,
  position: "relative",
  display: "flex",
  alignItems: "center",
  gap: 5,
  userSelect: "none",
});

export const labelCursorPointer = style({ cursor: "pointer" });
export const labelCursorNotAllowed = style({ cursor: "not-allowed" });

export const labelColorBlack = style({ color: Colors.basic.black });
export const labelColorNeutral = style({ color: Colors.neutral[200] });

export const beforeBase = style({
  selectors: {
    "&::before": {
      content: '""',
      width: 28,
      height: 18,
      borderRadius: 200,
    },
  },
});

export const beforeBgDisabled = style({
  selectors: { "&::before": { backgroundColor: Colors.light[200] } },
});
export const beforeBgOn = style({
  selectors: { "&::before": { backgroundColor: Colors.primary[100] } },
});
export const beforeBgOff = style({
  selectors: { "&::before": { backgroundColor: Colors.light[100] } },
});

export const afterBase = style({
  selectors: {
    "&::after": {
      content: '""',
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      position: "absolute",
      height: 12,
      width: 12,
      left: 2,
      backgroundColor: Colors.basic.white,
      borderRadius: "50%",
      transition: "transform 300ms ease",
    },
  },
});

export const afterTransformOn = style({
  selectors: { "&::after": { transform: "translateX(90%)" } },
});
