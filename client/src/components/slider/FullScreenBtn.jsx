import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExpandArrowsAlt } from '@fortawesome/free-solid-svg-icons';

const FullScreenBtn = ({ handleToggleScreen }) => (
  <S.Button onClick={handleToggleScreen}>
    <FontAwesomeIcon icon={faExpandArrowsAlt} size="3x" />
  </S.Button>
);

const S = {};

S.Button = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  color: rgb(91, 88, 88);
  cursor: pointer;
  border: none;
  background: transparent;

  -webkit-transition: .5s ease-in-out;
  -moz-transition: .5s ease-in-out;
  -o-transition: .5s ease-in-out;
  transition: .5s ease-in-out;

  &:hover {
    color: rgb(169,169,169);
    background: transparent;
  }
`;

FullScreenBtn.propTypes = {
  handleToggleScreen: PropTypes.func,
};
FullScreenBtn.defaultProps = {
  handleToggleScreen: () => {},
};

export default FullScreenBtn;
