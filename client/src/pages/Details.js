import React, { Component } from "react";
import API from "../utils/API";


class Details extends Component {
    state = {
        book: {}
    }

    componentDidMount() {
        // get the ID from the URL using this.props.match.params.id
        API.getBookById(this.props.match.params.id)
            .then(res => this.setState({ book: res.data }))
            .catch(err => console.log(err))
    }
    render() {
        return (
            <div>
                <h1>{this.state.book.title} by {this.state.book.author}</h1>
                <h2>Synopsis:</h2>
                <p>{this.state.book.description}</p>
            </div>
        )
    }
}

export default Details;
