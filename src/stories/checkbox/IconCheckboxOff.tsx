type IconCheckboxOffProps = {
  innerColor: string;
  borderColor: string;
};

export function IconCheckboxOff({
  innerColor,
  borderColor,
}: IconCheckboxOffProps) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2 5C2 3.34315 3.34315 2 5 2H11C12.6569 2 14 3.34315 14 5V11C14 12.6569 12.6569 14 11 14H5C3.34315 14 2 12.6569 2 11V5Z"
        fill={innerColor}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11 3H5C3.89543 3 3 3.89543 3 5V11C3 12.1046 3.89543 13 5 13H11C12.1046 13 13 12.1046 13 11V5C13 3.89543 12.1046 3 11 3ZM5 2C3.34315 2 2 3.34315 2 5V11C2 12.6569 3.34315 14 5 14H11C12.6569 14 14 12.6569 14 11V5C14 3.34315 12.6569 2 11 2H5Z"
        fill={borderColor}
      />
    </svg>
  );
}
