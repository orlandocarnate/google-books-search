import React, { Component } from "react";
import API from "../utils/API";
import Title from "../components/Title";
import DeleteBtn from "../components/DeleteBtn";
import ViewBtn from "../components/ViewBtn";
import './style.css';

class Favorites extends Component {
  state = {
    books: [],
    search: ""
  }

  componentDidMount() {
    // enter page load stuff here
    this.favList();
  }

  // get last search list
  favList = () => {
    console.log("test")
    API.getFavorites()
      .then(res => {
        console.log(res.data);
        if (res.data !== undefined) {
          this.setState({ books: res.data })
        }
      })
      .catch(err => console.log(err));
  }

  deleteFavorite = id => {
    console.log("DELETE ID: ", id);
    API.deleteFavorite(id)
      .then(() => {
        this.favList();
      })
  }

  render() {
    return (
      <div className="container">
        {/* <Navbar /> */}
        <Title />
        {this.state.books.length ? (
          <div className="row">
            <ul className="list-unstyled">
              {this.state.books.map(book => {
                return (
                  <li className="media my-4 rounded shadow p-2">
                    <img src={book.image} className="mr-3" alt="..." />
                    <div className="media-body">
                      <h5 className="mt-0 mb-1 book-title">{book.title}</h5>
                      <p className="overflow-auto description">{book.description}</p>
                      <ViewBtn bookLink={book.link} /> {" "}
                      <DeleteBtn onClick={() => this.deleteFavorite(book._id)} />
                    </div>
                  </li>
                )
              })}
            </ul>
          </div>
        ) : (
            <div className="text-center">
              <h3>Favorites List Empty</h3><br />
              <h4>Please go to <a href="/Search">Search Page</a> to add some favorites!</h4>
            </div>
          )}
      </div>
    );
  }
}

export default Favorites;
