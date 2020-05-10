import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const SideImageItem = ({ img, handleDisplayImage, id }) => (
  <S.PhotoContainer onClick={(e) => handleDisplayImage(e)}>
    <img src={img} alt="" id={id} />
  </S.PhotoContainer>
);

const S = {};

S.PhotoContainer = styled.div`
  height: 120px;

  img {
    height: 100px;
    width: 100%;
    display: block;
    position: relative;
    padding: 10px 45px 10px 0;
  }
`;

SideImageItem.propTypes = {
  img: PropTypes.string,
  handleDisplayImage: PropTypes.func,
  id: PropTypes.number,
};
SideImageItem.defaultProps = {
  img: '',
  handleDisplayImage: () => {},
  id: 0,
};

export default SideImageItem;
