import React from "react";
import { movies } from "../data";

function Movies() {
  const movieArr = movies.map((movie) =>(
    <div key={movie.title}>
      <h2>Name: {movie.title}</h2>
      Time: {movie.time}
      <ul>
        Genres:{movie.genres.map((genre) =>(
       
          <li key={genre}>
            {genre}
          </li>
        
      ))}</ul>
      <div>
      </div>
    </div>
  ))
  return (
    <div>
      <div>
      <h1>Movies Page</h1>
      </div>{movieArr}<div>

    </div>
  </div>
  )
}

export default Movies;
