import { useId } from "react";
import clsx from "clsx";
import * as styles from "./Switch.css";

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

  const labelClassNames = clsx(
    styles.labelBase,
    disabled ? styles.labelCursorNotAllowed : styles.labelCursorPointer,
    disabled ? styles.labelColorNeutral : styles.labelColorBlack,
    styles.beforeBase,
    disabled
      ? styles.beforeBgDisabled
      : isOn
      ? styles.beforeBgOn
      : styles.beforeBgOff,
    styles.afterBase,
    isOn && styles.afterTransformOn
  );

  return (
    <>
      <input
        type="checkbox"
        id={`switch${id}`}
        className={styles.input}
        onChange={() => {
          if (disabled) return;
          onToggle();
        }}
        checked={isOn}
        disabled={disabled}
      />
      <label htmlFor={`switch${id}`} className={labelClassNames}>
        {label}
      </label>
    </>
  );
}
