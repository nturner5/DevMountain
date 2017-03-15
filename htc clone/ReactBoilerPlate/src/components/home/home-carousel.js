import React, { Component } from 'react'
import Slider from 'react-slick'

class RightNavArrow extends Component{
  render() {
    return <div {...this.props} style={{display: 'block'}}></div>;
  }
};

class LeftNavArrow extends Component{
  render() {
    return <div {...this.props} style={{display: 'block'}}></div>;
    
  }
};


export default class HomeCarousel extends Component {
  render() {
  	var settings = {
    	dots: true,
        infinite: true,
        slidesToScroll: 1,
        nextArrow: <RightNavArrow />,
        prevArrow: <LeftNavArrow />

    }
    return (
    	<div className='carousel-home'>
      	<Slider {...settings}>
        	<div><img src='http://placekitten.com/g/400/200' /></div>
          <div><img src='http://placekitten.com/g/400/200' /></div>
          <div><img src='http://placekitten.com/g/400/200' /></div>
          <div><img src='http://placekitten.com/g/400/200' /></div>
        </Slider>
      </div>
    );
  }
}