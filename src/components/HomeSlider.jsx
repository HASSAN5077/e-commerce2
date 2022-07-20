import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import { Link } from "react-router-dom";

const HomeSlider = () => {
  return (
    <>
      <section className="home">
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          <SwiperSlide>
            <div class="swiper-slide slide">
              <div class="image">
                <img src="images/home-img-1.jpg" alt="" />
              </div>
              <div class="content">
                <h3>upto 50% off</h3>
                <h2>smartphones</h2>
                <Link to="/" class="btn">
                  shop now
                </Link>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class="swiper-slide slide">
              <div class="image">
                <img src="images/home-img-2.jpg" alt="" />
              </div>
              <div class="content">
                <h3>upto 50% off</h3>
                <h2>smartphones</h2>
                <Link to="/" class="btn">
                  shop now
                </Link>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class="swiper-slide slide">
              <div class="image">
                <img src="images/home-img-3.jpg" alt="" />
              </div>
              <div class="content">
                <h3>upto 50% off</h3>
                <h2>smartphones</h2>
                <Link to="/" class="btn">
                  shop now
                </Link>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>
    </>
  );
};

export default HomeSlider;
