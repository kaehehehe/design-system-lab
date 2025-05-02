import { useId } from "react";
import { Colors } from "../../constants/colors";
import { InteractiveArea } from "./InteractiveArea";
import { IconCheckboxOn } from "./IconCheckboxOn";
import { IconCheckboxOff } from "./IconCheckboxOff";
import * as styles from "./Checkbox.css";

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
          <span className={styles.container}>
            <input
              type="checkbox"
              id={`checkbox${id}`}
              className={styles.input}
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
              css={styles.labelRecipe({ disabled })}
            >
              {label}
            </label>
          </span>
        );
      }}
    </InteractiveArea>
  );
}
