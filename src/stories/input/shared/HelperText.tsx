/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Typographies } from "../../../constants/typography";
import { Colors } from "../../../constants/colors";

type HelperTextProps = {
  helperText: string;
};

export function HelperText({ helperText }: HelperTextProps) {
  return <div css={HelperTextStyle}>{helperText}</div>;
}

const HelperTextStyle = css`
  ${Typographies.caption.R}
  color: ${Colors.neutral[100]};
  margin-top: 2px;
`;
