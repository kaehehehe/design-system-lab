import { ReactNode } from "react";
import { Size } from "../../types/size";

export type FilterProps = {
  children: ReactNode;
};

export type ChipProps = {
  label: string;
  size?: Size;
  selected: boolean;
  onClick: () => void;
  variant: "fill" | "stroke";
  shape: "round" | "square";
};
