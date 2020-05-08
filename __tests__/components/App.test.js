import React from 'react';
import { shallow } from 'enzyme';
import axios from 'axios';
import API from '../../client/src/services/index';
import App from '../../client/src/components/App';

jest.mock('axios');

describe('Testing App Component', () => {
  it('Component renders without crashing', () => {
    const wrapper = shallow(<App />);

    expect(wrapper.exists()).toBe(true);
  });
});

describe('Should be fetching data ', () => {
  it('should fetch data from database on success', async () => {
    const data = [
      { image_id: 7, image_url: 'https://legogallery.s3-us-west-1.amazonaws.com/10.jpg', product_id: 3 },
      { image_id: 5, image_url: 'https://legogallery.s3-us-west-1.amazonaws.com/7.jpg', product_id: 3 },
      { image_id: 6, image_url: 'https://legogallery.s3-us-west-1.amazonaws.com/9.jpg', product_id: 3 },
      { image_id: 1, image_url: 'https://legogallery.s3-us-west-1.amazonaws.com/4.jpg', product_id: 3 },
      { image_id: 2, image_url: 'https://legogallery.s3-us-west-1.amazonaws.com/10.jpg', product_id: 3 },
    ];
    axios.get.mockImplementationOnce(() => Promise.resolve({ data }));
    await expect(API.getProduct(3)).resolves.toEqual(data);
  });
});
