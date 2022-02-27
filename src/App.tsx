import "./App.css";

import AutoCompleteInput from "./components/AutoCompleteInput";
// import AutoCompleteDropdown from "./components/AutoCompleteDropdown";

const arraySuggestion = ["Dawid", "Guzik ", "Dominika", "Adrian"];

function App() {
  return (
    <div className="App">
      <AutoCompleteInput
        placeholder="Type Name"
        suggestions={arraySuggestion}
      />
    </div>
  );
}

export default App;
// musimy zwrócić koordy inputa
