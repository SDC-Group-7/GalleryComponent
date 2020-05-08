/* eslint-disable class-methods-use-this */
import React, { Component } from 'react';
import styled from 'styled-components';
import Slider from './Slider';
import SideImagesMenu from './SideImagesMenu';
import API from '../services/index';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    const randomProductId = Math.floor(Math.random() * 100) + 1;
    API.getProduct(randomProductId).then((data) => (this.setState({ data }))).catch((err) => {
      console.log(err);
    });
    // console.log(data);
    // this.setState({ data });
  }

  render() {
    return (
      <S.MainContainer>
        <S.ImageContainer>
          <S.SliderContainer>
            <Slider data={this.state.data} />
          </S.SliderContainer>
        </S.ImageContainer>
        <S.SideContainer>
          <SideImagesMenu data={this.state.data} />
        </S.SideContainer>
      </S.MainContainer>
    );
  }
}

const S = {};
S.MainContainer = styled.div`
  width: 100vh;
  height: 70vh;
  display: grid;
  grid-template-columns: 1fr 3fr;
  margin: 10px;
  padding: 10px;
`;

S.ImageContainer = styled.div`
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
