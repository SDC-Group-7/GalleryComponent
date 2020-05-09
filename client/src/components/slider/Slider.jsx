import React, { Component } from 'react';
import styled from 'styled-components';
import LeftArrowBtn from './LeftArrowBtn';
import RightArrowBtn from './RightArrowBtn';
import MainImage from './MainImage';
import FullScreenBtn from './FullScreenBtn';
import Modal from './Modal';

export default class Slider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentImgIndx: 0,
      isOpen: false,
    };

    this.handlePrevImg = this.handlePrevImg.bind(this);
    this.handleNextImg = this.handleNextImg.bind(this);
    this.handleToggleScreen = this.handleToggleScreen.bind(this);
  }

  handlePrevImg() {
    const lastIndx = this.props.data.length - 1;
    const { currentImgIndx } = this.state;
    const shouldReset = currentImgIndx === 0;
    const index = shouldReset ? lastIndx : currentImgIndx - 1;

    this.setState({
      currentImgIndx: index,
    });
  }

  handleNextImg() {
    const lastIndx = this.props.data.length - 1;
    const { currentImgIndx } = this.state;
    const shouldReset = currentImgIndx === lastIndx;
    const index = shouldReset ? 0 : currentImgIndx + 1;
    this.setState({
      currentImgIndx: index,
    });
  }

  handleToggleScreen() {
    this.setState((prevState) => ({ isOpen: !prevState.isOpen }));
  }

  render() {
    let imgURL;
    if (this.props.data.length > 0) {
      imgURL = this.props.data[this.state.currentImgIndx].image_url;
    }

    return (
      <S.Container>
        <FullScreenBtn handleToggleScreen={this.handleToggleScreen} />
        <MainImage imgURL={imgURL} />
        <LeftArrowBtn prevImg={this.handlePrevImg} />
        <RightArrowBtn nextImg={this.handleNextImg} />
        <Modal
          isOpen={this.state.isOpen}
          handleToggleScreen={this.handleToggleScreen}
          imgURL={imgURL}
          data={this.props.data}
          nextImg={this.handleNextImg}
          prevImg={this.handlePrevImg}
        />
      </S.Container>
    );
  }
}

const S = {};
S.Container = styled.div`
  position: relative;
  max-width: 100%;
`;
