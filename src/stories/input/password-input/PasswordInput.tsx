import { useState } from "react";
import { BaseInput, BaseInputProps } from "../base-input/BaseInput";
import { Eye, EyeOff } from "lucide-react";

type PasswordInputProps = BaseInputProps & {};

export function PasswordInput({
  type,
  placeholder,
  ...props
}: PasswordInputProps) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <BaseInput
      placeholder={placeholder}
      type={showPassword ? "text" : "password"}
      suffixIcon={
        showPassword ? (
          <EyeOff size={16} onClick={() => setShowPassword(false)} />
        ) : (
          <Eye size={16} onClick={() => setShowPassword(true)} />
        )
      }
      {...props}
    />
  );
}
