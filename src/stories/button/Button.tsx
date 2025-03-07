/** @jsxImportSource @emotion/react */
import { css, SerializedStyles } from "@emotion/react";
import { Colors } from "../../constants/colors";
import { Typographies } from "../../constants/typography";
import { ButtonProps } from "./Button.type";

function Button({
  label,
  size = "medium",
  disabled = false,
  startIcon,
  endIcon,
  customStyle,
  ...props
}: ButtonProps & { customStyle?: SerializedStyles }) {
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

const CommonStyle = css`
  display: flex;
  align-items: center;
  gap: 4px;
  transition: all 300ms ease;

  :disabled {
    cursor: not-allowed;
  }
`;

const SizeStyle = {
  small: css`
    ${Typographies.caption.R}
    padding: 6px 10px;
    border-radius: 6px;
  `,

  medium: css`
    ${Typographies.body.R}
    padding: 8px 12px;
    border-radius: 8px;
  `,

  large: css`
    ${Typographies.body.R}
    padding: 12px 20px;
    border-radius: 8px;
  `,
};

const PrimaryButtonStyle = css`
  background-color: ${Colors.primary[100]};
  color: ${Colors.basic.white};

  :hover {
    background-color: ${Colors.secondary[100]};
  }

  :active {
    background-color: ${Colors.secondary[50]};
  }

  :disabled {
    background-color: ${Colors.light[200]};
    color: ${Colors.neutral[200]};
  }
`;

const SecondaryButtonStyle = css`
  background-color: ${Colors.basic.white};
  color: ${Colors.basic.black};
  border: 1px solid ${Colors.light[200]};

  :hover {
    background-color: ${Colors.light[400]};
  }

  :active {
    background-color: ${Colors.light[300]};
  }

  :disabled {
    color: ${Colors.light[100]};
    background-color: ${Colors.light[400]};
    border-color: ${Colors.light[100]};
  }
`;

const WarningButtonStyle = css`
  background-color: ${Colors.red[100]};
  color: ${Colors.basic.white};

  :hover {
    background-color: ${Colors.red[200]};
  }

  :active {
    background-color: ${Colors.red[50]};
  }

  :disabled {
    background-color: ${Colors.light[200]};
    color: ${Colors.neutral[200]};
  }
`;

const SuccessButtonStyle = css`
  background-color: ${Colors.green[100]};
  color: ${Colors.basic.white};

  :hover {
    background-color: ${Colors.green[200]};
  }

  :active {
    background-color: ${Colors.green[50]};
  }

  :disabled {
    background-color: ${Colors.light[200]};
    color: ${Colors.neutral[200]};
  }
`;
