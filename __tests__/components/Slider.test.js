import React from 'react';
import { shallow, mount } from 'enzyme';
import Slider from '../../client/src/components/Slider';

describe('Testing RightArrow button  ', () => {
  const wrapper = shallow(<Slider data={[]} />);

  it('should render ', () => {
    expect(wrapper.exists()).toBe(true);
  });
});
