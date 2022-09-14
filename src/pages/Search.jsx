import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import Header from "../components/Header";
import Nav from "../components/Nav";
import { setGlobalState, useGlobalState } from "../components/state/state";

function Search() {
  const navigate = useNavigate();
  const params = useParams();

  const [animeList, setAnimeList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search] = useGlobalState("search");
  const storedItem = JSON.parse(localStorage.getItem("items")) || [];
  const [item, setItem] = useState(storedItem);

  useEffect(() => {
    if (search === "") {
      localStorage.setItem("items", JSON.stringify(item));
    } else {
      localStorage.setItem("items", JSON.stringify(search));
    }
  }, [search]);

  useEffect(() => {
    if (search === "") {
      fetchAnimeList(item);
    } else {
      fetchAnimeList(search);
    }
  }, []);

  async function fetchAnimeList(search) {
    if (typeof search !== "undefined") {
      setLoading(true);
      console.log("search page this ran with", search);
      const { data } = await axios.get(
        `https://api.jikan.moe/v4/anime?q=${search}&sfw`
      );
      setAnimeList(data);
      setLoading(false);
    } else {
      setTimeout(() => {
        fetchAnimeList(search);
      }, 300);
    }
  }

  return (
    <>
      <Nav></Nav>
      <Header></Header>
      <div className="landing__search">
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
      <div class="anime">
        {!loading ? (
          animeList.data
            .sort(function (a, b) {
              return b.score - a.score;
            })
            .map((anime) => (
              <div class="anime__individual" key={anime.mal_id}>
                <a href="" onClick={() => navigate(`../${anime.mal_id}`)}>
                  <img
                    class="anime__poster"
                    src={anime.images.jpg.large_image_url}
                    alt=""
                  />
                </a>
                <div class="anime__text--container">
                  <h2 class="anime__title">{anime.title}</h2>
                  <p>
                    Scored by:{" "}
                    {anime.scored_by ? anime.scored_by.toLocaleString() : "N/A"}
                  </p>
                  <p>Score: {anime.score}</p>
                  <p>
                    Year:{" "}
                    {anime.aired.from ? anime.aired.from.split("-")[0] : "N/A"}
                  </p>
                </div>
              </div>
            ))
        ) : (
          <h1>nope</h1>
        )}
      </div>
    </>
  );
}

export default Search;
