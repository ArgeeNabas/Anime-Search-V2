import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import Header from "../components/Header";
import Nav from "../components/Nav";
import { setGlobalState, useGlobalState } from "../components/state/state";

function Search() {
  const navigate = useNavigate();
  const { animeUrl } = useParams();

  const [search] = useGlobalState("search");
  const [animeList, setAnimeList] = useState([]);
  const [highestRated, setHighestRated] = useState([])
  const [loading, setLoading] = useState(true);

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(5);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;

  useEffect(() => {
    if (search === "") {
      fetchAnimeList(animeUrl);
    } else {
      fetchAnimeList(search);
    }
    // setTimeout(() => {
    //   if (search === "") {
    //     fetchAnimeList(animeUrl);
    //   } else {
    //     fetchAnimeList(search);
    //   }
    // }, 300);
  }, []);

  async function fetchAnimeList(search) {
    setLoading(true);
    console.log("search page this ran with", search);
    const { data } = await axios.get(
      `https://api.jikan.moe/v4/anime?q=${search}&sfw`
    );
    // const sorted = data.data.sort(function (a, b) {
    //   return b.score - a.score;
    // })
    setAnimeList(data);
    setLoading(false);
    sortAnime(animeList);
    navigate(`/search/${search}`);
  }

  function sortAnime(animeList) {
     setHighestRated = [...animeList.data].sort(function (a, b) {
      return b.score - a.score;
    });
  }

  return (
    <>
      <Nav></Nav>
      <Header></Header>
      <div className="landing__search">
        {console.log(highestRated)}
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
