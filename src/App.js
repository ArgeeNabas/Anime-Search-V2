import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ReactDOM from "react-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { SearchTerm } from "./components/SearchTerm";
import { useState } from "react";

library.add(faMagnifyingGlass);

function App() {
  const [term, setTerm] = useState("");

  return (
    <Router>
      <div class="App">
      <SearchTerm.Provider value={{ term, setTerm }}>
        <Routes>
            <Route path="/" element={<Home />} />
        </Routes>
        </SearchTerm.Provider>
      </div>
    </Router>
  );
}

export default App;
