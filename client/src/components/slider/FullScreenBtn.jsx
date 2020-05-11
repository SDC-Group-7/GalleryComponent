import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExpandArrowsAlt } from '@fortawesome/free-solid-svg-icons';

const FullScreenBtn = ({ handleToggleScreen }) => (
  <S.Button onClick={handleToggleScreen}>
    <FontAwesomeIcon icon={faExpandArrowsAlt} size="2x" />
  </S.Button>
);

const S = {};

S.Button = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  font-size: 18px;
  color: rgb(91, 88, 88);
  cursor: pointer;
  border: none;
  background: transparent;

  &:hover {
    color: rgb(0, 0, 0);
  }
`;

FullScreenBtn.propTypes = {
  handleToggleScreen: PropTypes.func,
};
FullScreenBtn.defaultProps = {
  handleToggleScreen: () => {},
};

export default FullScreenBtn;
