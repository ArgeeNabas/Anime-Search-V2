import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import "./AnimeList.css";

function AnimeList({ loading, animeList, term, HandleSearch, setTerm }) {
  const navigate = useNavigate();

  return (
    <>
      <form className="landing__search" onSubmit={HandleSearch}>
        <input
          value={term}
          onChange={(e) => setTerm(e.target.value)}
          className="landing__search--input"
          placeholder="Search Anime Titles"
          type="text"
        ></input>
        {console.log(term)}
        <button type="submit" className="landing__search--btn">
          <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
        </button>
      </form>
      {console.log("this is the data", animeList["data"])}
      <div class="anime">
        {animeList["data"]
          ? animeList.data
              .sort(function (a, b) {
                return b.score - a.score;
              })
              .map((anime) => (
                <div class="anime__individual" key={anime.mal_id}>
                  <a href="" onClick={() => navigate(`${anime.mal_id}`)}>
                    {/* <a href={anime.url} target="_blank" onClick={() => navigate(`${anime.mal_id}`)}> */}
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
                      {anime.scored_by
                        ? anime.scored_by.toLocaleString()
                        : "N/A"}
                    </p>
                    <p>Score: {anime.score}</p>
                    <p>
                      Year:{" "}
                      {anime.aired.from
                        ? anime.aired.from.split("-")[0]
                        : "N/A"}
                    </p>
                  </div>
                </div>
              ))
          : console.log("does not exist")}
      </div>
    </>
  );
}

export default AnimeList;
