import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import FullScreenBtn from '../slider/FullScreenBtn';
import MainImage from '../slider/MainImage';

const Modal = ({
  imgURL, isOpen, handleToggleScreen,
}) => {
  if (!isOpen) {
    return null;
  }
  return (
    <S.BackgroundContainer>
      <FullScreenBtn handleToggleScreen={handleToggleScreen} />
      <S.ModalContainer>
        <MainImage imgURL={imgURL} />
      </S.ModalContainer>
    </S.BackgroundContainer>
  );
};

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
    border-radius: 20px;
  }
`;

Modal.propTypes = {
  imgURL: PropTypes.string,
  handleToggleScreen: PropTypes.func,
  isOpen: PropTypes.bool,
};

Modal.defaultProps = {
  imgURL: '',
  handleToggleScreen: () => {},
  isOpen: false,
};

export default Modal;
