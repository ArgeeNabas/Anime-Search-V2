import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Header from "../components/Header";
import Nav from "../components/Nav";

function Details() {
  const { mal_id } = useParams();
  const [singleAnime, setSingleAnime] = useState([{}]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

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

  return (
    <>
      <Nav></Nav>
      <Header></Header>
      <button onClick={() => navigate(-1)}>← Back</button>
      {loading ? (
        <h1>nope</h1>
      ) : (
        <img src={singleAnime.data.images.webp.large_image_url} alt="" />
      )}
    </>
  );
}

export default Details;
