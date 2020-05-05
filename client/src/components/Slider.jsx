import React, {Component} from 'react';


export default class Slider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentImgIndex: 0
    }
  }




  render() {
    const data = this.props.data;

    return (
      <div className="container">
      <button className="btn">
      </button>
        <img src="https://legogallery.s3-us-west-1.amazonaws.com/1.jpg" className="main-img"></img>
    </div>
    )
  }
}
