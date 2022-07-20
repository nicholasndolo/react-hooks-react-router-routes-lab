import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div className="navbar">
      <li><NavLink to="/" exact>Home</NavLink></li><br/>
      <li><NavLink to="/movies" exact>Movies</NavLink></li><br/>
      <li><NavLink to="/directors" exact>Directors</NavLink></li><br/>
      <li><NavLink to="/actors" exact>Actors</NavLink></li>
    </div>
  )
}

export default NavBar;
