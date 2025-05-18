import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import movies from "./movies";

function MovieDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const movie = movies.find((m) => m.id === parseInt(id));

  if (!movie) return <h2>Movie not found!</h2>;

  return (
    <div style={{ padding: 20 }}>
      <button onClick={() => navigate("/")}>← Back to Home</button>
      <h2>{movie.title}</h2>
      <p>{movie.description}</p>
      <iframe
        width="560"
        height="315"
        src={movie.trailer}
        title="YouTube trailer"
        frameBorder="0"
        allowFullScreen
      ></iframe>
    </div>
  );
}

export default MovieDetails;
