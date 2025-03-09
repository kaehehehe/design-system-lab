import { ReactNode, useState } from "react";

type InteractiveAreaProps = {
  children: (isHovered: boolean, isActive: boolean) => ReactNode;
};

export function InteractiveArea({ children }: InteractiveAreaProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isActive, setIsActive] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseDown={() => setIsActive(true)}
      onMouseUp={() => setIsActive(false)}
    >
      {children(isHovered, isActive)}
    </div>
  );
}
