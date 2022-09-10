import React from "react";
import "./Nav.css";

function Nav() {
  return (
    <div>
      <nav>
        <a href="#" class="header__logo--link blue">
          <img
            src="./assets/Anime_eye.svg"
            class="header__img"
            alt="Anime Eye Icon"
          />
          Anime Search
        </a>
        <ul class="nav__link--list">
          <li class="nav__link">
            <a
              href="#"
              class="
				nav__link--anchor link__hover--effect link__hover--effect--black
				"
            >
              About
            </a>
          </li>
          <li class="nav__link">
            <a
              href="mailto:argee.nabas@gmail.com:"
              class="
				nav__link--anchor
				link__hover--effect
				link__hover--effect--black
				"
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Nav;
