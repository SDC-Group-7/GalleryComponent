import React, { Component, createRef } from 'react';
import styled from 'styled-components';
import TopArrowBtn from './TopArrowBtn';
import BottomArrowBtn from './BottomArrowBtn';
import SideImageList from './SideImageList';

export default class SideMenu extends Component {
  constructor(props) {
    super(props);
    this.imgRef = createRef();
    this.handleScroll = this.handleScroll.bind(this);
  }

  handleScroll() {
    console.log('Clicked');
    console.log(this.imgRef);

    // this.scrollImgRef.current.focus();

    this.imgRef.current.scrollIntoView({
      behavior: 'smooth',
    });
  }

  render() {
    return (
      <S.ImageContent>
        <S.ImagesItems>
          <TopArrowBtn handleScroll={this.handleScroll} />
          <SideImageList data={this.props.data} ref={this.imgRef} />
          <BottomArrowBtn handleScroll={this.handleScroll} />
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
`;
