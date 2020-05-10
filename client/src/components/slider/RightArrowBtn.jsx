import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleRight } from '@fortawesome/free-solid-svg-icons';

const RightArrowBtn = ({ handleNextImg }) => (
  <S.Button onClick={handleNextImg}>
    <FontAwesomeIcon icon={faChevronCircleRight} size="2x" />
  </S.Button>
);

const S = {};

S.Button = styled.button`
  position: absolute;
  top: 50%;
  right: 20px;
  font-size: 18px;
  color: rgb(91, 88, 88);
  cursor: pointer;
  background: transparent;
  border: none;
  outline: none;
  box-shadow: none;
`;

RightArrowBtn.propTypes = {
  handleNextImg: PropTypes.func,
};

RightArrowBtn.defaultProps = {
  handleNextImg: () => {},
};

export default RightArrowBtn;
