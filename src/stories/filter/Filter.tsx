/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Children, Fragment, MouseEvent, ReactElement } from "react";
import { Colors } from "../../constants/colors";
import { Typographies } from "../../constants/typography";
import { Check } from "lucide-react";
import { Size } from "../../types/size";

export type FilterProps = {
  children: ReactElement<typeof Chip>[];
};

export function Filter({ children }: FilterProps) {
  const filterChips = Children.toArray(children);

  return (
    <div css={FilterStyle}>
      {filterChips.map((chip, index) => (
        <Fragment key={index}>{chip}</Fragment>
      ))}
    </div>
  );
}

const FilterStyle = css({
  display: "flex",
  gap: "12px",
  flexWrap: "wrap",
  width: "100%",
});

export type ChipProps = {
  label: string;
  size?: Size;
  selected: boolean;
  onClick: (event: MouseEvent<HTMLButtonElement>) => void;
  variant: "fill" | "stroke";
  shape: "round" | "square";
};

const Chip = ({
  label,
  size = "medium",
  selected,
  onClick,
  variant,
  shape,
}: ChipProps) => {
  const styles = [
    CommonStyle,
    SizeStyle[size],
    variant === "fill"
      ? FillStyle[selected ? "selected" : "default"]
      : StrokeStyle[selected ? "selected" : "default"],
    shape === "round" ? RoundStyle[size] : SquareStyle,
  ];

  return (
    <button css={styles} onClick={onClick}>
      {selected && <Check size="16px" />}
      {label}
    </button>
  );
};

export function RoundFillChip(props: Omit<ChipProps, "variant" | "shape">) {
  return <Chip {...props} variant="fill" shape="round" />;
}

export function RoundStrokeChip(props: Omit<ChipProps, "variant" | "shape">) {
  return <Chip {...props} variant="stroke" shape="round" />;
}

export function SquareFillChip(props: Omit<ChipProps, "variant" | "shape">) {
  return <Chip {...props} variant="fill" shape="square" />;
}

export function SquareStrokeChip(props: Omit<ChipProps, "variant" | "shape">) {
  return <Chip {...props} variant="stroke" shape="square" />;
}

///////////////////////////////////////////////////////////////

const CommonStyle = css({
  display: "flex",
  alignItems: "center",
  gap: "2px",
  transition: "all 300ms ease",
});

const SizeStyle = {
  small: css({
    ...Typographies.caption.R,
    padding: "6px 10px",
  }),

  medium: css({
    ...Typographies.body.R,
    padding: "8px 12px",
  }),

  large: css({
    ...Typographies.body.R,
    padding: "12px 16px",
  }),
};

const FillStyle = {
  default: css({
    color: Colors.basic.black,
    backgroundColor: Colors.light[300],

    "&:hover": {
      backgroundColor: Colors.light[400],
    },
    "&:active": {
      backgroundColor: Colors.light[200],
    },
  }),

  selected: css({
    color: Colors.basic.white,
    backgroundColor: Colors.primary[100],

    "&:hover": {
      backgroundColor: Colors.secondary[100],
    },
    "&:active": {
      backgroundColor: Colors.secondary[50],
    },
  }),
};

const StrokeStyle = {
  default: css({
    border: `1px solid ${Colors.light[200]}`,
    color: Colors.basic.black,
    backgroundColor: Colors.basic.white,

    "&:hover": {
      backgroundColor: Colors.light[400],
    },
    "&:active": {
      backgroundColor: Colors.light[300],
    },
  }),

  selected: css({
    border: `1px solid ${Colors.primary[100]}`,
    color: Colors.primary[100],

    "&:hover": {
      backgroundColor: Colors.secondary[500],
    },
    "&:active": {
      backgroundColor: Colors.secondary[400],
    },
  }),
};

const RoundStyle = {
  small: css({
    borderRadius: "20px",
  }),

  medium: css({
    borderRadius: "28px",
  }),

  large: css({
    borderRadius: "28px",
  }),
};

const SquareStyle = css({
  borderRadius: "8px",
});

///////////////////////////////////////////////////////////////

Filter.RoundFillChip = RoundFillChip;
Filter.RoundStrokeChip = RoundStrokeChip;
Filter.SquareFillChip = SquareFillChip;
Filter.SquareStrokeChip = SquareStrokeChip;
