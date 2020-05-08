import React, { Component } from "react";
import LeftArrow from "./LeftArrow";
import RightArrow from "./RightArrow";
import ImageZoom from './ImageZoom';
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExpandArrowsAlt } from "@fortawesome/free-solid-svg-icons";

export default class Slider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentImgIndx: 0,
    };

    this.prevImg = this.prevImg.bind(this);
    this.nextImg = this.nextImg.bind(this);
  }

  prevImg() {
    const lastIndx = this.props.data.length - 1;
    const { currentImgIndx } = this.state;
    const shouldReset = currentImgIndx === 0;
    const index = shouldReset ? lastIndx : currentImgIndx - 1;

    this.setState({
      currentImgIndx: index,
    });
  }

  nextImg() {
    const lastIndx = this.props.data.length - 1;
    const { currentImgIndx } = this.state;
    const shouldReset = currentImgIndx === lastIndx;
    const index = shouldReset ? 0 : currentImgIndx + 1;
    this.setState({
      currentImgIndx: index,
    });
  }

  render() {
    let imgURL;
    if (this.props.data.length > 0) {
      imgURL = this.props.data[this.state.currentImgIndx].image_url;
    }

    return (
      <S.Container>
        <S.FullScreenBtn>
          <FontAwesomeIcon icon={faExpandArrowsAlt} size="2x" />
        </S.FullScreenBtn>

        <ImageZoom imgURL={imgURL} />
        <LeftArrow prevImg={this.prevImg} />
        <RightArrow nextImg={this.nextImg} />
      </S.Container>
    );
  }
}


const S = {};
S.Container = styled.div`
  position: relative;
  max-width: 100%;
`;

S.FullScreenBtn = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  font-size: 18px;
  color: black;
  cursor: pointer;
`;
