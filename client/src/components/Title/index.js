import React from 'react';
import "./style.css"
// Dumb Component
function Title(props) {
  return (
    <div class="jumbotron jumbotron-fluid">
      <div class="container">
        <h1 class="display-4">ReactJS Google Books Search</h1>
        <p class="lead">Search for Books and Save your favorites!</p>
      </div>
    </div>
  );
}

export default Title;
