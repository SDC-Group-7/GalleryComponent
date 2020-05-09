import React from "react";
import styled from "styled-components";
import TopArrowBtn from "./TopArrowBtn";
import BottomArrowBtn from "./BottomArrowBtn";
import SideImageItem from "./SideImageItem";

const SideMenu = ({ data }) => (
  <S.ImageContent>
    <S.ImagesItems>
      <TopArrowBtn />
      <SideImageItem data={data} />
      <BottomArrowBtn />
    </S.ImagesItems>
  </S.ImageContent>
);

export default SideMenu;
const S = {};
S.ImageContent = styled.div`
  grid-column: 1/2;
  grid-row: 1/2;
  margin: 25px 30px;
`;

S.ImagesItems = styled.div`
  display: flex;
  flex-direction: column;
`;
