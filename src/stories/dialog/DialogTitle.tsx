/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Typographies } from "../../constants/typography";

type DialogTitleProps = {
  title: string;
};

export function DialogTitle({ title }: DialogTitleProps) {
  return <h1 css={DialogTitleStyle}>{title}</h1>;
}

const DialogTitleStyle = css({
  ...Typographies.title.SB,
});
