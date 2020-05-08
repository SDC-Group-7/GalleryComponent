import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExpandArrowsAlt } from '@fortawesome/free-solid-svg-icons';

const FullScreenBtn = ({ handleToggleScreen }) => (
  <S.Button onClick={handleToggleScreen}>
    <FontAwesomeIcon icon={faExpandArrowsAlt} size="2x" />
  </S.Button>
);

export default FullScreenBtn;

const S = {};

S.Button = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  font-size: 18px;
  color: black;
  cursor: pointer;
  border: none;
  background: transparent;
`;
