/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import styled from 'styled-components';
import FullScreenBtn from './FullScreenBtn';
import SideMenu from '../side-menu/SideMenu';

const Modal = ({
  imgURL, isOpen, handleToggleScreen, data,
}) => {
  if (!isOpen) {
    return null;
  }
  return (
    <S.BackgroundContainer>
      <SideMenu data={data} />
      <FullScreenBtn handleToggleScreen={handleToggleScreen} />
      <S.ModalContainer>
        <img src={imgURL} alt="" />
      </S.ModalContainer>
    </S.BackgroundContainer>
  );
};

export default Modal;

const S = {};
S.BackgroundContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: white;
  display: flex;
  justify-content: center;
`;

S.ModalContainer = styled.div`
  background: #fff;
  margin: 50px auto;

  img {
    transition: opacity 0.8s;
    display: block;
    width: 100%;
    height: 700px;
    width: 900px;
  }
`;
