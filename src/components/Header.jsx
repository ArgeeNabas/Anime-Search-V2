import React from "react";

function Header() {
  return (
    <div class="landing__text--container">
      <h1 class="landing__text--title title white">Giant database of Anime</h1>
      <h3 class="landing__text-sub-title sub-title white">
        Find most scored series with Anime Search. This site uses{" "}
        <a class="blue" href="https://jikan.moe/" target="_blank">
          Jikan API.
        </a>
      </h3>
    </div>
  );
}

export default Header;
