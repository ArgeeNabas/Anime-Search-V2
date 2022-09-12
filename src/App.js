import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ReactDOM from "react-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import axios from "axios";
import Details from "./pages/Details";
import Results from "./pages/Results";

library.add(faMagnifyingGlass);

function App() {
  const [animeList, setAnime] = useState([{}]);
  const [term, setTerm] = useState("");
  const [loading, setLoading] = useState(true);
  // const correctedTerm = term.split(' ').join('%20')

  async function fetchPosts(term) {
    setLoading(true);
    const { data } = await axios.get(
      `https://api.jikan.moe/v4/anime?q=${term}&sfw`
    );
    setAnime(data);
    setLoading(false);
  }

  useEffect(() => {
    fetchPosts(term);
  }, []);

  const HandleSearch = (e) => {
    e.preventDefault();

    fetchPosts(term);
  };

  return (
    <Router>
      <div class="App">
        <Routes>
          <Route
            path="/"
            element={
              <Home
                loading={loading}
                animeList={animeList}
                term={term}
                HandleSearch={HandleSearch}
                setTerm={setTerm}
              />
            }
          ></Route>
          <Route
            path="/results"
            element={
              <Results
                loading={loading}
                animeList={animeList}
                term={term}
                HandleSearch={HandleSearch}
                setTerm={setTerm}
              />
            }
          ></Route>
          <Route
            path="/results/:mal_id"
            element={
              <Details
                loading={loading}
                animeList={animeList}
                term={term}
                HandleSearch={HandleSearch}
                setTerm={setTerm}
              />
            }
          ></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
