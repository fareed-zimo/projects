import React from "react";
import Slider from "react-slick";
import Card from "./Card";
import NextArrow from "./NextArrow";
import PreviousArrow from "./PreviousArrow";

const imagesArray = [
  { src: "/slider_images/Diamonds.png", alt: "Diamonds" },
  { src: "/slider_images/Private_Islands.png", alt: "Private Islands" },
  { src: "/slider_images/Real_Estate.png", alt: "Real Estate" },
  { src: "/slider_images/Cars.png", alt: "Cars" },
  { src: "/slider_images/Yachts.png", alt: "Yachts" },
  { src: "/slider_images/Watches.png", alt: "Watches" },
  { src: "/slider_images/Jets.png", alt: "Jets" },
  { src: "/slider_images/Travel_The_World.png", alt: "Travel The World" },
];

const SliderComponent = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    nextArrow: <NextArrow />,
    prevArrow: <PreviousArrow />,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          dots: true,
        },
      },
    ],
  };

  return (
    <div className="relative px-4 md:px-[40px] 2xl:px-[60px]">
      <Slider {...settings}>
        {imagesArray.map((img, index) => (
          <div key={index} className="px-6 max-w-[466px]">
            <Card key={index} img={img} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SliderComponent;
