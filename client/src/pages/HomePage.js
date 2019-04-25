import React, { Component } from "react";
// import logo from "./logo.svg";
// import "./App.css";
// import Navbar from "../components/Navbar";
import Search from "../components/Search";
import Title from "../components/Title";
import Book from "../components/Book";

class App extends Component {
  render() {
    return (
      // <React.Fragment>
      <div className="container">
        {/* <Navbar /> */}
        <Title />
      </div>
      // </React.Fragment>
      
    );
  }
}

export default App;
