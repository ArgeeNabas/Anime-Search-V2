import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useNavigate } from "react-router-dom";
import AnimeList from "../components/AnimeList";
import Header from "../components/Header";
import Nav from "../components/Nav";
import "./Home.css";

function Home({ loading, animeList, term, HandleSearch, setTerm }) {
  const navigate = useNavigate();
  // {AnimeList, setTerm, Term, HandleSearch}
  return (
    <div>
      <Nav></Nav>
      <Header></Header>
      <form
        className="landing__search"
        onSubmit={() => navigate(`results`)}
      >
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
    </div>
  );
}

export default Home;
