import { Suggestions } from "./types";
import React, { useEffect } from "react";
import AutoCompleteDropdown from "./AutoCompleteDropdown";
import useAutoComplete from "../hooks/useAutoComplete";

interface AutoCompleteInputProps {
  suggestions: Suggestions;
  placeholder: string;
}

const AutoCompleteInput: React.FC<AutoCompleteInputProps> = ({
  suggestions,
  placeholder,
}) => {
  const [
    onChange,
    onKeyDown,
    input,
    setInput,
    filtered,
    activeIndex,
    setSuggestion,
  ] = useAutoComplete();

  useEffect(() => {
    console.log(input);
  }, [input]);

  useEffect(() => {
    setSuggestion(suggestions);
  }, []);

  useEffect(() => {
    console.log(filtered);
  }, [filtered]);

  return (
    <>
      <input
        placeholder={placeholder}
        onKeyDown={(e) => {
          onKeyDown(e);
        }}
        value={input}
        onChange={(e) => onChange(e)}
      ></input>
      <AutoCompleteDropdown
        filtered={filtered}
        active={activeIndex}
        setItem={setInput}
      />
    </>
  );
};

// filtered: Suggestions;
// active: number;
// setItem: () => void;

export default AutoCompleteInput;

// wiec musisz ten dialog bezposrednio w body renderowac (cos takiego jak react Portal jest) i potem zbierac koordynaty inputa
// za pomoca getBoundingClientRect przykladowo
// i na podstawie tego ten dropdown ustawiac
