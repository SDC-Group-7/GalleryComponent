import React, {Component} from 'react';
import LeftArrow from './LeftArrow.jsx';
import RightArrow from './RightArrow.jsx';


export default class Slider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentImgIndx: 0,
    }

    this.prevImg = this.prevImg.bind(this);
    this.nextImg = this.nextImg.bind(this);
  }

  prevImg() {
    const lastIndx = this.props.data.length - 1;
    const { currentImgIndx } = this.state;
    const shouldReset = currentImgIndx === 0;
    const index = shouldReset ? lastIndx : currentImgIndx - 1;

    this.setState({
      currentImgIndx : index
    });
  }

  nextImg() {
    const lastIndx = this.props.data.length - 1;
    const { currentImgIndx } = this.state;
    const shouldReset = currentImgIndx === lastIndx;
    const index = shouldReset ? 0 : currentImgIndx + 1;
    console.log('Clicked next')
    this.setState({
      currentImgIndx : index
    })
  }


  render() {

    return (
      <div className="container">
      <button className="btn">
        Click
      </button>
        {this.props.data.length ?
          <img src={this.props.data[this.state.currentImgIndx].image_url} className="main-img"></img>
          : <p>Loading</p>}
        <LeftArrow prevImg={this.prevImg}/>
        <RightArrow nextImg={this.nextImg}/>
    </div>
    )
  }
}