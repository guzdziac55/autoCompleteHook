import { Suggestions } from "../components/types";

function filterList(suggestions: Suggestions, input: string) {
  const filtered = suggestions.filter(
    (name) => name.toLowerCase().indexOf(input.toLowerCase()) > -1
  );

  return filtered;
}
export default filterList;
