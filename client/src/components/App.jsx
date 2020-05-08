/* eslint-disable class-methods-use-this */
import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Slider from './Slider';
import SideImagesMenu from './SideImagesMenu';
import apis from '../services/apis';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  async componentDidMount() {
    const randomProductId = Math.floor(Math.random() * 100) + 1;
    const data = await apis.getProduct(randomProductId);

    this.setState({ data });
  }

  // async getProduct(id) {
  //   await axios
  //     .get(`/api/images/${id}`)
  //     .then(this.handleSetter)
  //     .catch(this.handleError);
  // }

  // getProduct(id) {
  //   return new Promise((resolve, reject) => {
  //     axios.get(`/api/images/${id}`)
  //       .then(({ status, data }) => {
  //         if (status === 200) {
  //           resolve(this.setState({ data }));
  //         } else {
  //           reject(new Error('error'));
  //         }
  //       });
  //   });
  // }

  // handleError(error) {
  //   if (error.response) {
  //     console.log(error.response.status);
  //     console.log(error.response.data);
  //   } else if (error.request) {
  //     console.log(error.request);
  //   } else {
  //     console.log('Error', error.message);
  //   }
  // }

  // handleSetter({ data }) {
  //   this.setState({ data });
  // }


  render() {
    console.log(this.state.data);
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
