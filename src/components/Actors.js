import React from "react";
import { actors } from "../data";

function Actors() {
  const actorsArr = actors.map((actor) => (
    <div key={actor.name}>
      <ul>
      <h2 key ={actor.name}>Name:{actor.name}</h2>
      Movies: {actor.movies.map((movie) =>( 
          <li key={movie}>{movie}</li>
      ))}</ul>
    </div>
  ))
  return (
    <div>
      <h1>Actors Page</h1>
      {actorsArr}
    </div>
  )
}

export default Actors;
