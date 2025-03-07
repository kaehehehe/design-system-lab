/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Children, Fragment } from "react";
import { Colors } from "../../constants/colors";
import { Typographies } from "../../constants/typography";
import { Check } from "lucide-react";
import { ChipProps, FilterProps } from "./Filter.type";

export const Filter = ({ children }: FilterProps) => {
  const filterChips = Children.toArray(children);

  return (
    <ul
      css={css`
        display: flex;
        gap: 12px;
        flex-wrap: wrap;
        width: 100%;
      `}
    >
      {filterChips.map((chip, index) => (
        <Fragment key={index}>{chip}</Fragment>
      ))}
    </ul>
  );
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

export const RoundFillChip = (props: Omit<ChipProps, "variant" | "shape">) => (
  <Chip {...props} variant="fill" shape="round" />
);

export const RoundStrokeChip = (
  props: Omit<ChipProps, "variant" | "shape">
) => <Chip {...props} variant="stroke" shape="round" />;

export const SquareFillChip = (props: Omit<ChipProps, "variant" | "shape">) => (
  <Chip {...props} variant="fill" shape="square" />
);

export const SquareStrokeChip = (
  props: Omit<ChipProps, "variant" | "shape">
) => <Chip {...props} variant="stroke" shape="square" />;

///////////////////////////////////////////////////////////////

const CommonStyle = css`
  display: flex;
  align-items: center;
  gap: 2px;
  transition: all 300ms ease;
`;

const SizeStyle = {
  small: css`
    ${Typographies.caption.R}
    padding: 6px 10px;
  `,

  medium: css`
    ${Typographies.body.R}
    padding: 8px 12px;
  `,

  large: css`
    ${Typographies.body.R}
    padding: 12px 16px;
  `,
};

const FillStyle = {
  default: css`
    color: ${Colors.basic.black};
    background-color: ${Colors.light[300]};

    &:hover {
      background-color: ${Colors.light[400]};
    }
    &:active {
      background-color: ${Colors.light[200]};
    }
  `,

  selected: css`
    color: ${Colors.basic.white};
    background-color: ${Colors.primary[100]};

    :hover {
      background-color: ${Colors.secondary[100]};
    }
    :active {
      background-color: ${Colors.secondary[50]};
    }
  `,
};

const StrokeStyle = {
  default: css`
    border: 1px solid ${Colors.light[200]};
    color: ${Colors.basic.black};
    background-color: ${Colors.basic.white};

    :hover {
      background-color: ${Colors.light[400]};
    }
    :active {
      background-color: ${Colors.light[300]};
    }
  `,

  selected: css`
    border: 1px solid ${Colors.primary[100]};
    color: ${Colors.primary[100]};

    :hover {
      background-color: ${Colors.secondary[500]};
    }
    :active {
      background-color: ${Colors.secondary[400]};
    }
  `,
};

const RoundStyle = {
  small: css`
    border-radius: 20px;
  `,

  medium: css`
    border-radius: 28px;
  `,

  large: css`
    border-radius: 28px;
  `,
};

const SquareStyle = css`
  border-radius: 8px;
`;

///////////////////////////////////////////////////////////////

Filter.RoundFillChip = RoundFillChip;
Filter.RoundStrokeChip = RoundStrokeChip;
Filter.SquareFillChip = SquareFillChip;
Filter.SquareStrokeChip = SquareStrokeChip;
