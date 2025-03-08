/** @jsxImportSource @emotion/react */
import { InputContainer } from "../shared/InputContainer";
import { LabelText } from "../shared/LabelText";
import { InputArea } from "../shared/InputArea";
import { HelperText } from "../shared/HelperText";
import { ChangeEvent, useState } from "react";
import { Input } from "../shared/Input";

type TextInputProps = {
  labelText?: string;
  helperText?: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onClear: () => void;
};

export function TextInput({
  labelText,
  helperText,
  value,
  onClear,
  ...props
}: TextInputProps) {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <InputContainer>
      {labelText && <LabelText labelText={labelText} />}
      <InputArea onClear={onClear} isFocused={isFocused}>
        <Input
          value={value}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          type="text"
          {...props}
        />
      </InputArea>
      {helperText && <HelperText helperText={helperText} />}
    </InputContainer>
  );
}
