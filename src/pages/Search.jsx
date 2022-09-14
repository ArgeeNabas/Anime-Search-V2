import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useLocation, useParams } from "react-router-dom";

function Search({ route }) {
  const [animeList, setAnimeList] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();
  const params = useParams();

  async function fetchPosts(input) {
    setLoading(true)
    console.log("this ran with", input);
    const { data } = await axios.get(
      `https://api.jikan.moe/v4/anime?q=${input}&sfw`
    );
    setAnimeList(data);
    setLoading(false)
  }

  useEffect(() => {
    fetchPosts(input)
  }, []);

  return (
    <>
      <div class="anime">
        {!loading ? (
          animeList.data
            .sort(function (a, b) {
              return b.score - a.score;
            })
            .map((anime) => (
              <div class="anime__individual" key={anime.mal_id}>
                <a href="" onClick={() => navigate(`${anime.mal_id}`)}>
                  <img
                    class="anime__poster"
                    src={anime.images.jpg.large_image_url}
                    alt=""
                  />
                </a>
                <div class="anime__text--container">
                  <h2 class="anime__title">{anime.title}</h2>
                  <p>
                    Scored by:{" "}
                    {anime.scored_by ? anime.scored_by.toLocaleString() : "N/A"}
                  </p>
                  <p>Score: {anime.score}</p>
                  <p>
                    Year:{" "}
                    {anime.aired.from ? anime.aired.from.split("-")[0] : "N/A"}
                  </p>
                </div>
              </div>
            ))
        ) : (
          <h1>nope</h1>
        )}
      </div>
    </>
  );
}

export default Search;
