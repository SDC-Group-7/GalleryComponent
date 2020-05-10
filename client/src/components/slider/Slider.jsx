import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
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
    const { imgURL, handlePrevImg, handleNextImg } = this.props;
    const { isOpen } = this.state;

    return (
      <S.Container>
        <FullScreenBtn handleToggleScreen={this.handleToggleScreen} />
        <MainImage imgURL={imgURL} />
        <LeftArrowBtn handlePrevImg={handlePrevImg} />
        <RightArrowBtn handleNextImg={handleNextImg} />
        <Modal
          isOpen={isOpen}
          handleToggleScreen={this.handleToggleScreen}
          imgURL={imgURL}
          handleNextImg={handleNextImg}
          handlePrevImg={handlePrevImg}
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

Slider.propTypes = {
  imgURL: PropTypes.string,
  handlePrevImg: PropTypes.func,
  handleNextImg: PropTypes.func,
};

Slider.defaultProps = {
  imgURL: '',
  handlePrevImg: () => {},
  handleNextImg: () => {},
};