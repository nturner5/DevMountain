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
    	dots: false,
      arrows: false,
      infinite: true,
      slidesToScroll: 1,
      nextArrow: <RightNavArrow />,
      prevArrow: <LeftNavArrow />,
      autoplay: true,
      autoplaySpeed: 5000

    }
    return (
    	<div className='carousel-home'>
      	<Slider {...settings}>
          <div>
            <p className='quotes'>"Love it. Finally a device that's more of what I've been looking for."</p> <br/>
            <p className='author'>-Josh_ElevatedMugetsu</p>
          </div>
          <div>
            <p className='quotes'>"I love the device. Amazing! Another winning HTC device."</p> <br/>
            <p className='author'>-Michael D.</p>
          </div>
          <div>
            <p className='quotes'>"HTC knows how to make a good-looking phone, and the HTC U Ultra is gorgeous in glass."</p> <br/>
            <p className='author'>-CNET 1/12/17</p>
          </div>
          <div>
            <p className='quotes'>"Beautiful!! HTC nails it again with the build quality."</p> <br/>
            <p className='author'>-JJ Samson</p>
          </div>
        </Slider>
      </div>
    );
  }
}