import React, { Component } from 'react';
import './Slider.css';
import Slider from './Slider';

export default class Register extends Component {
  state = {
    status: ''
  };
  swiperHandler = () => {
    let activeImg = document.querySelector('.swiper-slide-active');
    this.setState({ status: activeImg.alt });
  }
  render() {
    return (
      <div>
        <div> Hello </div>
        <Slider swiperHandler={this.swiperHandler} />
      </div>
    )
  }
}
