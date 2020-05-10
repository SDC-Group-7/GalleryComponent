import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const TopArrowBtn = ({ handleClickUp }) => (
  <S.Button type="button" onClick={handleClickUp}>
    <FontAwesomeIcon icon={faChevronUp} size="2x" />
  </S.Button>
);

const S = {};

S.Button = styled.button`
  left: 130px;
  color: rgb(91, 88, 88);
  cursor: pointer;
  background: transparent;
  border: none;
  outline: none;
  box-shadow: none;
  padding-top: 50px;
`;

TopArrowBtn.propTypes = {
  handleClickUp: PropTypes.func,
};
TopArrowBtn.defaultProps = {
  handleClickUp: () => {},
};

export default TopArrowBtn;
