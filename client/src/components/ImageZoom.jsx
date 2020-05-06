import React, {Component} from 'react';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      backgroundImage: 'url()',
      backgroundPosition: '0% 0%',
      isOn: false,
    }
    this.handleMoveEffect = this.handleMoveEffect.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
  }
  handleMoveEffect(e){
    const { left, top, width, height } = e.target.getBoundingClientRect();
    const x = (e.pageX - left) / width * 100;
    const y = (e.pageY - top) / height * 100;

    this.setState(
      { backgroundPosition: `${x}% ${y}%`,
        backgroundImage: `url(${this.props.imgURL})`
      })
  }

  handleMouseLeave() {
    this.setState({isOn: !this.state.isOn});
  }

  render() {
    const styling = {
      backgroundPosition: this.state.backgroundPosition,
      backgroundImage: this.state.backgroundImage
    }

    return (
      <div>
        {this.state.isOn ?
          <figure
            onMouseMove={(e) => this.handleMoveEffect(e)}
            style={styling}
            onMouseLeave={this.handleMouseLeave}
            >
          <img src={this.props.imgURL} />
        </figure> :
          <figure >
            <img
              src={this.props.imgURL}
              id="main-img"
              onMouseEnter={this.handleMouseLeave}
              onMouseLeave={this.handleMouseLeave}
            />
        </figure>}
      </div>
    )
  }
}