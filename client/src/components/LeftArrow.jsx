import React, { Component } from 'react';

const LeftArrow = (props) => {
  return (
    <div>
      <a className="previous" onClick={props.prevImg}>Previous</a>
    </div>
  )
}

export default LeftArrow;