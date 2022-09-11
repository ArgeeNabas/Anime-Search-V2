import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AnimeList.css";
import { SearchTerm } from "../components/SearchTerm";

function AnimeList() {
  const [anime, setAnime] = useState([]);
  const {term, setTerm} = useContext(SearchTerm);
  const {termFromButton, setTermFromButton} = useState("Naruto")
  const navigate = useNavigate();


  async function fetchPosts(termFromButton) {
    const { data } = await axios.get(
      `https://api.jikan.moe/v4/anime?q=${termFromButton}&sfw`
    );
    setAnime(data);
  }

  useEffect(() => {
    fetchPosts(term);
  },[])

  // useEffect(() => {
  //   axios.get(
  //     `https://api.jikan.moe/v4/anime?q=${termFromButton}&sfw`
  //   ).then(res => {
  //     setAnime(res.data)
  //   })
  //   .catch(err => {
  //     console.log(err)
  //   })
  // }, []);

  // const handleClick = () => {
  //   setTermFromButton(term)
  // }

  return (
    <>
      <form className="landing__search">
        <input
          value={term}
          onChange={e => setTerm(e.target.value)}
          className="landing__search--input"
          placeholder="Search Anime Titles"
          type="text"
        ></input> 
        {console.log(term)}
        <button type='submit' className="landing__search--btn">
          <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
        </button>
      </form>
      <div class="anime">
        {anime.data
          ? anime.data
              .sort(function (a, b) {
                return b.score - a.score;
              })
              .map((anime) => (
                <div class="anime__individual">
                  <a href={anime.url} target="_blank">
                    <img
                      class="anime__poster"
                      src={anime.images.jpg.large_image_url}
                      alt=""
                    />
                  </a>
                  <div class="anime__text--container">
                    <h2 class="anime__title">{anime.title}</h2>
                    <p>Scored by: {anime.scored_by.toLocaleString()}</p>
                    <p>Score: {anime.score}</p>
                    <p>Year: {anime.aired.from.split("-")[0]}</p>
                  </div>
                  {/* <div class="anime__synopsis--container">
                <p>
                  <b>Synopsis:</b>
                  <br/> {anime.synopsis.substring(0, 400) + "..."}
                </p>
              </div> */}
                </div>
              ))
          : console.log("does not exist")}
      </div>
    </>
  );
}

export default AnimeList;
