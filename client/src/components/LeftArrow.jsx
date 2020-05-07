import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faChevronCircleLeft} from '@fortawesome/free-solid-svg-icons';
import styled from "styled-components";

const LeftArrow = ({prevImg}) => {
  return (
    <div>
      <S.PrevBtn onClick={prevImg}>
        <FontAwesomeIcon icon={faChevronCircleLeft} size="2x"/>
      </S.PrevBtn>
    </div>
  )
}

export default LeftArrow;


const S = {};
S.PrevBtn = styled.button`
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
`;