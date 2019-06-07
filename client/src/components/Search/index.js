import React, { Component } from "react";
// import "./style.css";

// dumb component
class Search extends Component {
    render() {
        return (
            <form onSubmit={this.props.handleSubmit}>
                <div className="form-group m-5">
                    <div className="input-group">
                        <input onChange={this.props.handleSearchChange} type="text" className="form-control" placeholder="Enter a Title" required />
                        <div className="input-group-append">
                            <button className="btn btn-outline-secondary" type="submit" id="button-addon2"><i className="fas fa-search"></i> Search</button>
                        </div>
                    </div>
                </div>
            </form>
        );
    }
}

export default Search;
