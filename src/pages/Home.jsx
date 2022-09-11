import React from "react";
import AnimeList from "../components/AnimeList";
import Header from "../components/Header";
import Nav from "../components/Nav";
import SearchBar from "../components/SearchBar";
import './Home.css'

function Home() {
  return (
    <div>
      <Nav></Nav>
      <Header></Header>
      <SearchBar></SearchBar>
      <AnimeList></AnimeList>
    </div>
  );
}

export default Home;
