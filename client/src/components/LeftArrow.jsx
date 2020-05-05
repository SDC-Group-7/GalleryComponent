import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faChevronCircleLeft} from '@fortawesome/free-solid-svg-icons';


const LeftArrow = (props) => {
  return (
    <div>
      <button className="previous" onClick={props.prevImg}>
        <FontAwesomeIcon icon={faChevronCircleLeft} size="2x"/>
      </button>
    </div>
  )
}

export default LeftArrow;