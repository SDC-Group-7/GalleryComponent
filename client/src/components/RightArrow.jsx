import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faChevronCircleRight} from '@fortawesome/free-solid-svg-icons';


const RightArrow = (props) => {
  return (
    <div>
      <a className="next" onClick={props.nextImg}><FontAwesomeIcon icon={faChevronCircleRight} size="2x"/></a>
    </div>
  )
}

export default RightArrow;