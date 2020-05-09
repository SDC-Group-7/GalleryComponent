import React from 'react';
import styled from 'styled-components';

const SideImageItem = ({ img }) => (
  <S.PhotoContainer>
    <img src={img} alt="" />
  </S.PhotoContainer>
);

const S = {};
S.PhotoContainer = styled.div`
  padding: 10px 0 10px 0 ;
img {
  height: 60px;
  width: 100px;
}
`;

export default SideImageItem;
