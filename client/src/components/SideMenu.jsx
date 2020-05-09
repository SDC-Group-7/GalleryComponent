import React, { Component, createRef } from 'react';
import styled from 'styled-components';
import TopArrowBtn from './TopArrowBtn';
import BottomArrowBtn from './BottomArrowBtn';
import SideImageList from './SideImageList';

export default class SideMenu extends Component {
  constructor(props) {
    super(props);
    this.scrollImgRef = createRef();
    this.handleScroll = this.handleScroll.bind(this);
  }

  handleScroll() {
    console.log('Clicked');
    console.log(this.scrollImgRef);

    this.scrollImgRef.current.focus();

    // this.scrollImgRef.current.scrollIntoView({
    //   behavior: 'smooth',
    //   block: 'start',
    // });
  }

  render() {
    return (
      <S.ImageContent>
        <S.ImagesItems>
          <TopArrowBtn handleScroll={this.handleScroll} />
          <SideImageList data={this.props.data} scrollImgRef={this.scrollImgRef} />
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
