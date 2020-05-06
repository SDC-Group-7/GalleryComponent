import React, { Component } from "react";

import LeftArrow from "./LeftArrow.jsx";
import RightArrow from "./RightArrow.jsx";
import ImageZoom from './ImageZoom.jsx';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExpandArrowsAlt } from "@fortawesome/free-solid-svg-icons";

export default class Slider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentImgIndx: 0,
      backgroundPosition:'0% 0%',
    };

    this.prevImg = this.prevImg.bind(this);
    this.nextImg = this.nextImg.bind(this);
    this.handleMove = this.handleMove.bind(this);
  }
  handleMove(e) {
    const { left, top, width, height } = e.target.getBoundingClientRect()
    const x = (e.pageX - left) / width * 100
    const y = (e.pageY - top) / height * 100
    this.setState({ backgroundPosition: `${x}% ${y}%` })
  }

  prevImg() {
    const lastIndx = this.props.data.length - 1;
    const { currentImgIndx } = this.state;
    const shouldReset = currentImgIndx === 0;
    const index = shouldReset ? lastIndx : currentImgIndx - 1;

    this.setState({
      currentImgIndx: index,
    });
  }

  nextImg() {
    const lastIndx = this.props.data.length - 1;
    const { currentImgIndx } = this.state;
    const shouldReset = currentImgIndx === lastIndx;
    const index = shouldReset ? 0 : currentImgIndx + 1;
    this.setState({
      currentImgIndx: index,
    });
  }

  render() {
    let imgURL;
    if (this.props.data.length > 0) {
      imgURL = this.props.data[this.state.currentImgIndx].image_url;
    }
    console.log(imgURL)

    return (
      <div className="container">
        <a className="btn">
          <FontAwesomeIcon icon={faExpandArrowsAlt} size="2x" />
        </a>
        <ImageZoom imgURL={imgURL}/>
        <LeftArrow prevImg={this.prevImg} />
        <RightArrow nextImg={this.nextImg} />
      </div>
    );
  }
}
