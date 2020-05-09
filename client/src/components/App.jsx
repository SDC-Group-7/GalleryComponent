/* eslint-disable class-methods-use-this */
import React, { Component } from 'react';
import styled from 'styled-components';
import Slider from './slider/Slider';
import SideMenu from './side-menu/SideMenu';
import API from '../services/index';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      currentImgIndx: 0,
    };
    this.handlePrevImg = this.handlePrevImg.bind(this);
    this.handleNextImg = this.handleNextImg.bind(this);
  }

  componentDidMount() {
    const randomProductId = Math.floor(Math.random() * 100) + 1;
    API.getProduct(randomProductId).then((data) => (this.setState({ data }))).catch((err) => {
      console.log(err);
    });
  }

  handlePrevImg() {
    const { data, currentImgIndx } = this.state;
    const lastIndx = data.length - 1;
    const shouldReset = currentImgIndx === 0;
    const index = shouldReset ? lastIndx : currentImgIndx - 1;

    this.setState({ currentImgIndx: index });
  }


  handleNextImg() {
    const { data, currentImgIndx } = this.state;
    const lastIndx = data.length - 1;
    const shouldReset = currentImgIndx === lastIndx;
    const index = shouldReset ? 0 : currentImgIndx + 1;

    this.setState({ currentImgIndx: index });
  }


  render() {
    const { data } = this.state;
    if (this.state.data.length > 0) {
      var imgURL = this.state.data[this.state.currentImgIndx].image_url;
    }

    return (

      <S.AppContainer>
        <S.MainPhoto>
          <S.SliderContainer>
            <Slider
              data={data}
              handlePrevImg={this.handlePrevImg}
              handleNextImg={this.handleNextImg}
              imgURL={imgURL}
              currentImgIndx={this.state.currentImgIndx}
            />
          </S.SliderContainer>
        </S.MainPhoto>
        <S.SideContainer>
          <SideMenu
            data={data}
            handlePrevImg={this.handlePrevImg}
            handleNextImg={this.handleNextImg}
            currentImgIndx={this.state.currentImgIndx}
          />
        </S.SideContainer>
      </S.AppContainer>
    );
  }
}

const S = {};
S.AppContainer = styled.div`
  width: 100vh;
  height: 70vh;
  display: grid;
  grid-template-columns: 1fr 3fr;
  margin: 10px;
  padding: 10px;
`;

S.MainPhoto = styled.div`
  background: #f8f8f8;
  grid-column: 2/3;
  grid-row: 1/3;
  display: grid;
  grid-template-rows: 1;
`;

S.SliderContainer = styled.div`
  grid-column: 1/3;
  grid-row: 1/3;
  margin: 20px;
`;

S.SideContainer = styled.div`
  background: #f8f8f8;
  grid-column: 1/2;
  grid-row: 1/3;
  display: grid;
`;
