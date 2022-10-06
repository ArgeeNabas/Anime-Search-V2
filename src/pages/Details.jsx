import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Header from "../components/Header";
import Nav from "../components/Nav";
import "./Details.css";

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
      {/* <button onClick={() => navigate(-1)}>← Back</button> */}
      <button type="button" onClick={() => navigate(-1)} className="details__backBtn">
      <FontAwesomeIcon icon="fa-solid fa-left-long" />
        </button>
      {loading ? (
        <h1>nope</h1>
      ) : (
        <div className="details">
          <div className="detail__poster">
            <img className="detail__poster--img" src={singleAnime.data.images.webp.large_image_url} alt="" />
          </div>
          <div className="detail__text">
            <div className="detail__text--title">
              <p>{singleAnime.data.title}</p>
            </div>
            <div className="detail__text--details">
              <p>Type: {singleAnime.data.type}</p>
              <p>Number of episodes: {singleAnime.data.episodes}</p>
              <p>Status: {singleAnime.data.status}</p>
              <p>Score: {singleAnime.data.score}</p>
            </div>
            <div className="detail__text--synopsis">
              <p>
                Synopsis: <br /> {singleAnime.data.synopsis}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Details;
