import React, { Component } from "react";
import "./style.css";

// Dumb component only receives props
// The Parent App Component passes a function to the Pokecard component so that Pokecard can update the App state.
class Book extends Component {
  render() {
    return (
      <li className="media my-4">
        <img src={this.props.book.volumeInfo.imageLinks.smallThumbnail} className="mr-3" alt="..." />
        <div className="media-body">
          <h5 className="mt-0 mb-1">{this.props.book.volumeInfo.title}</h5>
          <p>{this.props.book.volumeInfo.description}</p>
          <a className="btn btn-primary" href={this.props.book.volumeInfo.infoLink}>View</a> {" "}
          <a className="btn btn-primary text-light">Save</a>
        </div>
      </li>


    );

  }
}

export default Book;
