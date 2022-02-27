//
import React, { useState } from "react";
import filter from "./../helpers/filter";

type Suggestions = string[];

const useAutoComplete = () => {
  const [input, setInput] = useState<string>("");
  const [isShow, setIsShow] = useState<boolean>(false);
  const [filtered, setFiltered] = useState<string[]>([]);
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [suggestions, setSuggestion] = useState<Suggestions>([]);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    let filtered;
    setInput(value);

    if (value.length > 0) {
      filtered = filter(suggestions, input);
      setIsShow(true);
    }

    if (filtered) setFiltered(filtered);
    setActiveIndex(0);
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const key = e.code;
    if (isShow && filtered) {
      switch (key) {
        case "Keyup":
          if (activeIndex > 0) {
            setActiveIndex((prevIndex) => prevIndex - 1);
          }
          break;
        case "Keydown":
          if (activeIndex < filtered.length - 1) {
            setActiveIndex((prevIndex) => prevIndex + 1);
          }
          break;
        case "Enter":
          setInput(filtered[activeIndex]);
          setIsShow(false);
          break;
        case "Escape":
          setIsShow(false);
          break;

        default:
          break;
      }
    }
  };

  return [
    onChange,
    onKeyDown,
    input,
    setInput,
    filtered,
    activeIndex,
    setSuggestion,
  ] as const;
};

export default useAutoComplete;

// const [input, setInput] = useState<string>("");
// const [active, setActive] = useState<number>(0);
// const [isShow, setIsShow] = useState<boolean>(false);
// const [filtered, setFiltered] = useState<string[]>([]);
// const [activeIndex, setActiveIndex] = useState<number>(0);
// const [suggestions, setSuggestion] = useState<Suggestions>([]);
