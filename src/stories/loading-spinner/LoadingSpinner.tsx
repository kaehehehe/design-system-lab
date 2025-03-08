/** @jsxImportSource @emotion/react */
import { css, keyframes } from "@emotion/react";
import { Colors } from "../../constants/colors";

type LoadingSpinnerProps = {
  size?: number;
  color?: string;
};

export function LoadingSpinner({
  size = 16,
  color = `${Colors.primary[100]}`,
}: LoadingSpinnerProps) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      css={LoadingSpinnerSize(size)}
    >
      <path
        d="M11.7112 5.56781C12.4182 5.56781 12.9912 4.99474 12.9912 4.28781C12.9912 3.58089 12.4182 3.00781 11.7112 3.00781C11.0043 3.00781 10.4312 3.58089 10.4312 4.28781C10.4312 4.99474 11.0043 5.56781 11.7112 5.56781Z"
        fill={color}
        css={LoadingSpinnerAnimation(0)}
      />
      <path
        d="M8.00031 4.15998C8.70723 4.15998 9.28031 3.5869 9.28031 2.87998C9.28031 2.17305 8.70723 1.59998 8.00031 1.59998C7.29338 1.59998 6.72031 2.17305 6.72031 2.87998C6.72031 3.5869 7.29338 4.15998 8.00031 4.15998Z"
        fill={color}
        css={LoadingSpinnerAnimation(1)}
      />
      <path
        d="M4.28781 5.56781C4.99474 5.56781 5.56781 4.99474 5.56781 4.28781C5.56781 3.58089 4.99474 3.00781 4.28781 3.00781C3.58089 3.00781 3.00781 3.58089 3.00781 4.28781C3.00781 4.99474 3.58089 5.56781 4.28781 5.56781Z"
        fill={color}
        css={LoadingSpinnerAnimation(2)}
      />
      <path
        d="M3.28 9.56C3.98692 9.56 4.56 8.98692 4.56 8.28C4.56 7.57308 3.98692 7 3.28 7C2.57308 7 2 7.57308 2 8.28C2 8.98692 2.57308 9.56 3.28 9.56Z"
        fill={color}
        css={LoadingSpinnerAnimation(3)}
      />
      <path
        d="M4.28781 12.8639C4.99474 12.8639 5.56781 12.2908 5.56781 11.5839C5.56781 10.877 4.99474 10.3039 4.28781 10.3039C3.58089 10.3039 3.00781 10.877 3.00781 11.5839C3.00781 12.2908 3.58089 12.8639 4.28781 12.8639Z"
        fill={color}
        css={LoadingSpinnerAnimation(4)}
      />
      <path
        d="M8.00031 14.3998C8.70723 14.3998 9.28031 13.8268 9.28031 13.1198C9.28031 12.4129 8.70723 11.8398 8.00031 11.8398C7.29338 11.8398 6.72031 12.4129 6.72031 13.1198C6.72031 13.8268 7.29338 14.3998 8.00031 14.3998Z"
        fill={color}
        css={LoadingSpinnerAnimation(5)}
      />
      <path
        d="M11.7112 12.8639C12.4182 12.8639 12.9912 12.2908 12.9912 11.5839C12.9912 10.877 12.4182 10.3039 11.7112 10.3039C11.0043 10.3039 10.4312 10.877 10.4312 11.5839C10.4312 12.2908 11.0043 12.8639 11.7112 12.8639Z"
        fill={color}
        css={LoadingSpinnerAnimation(6)}
      />
      <path
        d="M13.1206 9.28028C13.8276 9.28028 14.4006 8.7072 14.4006 8.00028C14.4006 7.29335 13.8276 6.72028 13.1206 6.72028C12.4137 6.72028 11.8406 7.29335 11.8406 8.00028C11.8406 8.7072 12.4137 9.28028 13.1206 9.28028Z"
        fill={color}
        css={LoadingSpinnerAnimation(7)}
      />
    </svg>
  );
}

const LoadingSpinnerSize = (size: number) => {
  return css`
    width: ${size}px;
    height: ${size}px;
  `;
};

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const LoadingSpinnerAnimation = (idx: number) => {
  const BASE_ANIMATION_DELAY = 0.125;
  return css({
    animation: `${fadeIn} 1s ${BASE_ANIMATION_DELAY * idx}s infinite`,
  });
};
