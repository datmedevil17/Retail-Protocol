import { useEffect, useState } from "react";

export const useInput = () => {
  const [input, setInput] = useState({
    forward: false,
    backward: false,
    left: false,
    right: false,
    shift: false,
    jump: false,
    break_dance: false,
    backflip: false,
  });
  const keys = {
    KeyW: "forward",
    KeyS: "backward",
    KeyA: "left",
    KeyD: "right",
    ShiftLeft: "shift",
    Space: "jump",
    Digit1: "break_dance", 
    Digit2: "backflip",
  };

  const findKey = (key: string) => keys[key];

  useEffect(() => {
    const handleKeyDown = (e) => {
      setInput((m) => ({ ...m, [findKey(e.code)]: true }));
    };
    const handleKeyUp = (e) => {
      setInput((m) => ({ ...m, [findKey(e.code)]: false }));
    };
    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("keyup", handleKeyUp);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("keyup", handleKeyUp);
    };
  }, []);
  return input;
};
