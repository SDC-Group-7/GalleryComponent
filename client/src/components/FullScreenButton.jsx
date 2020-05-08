import React, { Component } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExpandArrowsAlt } from '@fortawesome/free-solid-svg-icons';

export default class FullScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      toggle: false,
    };
    this.handleToggleScreen = this.handleToggleScreen.bind(this);
  }

  handleToggleScreen() {
    this.setState({ toggle: !this.state.toggle });
    console.log('clicked');
  }

  render() {
    return (
      <S.FullScreenBtn onClick={this.handleToggleScreen} >
        <FontAwesomeIcon icon={faExpandArrowsAlt} size="2x" />
      </S.FullScreenBtn>
    );
  }
}


const S = {};

S.FullScreenBtn = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  font-size: 18px;
  color: black;
  cursor: pointer;
`;
