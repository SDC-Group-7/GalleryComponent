import React from 'react';
import styled from 'styled-components';


const SideImagesMenu = ({ data }) => {
  const images = data.map((img, i) => (
    <S.ImgContainerMapped key={i}>
      <img src={img.image_url} alt="" />
    </S.ImgContainerMapped>
  ));

  return (
    <S.ImageContent>
      <S.ImagesItems>
        <button>ClickTop</button>
        {images}
        <button>ClickTop</button>
      </S.ImagesItems>
    </S.ImageContent>
  );
};

export default SideImagesMenu;

const S = {};

S.ImgContainerMapped = styled.div`
  padding: 10px 0 10px 0;

  img {
    height: 60px;
    width: 100px;
  }
`;

S.ImageContent = styled.div`
  grid-column: 1/2;
  grid-row: 1/2;
  margin: 25px 30px;
`;

S.ImagesItems = styled.div`
  display:flex;
  flex-direction: column;
  height: 100%;
  width:100%;
`;
