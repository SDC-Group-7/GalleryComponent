import React from 'react';
import { shallow } from 'enzyme';
import App from '../client/src/components/App';

describe('Testing App Component', () => {
  it('Component renders without crashing', () => {
    shallow(<App />);
  });
});
