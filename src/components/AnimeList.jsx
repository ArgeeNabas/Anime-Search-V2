import React, { useEffect, useState } from "react";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";

function AnimeList() {
  const [title, setTitle] = useState('naruto');
  const [anime, setAnime] = useState([]);
  const navigate = useNavigate();

  async function fetchAnime(title) {
    const {data} = await axios.get(
      `https://api.jikan.moe/v4/anime?q=${title}&sfw`
    );
    setAnime(data);
  }

  useEffect(() => {
    fetchAnime(title);
  }, []);

  return <div>
	{console.log(anime)}
	</div>;
}

export default AnimeList;
