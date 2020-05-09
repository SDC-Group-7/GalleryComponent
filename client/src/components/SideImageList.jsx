import React from 'react';
import styled from 'styled-components';
import SideImageItem from './SideImageItem';

const SideImageList = ({data}) => (
  <S.ListContainer>
    {data.map((img, i) => (
      <SideImageItem
        img={img.image_url}
        key={i}
      />
    ))}
  </S.ListContainer>
);

export default SideImageList;

const S = {};
S.ListContainer = styled.div`
  padding: 10px 0 10px 40px;
  height: 550px;
`;
