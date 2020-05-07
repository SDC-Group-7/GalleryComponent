import React, {Component} from 'react';
import styled from "styled-components";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      backgroundImage: 'url()',
      backgroundPosition: '0% 0%',
      isOn: false,
    }
    this.handleMoveEffect = this.handleMoveEffect.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
  }
  handleMoveEffect(e){
    const { left, top, width, height } = e.target.getBoundingClientRect();
    const x = (e.pageX - left) / width * 100;
    const y = (e.pageY - top) / height * 100;

    this.setState(
      { backgroundPosition: `${x}% ${y}%`,
        backgroundImage: `url(${this.props.imgURL})`
      })
  }

  handleMouseLeave() {
    this.setState({isOn: !this.state.isOn});
  }

  render() {
    const backgroundImageZoom = {
      backgroundPosition: this.state.backgroundPosition,
      backgroundImage: this.state.backgroundImage
    }

    return (
      <div>
        {this.state.isOn ?
          <S.ImgCont
            onMouseMove={(e) => this.handleMoveEffect(e)}
            style={backgroundImageZoom}
            onMouseLeave={this.handleMouseLeave}
            >
          <img src={this.props.imgURL} />
        </S.ImgCont> :

          <S.ImgContainer>
            <img
              src={this.props.imgURL}
              onMouseEnter={this.handleMouseLeave}
              onMouseLeave={this.handleMouseLeave}
            />
        </S.ImgContainer>}
      </div>
    )
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

S.ImgCont = styled.div`
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

