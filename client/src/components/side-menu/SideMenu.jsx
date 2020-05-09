import React, { Component } from 'react';
import styled from 'styled-components';
import TopArrowBtn from './TopArrowBtn';
import BottomArrowBtn from './BottomArrowBtn';
import SideImageList from './SideImageList';

export default class SideMenu extends Component {
  constructor(props) {
    super(props);
    this.imgRef = React.createRef();
    this.handleClicklUp = this.handleClickUp.bind(this);
    this.handleClickDown = this.handleClickDown.bind(this);
  }

  handleClickUp() {
    const indx = this.props.currentImgIndx;
    this.imgRef.current.children[indx];
    this.props.handlePrevImg();
  }

  handleClickDown() {
    const indx = this.props.currentImgIndx;
    this.imgRef.current.children[indx];
    this.props.handleNextImg();
  }

  render() {
    return (
      <S.ImageContent>
        <S.ImagesItems>
          <TopArrowBtn handleClickUp={this.handleClickUp} />
          <SideImageList data={this.props.data} ref={this.imgRef} />
          <BottomArrowBtn handleClickDown={this.handleClickDown} />
        </S.ImagesItems>
      </S.ImageContent>
    );
  }
}
const S = {};
S.ImageContent = styled.div`
  grid-column: 1/2;
  grid-row: 1/2;
  margin: 25px 30px;
`;

S.ImagesItems = styled.div`
  display: flex;
  flex-direction: column;
  height: 600px;
`;
