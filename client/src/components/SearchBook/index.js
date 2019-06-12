import React, { Component } from 'react';
import "./style.css";

export class SearchBook extends Component {
  state = {
    authors: this.props.book.volumeInfo.authors,
    image: this.props.book.volumeInfo.imageLinks.smallThumbnail,
    title: this.props.book.volumeInfo.title,
    link: this.props.book.volumeInfo.infoLink,
    description: this.props.book.volumeInfo.description
  }

  saveBook=()=> {
    const book = {...this.state}
    this.props.saveBook(book)
    console.log(book);
  }

  render() {
    return (
      <li className="media my-4">
        <img src={this.state.image} className="mr-3" alt="..." />
        <div className="media-body">
          <h5 className="mt-0 mb-1">{this.state.title} <span className="font-italic">by {this.state.authors.join(", ")}</span></h5>
          <p>{this.state.description}</p>
          <a className="btn btn-primary" href={this.state.link}>View</a> {" "}
          <a className="btn btn-primary text-light" onClick={() => this.saveBook()}>Save</a>
        </div>
      </li>
    )
  }
}

export default SearchBook