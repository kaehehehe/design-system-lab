type IconCheckboxOnProps = {
  color: string;
};

export function IconCheckboxOn({ color }: IconCheckboxOnProps) {
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
        fill={color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.8166 5.11304C12.0303 5.2879 12.0618 5.60291 11.887 5.81663L7.77042 10.848C7.37264 11.3342 6.63038 11.3375 6.22824 10.8549L4.11589 8.32011C3.9391 8.10797 3.96777 7.79269 4.17991 7.6159C4.39204 7.43912 4.70733 7.46778 4.88411 7.67992L6.99646 10.2147L11.113 5.1834C11.2879 4.96967 11.6029 4.93817 11.8166 5.11304Z"
        fill="white"
      />
    </svg>
  );
}
