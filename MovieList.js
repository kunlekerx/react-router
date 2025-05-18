import React from "react";
import movies from "./movies";
import { useNavigate } from "react-router-dom";

function MovieList() {
  const navigate = useNavigate();

  return (
    <div style={{ padding: 20 }}>
      <h2>Movie List</h2>
      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
        {movies.map((movie) => (
          <div
            key={movie.id}
            onClick={() => navigate(`/movies/${movie.id}`)}
            style={{
              border: "1px solid #ccc",
              padding: "10px",
              width: "200px",
              cursor: "pointer",
              borderRadius: "8px"
            }}
          >
            <img src={movie.posterURL} alt={movie.title} width="100%" />
            <h4>{movie.title}</h4>
            <p>Rating: {movie.rating}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MovieList;
