import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faChevronCircleLeft} from '@fortawesome/free-solid-svg-icons';


const LeftArrow = (props) => {
  return (
    <div>
      <a className="previous" onClick={props.prevImg}><FontAwesomeIcon icon={faChevronCircleLeft} size="2x"/></a>
    </div>
  )
}

export default LeftArrow;