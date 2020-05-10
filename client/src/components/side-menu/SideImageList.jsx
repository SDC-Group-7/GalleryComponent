import React, { forwardRef } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import SideImageItem from './SideImageItem';

const SideImageList = forwardRef((props, ref) => (
  <S.ListContainer ref={ref}>
    {props.data.map((img, i) => (
      <SideImageItem img={img.image_url} key={i} />
    ))}
  </S.ListContainer>
));

SideImageList.propTypes = {
  data: PropTypes.array,
};
SideImageList.defaultProps = {
  data: [],
};

const S = {};

S.ListContainer = styled.div`
  padding: 40px 0 40px 40px;
  position: relative;
  overflow: auto;
`;

export default SideImageList;
