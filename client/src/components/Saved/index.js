import React from 'react';
// import "./style.css";

// dumb component
function Saved(props) {

  return (
    <div className={props.classState}>
      <div className="row d-flex justify-content-center">
        {props.children}
      </div>
    </div>
  )
}

export default Saved;
