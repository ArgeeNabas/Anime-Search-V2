import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import './SearchBar.css'

function SearchBar() {
  return (
    <>
      <div class="landing__search">
        <input
          class="landing__search--input"
          placeholder="Search Anime Titles"
          type="text"
        ></input>
        <button class="landing__search--btn">
          <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
        </button>
      </div>
    </>
  );
}

export default SearchBar;
