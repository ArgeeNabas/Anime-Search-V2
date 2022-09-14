import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Header from "../components/Header";
import Nav from "../components/Nav";

function Details() {
  const { mal_id } = useParams();
  const [singleAnime, setSingleAnime] = useState([{}]);
  const [loading, setLoading] = useState(true);

  async function fetchSingleAnime(mal_id) {
    setLoading(true);
    console.log("this ran with", mal_id);
    const { data } = await axios.get(
      `https://api.jikan.moe/v4/anime/${mal_id}`
    );
    setSingleAnime(data);
    setLoading(false);
  }

  useEffect(() => {
    fetchSingleAnime(mal_id);
  }, [setSingleAnime]);

  // const HandleSearch = (e) => {
  //   e.preventDefault();

  //   fetchSingleAnime(mal_id);
  // }

  return (
    <>
      <Nav></Nav>
      <Header></Header>
      <Link to="/search">
        <button>← Back</button>
      </Link>
      {loading ? (
        <h1>nope</h1>
      ) : (
        <img src={singleAnime.data.images.webp.large_image_url} alt="" />
      )}
    </>
  );
}

export default Details;
