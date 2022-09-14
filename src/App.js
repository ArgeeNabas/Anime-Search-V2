import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import Home from "./pages/Home";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import Details from "./pages/Details";
import Search from "./pages/Search";
import { useEffect, useState } from "react";
import axios from "axios";

library.add(faMagnifyingGlass);

function App() {
  const [animeList, setAnime] = useState([{}]);
  const [firstTerm, setFirstTerm] = useState("");
  const [loading, setLoading] = useState(true);
  // const [postsPerPage, setPostsPerPage] = useState(6);
  // const [currentPage, setCurrentPage] = useState(1);

  // const indexOfLastPost = currentPage * postsPerPage;
  // const indexOfFirstPost = indexOfLastPost - postsPerPage;

  return (
    <Router>
      <div class="App">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/search" element={<Search />}></Route>
          <Route path="/search/:input" element={<Search />}></Route>
          <Route path=":mal_id" element={<Details />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
