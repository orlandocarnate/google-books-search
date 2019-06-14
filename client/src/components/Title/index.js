import React from 'react';
import "./style.css"
// Dumb Component
function Title(props) {
  return (
    <div className="jumbotron jumbotron-fluid">
      <div className="container">
        <h1 className="display-4">ReactJS Google Books Search</h1>
        <h2 className="lead">Search for Books and add them to your favorites list.</h2>
      </div>
    </div>
  );
}

export default Title;
