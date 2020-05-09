import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleRight } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';

const RightArrowBtn = ({ nextImg }) => (
  <S.Button onClick={nextImg}>
    <FontAwesomeIcon icon={faChevronCircleRight} size="2x" />
  </S.Button>
);

export default RightArrowBtn;

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
