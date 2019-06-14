import React from 'react'

function ViewBtn(props) {
    return (
        <span>
            <a className="btn btn-primary btn-sm text-light" href={props.bookLink} target="_blank">More details at Google Books</a>
        </span>
    )
}

export default ViewBtn
