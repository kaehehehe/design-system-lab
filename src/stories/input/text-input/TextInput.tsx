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

type InputType = "text" | "password" | "number";

type TextInputProps = {
  labelText?: string;
  helperText?: string;
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  prefixIcon?: ReactElement;
  suffixIcon?: ReactElement;
  type?: InputType;
};

export function TextInput({
  labelText,
  helperText,
  value,
  setValue,
  prefixIcon,
  suffixIcon,
  type = "text",
  ...props
}: TextInputProps) {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <InputContainer>
      {labelText && <LabelText labelText={labelText} />}
      <InputArea isFocused={isFocused}>
        {prefixIcon ? prefixIcon : null}
        <Input
          value={value}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          type={type}
          {...props}
        />
        <ClearIcon setValue={setValue} />
        {suffixIcon ? suffixIcon : null}
      </InputArea>
      {helperText && <HelperText helperText={helperText} />}
    </InputContainer>
  );
}
