import React, {Component} from 'react';
import Slider from './Slider.jsx';
import SideImagesMenu from './SideImagesMenu.jsx';
import axios from 'axios';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    }
    this.getProduct = this.getProduct.bind(this);

    this.handleSetter = this.handleSetter.bind(this);
    this.handleError = this.handleError.bind(this);
  }

  // Setter
  handleSetter({data}) {
    this.setState({data})
  }

  // Error handler
  handleError(error) {
    console.log(error);
  }

  // GET request
  async getProduct (id) {
    await axios.get(`/api/images/${id}`)
      .then(this.handleSetter)
      .catch(this.handleError)
  }


  componentDidMount() {
    // Selecting a random product from 1-100;
    this.getProduct(Math.floor(Math.random() * 100) + 1);
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
        <SideImagesMenu />
      </div>

    </div>
    )
  }
};