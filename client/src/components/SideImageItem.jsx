import React from 'react';
import styled from 'styled-components';

const SideImageItem = ({ data }) => {
  const images = data.map((item, i) => (
    <S.PhotoContainer>
      <img src={item.image_url} alt="" />
    </S.PhotoContainer>
  ));

  return (
    <S.ImagesListContainer>
      { images }
    </S.ImagesListContainer>
  );
};

const S = {};
S.ImagesListContainer = styled.div`
  padding: 10px 0 10px 40px;
`;

S.PhotoContainer = styled.figure`
  padding: 10px 0 10px 0 ;
img {
  height: 60px;
  width: 100px;
}
`;
export default SideImageItem;
