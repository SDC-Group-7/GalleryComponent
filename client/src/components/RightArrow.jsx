import React, { Component } from 'react';

const RightArrow = (props) => {
  return (
    <div>
      <a className="next" onClick={props.nextImg}>Next</a>
    </div>
  )
}

export default RightArrow;