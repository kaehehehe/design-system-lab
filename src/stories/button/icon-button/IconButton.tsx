/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { ButtonHTMLAttributes, ReactElement } from "react";
import { Size } from "../../../types/size";
import { Colors } from "../../../constants/colors";

export type IconButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  icon: ReactElement;
  size?: Size;
  disabled?: boolean;
};

export function IconButton({
  icon,
  disabled = false,
  size = "small",
  ...props
}: IconButtonProps) {
  return (
    <button
      disabled={disabled}
      css={[IconButtonStyle, IconButtonSizeStyle[size]]}
      {...props}
    >
      {icon}
    </button>
  );
}

const IconButtonStyle = css`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 4px;
  border-radius: 4px;
  background-color: ${Colors.basic.white};
  transition: all 300ms ease;

  svg {
    color: ${Colors.neutral[100]};
  }

  :hover {
    background-color: ${Colors.light[200]};
  }

  :active {
    background-color: ${Colors.light[100]};
  }

  :disabled {
    background-color: ${Colors.basic.white};
    cursor: not-allowed;

    svg {
      color: ${Colors.light[100]};
    }

    :hover,
    :active {
      background-color: transparent;
    }
  }
`;

const IconButtonSizeStyle = {
  small: css`
    width: 16px;
    height: 16px;

    svg {
      width: 16px;
      height: 16px;
    }
  `,

  medium: css`
    width: 24px;
    height: 24px;

    svg {
      width: 16px;
      height: 16px;
    }
  `,

  large: css`
    width: 28px;
    height: 28px;

    svg {
      width: 20px;
      height: 20px;
    }
  `,
};
