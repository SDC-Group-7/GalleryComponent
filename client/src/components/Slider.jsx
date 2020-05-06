import React, { Component } from "react";

import LeftArrow from "./LeftArrow";
import RightArrow from "./RightArrow";
import ImageZoom from './ImageZoom';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExpandArrowsAlt } from "@fortawesome/free-solid-svg-icons";

export default class Slider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentImgIndx: 0,
    };

    this.prevImg = this.prevImg.bind(this);
    this.nextImg = this.nextImg.bind(this);
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
    };

    return (
      <div className="container">
        <button className="btn">
          <FontAwesomeIcon icon={faExpandArrowsAlt} size="2x" />
        </button>
        <ImageZoom imgURL={imgURL} />
        <LeftArrow prevImg={this.prevImg} />
        <RightArrow nextImg={this.nextImg} />
      </div>
    );
  }
}
