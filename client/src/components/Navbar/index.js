import React from 'react';
import { NavLink } from 'react-router-dom'
import "./style.css";

function Navbar(props) {

  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark mb-3">
      <div className="container">
        <NavLink exact to="/" className="navbar-brand">Google Books React</NavLink>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <NavLink to="/search" className="nav-link"><i className="fas fa-search"></i> Search</NavLink>
            </li>
            <li class="nav-item">
              <NavLink to="/saved" className="nav-link"> <i className="fas fa-bookmark"></i> Favorites </NavLink>
            </li>
          </ul>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;
