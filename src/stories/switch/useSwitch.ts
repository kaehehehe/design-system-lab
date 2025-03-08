import { useState } from "react";

export function useSwitch(initialValue = false) {
  const [isOn, setIsOn] = useState(initialValue);

  const toggle = () => {
    setIsOn((prev) => !prev);
  };

  const turnOn = () => {
    setIsOn(true);
  };

  const turnOff = () => {
    setIsOn(false);
  };

  return {
    isOn,
    toggle,
    turnOn,
    turnOff,
  };
}
