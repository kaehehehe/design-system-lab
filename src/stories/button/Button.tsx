/** @jsxImportSource @emotion/react */
import { css, SerializedStyles } from "@emotion/react";
import { Colors } from "../../constants/colors";
import { Typographies } from "../../constants/typography";
import { ButtonHTMLAttributes, ReactElement } from "react";
import { Size } from "../../types/size";

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  label: string;
  size?: Size;
  disabled?: boolean;
  startIcon?: ReactElement;
  endIcon?: ReactElement;
  customStyle?: SerializedStyles;
};

function Button({
  label,
  size = "medium",
  disabled = false,
  startIcon,
  endIcon,
  customStyle,
  ...props
}: ButtonProps) {
  return (
    <button
      disabled={disabled}
      {...props}
      css={[CommonStyle, SizeStyle[size], customStyle]}
    >
      {startIcon ? startIcon : null}
      <span>{label}</span>
      {endIcon ? endIcon : null}
    </button>
  );
}

//////////////////////////////////////////////////////

export function PrimaryButton(props: ButtonProps) {
  return <Button {...props} customStyle={PrimaryButtonStyle} />;
}

export function SecondaryButton(props: ButtonProps) {
  return <Button {...props} customStyle={SecondaryButtonStyle} />;
}

export function WarningButton(props: ButtonProps) {
  return <Button {...props} customStyle={WarningButtonStyle} />;
}

export function SuccessButton(props: ButtonProps) {
  return <Button {...props} customStyle={SuccessButtonStyle} />;
}

//////////////////////////////////////////////////////

const CommonStyle = css({
  display: "flex",
  alignItems: "center",
  gap: "4px",
  transition: "all 300ms ease",

  ":disabled": {
    cursor: "not-allowed",
  },
});

const SizeStyle = {
  small: css({
    ...Typographies.caption.R,
    padding: "6px 10px",
    borderRadius: "6px",
  }),

  medium: css({
    ...Typographies.body.R,
    padding: "8px 12px",
    borderRadius: "8px",
  }),

  large: css({
    ...Typographies.body.R,
    padding: "12px 20px",
    borderRadius: "8px",
  }),
};

const PrimaryButtonStyle = css({
  backgroundColor: Colors.primary[100],
  color: Colors.basic.white,

  ":hover": {
    backgroundColor: Colors.secondary[100],
  },

  ":active": {
    backgroundColor: Colors.secondary[50],
  },

  ":disabled": {
    backgroundColor: Colors.light[200],
    color: Colors.neutral[200],
  },
});

const SecondaryButtonStyle = css({
  backgroundColor: Colors.basic.white,
  color: Colors.basic.black,
  border: `1px solid ${Colors.light[200]}`,

  ":hover": {
    backgroundColor: Colors.light[400],
  },

  ":active": {
    backgroundColor: Colors.light[300],
  },

  ":disabled": {
    color: Colors.light[100],
    backgroundColor: Colors.light[400],
    borderColor: Colors.light[100],
  },
});

const WarningButtonStyle = css({
  backgroundColor: Colors.red[100],
  color: Colors.basic.white,

  ":hover": {
    backgroundColor: Colors.red[200],
  },

  ":active": {
    backgroundColor: Colors.red[50],
  },

  ":disabled": {
    backgroundColor: Colors.light[200],
    color: Colors.neutral[200],
  },
});

const SuccessButtonStyle = css({
  backgroundColor: Colors.green[100],
  color: Colors.basic.white,

  ":hover": {
    backgroundColor: Colors.green[200],
  },

  ":active": {
    backgroundColor: Colors.green[50],
  },

  ":disabled": {
    backgroundColor: Colors.light[200],
    color: Colors.neutral[200],
  },
});
