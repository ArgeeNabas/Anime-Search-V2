import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Nav from "../components/Nav";

function Details({ loading, animeList, term, HandleSearch, setTerm }) {
  return (
    <>
      <Nav></Nav>
      <Header></Header>
      <Link to="/">
        <button>← Back</button>
      </Link>
    </>
  );
}

export default Details;
