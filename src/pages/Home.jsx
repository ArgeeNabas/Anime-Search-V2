import React from "react";
import AnimeList from "../components/AnimeList";
import Header from "../components/Header";
import Nav from "../components/Nav";
import './Home.css'

function Home() {
  return (
    <div>
      <Nav></Nav>
      <Header></Header>
      <AnimeList></AnimeList>
    </div>
  );
}

export default Home;
