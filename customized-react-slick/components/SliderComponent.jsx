import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from "./Card";
import NextArrow from "./NextArrow";
import PreviousArrow from "./PreviousArrow";

const SliderComponent = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  const settings = {
    arrows: true,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 1,
    nextArrow: <NextArrow hoveredIndex={hoveredIndex} />,
    prevArrow: <PreviousArrow hoveredIndex={hoveredIndex} />,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
        },
      },
    ],
  };

  return (
    <div className="relative">
      <Slider {...settings}>
        {imagesArray.map((img, index) => (
          <div key={index} className=" max-w-[466px] ">
            <Card
              img={img}
              index={index}
              handleMouseEnter={handleMouseEnter}
              handleMouseLeave={handleMouseLeave}
              hoveredIndex={hoveredIndex}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SliderComponent;

const imagesArray = [
  {
    post_url:
      "https://firebasestorage.googleapis.com/v0/b/zimo-b9759.appspot.com/o/zimoteam%2Fjob-titles%2F1715685801890.png?alt=media&token=ae09abcd-d957-4329-a679-5f0df09665c7",
  },
  {
    post_url:
      "https://firebasestorage.googleapis.com/v0/b/zimo-b9759.appspot.com/o/zimoteam%2Fjob-titles%2F1715681992812.png?alt=media&token=e27de990-1663-4a2e-961f-3fd8f9c10730",
  },
  {
    post_url:
      "https://firebasestorage.googleapis.com/v0/b/zimo-b9759.appspot.com/o/zimoteam%2Fjob-titles%2F1715681719991.png?alt=media&token=7c25a622-90f0-4e3d-b75a-cb3acd6da38f",
  },
  {
    post_url:
      "https://firebasestorage.googleapis.com/v0/b/zimo-b9759.appspot.com/o/zimoteam%2Fjob-titles%2F1715681870844.png?alt=media&token=60abd143-0b7d-42fe-8ab8-f59a036c2134",
  },
  {
    post_url:
      "https://firebasestorage.googleapis.com/v0/b/zimo-b9759.appspot.com/o/zimoteam%2Fjob-titles%2F1715685847257.png?alt=media&token=7173c9f7-4c78-4e21-8bf9-242bc467e9d7",
  },
  {
    post_url:
      "https://firebasestorage.googleapis.com/v0/b/zimo-b9759.appspot.com/o/zimoteam%2Fjob-titles%2F1715684012051.png?alt=media&token=80862311-c2f3-430a-8a14-4ee431ad3eeb",
  },
  {
    post_url:
      "https://firebasestorage.googleapis.com/v0/b/zimo-b9759.appspot.com/o/zimoteam%2Fjob-titles%2F1715685878989.png?alt=media&token=377120b1-62c0-4f49-a78b-0edc1fcb1d34",
  },
  {
    post_url:
      "https://firebasestorage.googleapis.com/v0/b/zimo-b9759.appspot.com/o/zimoteam%2Fjob-titles%2F1715684126792.png?alt=media&token=10d71ef1-a1b2-4520-8526-4edc17777c27",
  },
  {
    post_url:
      "https://firebasestorage.googleapis.com/v0/b/zimo-b9759.appspot.com/o/zimoteam%2Fjob-titles%2F1715686144379.png?alt=media&token=5cae24e5-da86-4ed2-a428-ce7c55bdcdc7",
  },
  {
    post_url:
      "https://firebasestorage.googleapis.com/v0/b/zimo-b9759.appspot.com/o/zimoteam%2Fjob-titles%2F1715685923035.png?alt=media&token=37cd262a-bdd7-4283-a33c-f10e393faf24",
  },
  {
    post_url:
      "https://firebasestorage.googleapis.com/v0/b/zimo-b9759.appspot.com/o/zimoteam%2Fjob-titles%2F1715681794644.png?alt=media&token=22c34f02-e25a-4026-b6b2-1a6f40d709f2",
  },
  {
    post_url:
      "https://firebasestorage.googleapis.com/v0/b/zimo-b9759.appspot.com/o/zimoteam%2Fjob-titles%2F1715686105237.png?alt=media&token=c6d24331-2208-4038-8d2b-697320fbbf3b",
  },
  {
    post_url:
      "https://firebasestorage.googleapis.com/v0/b/zimo-b9759.appspot.com/o/zimoteam%2Fjob-titles%2F1715933561001.png?alt=media&token=6cd4fa7e-0a1f-49bd-afd5-ba2d3652b943",
  },
  {
    post_url:
      "https://firebasestorage.googleapis.com/v0/b/zimo-b9759.appspot.com/o/zimoteam%2Fjob-titles%2F1715686012765.png?alt=media&token=f5e7d004-c918-4ee9-8b92-8a5c7111cfb3",
  },
  {
    post_url:
      "https://firebasestorage.googleapis.com/v0/b/zimo-b9759.appspot.com/o/zimoteam%2Fjob-titles%2F1715682139532.png?alt=media&token=9668c16d-329b-403b-880c-abaef13bfe29",
  },
  {
    post_url:
      "https://firebasestorage.googleapis.com/v0/b/zimo-b9759.appspot.com/o/zimoteam%2Fjob-titles%2F1715682060686.png?alt=media&token=97127435-60f1-4c93-9b61-8eda7708f464",
  },
  {
    post_url:
      "https://firebasestorage.googleapis.com/v0/b/zimo-b9759.appspot.com/o/zimoteam%2Fjob-titles%2F1715681934180.png?alt=media&token=f4ab023c-c4cc-4756-a965-b45db521ddcc",
  },
  {
    post_url:
      "https://firebasestorage.googleapis.com/v0/b/zimo-b9759.appspot.com/o/zimoteam%2Fjob-titles%2F1715686187091.png?alt=media&token=70639f83-0548-4dd1-a0ad-57018eefd04d",
  },
  {
    post_url:
      "https://firebasestorage.googleapis.com/v0/b/zimo-b9759.appspot.com/o/zimoteam%2Fjob-titles%2F1715685748010.png?alt=media&token=fc44a081-761d-4ab4-bed7-fe69d5f6f953",
  },
  {
    post_url:
      "https://firebasestorage.googleapis.com/v0/b/zimo-b9759.appspot.com/o/zimoteam%2Fjob-titles%2F1715681832571.png?alt=media&token=474e5731-b1fa-4128-a83f-6251c8a9683c",
  },
  {
    post_url:
      "https://firebasestorage.googleapis.com/v0/b/zimo-b9759.appspot.com/o/zimoteam%2Fjob-titles%2F1715686065160.png?alt=media&token=800593ad-2103-48d2-b73b-60b6550a96b6",
  },
  {
    post_url:
      "https://firebasestorage.googleapis.com/v0/b/zimo-b9759.appspot.com/o/zimoteam%2Fjob-titles%2F1715686229859.png?alt=media&token=5b940ee6-4398-4c77-bbd6-9b6d2c6b395c",
  },
];
