import React, {Component} from 'react';
import Slider from './Slider.jsx';
import SideImagesMenu from './SideImagesMenu.jsx';

export default class App extends Component {
  constructor(props) {
    super();
  }
  render( ) {
    return (
      <div className="main">
      <div className="box1">
        <div className="inner-box1">
          <Slider />
        </div>
      </div>
      <div className="box2">
        <SideImagesMenu />
      </div>

    </div>
    )
  }
};