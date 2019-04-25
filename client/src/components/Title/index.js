import React from 'react';
import "./style.css"
// Dumb Component
function Title(props) {
  return (
    <div className="jumbotron jumbotron-fluid">
      <div className="container">
        <h1 className="display-4">ReactJS Google Books Search</h1>
        <p className="lead">Search for Books and Save your favorites!</p>
      </div>
    </div>
  );
}

export default Title;
