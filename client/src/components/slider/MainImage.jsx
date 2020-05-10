import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

export default class MainImage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      backgroundImage: 'url()',
      backgroundPosition: '0% 0%',
      hasImageClicked: false,
    };
    this.handleZoomEffect = this.handleZoomEffect.bind(this);
    this.handleClickImage = this.handleClickImage.bind(this);
  }

  handleZoomEffect(e) {
    const {
      left, top, width, height,
    } = e.target.getBoundingClientRect();
    const x = ((e.pageX - left) / width) * 100;
    const y = ((e.pageY - top) / height) * 100;

    const { imgURL } = this.props;
    this.setState({
      backgroundPosition: `${x}% ${y}%`,
      backgroundImage: `url(${imgURL})`,
    });
  }

  handleClickImage() {
    this.setState({ hasImageClicked: !this.state.hasImageClicked });
  }

  render() {
    const backgroundImageZoom = {
      backgroundPosition: this.state.backgroundPosition,
      backgroundImage: this.state.backgroundImage,
    };
    const { hasImageClicked } = this.state;

    const { imgURL } = this.props;
    return (
      <div>
        {hasImageClicked ? (
          <S.ImageContainer
            onMouseMove={(e) => this.handleZoomEffect(e)}
            style={backgroundImageZoom}
            onClick={this.handleClickImage}
            onMouseLeave={this.handleClickImage}
          >
            <img src={imgURL} alt="" />
          </S.ImageContainer>
        ) : (
          <S.ImgContainer onClick={this.handleClickImage}>
            <img src={imgURL} alt="" />
          </S.ImgContainer>
        )}
      </div>
    );
  }
}

const S = {};

S.ImgContainer = styled.div`
  overflow: hidden;
  cursor: zoom-in;

  img {
    transition: opacity 0.8s;
    display: block;
    width: 100%;
    height: 630.688px;
    width: 695.75px;
  }
`;

S.ImageContainer = styled.div`
  overflow: hidden;
  cursor: zoom-in;

  img {
    transition: opacity 0.8s;
    display: block;
    width: 100%;
    height: 630.688px;
    width: 695.75px;

    &:hover {
      opacity: 0;
    }
  }
`;

MainImage.propTypes = {
  imgURL: PropTypes.string,
};
MainImage.defaultProps = {
  imgURL: '',
};
