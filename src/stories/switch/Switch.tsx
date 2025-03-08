/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Colors } from "../../constants/colors";
import { Typographies } from "../../constants/typography";
import { useId } from "react";

type SwitchProps = {
  label: string;
  disabled?: boolean;
  onToggle: () => void;
  isOn: boolean;
};

export function Switch({
  label,
  disabled = false,
  isOn,
  onToggle,
}: SwitchProps) {
  const id = useId();

  return (
    <>
      <input
        type="checkbox"
        id={`switch${id}`}
        css={[SwitchStyle.input]}
        onChange={() => {
          if (disabled) return;
          onToggle();
        }}
        checked={isOn}
        disabled={disabled}
      />
      <label
        htmlFor={`switch${id}`}
        css={[SwitchStyle.label(isOn, disabled), SwitchLabelStyle(disabled)]}
      >
        {label}
      </label>
    </>
  );
}

const SwitchStyle = {
  input: css`
    display: none;
  `,

  label: (isOn: boolean, disabled: boolean) => css`
    position: relative;
    display: flex;
    align-items: center;
    user-select: none;
    cursor: ${disabled ? "not-allowed" : "pointer"};

    &::before {
      content: "";
      width: 28px;
      height: 18px;
      background-color: ${disabled
        ? Colors.light[200]
        : isOn
        ? Colors.primary[100]
        : Colors.light[100]};
      border-radius: 200px;
      margin-right: 8px;
    }

    &::after {
      content: "";
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      height: 12px;
      width: 12px;
      left: 2px;
      background-color: ${Colors.basic.white};
      border-radius: 50%;
      transition: transform 300ms ease;
      transform: ${isOn ? "translateX(90%)" : "none"};
    }
  `,
};

const SwitchLabelStyle = (disabled: boolean) => css`
  ${Typographies.body.R}
  color: ${disabled ? Colors.neutral[200] : Colors.basic.black};
`;
