import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useRef } from 'react';

export default function ImageSlider() {
  let sliderRef = useRef(null);
  const slidePause = () => {
    sliderRef.slickPause();
  };
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1200,
    autoplaySpeed: 4000,
    cssEase: 'linear',
    fade: true,
    arrows: false,
  };
  const slideStyle = {
    width: '600px',
    height: '300px',
  };
  return (
    <div className=" w-[600px] ml-[5px] ">
      <Slider {...settings}>
        <div style={slideStyle}>
          <img
            src="/slide1.svg"
            alt=""
            className="w-[500px] mt-[70px] ml-[30px]"
          />
        </div>
        <div style={slideStyle}>
          <img
            src="/slide2.svg"
            alt=""
            className="w-[550px] h-[600px] mt-[10px]"
          />
        </div>
      </Slider>
    </div>
  );
}
