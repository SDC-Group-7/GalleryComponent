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
      isOpen: false,
    };
    this.handleToggleScreen = this.handleToggleScreen.bind(this);
  }

  handleToggleScreen() {
    this.setState((prevState) => ({ isOpen: !prevState.isOpen }));
  }

  render() {
    return (
      <S.Container>
        <FullScreenBtn handleToggleScreen={this.handleToggleScreen} />
        <MainImage imgURL={this.props.imgURL} />
        <LeftArrowBtn handlePrevImg={this.props.handlePrevImg} />
        <RightArrowBtn handleNextImg={this.props.handleNextImg} />
        <Modal
          isOpen={this.state.isOpen}
          handleToggleScreen={this.handleToggleScreen}
          imgURL={this.props.imgURL}
          data={this.props.data}
          handleNextImg={this.props.handleNextImg}
          handlePrevImg={this.props.handlePrevImg}
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
