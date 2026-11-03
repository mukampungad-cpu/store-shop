import ResultsBoard from "./ResultsBoard";
import { students } from "./data";
import "./App.css";

function App() {
  return (
    <div>
      <ResultsBoard students={students} />
    </div>
  );
}

export default App;