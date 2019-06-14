import React from 'react'

function SaveBtn(props) {
    return (
        <span>
            {props.isSaved ? (
                <span role="button" className="btn btn-primary text-light disabled">Saved</span>
            ) : (
                <span role="button" {...props} className="btn btn-primary text-light">Save</span>
                )}
        </span>
    )
}

export default SaveBtn;
