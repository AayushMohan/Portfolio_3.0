import React from "react";
import Slider from "react-slick";

type Props = {};

const Project = ({ projects }: any) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div>
      <Slider {...settings}></Slider>
    </div>
  );
};

export default Project;
