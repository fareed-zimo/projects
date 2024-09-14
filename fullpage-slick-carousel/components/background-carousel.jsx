import { EffectFade, Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

const images = [
  "/assets/temp/background_carousel/1.jpg",
  "/assets/temp/background_carousel/2.jpg",
  "/assets/temp/background_carousel/3.jpg",
  "/assets/temp/background_carousel/4.jpg",
  "/assets/temp/background_carousel/5.jpg",
  "/assets/temp/background_carousel/6.jpg",
  "/assets/temp/background_carousel/7.jpg",
  "/assets/temp/background_carousel/8.jpg",
];

const BackgroundCarousel = () => {
  return (
    <div className="bg-black w-screen h-screen">
      <Swiper
        pagination={{
          clickable: true,
        }}
        effect={"fade"}
        slidesPerView={1}
        spaceBetween={0}
        speed={300}
        modules={[Pagination, Autoplay, EffectFade]}
        className="background-carousel h-full"
        allowTouchMove={false} // Disable touch interactions
        //   autoplay={{
        //     delay: 10000,
        //     disableOnInteraction: false,
        //   }}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <img
              src={image}
              alt={"something"}
              loading="lazy"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/50" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default BackgroundCarousel;
