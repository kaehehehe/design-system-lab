/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Typographies } from "../../../constants/typography";
import { Colors } from "../../../constants/colors";

type LabelTextProps = {
  labelText: string;
};

export function LabelText({ labelText }: LabelTextProps) {
  return <label css={LabelTextStyle}>{labelText}</label>;
}

const LabelTextStyle = css({
  ...Typographies.caption.R,
  color: Colors.basic.black,
  marginBottom: "4px",
});
