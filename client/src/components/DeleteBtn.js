import React from 'react'

function DeleteBtn(props) {
    return (
        <span role="button" className="btn btn-danger text-light" tabIndex="0" {...props}>
            Delete
        </span>
    )
}

export default DeleteBtn;
