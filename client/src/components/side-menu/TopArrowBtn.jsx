import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';

const TopArrowBtn = ({ handleClickUp }) => (
  <S.Button type="button" onClick={handleClickUp}>
    <FontAwesomeIcon icon={faChevronUp} size="2x" />
  </S.Button>
);

export default TopArrowBtn;

const S = {};
S.Button = styled.button`
  left: 130px;
  color: rgb(91, 88, 88);
  cursor: pointer;
  background: transparent;
  border: none;
  outline: none;
  box-shadow: none;
  padding-top: 50px;
`;
