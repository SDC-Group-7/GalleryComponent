import React, { Component } from 'react';
import Slider from './Slider';
import SideImagesMenu from './SideImagesMenu';
import axios from 'axios';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      randomProductId: Math.floor(Math.random() * 100) + 1
    }
    this.getProduct = this.getProduct.bind(this);

    this.handleSetter = this.handleSetter.bind(this);
    this.handleError = this.handleError.bind(this);
  }

  handleSetter({data}) {
    this.setState({data})
  }

  handleError(error) {
    if (error.response) {
      console.log(error.response.status)
      console.log(error.response.data)
    } else if (error.request) {
      console.log(error.request);
    } else {
      console.log('Error', error.message);
    }
  }

  async getProduct (id) {
    await axios.get(`/api/images/${id}`)
      .then(this.handleSetter)
      .catch(this.handleError)
  }


  componentDidMount() {
    this.getProduct(this.state.randomProductId);
  }


  render( ) {
    return (
      <div className="main">
      <div className="box1">
        <div className="inner-box1">
          <Slider data={this.state.data}/>
        </div>
      </div>
      <div className="box2">
        <SideImagesMenu data={this.state.data}/>
      </div>

    </div>
    )
  }
};