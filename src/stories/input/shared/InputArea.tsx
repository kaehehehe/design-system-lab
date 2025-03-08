/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Colors } from "../../../constants/colors";
import { ReactNode, useState } from "react";
import { X } from "lucide-react";

type InputAreaProps = {
  children: ReactNode;
  onClear: () => void;
  isFocused: boolean;
};

export function InputArea({ children, onClear, isFocused }: InputAreaProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      css={InputAreaStyle(isFocused, isHovered)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
      <X onClick={onClear} size={16} css={ClearIconStyle} />
    </div>
  );
}

const InputAreaStyle = (isFocused: boolean, isHovered: boolean) => css`
  display: flex;
  justify-content: space-between;
  width: 357px;
  padding: 6px 10px;
  border-radius: 6px;
  border: 1px solid
    ${isFocused
      ? Colors.primary[100]
      : isHovered
      ? Colors.secondary[100]
      : Colors.light[200]};
`;

const ClearIconStyle = css`
  cursor: pointer;
`;
