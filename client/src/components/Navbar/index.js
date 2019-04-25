import React from 'react';
import { NavLink } from 'react-router-dom'
import "./style.css";

function Navbar(props) {

  return (
    <ul className="nav">
      <NavLink exact to="/" className="nav-link">
        Google Books React
      </NavLink>
      <NavLink to="/search" className="nav-link" activeClassName="active">
        <i className="fas fa-search"></i> Search
      </NavLink>
      <NavLink to="/saved" className="nav-link" activeClassName="active">
        <i className="fas fa-bookmark"></i> Favorites
      </NavLink>
      <NavLink to="/faq" className="nav-link" activeClassName="active">
        FAQs
      </NavLink>
    </ul>
  );
}

export default Navbar;
