import React from 'react';
// import "./style.css";

// dumb component
function Search(props) {
    return (
        <form>
            <div className="form-group m-5">
                <div className="input-group">
                    <input type="text" className="form-control" placeholder="Enter a Title" required />
                    <div className="input-group-append">
                        <button className="btn btn-outline-secondary" type="submit" id="button-addon2"><i className="fas fa-search"></i> Search</button>
                    </div>
                </div>
            </div>
        </form>
    );
}

export default Search;
