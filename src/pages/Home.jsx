import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Nav from "../components/Nav";
import "./Home.css";
import { setGlobalState, useGlobalState } from '../components/state/state'

function Home() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [search] = useGlobalState("search");


  const handleNavigate = () => {
    setTimeout(() => {
      navigate(`/search/${search}`);
    }, 300);
  };

  return (
    <div>
      <Nav></Nav>
      <Header></Header>
      {console.log('this is the term',search)}
      <div className="landing__search">
        <input
          value={search}
          onChange={(e) => setGlobalState("search", e.target.value)}
          onKeyPress={(event) => {
            if (event.key === "Enter") {
              handleNavigate();
            }
          }}
          className="landing__search--input"
          placeholder="Search Anime Titles"
          type="text"
          required
        ></input>
        <button type="button" onClick={() => handleNavigate()} className="landing__search--btn">
          <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
        </button>
      </div>
      {/* <div class="anime">
        {animeList["data"] ? (
          animeList.data
            .sort(function (a, b) {
              return b.score - a.score;
            })
            .map((anime) => (
              <div class="anime__individual" key={anime.mal_id}>
                <a href="" onClick={() => navigate(`${anime.mal_id}`)}>
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
      </div> */}
    </div>
  );
}

export default Home;
