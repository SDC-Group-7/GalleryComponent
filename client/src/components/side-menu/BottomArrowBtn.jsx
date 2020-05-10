import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const BottomArrowBtn = ({ handleClickDown }) => (
  <S.Button type="button" onClick={handleClickDown}>
    <FontAwesomeIcon icon={faChevronDown} size="2x" />
  </S.Button>
);

const S = {};

S.Button = styled.button`
  bottom: 100%;
  left: 130px;
  color: rgb(91, 88, 88);
  cursor: pointer;
  background: transparent;
  border: none;
  outline: none;
  box-shadow: none;
`;

BottomArrowBtn.propTypes = {
  handleClickDown: PropTypes.func,
};
BottomArrowBtn.defaultProps = {
  handleClickDown: () => {},
};

export default BottomArrowBtn;
