import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const SideImageItem = ({ img }) => (
  <S.PhotoContainer>
    <img src={img} alt="" />
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
};
SideImageItem.defaultProps = {
  img: '',
};

export default SideImageItem;
