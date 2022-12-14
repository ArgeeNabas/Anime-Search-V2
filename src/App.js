import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faMagnifyingGlass, faLeftLong } from "@fortawesome/free-solid-svg-icons";
import Details from "./pages/Details";
import Search from "./pages/Search";
import { useState } from "react";
library.add(faMagnifyingGlass, faLeftLong);

function App() {

  return (
    <Router>
      <div class="App">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/search" element={<Search />}></Route>
          <Route path="/search/:animeUrl" element={<Search />}></Route>
          <Route path=":mal_id" element={<Details />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
