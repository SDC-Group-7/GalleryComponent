import React, { Component } from 'react';
import styled from 'styled-components';

export default class MainImage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      backgroundImage: 'url()',
      backgroundPosition: '0% 0%',
      isOn: false,
    };
    this.handleMoveEffect = this.handleMoveEffect.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
  }

  handleMoveEffect(e) {
    const {
      left, top, width, height,
    } = e.target.getBoundingClientRect();
    const x = (e.pageX - left) / width * 100;
    const y = (e.pageY - top) / height * 100;

    const { imgURL } = this.props;
    this.setState(
      {
        backgroundPosition: `${x}% ${y}%`,
        backgroundImage: `url(${imgURL})`,
      },
    );
  }

  handleMouseLeave() {
    this.setState({ isOn: !this.state.isOn });
  }

  render() {
    const backgroundImageZoom = {
      backgroundPosition: this.state.backgroundPosition,
      backgroundImage: this.state.backgroundImage,
    };

    const { imgURL } = this.props;
    return (
      <div>
        {this.state.isOn
          ? (
            <S.ImageContainer
              onMouseMove={(e) => this.handleMoveEffect(e)}
              style={backgroundImageZoom}
              onClick={this.handleMouseLeave}
              onMouseLeave={this.handleMouseLeave}
            >
              <img src={imgURL} alt="" />
            </S.ImageContainer>
          )

          : (
            <S.ImgContainer onClick={this.handleMouseLeave}>
              <img
                src={imgURL}
                alt=""
              />
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
    transition: opacity .8s;
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
    transition: opacity .8s;
    display: block;
    width: 100%;
    height: 630.688px;
    width: 695.75px;

    &:hover {
      opacity: 0;
    }
  }
`;
