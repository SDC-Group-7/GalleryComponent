import React from 'react';
import { shallow, mount } from 'enzyme';
import LeftArrow from '../../client/src/components/LeftArrow';

describe('Testing LeftArrow button  ', () => {
  const LeftArrowWrapper = shallow(<LeftArrow />);

  it('should render ', () => {
    expect(LeftArrowWrapper.exists()).toBe(true);
  });
});
