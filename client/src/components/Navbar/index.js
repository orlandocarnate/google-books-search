import React from 'react';
import "./style.css";

function Navbar(props) {
  return (
    <ul className="nav">
      <li className="nav-item">
        <a className="nav-link active" href="#">Google Books</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#"><i class="fas fa-search"></i> Search</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#"><i class="fas fa-bookmark"></i> Favorites</a>
      </li>
      <li className="nav-item">
        <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
      </li>
    </ul>
  );
}

export default Navbar;
