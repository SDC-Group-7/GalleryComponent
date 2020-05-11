import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleLeft } from '@fortawesome/free-solid-svg-icons';

const LeftArrowBtn = ({ handlePrevImg }) => (
  <S.Button onClick={handlePrevImg}>
    <FontAwesomeIcon icon={faChevronCircleLeft} size="2x" />
  </S.Button>
);

const S = {};

S.Button = styled.button`
  position: absolute;
  top: 50%;
  left: 20px;
  font-size: 18px;
  color: rgb(91, 88, 88);
  cursor: pointer;
  background: transparent;
  border: none;
  outline: none;
  box-shadow: none;

  &:hover {
    color: rgb(0, 0, 0);
  }
`;

LeftArrowBtn.propTypes = {
  handlePrevImg: PropTypes.func,
};
LeftArrowBtn.defaultProps = {
  handlePrevImg: () => {},
};


export default LeftArrowBtn;
