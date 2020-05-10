import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';

const BottomArrowBtn = ({handleClickDown}) => (
  <S.Button type="button" onClick={handleClickDown}>
    <FontAwesomeIcon icon={faChevronDown} size="2x" />
  </S.Button>
);

export default BottomArrowBtn;


const S = {};
S.Button = styled.button`
  bottom: 100%;
  left: 130px;
  color: rgb(91, 88, 88);
  cursor: pointer;
  background: transparent;
  border: none;
  outline: none;
  box-shadow: none;
`;
