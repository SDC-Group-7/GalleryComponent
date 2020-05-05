import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faChevronCircleRight} from '@fortawesome/free-solid-svg-icons';


const RightArrow = (props) => {
  return (
    <div>
      <button className="next" onClick={props.nextImg}>
        <FontAwesomeIcon icon={faChevronCircleRight} size="2x"/>
      </button>
    </div>
  );
};

export default RightArrow;


