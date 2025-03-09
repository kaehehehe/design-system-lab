/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useId } from "react";
import { Colors } from "../../constants/colors";
import { InteractiveArea } from "./InteractiveArea";
import { IconCheckboxOn } from "./IconCheckboxOn";
import { IconCheckboxOff } from "./IconCheckboxOff";

type CheckboxProps = {
  label: string;
  disabled?: boolean;
  onToggle: () => void;
  checked: boolean;
};

export function Checkbox({
  label,
  disabled = false,
  checked,
  onToggle,
}: CheckboxProps) {
  const id = useId();

  return (
    <InteractiveArea>
      {(isHovered, isActive) => {
        return (
          <span
            css={css`
              display: flex;
              margin: 0 auto;
            `}
          >
            <input
              type="checkbox"
              id={`checkbox${id}`}
              css={CheckboxStyle.input}
              onChange={() => {
                if (disabled) return;
                onToggle();
              }}
              checked={checked}
              disabled={disabled}
            />

            {checked ? (
              <IconCheckboxOn
                color={
                  isActive
                    ? Colors.secondary[50]
                    : isHovered
                    ? Colors.secondary[100]
                    : Colors.primary[100]
                }
              />
            ) : (
              <IconCheckboxOff
                innerColor={
                  isActive
                    ? Colors.secondary[400]
                    : isHovered
                    ? Colors.secondary[500]
                    : Colors.light[400]
                }
                borderColor={
                  isActive
                    ? Colors.secondary[50]
                    : isHovered
                    ? Colors.secondary[100]
                    : Colors.neutral[100]
                }
              />
            )}

            <label
              htmlFor={`checkbox${id}`}
              css={CheckboxStyle.label(disabled)}
            >
              {label}
            </label>
          </span>
        );
      }}
    </InteractiveArea>
  );
}

const CheckboxStyle = {
  input: css`
    display: none;
  `,

  label: (disabled: boolean) => css`
    position: relative;
    display: flex;
    align-items: center;
    user-select: none;
    cursor: ${disabled ? "not-allowed" : "pointer"};
  `,
};
