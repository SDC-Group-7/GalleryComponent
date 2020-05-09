import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';

const TopArrowBtn = ({ handleClickUp }) => (
  <button type="button" onClick={handleClickUp}>
    <FontAwesomeIcon icon={faChevronUp} size="2x" />
  </button>
);

export default TopArrowBtn;
