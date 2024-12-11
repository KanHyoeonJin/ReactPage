import React from "react";
import Slider from "react-slick";
import '../node_modules/slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick.css';
import './slick-theme.css';
import Banner1 from "./Banner1";
import Banner2 from "./Banner2";
import Banner3 from "./Banner3";
import Banner4 from "./Banner4";
import Banner5 from "./Banner5";

export default function SimpleSlider() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 2500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    fade: true,
    pauseOnFocus: false,
    pauseOnHover: false,

  };
  return (
    <Slider {...settings}>
      <div>
        <Banner1 />
      </div>
      <div>
        <Banner2 />
      </div>
      <div>
        <Banner3 />
      </div>
      <div>
        <Banner4 />
      </div>
      <div>
        <Banner5 />
      </div>
    </Slider>
  );
}