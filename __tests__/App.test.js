import React from 'react';
import { shallow } from 'enzyme';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import waitUntil from 'async-wait-until';
import App from '../client/src/components/App';


describe('Testing App Component', () => {
  it('Component renders without crashing', () => {
    const wrapper = shallow(<App />);

    expect(wrapper.exists()).toBe(true);
  });

  it('Should handle success get request  ', async (done) => {

    const data = [
      {
        image_url: 'https://legogallery.s3-us-west-1.amazonaws.com/10.jpg',
        product_id: 3,
        image_id: 7,
      },
      {
        image_url: 'https://legogallery.s3-us-west-1.amazonaws.com/7.jpg',
        product_id: 3,
        image_id: 5,
      },
      {
        image_url: 'https://legogallery.s3-us-west-1.amazonaws.com/9.jpg',
        product_id: 3,
        image_id: 6,
      },
      {
        image_url: 'https://legogallery.s3-us-west-1.amazonaws.com/4.jpg',
        product_id: 3,
        image_id: 1,
      },
      {
        image_url: 'https://legogallery.s3-us-west-1.amazonaws.com/10.jpg',
        product_id: 3,
        image_id: 2,
      },
    ];


    const mock = new MockAdapter(axios);
    const app = shallow(<App />);

    mock.onGet('/api/images/3').reply(200, data);

    await expect(app.instance().getProduct(3)).resolves.toEqual(data);
    done();

    // jest.fn().mockImplementation(() => {
    //   Promise.resolve(data);
    // });

    // app.setState({


    // expect(app.state('data')).toEqual(data);
    //     '/api/images/3').reply(200, data);

  //   const app = shallow(<App />)
  //   app.getProduct(3).then((response) => {
  //     expect(response).toEqual(data);
  //     done();
  //   });
  // });
  });

  // it('Should throw an error on failutre' , async () => {
  //   const error = 'Network Error';
  //   const app = shallow(<App />);

  //   jest.fn().mockImplementation(() => {
  //     Promise.reject(new Error(error));
  //   });
  //   await expect(app.instance().getProduct(null)).rejects.toThrow(error);
  // });
});
