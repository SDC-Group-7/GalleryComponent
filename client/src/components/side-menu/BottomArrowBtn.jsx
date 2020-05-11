import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

const BottomArrowBtn = ({ handleClickDown }) => (
  <S.Button type="button" onClick={handleClickDown}>
    <FontAwesomeIcon icon={faChevronDown} size="2x" />
  </S.Button>
);

const S = {};

S.Button = styled.button`
  color: rgb(91, 88, 88);
  cursor: pointer;
  background: transparent;
  border: none;
  outline: none;
  box-shadow: none;
  position:relative;

  &:hover {
    color: rgb(0, 0, 0);
  }
`;

BottomArrowBtn.propTypes = {
  handleClickDown: PropTypes.func,
};
BottomArrowBtn.defaultProps = {
  handleClickDown: () => {},
};

export default BottomArrowBtn;
