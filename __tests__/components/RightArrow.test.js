import React from 'react';
import { shallow, mount } from 'enzyme';
import RightArrow from '../../client/src/components/RightArrow';

describe('Testing RightArrow button  ', () => {
  const RightArrowWrapper = shallow(<RightArrow />);

  it('should render ', () => {
    expect(RightArrowWrapper.exists()).toBe(true);
  });
});
