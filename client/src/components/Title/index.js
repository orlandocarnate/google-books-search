import React from 'react';
import "./style.css"
// Dumb Component
function Title(props) {
  return (
    <div className="jumbotron jumbotron-fluid px-3">
      <h4 className="display-4">ReactJS Google Books Search</h4>
      <h5 className="lead">Search for Books and add them to your favorites list.</h5>
    </div>
  );
}

export default Title;
