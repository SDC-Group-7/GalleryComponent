/* eslint-disable class-methods-use-this */
import React, { Component } from 'react';
import styled from 'styled-components';
import Slider from './Slider';
import SideMenu from './SideMenu';
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
  }

  render() {
    const { data } = this.state;
    return (
      <S.AppContainer>
        <S.PhotosContainer>
          <S.SliderContainer>
            <Slider data={data} />
          </S.SliderContainer>
        </S.PhotosContainer>
        <S.SideContainer>
          <SideMenu data={data} />
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

S.PhotosContainer = styled.div`
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
