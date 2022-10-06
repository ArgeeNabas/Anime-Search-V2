import React from 'react'
import { useNavigate } from 'react-router-dom';

function Results({loading, currentAnime}) {
  const navigate = useNavigate();

  return (
	<div class="anime">
	{(!loading ) ?  (
	  currentAnime
		.sort(function (a, b) {
		  return b.score - a.score;
		})
		.map((anime) => (
		  <div class="anime__individual" key={anime.mal_id}>
			<a
			  href={`../${anime.mal_id}`}
			  onClick={() => navigate(`../${anime.mal_id}`)}
			>
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
			<div class="anime__synopsis--container">
			  <p>
				<b>Synopsis:</b>
				<br />
				{anime.synopsis ? (
				  <>
					{anime.synopsis.substring(0, 400) + "..."}{" "}
					<a href={`../${anime.mal_id}`}>Read More</a>
				  </>
				) : (
				  "N/A"
				)}
			  </p>
			</div>
		  </div>
		))
	) : (
	  <h1>nope</h1>
	)}
  </div>
  )
}

export default Results