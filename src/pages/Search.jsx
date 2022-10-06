import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import Header from "../components/Header";
import Nav from "../components/Nav";
import { setGlobalState, useGlobalState } from "../components/state/state";
import Results from "../components/Results";
import Pagination from "../components/Pagination";

function Search() {
  const navigate = useNavigate();
  const { animeUrl } = useParams();

  const [search] = useGlobalState("search");
  const [animeList, setAnimeList] = useState([]);
  const [currentAnime, setCurrentAnime] = useState([]);
  const [highestRated, setHighestRated] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (search === "") {
      fetchAnimeList(animeUrl);
    } else {
      fetchAnimeList(search);
    }
  }, []);

  async function fetchAnimeList(search) {
    navigate(`/search/${search}`);
    setLoading(true);
    console.log("search page this ran with", search);
    const { data } = await axios.get(
      `https://api.jikan.moe/v4/anime?q=${search}&sfw`
    );
    setCurrentAnime(data.data);
    setLoading(false);
  }

  return (
    <>
      <Nav></Nav>
      <Header></Header>
      <div className="landing__search">
        {console.log("currentAnime", currentAnime)}
        <input
          value={search}
          onChange={(e) => setGlobalState("search", e.target.value)}
          onKeyPress={(event) => {
            if (event.key === "Enter") {
              fetchAnimeList(search);
            }
          }}
          className="landing__search--input"
          placeholder="Search Anime Titles"
          type="text"
          required
        ></input>
        <button
          type="button"
          onClick={() => fetchAnimeList(search)}
          className="landing__search--btn"
        >
          <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
        </button>
      </div>
      <Results currentAnime={currentAnime} loading={loading} />
    </>
  );
}

export default Search;
