import React, { Component } from "react";
import API from "../utils/API";
import Title from "../components/Title";
import Book from "../components/Book";

class App extends Component {
  state = {
    books: [],
    search: ""
  }

  componentDidMount() {
    // enter page load stuff here
    this.savedList();
  }
  
  // get last search list
  savedList = () => {
    console.log("test")
    API.getSavedBooks()
      .then(res => {
        console.log(res);
        if (res.data !== undefined) {
          this.setState({ books: res.data })
        }
      })
      .catch(err => console.log(err));
  }


  render() {
    return (
      // <React.Fragment>
      <div className="container">
        {/* <Navbar /> */}
        <Title />
        <div className="row">
          <ul className="list-unstyled">
            {this.state.books.map(book => {
              return <Book key={book.id} book={book} />
            })}

          </ul>
        </div>
      </div>
      // </React.Fragment>

    );
  }
}

export default App;
