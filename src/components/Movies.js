import React from "react";
import { movies } from "../data";

function Movies() {
  
  return <div>
    <h1>Movies Page</h1>
    {movies.map((movie, index) => (
        <div key={index}>
          <h3>Title: {movie.title}</h3>
          <p>Time: {movie.time}</p>
          <ul>
            {movie.genres.map((genre, genreIndex) => (
              <li key={genreIndex}>{genre}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>;
}

export default Movies;