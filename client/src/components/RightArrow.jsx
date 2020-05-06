import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faChevronCircleRight} from '@fortawesome/free-solid-svg-icons';
import styled from "styled-components";

const RightArrow = (props) => {
  return (
    <div>
      <S.NextBtn onClick={props.nextImg}>
        <FontAwesomeIcon icon={faChevronCircleRight} size="2x"/>
      </S.NextBtn>
    </div>
  );
};

export default RightArrow;



const S = {};
S.NextBtn = styled.button`
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
