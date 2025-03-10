/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { InputContainer } from "../shared/InputContainer";
import { LabelText } from "../shared/LabelText";
import { InputArea } from "../shared/InputArea";
import { HelperText } from "../shared/HelperText";
import {
  ChangeEvent,
  Dispatch,
  ReactElement,
  SetStateAction,
  useState,
} from "react";
import { Input } from "../shared/Input";
import { ClearIcon } from "../shared/ClearIcon";
import { Colors } from "../../../constants/colors";

type InputType = "text" | "password" | "number";

export type BaseInputProps = {
  labelText?: string;
  helperText?: string;
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  prefixIcon?: ReactElement;
  suffixIcon?: ReactElement;
  type?: InputType;
  placeholder: string;
};

export function BaseInput({
  labelText,
  helperText,
  value,
  setValue,
  prefixIcon,
  suffixIcon,
  type = "text",
  placeholder,
  ...props
}: BaseInputProps) {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <BaseInput.InputContainer>
      {labelText && <BaseInput.LabelText labelText={labelText} />}
      <BaseInput.InputArea isFocused={isFocused}>
        <span css={IconStyle}>{prefixIcon && prefixIcon}</span>

        <BaseInput.Input
          value={value}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          type={type}
          placeholder={placeholder}
          {...props}
        />

        <span css={[IconWrapperStyle, IconStyle]}>
          {value && <BaseInput.ClearIcon setValue={setValue} />}
          {suffixIcon && suffixIcon}
        </span>
      </BaseInput.InputArea>
      {helperText && <BaseInput.HelperText helperText={helperText} />}
    </BaseInput.InputContainer>
  );
}

BaseInput.InputContainer = InputContainer;
BaseInput.InputArea = InputArea;
BaseInput.Input = Input;
BaseInput.ClearIcon = ClearIcon;
BaseInput.LabelText = LabelText;
BaseInput.HelperText = HelperText;

const IconStyle = css({
  svg: {
    width: "16px",
    height: "16px",
    color: Colors.neutral[200],
    cursor: "pointer",
  },
});

const IconWrapperStyle = css({
  display: "flex",
  alignItems: "center",
  gap: "6px",
});
