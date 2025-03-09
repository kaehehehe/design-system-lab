/** @jsxImportSource @emotion/react */
import { X } from "lucide-react";
import { Dispatch, SetStateAction } from "react";

type ClearIconProps = {
  setValue: Dispatch<SetStateAction<string>>;
};

export function ClearIcon({ setValue }: ClearIconProps) {
  const onClear = () => {
    setValue("");
  };

  return <X onClick={onClear} />;
}
