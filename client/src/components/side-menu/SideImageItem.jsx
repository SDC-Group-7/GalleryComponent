import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const SideImageItem = ({ img, handleDisplayImage, id }) => (
  <S.PhotoContainer onClick={(e) => handleDisplayImage(e)}>
    <S.Image src={img} alt="" id={id} />
  </S.PhotoContainer>
);

const S = {};

S.PhotoContainer = styled.div`
  padding: 15px 0 15px 0;
  img {
    height: 100px;
    width: 100%;
    display: block;
    position: relative;
  }
`;
S.Image = styled.img`
  border-radius: 10px;
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
